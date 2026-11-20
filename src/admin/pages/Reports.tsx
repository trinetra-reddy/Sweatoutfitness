import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { supabase } from '../lib/supabase';
import { downloadCsv, fmtDate, inr, monthStart, today } from '../lib/format';
import type { Inquiry, Membership } from '../lib/types';
import { Btn, ErrorBox, Field, Input, Loading, PageHeader, Table } from '../components/ui';

interface Monthly { month: string; total: number; payments: number }
interface PlanRow { plan_name: string; sales: number; billed: number; collected: number }
interface MethodRow { method: string; total: number; payments: number }

export function ReportsPage() {
  const [from, setFrom] = useState(monthStart());
  const [to, setTo] = useState(today());
  const [monthly, setMonthly] = useState<Monthly[] | null>(null);
  const [plans, setPlans] = useState<PlanRow[]>([]);
  const [methods, setMethods] = useState<MethodRow[]>([]);
  const [dues, setDues] = useState<Membership[]>([]);
  const [lapsed, setLapsed] = useState<Membership[]>([]);
  const [funnel, setFunnel] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);

  // 12-month trend, dues, lapsed members and inquiry funnel don't depend on the date range
  useEffect(() => {
    (async () => {
      const [m, d, l, i] = await Promise.all([
        supabase.rpc('report_monthly_revenue', { months: 12 }),
        supabase.from('v_memberships').select('*').gt('due', 0).eq('cancelled', false).order('due', { ascending: false }).limit(200),
        supabase.from('v_memberships').select('*').eq('status', 'expired').gte('end_date', new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10)).order('end_date', { ascending: false }).limit(300),
        supabase.from('inquiries').select('status').limit(5000),
      ]);
      const err = m.error ?? d.error ?? l.error ?? i.error;
      if (err) { setError(err.message); return; }
      setMonthly(((m.data as Monthly[]) ?? []).map((r) => ({ ...r, total: Number(r.total) })));
      setDues((d.data as Membership[]) ?? []);
      setLapsed((l.data as Membership[]) ?? []);
      const f: Record<string, number> = {};
      ((i.data as Pick<Inquiry, 'status'>[]) ?? []).forEach((r) => { f[r.status] = (f[r.status] ?? 0) + 1; });
      setFunnel(f);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const [p, mt] = await Promise.all([
        supabase.rpc('report_plan_summary', { from_date: from, to_date: to }),
        supabase.rpc('report_method_summary', { from_date: from, to_date: to }),
      ]);
      if (p.error || mt.error) { setError((p.error ?? mt.error)!.message); return; }
      setPlans((p.data as PlanRow[]) ?? []);
      setMethods((mt.data as MethodRow[]) ?? []);
    })();
  }, [from, to]);

  if (error) return <ErrorBox message={error} />;
  if (!monthly) return <Loading />;

  const chart = monthly.map((m) => ({ ...m, label: new Date(m.month).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' }) }));
  const totalDue = dues.reduce((s, m) => s + m.due, 0);
  const sold = plans.reduce((s, p) => s + Number(p.sales), 0);
  const collected = methods.reduce((s, m) => s + Number(m.total), 0);
  const conv = (funnel.converted ?? 0) + (funnel.lost ?? 0) > 0
    ? Math.round(((funnel.converted ?? 0) / Object.values(funnel).reduce((a, b) => a + b, 0)) * 100) : 0;

  return (
    <>
      <PageHeader title="Reports" subtitle="Revenue, plans, dues, renewals and enquiries" />

      <section className="mb-10">
        <h2 className="font-semibold mb-3">Monthly collections (last 12 months)</h2>
        <div className="h-64 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chart}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="label" stroke="rgba(255,255,255,0.5)" fontSize={12} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickFormatter={(v: number) => `₹${Math.round(v / 1000)}k`} />
              <Tooltip contentStyle={{ background: '#1c1c1c', border: '1px solid rgba(255,255,255,0.1)' }} formatter={(v) => inr(Number(v))} />
              <Bar dataKey="total" name="Collected" fill="#ff3b00" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-3">
          <h2 className="font-semibold">Sales by plan &amp; payment method</h2>
          <div className="flex gap-3">
            <Field label="From"><Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></Field>
            <Field label="To"><Input type="date" value={to} onChange={(e) => setTo(e.target.value)} /></Field>
          </div>
        </div>
        <p className="text-sm text-white/50 mb-3">{sold} memberships sold · {inr(collected)} collected in range</p>
        <div className="grid lg:grid-cols-2 gap-6">
          <Table head={['Plan', 'Sold', 'Billed', 'Collected']} empty="No sales in range">
            {plans.map((p) => (
              <tr key={p.plan_name}><td>{p.plan_name}</td><td>{p.sales}</td><td>{inr(p.billed)}</td><td>{inr(p.collected)}</td></tr>
            ))}
          </Table>
          <Table head={['Method', 'Payments', 'Total']} empty="No payments in range">
            {methods.map((m) => (
              <tr key={m.method}><td className="capitalize">{m.method.replace('_', ' ')}</td><td>{m.payments}</td><td>{inr(m.total)}</td></tr>
            ))}
          </Table>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Outstanding dues — {inr(totalDue)}</h2>
          <Btn variant="ghost" onClick={() => downloadCsv('dues.csv', dues.map((m) => ({ member: m.member_name, phone: m.member_phone, plan: m.plan_name, ends: m.end_date, payable: m.payable, paid: m.paid, due: m.due })))}>Export CSV</Btn>
        </div>
        <Table head={['Member', 'Phone', 'Plan', 'Ends', 'Due']} empty="No outstanding dues">
          {dues.map((m) => (
            <tr key={m.id}><td>{m.member_name}</td><td className="text-white/60">{m.member_phone}</td><td className="text-white/60">{m.plan_name}</td><td>{fmtDate(m.end_date)}</td><td className="text-red-400">{inr(m.due)}</td></tr>
          ))}
        </Table>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Lapsed in the last 30 days — win-back list ({lapsed.length})</h2>
          <Btn variant="ghost" onClick={() => downloadCsv('lapsed.csv', lapsed.map((m) => ({ member: m.member_name, phone: m.member_phone, plan: m.plan_name, ended: m.end_date })))}>Export CSV</Btn>
        </div>
        <Table head={['Member', 'Phone', 'Last plan', 'Ended']} empty="Nobody lapsed recently">
          {lapsed.map((m) => (
            <tr key={m.id}><td>{m.member_name}</td><td className="text-white/60">{m.member_phone}</td><td className="text-white/60">{m.plan_name}</td><td>{fmtDate(m.end_date)}</td></tr>
          ))}
        </Table>
      </section>

      <section>
        <h2 className="font-semibold mb-3">Inquiry funnel {Object.keys(funnel).length > 0 && <span className="text-white/40 font-normal text-sm">· {conv}% converted</span>}</h2>
        <Table head={['Status', 'Count']} empty="No inquiries yet">
          {['new', 'contacted', 'follow_up', 'trial', 'converted', 'lost'].filter((s) => funnel[s]).map((s) => (
            <tr key={s}><td className="capitalize">{s.replace('_', ' ')}</td><td>{funnel[s]}</td></tr>
          ))}
        </Table>
      </section>
    </>
  );
}
