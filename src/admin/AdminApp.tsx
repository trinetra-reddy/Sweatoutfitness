import { NavLink, Navigate, Outlet, Route, Routes } from 'react-router';
import { Toaster } from 'sonner';
import { BarChart3, ClipboardList, CreditCard, Home, LogOut, MessageSquarePlus, Tag, Users } from 'lucide-react';
import { AuthProvider, useAuth } from './auth';
import { isSupabaseConfigured } from './lib/supabase';
import { Loading } from './components/ui';
import { LoginPage } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { InquiriesPage } from './pages/Inquiries';
import { MembersPage } from './pages/Members';
import { MemberDetailPage } from './pages/MemberDetail';
import { MembershipsPage } from './pages/Memberships';
import { PaymentsPage } from './pages/Payments';
import { ReportsPage } from './pages/Reports';
import { PlansPage } from './pages/Plans';

const nav = [
  { to: '/admin', label: 'Dashboard', icon: Home, end: true },
  { to: '/admin/inquiries', label: 'Inquiries', icon: MessageSquarePlus },
  { to: '/admin/members', label: 'Members', icon: Users },
  { to: '/admin/memberships', label: 'Memberships', icon: ClipboardList },
  { to: '/admin/payments', label: 'Payments', icon: CreditCard },
  { to: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { to: '/admin/plans', label: 'Plans', icon: Tag },
];

function Shell() {
  const { session, profile, loading, signOut } = useAuth();
  if (loading) return <Loading />;
  if (!session) return <Navigate to="/admin/login" replace />;
  if (!profile) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div className="max-w-sm">
          <h1 className="text-xl font-semibold mb-2">No access</h1>
          <p className="text-sm text-white/60 mb-4">This account is signed in but is not a staff member. Ask the gym admin to add you.</p>
          <button className="text-[#ff3b00] text-sm" onClick={signOut}>Sign out</button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen md:h-screen md:flex md:overflow-hidden">
      <aside className="md:w-56 md:shrink-0 md:h-screen border-b md:border-b-0 md:border-r border-white/10 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
        <div className="hidden md:block mb-4">
          <div className="text-lg font-bold tracking-tight">SWEATOUT</div>
          <div className="text-xs text-white/40">Gym admin</div>
        </div>
        {nav.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}
            className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap ${isActive ? 'bg-[#ff3b00] text-white' : 'text-white/70 hover:bg-white/5'}`}>
            <Icon size={16} /> {label}
          </NavLink>
        ))}
        <div className="md:mt-auto md:pt-4 md:border-t border-white/10 flex md:block items-center gap-3">
          <div className="hidden md:block text-xs text-white/50 mb-2">{profile.full_name} · {profile.role}</div>
          <button onClick={signOut} className="flex items-center gap-2 text-sm text-white/60 hover:text-white whitespace-nowrap"><LogOut size={16} /> Sign out</button>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-4 md:p-8 md:h-screen md:overflow-y-auto"><Outlet /></main>
    </div>
  );
}

export function AdminApp() {
  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen grid place-items-center p-6 bg-[#0a0a0a] text-white">
        <div className="max-w-md text-sm text-white/70 space-y-2">
          <h1 className="text-xl font-semibold text-white">Supabase is not configured</h1>
          <p>Copy <code>.env.example</code> to <code>.env</code>, set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>, then restart the dev server. See <code>ADMIN_SETUP.md</code>.</p>
        </div>
      </div>
    );
  }
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Toaster theme="dark" position="top-right" richColors />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<Shell />}>
            <Route index element={<DashboardPage />} />
            <Route path="inquiries" element={<InquiriesPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="members/:id" element={<MemberDetailPage />} />
            <Route path="memberships" element={<MembershipsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="plans" element={<PlansPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
