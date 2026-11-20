import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { addDays, inr, safeSearch, today } from '../lib/format';
import type { Member, Membership, PaymentMethod, Plan } from '../lib/types';
import { Btn, Field, Input, Modal, Select, Textarea } from './ui';

const METHODS: PaymentMethod[] = ['cash', 'upi', 'card', 'bank_transfer', 'cheque', 'other'];
const num = (v: string) => (v === '' ? 0 : Number(v));

// ---------------------------------------------------------------------------
export function MemberPicker({ value, onChange }: { value: Pick<Member, 'id' | 'name' | 'phone'> | null; onChange: (m: Pick<Member, 'id' | 'name' | 'phone'> | null) => void }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Pick<Member, 'id' | 'name' | 'phone'>[]>([]);

  useEffect(() => {
    const term = safeSearch(q);
    if (term.length < 2) { setResults([]); return; }
    const t = setTimeout(async () => {
      const { data } = await supabase.from('members').select('id,name,phone')
        .or(`name.ilike.%${term}%,phone.ilike.%${term}%`).order('name').limit(8);
      setResults((data as Pick<Member, 'id' | 'name' | 'phone'>[]) ?? []);
    }, 250);
    return () => clearTimeout(t);
  }, [q]);

  if (value) {
    return (
      <div className="flex items-center justify-between rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
        <span>{value.name} <span className="text-white/40">· {value.phone ?? 'no phone'}</span></span>
        <button type="button" className="text-xs text-[#ff3b00]" onClick={() => onChange(null)}>Change</button>
      </div>
    );
  }
  return (
    <div className="relative">
      <Input placeholder="Search name or phone…" value={q} onChange={(e) => setQ(e.target.value)} />
      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-[#1c1c1c] border border-white/10 max-h-56 overflow-auto">
          {results.map((m) => (
            <li key={m.id}>
              <button type="button" className="w-full text-left px-3 py-2 text-sm hover:bg-white/10" onClick={() => onChange(m)}>
                {m.name} <span className="text-white/40">· {m.phone ?? 'no phone'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
export function MemberFormModal({ initial, onClose, onSaved }: { initial?: Partial<Member>; onClose: () => void; onSaved: (id: string) => void }) {
  const [f, setF] = useState({
    name: initial?.name ?? '', phone: initial?.phone ?? '', alt_phone: initial?.alt_phone ?? '', email: initial?.email ?? '',
    gender: initial?.gender ?? '', date_of_birth: initial?.date_of_birth ?? '', profession: initial?.profession ?? '',
    address: initial?.address ?? '', joined_on: initial?.joined_on ?? today(), source: initial?.source ?? '',
    status: initial?.status ?? 'active', notes: initial?.notes ?? '',
  });
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!/^\d{10}$/.test(f.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, ''))) { toast.error('Enter a valid 10-digit phone number'); return; }
    setBusy(true);
    const payload = {
      ...f, phone: f.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, ''),
      gender: f.gender || null, date_of_birth: f.date_of_birth || null, email: f.email || null, alt_phone: f.alt_phone || null,
      profession: f.profession || null, address: f.address || null, source: f.source || null, notes: f.notes || null,
    };
    const res = initial?.id
      ? await supabase.from('members').update(payload).eq('id', initial.id).select('id').single()
      : await supabase.from('members').insert(payload).select('id').single();
    setBusy(false);
    if (res.error) { toast.error(res.error.message); return; }
    toast.success(initial?.id ? 'Member updated' : 'Member added');
    onSaved(res.data.id);
  }

  return (
    <Modal title={initial?.id ? 'Edit member' : 'Add member'} onClose={onClose} wide>
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name *"><Input required value={f.name} onChange={set('name')} /></Field>
        <Field label="Phone *"><Input required inputMode="numeric" value={f.phone} onChange={set('phone')} /></Field>
        <Field label="Alternate phone"><Input value={f.alt_phone} onChange={set('alt_phone')} /></Field>
        <Field label="Email"><Input type="email" value={f.email} onChange={set('email')} /></Field>
        <Field label="Gender">
          <Select value={f.gender} onChange={set('gender')}><option value="">—</option><option>Male</option><option>Female</option><option>Other</option></Select>
        </Field>
        <Field label="Date of birth"><Input type="date" value={f.date_of_birth} onChange={set('date_of_birth')} /></Field>
        <Field label="Joined on"><Input type="date" value={f.joined_on} onChange={set('joined_on')} /></Field>
        <Field label="Source"><Input placeholder="Walk-in, reference…" value={f.source} onChange={set('source')} /></Field>
        <Field label="Profession"><Input value={f.profession} onChange={set('profession')} /></Field>
        <Field label="Status">
          <Select value={f.status} onChange={set('status')}><option value="active">Active</option><option value="inactive">Inactive</option></Select>
        </Field>
        <div className="sm:col-span-2"><Field label="Address"><Input value={f.address} onChange={set('address')} /></Field></div>
        <div className="sm:col-span-2"><Field label="Notes"><Textarea value={f.notes} onChange={set('notes')} /></Field></div>
        <div className="sm:col-span-2 flex justify-end gap-2">
          <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn disabled={busy}>{busy ? 'Saving…' : 'Save'}</Btn>
        </div>
      </form>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
export function NewMembershipModal({ member, onClose, onSaved }: { member?: Pick<Member, 'id' | 'name' | 'phone'>; onClose: () => void; onSaved: () => void }) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [picked, setPicked] = useState<Pick<Member, 'id' | 'name' | 'phone'> | null>(member ?? null);
  const [planId, setPlanId] = useState('');
  const [start, setStart] = useState(today());
  const [end, setEnd] = useState('');
  const [amount, setAmount] = useState('0');
  const [discount, setDiscount] = useState('0');
  const [tax, setTax] = useState('0');
  const [paid, setPaid] = useState('');
  const [method, setMethod] = useState<PaymentMethod>('cash');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.from('plans').select('*').eq('is_active', true).order('display_order').then(({ data }) => setPlans((data as Plan[]) ?? []));
  }, []);

  const plan = useMemo(() => plans.find((p) => p.id === planId), [plans, planId]);
  useEffect(() => {
    if (plan) { setAmount(String(plan.price)); setEnd(addDays(start, plan.duration_days)); }
  }, [plan, start]);

  const payable = Math.max(num(amount) - num(discount) + num(tax), 0);
  const paidNow = paid === '' ? payable : num(paid);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!picked) { toast.error('Choose a member'); return; }
    if (!plan) { toast.error('Choose a plan'); return; }
    if (end < start) { toast.error('End date is before start date'); return; }
    if (paidNow > payable) { toast.error('Payment cannot exceed the payable amount'); return; }
    setBusy(true);
    const { error } = await supabase.rpc('create_membership', {
      p_member_id: picked.id, p_plan_id: plan.id, p_start: start, p_end: end,
      p_amount: num(amount), p_discount: num(discount), p_tax: num(tax),
      p_paid: paidNow, p_method: method, p_notes: notes || null,
    });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success('Membership created');
    onSaved();
  }

  return (
    <Modal title="New membership / renewal" onClose={onClose} wide>
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2"><Field label="Member *"><MemberPicker value={picked} onChange={setPicked} /></Field></div>
        <div className="sm:col-span-2">
          <Field label="Plan *">
            <Select value={planId} onChange={(e) => setPlanId(e.target.value)} required>
              <option value="">Select a plan…</option>
              {plans.map((p) => <option key={p.id} value={p.id}>{p.name} — {inr(p.price)} / {p.duration_days}d</option>)}
            </Select>
          </Field>
        </div>
        <Field label="Start date"><Input type="date" required value={start} onChange={(e) => setStart(e.target.value)} /></Field>
        <Field label="End date"><Input type="date" required value={end} onChange={(e) => setEnd(e.target.value)} /></Field>
        <Field label="Price (₹)"><Input type="number" min="0" value={amount} onChange={(e) => setAmount(e.target.value)} /></Field>
        <Field label="Discount (₹)"><Input type="number" min="0" value={discount} onChange={(e) => setDiscount(e.target.value)} /></Field>
        <Field label="Tax (₹)"><Input type="number" min="0" value={tax} onChange={(e) => setTax(e.target.value)} /></Field>
        <div className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm flex items-center justify-between">
          <span className="text-white/60">Payable</span><strong>{inr(payable)}</strong>
        </div>
        <Field label={`Paid now (₹) — blank = full ${inr(payable)}`}><Input type="number" min="0" value={paid} onChange={(e) => setPaid(e.target.value)} /></Field>
        <Field label="Method">
          <Select value={method} onChange={(e) => setMethod(e.target.value as PaymentMethod)}>
            {METHODS.map((m) => <option key={m} value={m}>{m.replace('_', ' ')}</option>)}
          </Select>
        </Field>
        <div className="sm:col-span-2"><Field label="Notes"><Textarea value={notes} onChange={(e) => setNotes(e.target.value)} /></Field></div>
        <div className="sm:col-span-2 flex items-center justify-between">
          <span className="text-sm text-white/50">Balance after payment: <strong className="text-white">{inr(payable - paidNow)}</strong></span>
          <div className="flex gap-2">
            <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn>
            <Btn disabled={busy}>{busy ? 'Saving…' : 'Create'}</Btn>
          </div>
        </div>
      </form>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
export function CollectPaymentModal({ membership, onClose, onSaved }: { membership: Pick<Membership, 'id' | 'member_name' | 'plan_name' | 'due'>; onClose: () => void; onSaved: () => void }) {
  const [amount, setAmount] = useState(String(membership.due));
  const [method, setMethod] = useState<PaymentMethod>('cash');
  const [paidOn, setPaidOn] = useState(today());
  const [reference, setReference] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.rpc('record_payment', {
      p_membership_id: membership.id, p_amount: Number(amount), p_method: method,
      p_paid_on: paidOn, p_reference: reference || null, p_notes: notes || null,
    });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success('Payment recorded');
    onSaved();
  }

  return (
    <Modal title="Collect payment" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div className="text-sm text-white/60">{membership.member_name} · {membership.plan_name}<br />Balance due: <strong className="text-white">{inr(membership.due)}</strong></div>
        <Field label="Amount (₹)"><Input type="number" min="1" max={membership.due} step="0.01" required value={amount} onChange={(e) => setAmount(e.target.value)} /></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Method">
            <Select value={method} onChange={(e) => setMethod(e.target.value as PaymentMethod)}>
              {METHODS.map((m) => <option key={m} value={m}>{m.replace('_', ' ')}</option>)}
            </Select>
          </Field>
          <Field label="Date"><Input type="date" value={paidOn} onChange={(e) => setPaidOn(e.target.value)} /></Field>
        </div>
        <Field label="Reference (UPI / cheque no.)"><Input value={reference} onChange={(e) => setReference(e.target.value)} /></Field>
        <Field label="Notes"><Input value={notes} onChange={(e) => setNotes(e.target.value)} /></Field>
        <div className="flex justify-end gap-2">
          <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn disabled={busy}>{busy ? 'Saving…' : 'Record payment'}</Btn>
        </div>
      </form>
    </Modal>
  );
}
