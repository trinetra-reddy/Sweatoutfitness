import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { supabase } from '../lib/supabase';
import { inr } from '../lib/format';
import type { Plan } from '../lib/types';
import { useAuth } from '../auth';
import { Badge, Btn, ErrorBox, Field, Input, Loading, Modal, PageHeader, Select, Table } from '../components/ui';

export function PlansPage() {
  const { profile } = useAuth();
  const isAdmin = profile?.role === 'admin';
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<Plan | 'new' | null>(null);

  const load = useCallback(async () => {
    const { data, error: err } = await supabase.from('plans').select('*').order('display_order').order('name');
    if (err) setError(err.message); else setPlans((data as Plan[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  async function toggle(p: Plan) {
    const { error: err } = await supabase.from('plans').update({ is_active: !p.is_active }).eq('id', p.id);
    if (err) toast.error(err.message); else void load();
  }

  if (error) return <ErrorBox message={error} />;
  if (!plans) return <Loading />;

  return (
    <>
      <PageHeader title="Plans" subtitle="Membership types and programs" actions={isAdmin && <Btn onClick={() => setEditing('new')}>Add plan</Btn>} />
      <Table head={['Plan', 'Category', 'Duration', 'Price', 'Status', '']} empty="No plans">
        {plans.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td className="capitalize text-white/60">{p.category.replace('_', ' ')}</td>
            <td className="text-white/60">{p.duration_days} days</td>
            <td>{inr(p.price)}</td>
            <td><Badge value={p.is_active ? 'active' : 'inactive'} /></td>
            <td className="space-x-3 text-xs">
              {isAdmin && <>
                <button className="text-[#ff3b00]" onClick={() => setEditing(p)}>Edit</button>
                <button className="text-white/50 hover:text-white" onClick={() => toggle(p)}>{p.is_active ? 'Deactivate' : 'Activate'}</button>
              </>}
            </td>
          </tr>
        ))}
      </Table>
      {!isAdmin && <p className="text-xs text-white/40 mt-3">Only admins can change plans.</p>}
      {editing && <PlanModal plan={editing === 'new' ? null : editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); void load(); }} />}
    </>
  );
}

function PlanModal({ plan, onClose, onSaved }: { plan: Plan | null; onClose: () => void; onSaved: () => void }) {
  const [f, setF] = useState({
    name: plan?.name ?? '', category: plan?.category ?? 'gym', duration_days: String(plan?.duration_days ?? 30),
    price: String(plan?.price ?? ''), description: plan?.description ?? '', display_order: String(plan?.display_order ?? 0),
  });
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const payload = { ...f, duration_days: Number(f.duration_days), price: Number(f.price), display_order: Number(f.display_order), description: f.description || null };
    const { error } = plan ? await supabase.from('plans').update(payload).eq('id', plan.id) : await supabase.from('plans').insert(payload);
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success('Plan saved'); onSaved();
  }

  return (
    <Modal title={plan ? 'Edit plan' : 'Add plan'} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Name"><Input required value={f.name} onChange={set('name')} /></Field>
        <Field label="Category">
          <Select value={f.category} onChange={set('category')}>
            <option value="gym">Gym</option><option value="personal_training">Personal training</option><option value="special">Special</option><option value="guest">Guest</option>
          </Select>
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Days"><Input type="number" min="1" required value={f.duration_days} onChange={set('duration_days')} /></Field>
          <Field label="Price (₹)"><Input type="number" min="0" required value={f.price} onChange={set('price')} /></Field>
          <Field label="Order"><Input type="number" value={f.display_order} onChange={set('display_order')} /></Field>
        </div>
        <Field label="Description"><Input value={f.description} onChange={set('description')} /></Field>
        <div className="flex justify-end gap-2"><Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn><Btn disabled={busy}>{busy ? 'Saving…' : 'Save'}</Btn></div>
      </form>
    </Modal>
  );
}
