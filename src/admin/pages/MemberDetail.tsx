import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';
import { useAuth } from '../auth';
import { supabase } from '../lib/supabase';
import { fmtDate, inr, whatsappLink } from '../lib/format';
import type { Member, Membership, Payment } from '../lib/types';
import { Badge, Btn, ErrorBox, Loading, PageHeader, StatCard, Table, useConfirm } from '../components/ui';
import { CollectPaymentModal, MemberFormModal, NewMembershipModal } from '../components/forms';

export function MemberDetailPage() {
  const { id = '' } = useParams();
  const nav = useNavigate();
  const { profile } = useAuth();
  const { confirm, dialog } = useConfirm();
  const [member, setMember] = useState<Member | null>(null);
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [renewing, setRenewing] = useState(false);
  const [collecting, setCollecting] = useState<Membership | null>(null);

  const load = useCallback(async () => {
    const [m, ms, p] = await Promise.all([
      supabase.from('members').select('*').eq('id', id).maybeSingle(),
      supabase.from('v_memberships').select('*').eq('member_id', id).order('start_date', { ascending: false }),
      supabase.from('v_payments').select('*').eq('member_id', id).order('paid_on', { ascending: false }),
    ]);
    const err = m.error ?? ms.error ?? p.error;
    if (err) { setError(err.message); return; }
    if (!m.data) { setError('Member not found'); return; }
    setMember(m.data as Member);
    setMemberships((ms.data as Membership[]) ?? []);
    setPayments((p.data as Payment[]) ?? []);
  }, [id]);

  useEffect(() => { void load(); }, [load]);

  if (error) return <ErrorBox message={error} />;
  if (!member) return <Loading />;

  async function deleteMembership(m: Membership) {
    const ok = await confirm({
      title: 'Delete this membership?',
      danger: true,
      confirmLabel: 'Delete membership',
      message: (
        <div className="space-y-3">
          <p><strong className="text-white">{m.plan_name}</strong><br />{fmtDate(m.start_date)} → {fmtDate(m.end_date)}</p>
          <p>Its {inr(m.paid)} of recorded payments will be deleted too. This cannot be undone.</p>
        </div>
      ),
    });
    if (!ok) return;
    const { error: err } = await supabase.from('memberships').delete().eq('id', m.id);
    if (err) { toast.error(err.message); return; }
    toast.success('Membership deleted');
    void load();
  }

  async function deleteMember() {
    if (!member) return;
    const ok = await confirm({
      title: `Delete ${member.name}?`,
      danger: true,
      confirmLabel: 'Delete member',
      message: (
        <div className="space-y-3">
          <p>This permanently deletes <strong className="text-white">{member.name}</strong> ({member.member_code ?? 'no ID'}) along with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{memberships.length} membership(s)</li>
            <li>{payments.length} payment(s) totalling {inr(payments.reduce((s, p) => s + p.amount, 0))}</li>
          </ul>
          <p>This cannot be undone. To just hide them, set their status to Inactive instead.</p>
        </div>
      ),
    });
    if (!ok) return;
    const { error: err } = await supabase.from('members').delete().eq('id', member.id);
    if (err) { toast.error(err.message); return; }
    toast.success('Member deleted');
    nav('/admin/members');
  }

  const current = memberships.find((m) => m.status === 'active') ?? memberships.find((m) => m.status === 'upcoming');
  const totalPaid = payments.reduce((s, p) => s + p.amount, 0);
  const totalDue = memberships.reduce((s, m) => s + (m.cancelled ? 0 : m.due), 0);
  const wa = whatsappLink(member.phone, `Hi ${member.name}, this is Sweatout Fitness.`);

  return (
    <>
      <p className="text-sm mb-2"><Link className="text-white/50 hover:text-white" to="/admin/members">← Members</Link></p>
      <PageHeader
        title={member.name}
        subtitle={`${member.member_code ?? 'No ID'} · ${member.phone ?? 'no phone'}${member.email ? ' · ' + member.email : ''}`}
        actions={<>
          {wa && <a href={wa} target="_blank" rel="noreferrer"><Btn variant="ghost">WhatsApp</Btn></a>}
          <Btn variant="ghost" onClick={() => setEditing(true)}>Edit</Btn>
          {profile?.role === 'admin' && <Btn variant="danger" onClick={deleteMember}>Delete</Btn>}
          <Btn onClick={() => setRenewing(true)}>New / renew membership</Btn>
        </>}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Status" value={<Badge value={member.status} />} hint={`Joined ${fmtDate(member.joined_on)}`} />
        <StatCard label="Current plan" value={<span className="text-base">{current?.plan_name ?? 'None'}</span>} hint={current ? `Ends ${fmtDate(current.end_date)} (${current.days_left}d)` : 'No active membership'} tone={current ? undefined : 'warn'} />
        <StatCard label="Total paid" value={inr(totalPaid)} />
        <StatCard label="Balance due" value={inr(totalDue)} tone={totalDue ? 'bad' : undefined} />
      </div>

      {(member.address || member.notes || member.profession || member.representative) && (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 mb-8 text-sm text-white/70 grid sm:grid-cols-2 gap-2">
          {member.profession && <div><span className="text-white/40">Profession:</span> {member.profession}</div>}
          {member.address && <div><span className="text-white/40">Address:</span> {member.address}</div>}
          {member.representative && <div><span className="text-white/40">Enrolled by:</span> {member.representative}</div>}
          {member.notes && <div className="sm:col-span-2"><span className="text-white/40">Notes:</span> {member.notes}</div>}
        </div>
      )}

      <h2 className="font-semibold mb-3">Memberships</h2>
      <Table head={['Plan', 'Period', 'Payable', 'Paid', 'Due', 'Status', '']} empty="No memberships yet">
        {memberships.map((m) => (
          <tr key={m.id}>
            <td>{m.plan_name}</td>
            <td className="text-white/60">{fmtDate(m.start_date)} → {fmtDate(m.end_date)}</td>
            <td>{inr(m.payable)}</td>
            <td>{inr(m.paid)}</td>
            <td className={m.due > 0 ? 'text-red-400' : 'text-white/40'}>{inr(m.due)}</td>
            <td><Badge value={m.status} /></td>
            <td className="space-x-3 text-xs">
              {m.due > 0 && !m.cancelled && <button className="text-[#ff3b00]" onClick={() => setCollecting(m)}>Collect</button>}
              {profile?.role === 'admin' && <button className="text-red-400 hover:text-red-300" onClick={() => deleteMembership(m)}>Delete</button>}
            </td>
          </tr>
        ))}
      </Table>

      <h2 className="font-semibold mt-8 mb-3">Payment history</h2>
      <Table head={['Date', 'Receipt', 'Plan', 'Method', 'Amount']} empty="No payments yet">
        {payments.map((p) => (
          <tr key={p.id}>
            <td>{fmtDate(p.paid_on)}</td><td className="text-white/60">{p.receipt_no}</td><td className="text-white/60">{p.plan_name}</td>
            <td className="capitalize">{p.method.replace('_', ' ')}</td><td className="font-medium">{inr(p.amount)}</td>
          </tr>
        ))}
      </Table>

      {dialog}
      {editing && <MemberFormModal initial={member} onClose={() => setEditing(false)} onSaved={() => { setEditing(false); void load(); }} />}
      {renewing && <NewMembershipModal member={member} onClose={() => setRenewing(false)} onSaved={() => { setRenewing(false); void load(); }} />}
      {collecting && <CollectPaymentModal membership={collecting} onClose={() => setCollecting(null)} onSaved={() => { setCollecting(null); void load(); }} />}
    </>
  );
}
