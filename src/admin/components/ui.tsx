import { useCallback, useEffect, useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { X } from 'lucide-react';

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export function Btn({ variant = 'primary', className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'danger' }) {
  const v = {
    primary: 'bg-[#ff3b00] hover:bg-[#e03400] text-white',
    ghost: 'bg-white/5 hover:bg-white/10 text-white border border-white/10',
    danger: 'bg-red-600/80 hover:bg-red-600 text-white',
  }[variant];
  return <button {...p} className={cx('px-3.5 py-2 rounded-md text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed', v, className)} />;
}

const field = 'w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff3b00]';

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-white/60 mb-1">{label}</span>
      {children}
    </label>
  );
}
export const Input = (p: InputHTMLAttributes<HTMLInputElement>) => <input {...p} className={cx(field, p.className)} />;
export const Textarea = (p: TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea rows={3} {...p} className={cx(field, p.className)} />;
export const Select = (p: SelectHTMLAttributes<HTMLSelectElement>) => <select {...p} className={cx(field, '[&>option]:text-black', p.className)} />;

export function Modal({ title, onClose, children, wide }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 overflow-y-auto" onMouseDown={onClose}>
      <div className={cx('mt-10 w-full rounded-xl bg-[#141414] border border-white/10 shadow-2xl', wide ? 'max-w-2xl' : 'max-w-md')} onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h2 className="font-semibold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-white/50 hover:text-white"><X size={18} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export interface ConfirmOptions {
  title: string;
  message: ReactNode;
  confirmLabel?: string;
  danger?: boolean;
}

/**
 * Promise-based confirm dialog (replaces window.confirm).
 *   const { confirm, dialog } = useConfirm();
 *   if (!(await confirm({ title: 'Delete?', message: '…', danger: true }))) return;
 *   …render {dialog} once in the page JSX
 */
export function useConfirm() {
  const [state, setState] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(null);

  const confirm = useCallback(
    (opts: ConfirmOptions) => new Promise<boolean>((resolve) => setState({ ...opts, resolve })),
    [],
  );
  const close = (answer: boolean) => { state?.resolve(answer); setState(null); };

  const dialog = state ? (
    <Modal title={state.title} onClose={() => close(false)}>
      <div className="text-sm text-white/70">{state.message}</div>
      <div className="mt-6 flex justify-end gap-2">
        <Btn variant="ghost" autoFocus onClick={() => close(false)}>Cancel</Btn>
        <Btn variant={state.danger ? 'danger' : 'primary'} onClick={() => close(true)}>{state.confirmLabel ?? 'Confirm'}</Btn>
      </div>
    </Modal>
  ) : null;

  return { confirm, dialog };
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-white/50 mt-1">{subtitle}</p>}
      </div>
      <div className="flex gap-2">{actions}</div>
    </div>
  );
}

export function StatCard({ label, value, hint, tone }: { label: string; value: ReactNode; hint?: string; tone?: 'warn' | 'good' | 'bad' }) {
  const t = tone === 'bad' ? 'text-red-400' : tone === 'warn' ? 'text-amber-400' : tone === 'good' ? 'text-emerald-400' : 'text-white';
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
      <div className="text-xs uppercase tracking-wide text-white/50">{label}</div>
      <div className={cx('text-2xl font-semibold mt-1', t)}>{value}</div>
      {hint && <div className="text-xs text-white/40 mt-1">{hint}</div>}
    </div>
  );
}

const badgeTone: Record<string, string> = {
  active: 'bg-emerald-500/15 text-emerald-300', paid: 'bg-emerald-500/15 text-emerald-300', converted: 'bg-emerald-500/15 text-emerald-300',
  expired: 'bg-red-500/15 text-red-300', lost: 'bg-red-500/15 text-red-300', cancelled: 'bg-red-500/15 text-red-300', inactive: 'bg-white/10 text-white/60',
  upcoming: 'bg-sky-500/15 text-sky-300', new: 'bg-sky-500/15 text-sky-300',
  follow_up: 'bg-amber-500/15 text-amber-300', contacted: 'bg-amber-500/15 text-amber-300', trial: 'bg-violet-500/15 text-violet-300',
};
export const Badge = ({ value }: { value: string }) => (
  <span className={cx('inline-block rounded-full px-2 py-0.5 text-xs font-medium capitalize', badgeTone[value] ?? 'bg-white/10 text-white/70')}>{value.replace('_', ' ')}</span>
);

export function Table({ head, children, empty }: { head: string[]; children: ReactNode; empty?: string }) {
  const hasRows = Array.isArray(children) ? children.length > 0 : Boolean(children);
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-white/50">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-medium whitespace-nowrap">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-white/5 [&_td]:px-4 [&_td]:py-3 [&_td]:whitespace-nowrap">
          {hasRows ? children : <tr><td colSpan={head.length} className="!text-center text-white/40 !py-10">{empty ?? 'Nothing here yet'}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export function Pager({ page, pageSize, total, onPage }: { page: number; pageSize: number; total: number; onPage: (p: number) => void }) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-white/60">
      <span>{total.toLocaleString('en-IN')} records</span>
      <div className="flex items-center gap-2">
        <Btn variant="ghost" disabled={page <= 1} onClick={() => onPage(page - 1)}>Prev</Btn>
        <span>Page {page} / {pages}</span>
        <Btn variant="ghost" disabled={page >= pages} onClick={() => onPage(page + 1)}>Next</Btn>
      </div>
    </div>
  );
}

export const Loading = () => <div className="py-16 text-center text-white/40 text-sm">Loading…</div>;
export const ErrorBox = ({ message }: { message: string }) => (
  <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 text-sm px-4 py-3">{message}</div>
);
