import { isSupabaseConfigured, supabase } from './supabase';

/**
 * Called by the public Contact form. Inserts an inquiry as the anonymous role.
 * RLS only allows source='website', status='new' inserts (see supabase/schema.sql),
 * and anon cannot read anything back, so this is safe to expose.
 */
export async function submitWebsiteInquiry(i: { name: string; phone: string; email?: string; interested_in?: string; message?: string }) {
  if (!isSupabaseConfigured || !i.name.trim() || !i.phone.trim()) return;
  try {
    await supabase.from('inquiries').insert({
      name: i.name.trim().slice(0, 120),
      phone: i.phone.trim().slice(0, 20),
      email: i.email?.trim().slice(0, 160) || null,
      interested_in: i.interested_in?.trim().slice(0, 120) || null,
      message: i.message?.trim().slice(0, 2000) || null,
      source: 'website',
      status: 'new',
    });
  } catch {
    /* swallow: the WhatsApp hand-off still works */
  }
}
