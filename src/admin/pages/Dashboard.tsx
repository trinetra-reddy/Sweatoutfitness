import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { supabase } from '../lib/supabase';
import { fmtDate, inr, today, whatsappLink } from '../lib/format';
import type { DashboardStats, Inquiry, Membership, Payment } from '../lib/types';
import { Badge, ErrorBox, Loading, PageHeader, StatCard, Table } from '../components/ui';

export function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [expiring, setExpiring] = useState<Membership[]>([]);
  const [followups, setFollowups] = useState<Inquiry[]>([]);
  const [recent, setRecent] = useState<Payment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const [s, e, f, p] = await Promise.all([
        supabase.rpc('dashboard_stats'),
        supabase.from('v_memberships').select('*').eq('status', 'active').lte('days_left', 7).order('end_date').limit(10),
        supabase.from('inquiries').select('*').in('status', ['new', 'contacted', 'follow_up', 'trial']).lte('follow_up_on', today()).order('follow_up_on').limit(8),
        supabase.from('v_payments').select('*').order('paid_on', { ascending: false }).order('created_at', { ascending: false }).limit(8),
      ]);
      const err = s.error ?? e.error ?? f.error ?? p.error;
      if (err) { setError(err.message); return; }
      setStats(s.data as DashboardStats);
      setExpiring((e.data as Membership[]) ?? []);
      setFollowups((f.data as Inquiry[]) ?? []);
      setRecent((p.data as Payment[]) ?? []);
    })();
  }, []);

  if (error) return <ErrorBox message={error} />;
  if (!stats) return <Loading />;

  const delta = stats.revenue_last_month > 0
    ? Math.round(((stats.revenue_month - stats.revenue_last_month) / stats.revenue_last_month) * 100) : null;

  return (
    <>
      <PageHeader title="Dashboard" subtitle={new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Active members" value={stats.active_members} hint={`${stats.total_members.toLocaleString('en-IN')} total on record`} />
        <StatCard label="Expiring in 7 days" value={stats.expiring_7} tone={stats.expiring_7 ? 'warn' : undefined} hint="active memberships" />
        <StatCard label="Lapsed (30 days)" value={stats.expired_30} hint="expired, not renewed" />
        <StatCard label="New this month" value={stats.new_members_month} />
        <StatCard label="Collected today" value={inr(stats.revenue_today)} />
        <StatCard label="Collected this month" value={inr(stats.revenue_month)} tone="good"
          hint={delta === null ? undefined : `${delta >= 0 ? '+' : ''}${delta}% vs last month`} />
        <StatCard label="Outstanding dues" value={inr(stats.total_due)} tone={stats.total_due ? 'bad' : undefined} />
        <StatCard label="Open inquiries" value={stats.open_inquiries} hint={`${stats.followups_due} follow-ups due`} tone={stats.followups_due ? 'warn' : undefined} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="min-w-0">
          <h2 className="font-semibold mb-3">Expiring soon</h2>
          <Table head={['Member', 'Plan', 'Ends', '']} empty="No memberships expiring this week">
            {expiring.map((m) => {
              const wa = whatsappLink(m.member_phone, `Hi ${m.member_name}, your Sweatout membership ends on ${fmtDate(m.end_date)}. Renew to keep training without a break!`);
              return (
                <tr key={m.id}>
                  <td><Link className="hover:text-[#ff3b00]" to={`/admin/members/${m.member_id}`}>{m.member_name}</Link></td>
                  <td className="text-white/60">{m.plan_name}</td>
                  <td>{fmtDate(m.end_date)} <span className="text-white/40">({m.days_left}d)</span></td>
                  <td>{wa && <a className="text-emerald-400 text-xs" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>}</td>
                </tr>
              );
            })}
          </Table>
        </section>

        <section className="min-w-0">
          <h2 className="font-semibold mb-3">Inquiry follow-ups due</h2>
          <Table head={['Name', 'Phone', 'Due', 'Status']} empty="No follow-ups due">
            {followups.map((i) => (
              <tr key={i.id}>
                <td><Link className="hover:text-[#ff3b00]" to="/admin/inquiries">{i.name}</Link></td>
                <td className="text-white/60">{i.phone}</td>
                <td>{fmtDate(i.follow_up_on)}</td>
                <td><Badge value={i.status} /></td>
              </tr>
            ))}
          </Table>
        </section>

        <section className="lg:col-span-2 min-w-0">
          <h2 className="font-semibold mb-3">Recent payments</h2>
          <Table head={['Date', 'Member', 'Plan', 'Method', 'Amount']} empty="No payments yet">
            {recent.map((p) => (
              <tr key={p.id}>
                <td>{fmtDate(p.paid_on)}</td>
                <td><Link className="hover:text-[#ff3b00]" to={`/admin/members/${p.member_id}`}>{p.member_name}</Link></td>
                <td className="text-white/60">{p.plan_name}</td>
                <td className="capitalize">{p.method.replace('_', ' ')}</td>
                <td className="font-medium">{inr(p.amount)}</td>
              </tr>
            ))}
          </Table>
        </section>
      </div>
    </>
  );
}
