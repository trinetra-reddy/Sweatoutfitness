import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { downloadCsv, fmtDate, inr, monthStart, safeSearch, today } from '../lib/format';
import type { Payment } from '../lib/types';
import { useAuth } from '../auth';
import { Btn, ErrorBox, Field, Input, Loading, PageHeader, Pager, Select, StatCard, Table, useConfirm } from '../components/ui';
import { CollectPaymentModal } from '../components/forms';
import type { Membership } from '../lib/types';

const PAGE = 25;

export function PaymentsPage() {
  const { profile } = useAuth();
  const { confirm, dialog } = useConfirm();
  const [rows, setRows] = useState<Payment[]>([]);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState<{ total: number; payments: number }>({ total: 0, payments: 0 });
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(monthStart());
  const [to, setTo] = useState(today());
  const [method, setMethod] = useState('');
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dues, setDues] = useState<Membership[] | null>(null);
  const [collecting, setCollecting] = useState<Membership | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('v_payments').select('*', { count: 'exact' }).gte('paid_on', from).lte('paid_on', to);
    if (method) query = query.eq('method', method);
    const term = safeSearch(q);
    if (term) query = query.or(`member_name.ilike.%${term}%,member_phone.ilike.%${term}%,receipt_no.ilike.%${term}%`);
    const [list, s] = await Promise.all([
      query.order('paid_on', { ascending: false }).order('created_at', { ascending: false }).range((page - 1) * PAGE, page * PAGE - 1),
      supabase.rpc('report_method_summary', { from_date: from, to_date: to }),
    ]);
    if (list.error || s.error) setError((list.error ?? s.error)!.message);
    else {
      setRows((list.data as Payment[]) ?? []); setTotal(list.count ?? 0); setError(null);
      const methods = (s.data as { method: string; total: number; payments: number }[]) ?? [];
      const filtered = method ? methods.filter((m) => m.method === method) : methods;
      setSum({ total: filtered.reduce((a, m) => a + Number(m.total), 0), payments: filtered.reduce((a, m) => a + Number(m.payments), 0) });
    }
    setLoading(false);
  }, [from, to, method, q, page]);

  useEffect(() => { const t = setTimeout(() => void load(), 200); return () => clearTimeout(t); }, [load]);
  useEffect(() => { setPage(1); }, [from, to, method, q]);

  async function openDues() {
    const { data, error: err } = await supabase.from('v_memberships').select('*').gt('due', 0).eq('cancelled', false).order('end_date').limit(50);
    if (err) toast.error(err.message); else setDues((data as Membership[]) ?? []);
  }

  async function remove(p: Payment) {
    const ok = await confirm({
      title: 'Delete this payment?',
      danger: true,
      confirmLabel: 'Delete payment',
      message: <p>Receipt <strong className="text-white">{p.receipt_no}</strong> for {p.member_name} ({inr(p.amount)}, {fmtDate(p.paid_on)}) will be removed and the membership balance will go back up. This cannot be undone.</p>,
    });
    if (!ok) return;
    const { error: err } = await supabase.from('payments').delete().eq('id', p.id);
    if (err) toast.error(err.message); else { toast.success('Deleted'); void load(); }
  }

  async function exportCsv() {
    const { data, error: err } = await supabase.from('v_payments').select('paid_on,receipt_no,member_name,member_phone,plan_name,method,amount,reference')
      .gte('paid_on', from).lte('paid_on', to).order('paid_on').limit(10000);
    if (err) toast.error(err.message); else downloadCsv(`payments_${from}_${to}.csv`, data ?? []);
  }

  return (
    <>
      <PageHeader title="Payments" subtitle="Every rupee received" actions={<>
        <Btn variant="ghost" onClick={exportCsv}>Export CSV</Btn>
        <Btn onClick={openDues}>Collect a due</Btn>
      </>} />
      <div className="grid grid-cols-2 gap-4 mb-6 max-w-lg">
        <StatCard label="Collected (range)" value={inr(sum.total)} tone="good" />
        <StatCard label="Payments" value={sum.payments.toLocaleString('en-IN')} />
      </div>
      <div className="flex flex-wrap items-end gap-3 mb-4">
        <Field label="From"><Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></Field>
        <Field label="To"><Input type="date" value={to} onChange={(e) => setTo(e.target.value)} /></Field>
        <Field label="Method">
          <Select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="">All</option>
            {['cash', 'upi', 'card', 'bank_transfer', 'cheque', 'other'].map((m) => <option key={m} value={m}>{m.replace('_', ' ')}</option>)}
          </Select>
        </Field>
        <Field label="Search"><Input placeholder="Name, phone, receipt…" value={q} onChange={(e) => setQ(e.target.value)} /></Field>
      </div>
      {error && <ErrorBox message={error} />}
      {loading ? <Loading /> : (
        <Table head={['Date', 'Receipt', 'Member', 'Plan', 'Method', 'Amount', '']} empty="No payments in this range">
          {rows.map((p) => (
            <tr key={p.id}>
              <td>{fmtDate(p.paid_on)}</td>
              <td className="text-white/60">{p.receipt_no}</td>
              <td><Link className="hover:text-[#ff3b00]" to={`/admin/members/${p.member_id}`}>{p.member_name}</Link></td>
              <td className="text-white/60">{p.plan_name}</td>
              <td className="capitalize">{p.method.replace('_', ' ')}</td>
              <td className="font-medium">{inr(p.amount)}</td>
              <td>{profile?.role === 'admin' && <button className="text-xs text-white/40 hover:text-red-400" onClick={() => remove(p)}>Delete</button>}</td>
            </tr>
          ))}
        </Table>
      )}
      <Pager page={page} pageSize={PAGE} total={total} onPage={setPage} />

      {dialog}
      {dues && !collecting && (
        <div className="fixed inset-0 z-40 bg-black/70 p-4 overflow-y-auto" onMouseDown={() => setDues(null)}>
          <div className="max-w-2xl mx-auto mt-10 rounded-xl bg-[#141414] border border-white/10 p-5" onMouseDown={(e) => e.stopPropagation()}>
            <h2 className="font-semibold mb-3">Memberships with a balance</h2>
            <Table head={['Member', 'Plan', 'Due', '']} empty="No outstanding dues 🎉">
              {dues.map((m) => (
                <tr key={m.id}><td>{m.member_name}</td><td className="text-white/60">{m.plan_name}</td>
                  <td className="text-red-400">{inr(m.due)}</td>
                  <td><button className="text-xs text-[#ff3b00]" onClick={() => setCollecting(m)}>Collect</button></td></tr>
              ))}
            </Table>
          </div>
        </div>
      )}
      {collecting && <CollectPaymentModal membership={collecting} onClose={() => setCollecting(null)} onSaved={() => { setCollecting(null); setDues(null); void load(); }} />}
    </>
  );
}
