import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useAuth } from '../auth';
import { supabase } from '../lib/supabase';
import { fmtDate, inr, safeSearch } from '../lib/format';
import type { Member } from '../lib/types';
import { Badge, Btn, ErrorBox, Input, Loading, PageHeader, Pager, Select, Table, useConfirm } from '../components/ui';
import { MemberFormModal } from '../components/forms';

const PAGE = 25;

export function MembersPage() {
  const nav = useNavigate();
  const { profile } = useAuth();
  const { confirm, dialog } = useConfirm();
  const [rows, setRows] = useState<Member[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('active');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('members').select('*', { count: 'exact' });
    if (status !== 'all') query = query.eq('status', status);
    const term = safeSearch(q);
    if (term) query = query.or(`name.ilike.%${term}%,phone.ilike.%${term}%,member_code.ilike.%${term}%`);
    const { data, count, error: err } = await query.order('joined_on', { ascending: false, nullsFirst: false }).order('member_code', { ascending: false }).range((page - 1) * PAGE, page * PAGE - 1);
    if (err) setError(err.message); else { setRows((data as Member[]) ?? []); setTotal(count ?? 0); setError(null); }
    setLoading(false);
  }, [q, status, page]);

  async function remove(m: Member) {
    const [ms, pay] = await Promise.all([
      supabase.from('memberships').select('id', { count: 'exact', head: true }).eq('member_id', m.id),
      supabase.from('payments').select('amount').eq('member_id', m.id),
    ]);
    const paid = (pay.data ?? []).reduce((s: number, p: { amount: number }) => s + Number(p.amount), 0);
    const ok = await confirm({
      title: `Delete ${m.name}?`,
      danger: true,
      confirmLabel: 'Delete member',
      message: (
        <div className="space-y-3">
          <p>This permanently deletes <strong className="text-white">{m.name}</strong> ({m.member_code ?? 'no ID'}) along with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{ms.count ?? '?'} membership(s)</li>
            <li>{pay.data?.length ?? '?'} payment(s) totalling {inr(paid)}</li>
          </ul>
          <p>This cannot be undone. To just hide them, set their status to Inactive instead.</p>
        </div>
      ),
    });
    if (!ok) return;
    const { error: err } = await supabase.from('members').delete().eq('id', m.id);
    if (err) toast.error(err.message); else { toast.success('Member deleted'); void load(); }
  }

  useEffect(() => { const t = setTimeout(() => void load(), 200); return () => clearTimeout(t); }, [load]);
  useEffect(() => { setPage(1); }, [q, status]);

  return (
    <>
      <PageHeader title="Members" subtitle="Everyone who has trained at Sweatout" actions={<Btn onClick={() => setAdding(true)}>Add member</Btn>} />
      <div className="flex flex-wrap gap-3 mb-4">
        <Input className="max-w-xs" placeholder="Search name, phone or member ID…" value={q} onChange={(e) => setQ(e.target.value)} />
        <Select className="max-w-[9rem]" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option><option value="inactive">Inactive</option><option value="all">All</option>
        </Select>
      </div>
      {error && <ErrorBox message={error} />}
      {loading ? <Loading /> : (
        <Table head={['Member ID', 'Name', 'Phone', 'Joined', 'Source', 'Status', '']} empty="No members match">
          {rows.map((m) => (
            <tr key={m.id}>
              <td className="font-medium">{m.member_code ?? '—'}</td>
              <td><Link className="hover:text-[#ff3b00]" to={`/admin/members/${m.id}`}>{m.name}</Link></td>
              <td className="text-white/60">{m.phone ?? '—'}</td>
              <td className="text-white/60">{fmtDate(m.joined_on)}</td>
              <td className="text-white/60">{m.source ?? '—'}</td>
              <td><Badge value={m.status} /></td>
              <td>{profile?.role === 'admin' && <button className="text-xs text-red-400 hover:text-red-300" onClick={() => remove(m)}>Delete</button>}</td>
            </tr>
          ))}
        </Table>
      )}
      <Pager page={page} pageSize={PAGE} total={total} onPage={setPage} />
      {dialog}
      {adding && <MemberFormModal onClose={() => setAdding(false)} onSaved={(id) => nav(`/admin/members/${id}`)} />}
    </>
  );
}
