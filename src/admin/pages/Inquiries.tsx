import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { fmtDate, safeSearch, today, whatsappLink } from '../lib/format';
import type { Inquiry, InquirySource, InquiryStatus } from '../lib/types';
import { Badge, Btn, ErrorBox, Field, Input, Loading, Modal, PageHeader, Pager, Select, Table, Textarea } from '../components/ui';

const STATUSES: InquiryStatus[] = ['new', 'contacted', 'follow_up', 'trial', 'converted', 'lost'];
const SOURCES: InquirySource[] = ['walk_in', 'website', 'phone', 'whatsapp', 'instagram', 'reference', 'other'];
const PAGE = 25;

export function InquiriesPage() {
  const nav = useNavigate();
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('open');
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<Inquiry | 'new' | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('inquiries').select('*', { count: 'exact' });
    if (status === 'open') query = query.in('status', ['new', 'contacted', 'follow_up', 'trial']);
    else if (status !== 'all') query = query.eq('status', status);
    const term = safeSearch(q);
    if (term) query = query.or(`name.ilike.%${term}%,phone.ilike.%${term}%`);
    const { data, count, error: err } = await query.order('created_at', { ascending: false }).range((page - 1) * PAGE, page * PAGE - 1);
    if (err) setError(err.message); else { setRows((data as Inquiry[]) ?? []); setTotal(count ?? 0); setError(null); }
    setLoading(false);
  }, [status, q, page]);

  useEffect(() => { void load(); }, [load]);
  useEffect(() => { setPage(1); }, [status, q]);

  async function setRowStatus(i: Inquiry, s: InquiryStatus) {
    const { error: err } = await supabase.from('inquiries').update({ status: s }).eq('id', i.id);
    if (err) toast.error(err.message); else void load();
  }

  async function convert(i: Inquiry) {
    if (i.converted_member_id) { nav(`/admin/members/${i.converted_member_id}`); return; }
    const { data, error: err } = await supabase.from('members').insert({
      name: i.name, phone: i.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, ''), email: i.email,
      joined_on: today(), source: i.source.replace('_', ' '), status: 'active',
    }).select('id').single();
    if (err) { toast.error(err.message); return; }
    await supabase.from('inquiries').update({ status: 'converted', converted_member_id: data.id }).eq('id', i.id);
    toast.success('Converted to member — now add a membership');
    nav(`/admin/members/${data.id}`);
  }

  return (
    <>
      <PageHeader title="Inquiries" subtitle="Walk-ins, calls and website enquiries" actions={<Btn onClick={() => setEditing('new')}>Add inquiry</Btn>} />
      <div className="flex flex-wrap gap-3 mb-4">
        <Input className="max-w-xs" placeholder="Search name or phone…" value={q} onChange={(e) => setQ(e.target.value)} />
        <Select className="max-w-[10rem]" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">Open</option><option value="all">All</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
        </Select>
      </div>
      {error && <ErrorBox message={error} />}
      {loading ? <Loading /> : (
        <Table head={['Received', 'Name', 'Phone', 'Interested in', 'Source', 'Follow-up', 'Status', '']} empty="No inquiries match">
          {rows.map((i) => {
            const wa = whatsappLink(i.phone, `Hi ${i.name}, thanks for your interest in Sweatout Fitness! How can we help you get started?`);
            const overdue = i.follow_up_on && i.follow_up_on <= today() && !['converted', 'lost'].includes(i.status);
            return (
              <tr key={i.id}>
                <td className="text-white/60">{fmtDate(i.created_at)}</td>
                <td><button className="hover:text-[#ff3b00]" onClick={() => setEditing(i)}>{i.name}</button></td>
                <td className="text-white/60">{i.phone}</td>
                <td className="text-white/60">{i.interested_in ?? '—'}</td>
                <td className="capitalize text-white/60">{i.source.replace('_', ' ')}</td>
                <td className={overdue ? 'text-amber-400' : 'text-white/60'}>{fmtDate(i.follow_up_on)}</td>
                <td>
                  <Select className="!py-1 !w-32" value={i.status} onChange={(e) => setRowStatus(i, e.target.value as InquiryStatus)}>
                    {STATUSES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                  </Select>
                </td>
                <td className="space-x-3 text-xs">
                  {wa && <a className="text-emerald-400" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>}
                  <button className="text-[#ff3b00]" onClick={() => convert(i)}>{i.converted_member_id ? 'View member' : 'Convert'}</button>
                </td>
              </tr>
            );
          })}
        </Table>
      )}
      <Pager page={page} pageSize={PAGE} total={total} onPage={setPage} />
      {editing && <InquiryModal inquiry={editing === 'new' ? null : editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); void load(); }} />}
    </>
  );
}

function InquiryModal({ inquiry, onClose, onSaved }: { inquiry: Inquiry | null; onClose: () => void; onSaved: () => void }) {
  const [f, setF] = useState({
    name: inquiry?.name ?? '', phone: inquiry?.phone ?? '', email: inquiry?.email ?? '', interested_in: inquiry?.interested_in ?? '',
    source: inquiry?.source ?? 'walk_in', status: inquiry?.status ?? 'new', follow_up_on: inquiry?.follow_up_on ?? '', message: inquiry?.message ?? '', notes: inquiry?.notes ?? '',
  });
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const payload = { ...f, email: f.email || null, interested_in: f.interested_in || null, follow_up_on: f.follow_up_on || null, message: f.message || null, notes: f.notes || null };
    const { error } = inquiry ? await supabase.from('inquiries').update(payload).eq('id', inquiry.id) : await supabase.from('inquiries').insert(payload);
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success('Saved'); onSaved();
  }

  return (
    <Modal title={inquiry ? 'Edit inquiry' : 'New inquiry'} onClose={onClose} wide>
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
        <Field label="Name *"><Input required value={f.name} onChange={set('name')} /></Field>
        <Field label="Phone *"><Input required value={f.phone} onChange={set('phone')} /></Field>
        <Field label="Email"><Input type="email" value={f.email} onChange={set('email')} /></Field>
        <Field label="Interested in"><Input placeholder="Gym, PT, yoga…" value={f.interested_in} onChange={set('interested_in')} /></Field>
        <Field label="Source"><Select value={f.source} onChange={set('source')}>{SOURCES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}</Select></Field>
        <Field label="Status"><Select value={f.status} onChange={set('status')}>{STATUSES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}</Select></Field>
        <Field label="Follow-up on"><Input type="date" value={f.follow_up_on} onChange={set('follow_up_on')} /></Field>
        <div className="sm:col-span-2">{inquiry?.message && <p className="text-sm text-white/60 mb-2"><Badge value="new" /> Message: {inquiry.message}</p>}
          <Field label="Notes"><Textarea value={f.notes} onChange={set('notes')} /></Field></div>
        <div className="sm:col-span-2 flex justify-end gap-2">
          <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn><Btn disabled={busy}>{busy ? 'Saving…' : 'Save'}</Btn>
        </div>
      </form>
    </Modal>
  );
}
