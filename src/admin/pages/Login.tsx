import { useState, type FormEvent } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../auth';
import { Btn, ErrorBox, Field, Input } from '../components/ui';

export function LoginPage() {
  const { session, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (session) return <Navigate to="/admin" replace />;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true); setError(null);
    const err = await signIn(email.trim(), password);
    setBusy(false);
    if (err) setError(err);
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl bg-[#141414] border border-white/10 p-6 space-y-4">
        <div>
          <div className="text-2xl font-bold tracking-tight">SWEATOUT</div>
          <div className="text-sm text-white/50">Admin sign in</div>
        </div>
        {error && <ErrorBox message={error} />}
        <Field label="Email"><Input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} /></Field>
        <Field label="Password"><Input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} /></Field>
        <Btn className="w-full" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</Btn>
      </form>
    </div>
  );
}
