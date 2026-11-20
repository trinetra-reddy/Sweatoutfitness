import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { useAuth } from '../auth';
import { fmtDate, inr, safeSearch, whatsappLink } from '../lib/format';
import type { Membership } from '../lib/types';
import { Badge, Btn, ErrorBox, Input, Loading, PageHeader, Pager, Select, Table, useConfirm } from '../components/ui';
import { CollectPaymentModal, NewMembershipModal } from '../components/forms';

const PAGE = 25;
type Tab = 'active' | 'expiring' | 'expired' | 'due' | 'all';
const TABS: { id: Tab; label: string }[] = [
  { id: 'active', label: 'Active' }, { id: 'expiring', label: 'Expiring ≤ 15d' }, { id: 'expired', label: 'Expired' },
  { id: 'due', label: 'Has dues' }, { id: 'all', label: 'All' },
];

export function MembershipsPage() {
  const { profile } = useAuth();
  const isAdmin = profile?.role === 'admin';
  const { confirm, dialog } = useConfirm();
  const [rows, setRows] = useState<Membership[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<Tab>('active');
  const [q, setQ] = useState('');
  const [plan, setPlan] = useState('');
  const [plans, setPlans] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [collecting, setCollecting] = useState<Membership | null>(null);

  useEffect(() => {
    supabase.from('plans').select('name').order('display_order').then(({ data }) => setPlans((data ?? []).map((p: { name: string }) => p.name)));
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('v_memberships').select('*', { count: 'exact' });
    if (tab === 'active') query = query.eq('status', 'active');
    else if (tab === 'expiring') query = query.eq('status', 'active').lte('days_left', 15);
    else if (tab === 'expired') query = query.eq('status', 'expired');
    else if (tab === 'due') query = query.gt('due', 0).eq('cancelled', false);
    if (plan) query = query.eq('plan_name', plan);
    const term = safeSearch(q);
    if (term) query = query.or(`member_name.ilike.%${term}%,member_phone.ilike.%${term}%`);
    const asc = tab === 'active' || tab === 'expiring';
    const { data, count, error: err } = await query.order('end_date', { ascending: asc }).range((page - 1) * PAGE, page * PAGE - 1);
    if (err) setError(err.message); else { setRows((data as Membership[]) ?? []); setTotal(count ?? 0); setError(null); }
    setLoading(false);
  }, [tab, q, plan, page]);

  useEffect(() => { const t = setTimeout(() => void load(), 200); return () => clearTimeout(t); }, [load]);
  useEffect(() => { setPage(1); }, [tab, q, plan]);

  async function cancel(m: Membership) {
    const ok = await confirm({
      title: 'Cancel this membership?',
      confirmLabel: 'Cancel membership',
      danger: true,
      message: <p>{m.member_name}'s <strong className="text-white">{m.plan_name}</strong> will be marked cancelled. Payments already taken stay on record.</p>,
    });
    if (!ok) return;
    const { error: err } = await supabase.from('memberships').update({ cancelled: true }).eq('id', m.id);
    if (err) toast.error(err.message); else { toast.success('Cancelled'); void load(); }
  }

  async function remove(m: Membership) {
    const ok = await confirm({
      title: 'Delete this membership?',
      danger: true,
      confirmLabel: 'Delete membership',
      message: (
        <div className="space-y-3">
          <p><strong className="text-white">{m.member_name}</strong> · {m.plan_name}<br />{fmtDate(m.start_date)} → {fmtDate(m.end_date)}</p>
          <p>Its {inr(m.paid)} of recorded payments will be deleted too. This cannot be undone. Use Cancel instead if you only want to void it.</p>
        </div>
      ),
    });
    if (!ok) return;
    const { error: err } = await supabase.from('memberships').delete().eq('id', m.id);
    if (err) toast.error(err.message); else { toast.success('Membership deleted'); void load(); }
  }

  return (
    <>
      <PageHeader title="Memberships" subtitle="Plans purchased by members, with status and balance" actions={<Btn onClick={() => setCreating(true)}>New membership</Btn>} />
      <div className="flex flex-wrap gap-2 mb-4">
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-full text-sm border ${tab === t.id ? 'bg-[#ff3b00] border-[#ff3b00]' : 'border-white/10 text-white/70 hover:bg-white/5'}`}>{t.label}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mb-4">
        <Input className="max-w-xs" placeholder="Search member name or phone…" value={q} onChange={(e) => setQ(e.target.value)} />
        <Select className="max-w-[16rem]" value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="">All plans</option>{plans.map((p) => <option key={p}>{p}</option>)}
        </Select>
      </div>
      {error && <ErrorBox message={error} />}
      {loading ? <Loading /> : (
        <Table head={['Member', 'Plan', 'Period', 'Payable', 'Due', 'Status', '']} empty="No memberships match">
          {rows.map((m) => {
            const wa = whatsappLink(m.member_phone, m.due > 0
              ? `Hi ${m.member_name}, a balance of ${inr(m.due)} is pending on your Sweatout membership. Please clear it at your convenience.`
              : `Hi ${m.member_name}, your Sweatout membership ${m.status === 'expired' ? 'ended' : 'ends'} on ${fmtDate(m.end_date)}. Renew to keep training!`);
            return (
              <tr key={m.id}>
                <td><Link className="hover:text-[#ff3b00]" to={`/admin/members/${m.member_id}`}>{m.member_name}</Link></td>
                <td className="text-white/60">{m.plan_name}</td>
                <td className="text-white/60">{fmtDate(m.start_date)} → {fmtDate(m.end_date)}</td>
                <td>{inr(m.payable)}</td>
                <td className={m.due > 0 ? 'text-red-400 font-medium' : 'text-white/40'}>{inr(m.due)}</td>
                <td><Badge value={m.status} /></td>
                <td className="space-x-3 text-xs">
                  {m.due > 0 && !m.cancelled && <button className="text-[#ff3b00]" onClick={() => setCollecting(m)}>Collect</button>}
                  {wa && <a className="text-emerald-400" href={wa} target="_blank" rel="noreferrer">Remind</a>}
                  {!m.cancelled && m.status !== 'expired' && <button className="text-white/40 hover:text-amber-400" onClick={() => cancel(m)}>Cancel</button>}
                  {isAdmin && <button className="text-red-400 hover:text-red-300" onClick={() => remove(m)}>Delete</button>}                </td>
              </tr>
            );
          })}
        </Table>
      )}
      <Pager page={page} pageSize={PAGE} total={total} onPage={setPage} />
      {dialog}
      {creating && <NewMembershipModal onClose={() => setCreating(false)} onSaved={() => { setCreating(false); void load(); }} />}
      {collecting && <CollectPaymentModal membership={collecting} onClose={() => setCollecting(null)} onSaved={() => { setCollecting(null); void load(); }} />}
    </>
  );
}
