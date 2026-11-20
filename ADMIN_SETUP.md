# Sweatout admin — setup

Single-gym management app living inside this repo at `/admin`. Stack: the existing Vite + React site, Supabase (Postgres + Auth) as the only backend. No server to run or pay for.

```
Marketing site (public)  ──Contact form──▶  Supabase `inquiries` (anon INSERT only)
/admin (staff login)     ──Supabase JS──▶   Postgres + Row Level Security
scripts/import-legacy.mjs ──service key──▶  one-time load of old data
```

## What it covers

| Area | Screens |
|---|---|
| Login | Supabase email + password. Only users with a row in `profiles` get in (`admin` or `staff`). |
| Inquiries | Add / edit, status pipeline, follow-up dates, WhatsApp link, one-click convert to member. Website contact form lands here automatically. |
| Members | Search (name / phone / old member no.), add / edit, detail page with memberships + payment history. |
| Memberships | New / renew (plan, dates, discount, tax, first payment in one atomic call), tabs for Active / Expiring / Expired / Has dues, cancel, WhatsApp reminders. |
| Payments | Instalments supported, cannot over-collect, date + method filters, CSV export, admin-only delete. |
| Reports | 12-month collections chart, sales by plan, payment methods, outstanding dues, 30-day lapsed win-back list, inquiry funnel — CSV exports. |
| Plans | Membership types / programs (admin edits; staff read-only). |

Tables: `profiles`, `plans`, `members`, `memberships`, `payments`, `inquiries` (+ views `v_memberships`, `v_payments`). Membership status (active / expired / upcoming) and balance due are **derived in the database**, never stored, so they can't drift.

## 1. Create the Supabase project (free tier)

1. https://supabase.com → New project (region: Mumbai / `ap-south-1`). Save the DB password.
2. SQL Editor → paste all of `supabase/schema.sql` → Run. (Safe to re-run.) Then run `supabase/migrations/002_member_code_and_member_delete.sql` the same way (adds the ID column and makes member delete admin-only). After the data import, run `003_sweatout_ids_for_all_members.sql`: it gives **every** member a Sweatout ID (`SO-001` = earliest joiner) and keeps the old system's number in `legacy_membership_no` as "Old ID". New members then continue the sequence automatically.
3. Authentication → Users → **Add user** (email + password, tick "Auto confirm"). Copy the user's UID.
4. SQL Editor, make that user the admin:
   ```sql
   insert into profiles (id, full_name, role) values ('PASTE-UID-HERE', 'Your Name', 'admin');
   ```
   Add more staff the same way with `role = 'staff'`.
5. Authentication → Providers → Email: **disable "Allow new users to sign up"** so only people you add can have accounts.

## 2. Configure the site

Create a file named `.env` in the repo root (it is already git-ignored):

```
VITE_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Both values are in Supabase → Project Settings → API. The anon key is safe in the browser; Row Level Security is what protects data.

```
npm install
npm run dev        # open http://localhost:5173/admin
```

## 3. Load the real data

1. Create a `data/` folder in the repo root (git-ignored — it holds personal data) and put the two exports in it as
   `data/live-clients.csv` and `data/inactive_clients.json`.
2. Dry run first — writes `scripts/out/import-report.json`, touches nothing:
   ```
   npm run import:dry-run
   ```
3. Real import (Supabase → Project Settings → API → `service_role` key; keep it secret, don't save it in a file):
   ```
   SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co SUPABASE_SERVICE_ROLE_KEY=... npm run import:legacy
   ```
   It is idempotent (upserts on the old client / bill ids), so re-running is safe.

### What the import does with your sample data

Dry-run result on the supplied files: **1,760 members (51 active), 5,670 memberships, 5,128 payments, ₹2.31 crore historical collections, ₹3,000 outstanding.**

- `live-clients.csv` → 51 **active** members, each with their current bill as a membership + the payment taken.
- `inactive_clients.json` → 1,709 members imported as **inactive**. (Every profile in that file says `Status: Active`, which contradicts the filename — I followed the filename. Use `--json-status=active` to flip.) Their gym + personal-training bills become memberships and payments.
- ~35 legacy package spellings are collapsed into the 9 plans seeded in `schema.sql` (original name kept in each membership's notes).
- Old unpaid balances on **historical** bills are written off (kept in notes) so Reports › Dues shows only live money owed. Current dues are kept (the one open item is Sreenivasulu p's ₹3,000).
- ₹0.01 leftovers from the old system are written off.
- Data fixes, all logged in the import report: end date `2222` → start + 30 days (4 bills, incl. client 985); negative "tax" entries folded into discount; **14 bills skipped** (4 negative reversal/refund entries from 2018, the rest with impossible years like `0206` or an end date before the start) — each listed in `scripts/out/import-report.json` so you can fix them by hand.
- **Not imported:** attendance (7,669 rows), instalment status tables, feedback/diet tables — outside the memberships/payments/inquiries/reports scope. The JSON is retained if you want them later.
- Duplicate phone numbers (4) and reused membership numbers (31) in the old data are kept as separate members; neither is unique in the new schema.
- The second duplicate bill for client 1759 (bill 6127, noted in the CSV) is not in the CSV; only 6128 is imported.

## Security model

- Browser only ever holds the anon key. Every table has RLS: signed-in users **without** a `profiles` row see nothing.
- `anon` can only: insert a website inquiry (`source='website'`, `status='new'`) and read active plans. It cannot read inquiries or members.
- Payments: staff can add, only admins can edit / delete.
- The service-role key is used only by the import script on your machine.

## Deploying

The site deploys to GitHub Pages (`sweatoutgym.fit`) via `.github/workflows/deploy.yml` on every push to `main`. The existing `404.html` + `index.html` redirect trick makes deep links like `/admin/members` survive a refresh.

Because `.env` is git-ignored, the CI build needs the two values too. In GitHub: Settings → Secrets and variables → Actions → **Variables** → add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (same values as your local `.env`). Without them the deployed `/admin` shows "Supabase is not configured" and the Contact form won't save leads.

Also in Supabase → Authentication → URL Configuration: set Site URL to `https://sweatoutgym.fit`.

## Layout

```
supabase/schema.sql          tables, views, RLS, report + atomic RPCs, plan seed
scripts/legacy-transform.mjs pure transform of old exports (testable, no DB)
scripts/import-legacy.mjs    dry-run / import runner
src/admin/                   the admin app (AdminApp, auth, pages/, components/, lib/)
src/admin/lib/public-inquiry.ts  used by the public Contact form
```

## Notes on how this derives from 1RT

Kept: plans → subscriptions → payments model, payment methods, legacy-import parsing/package-normalisation logic, report set (revenue, dues, expiring, enquiry funnel). Dropped: tenants, branches, 8 staff roles + permissions, devices / attendance hardware, notifications, campaigns, AI features, billing/SaaS plans. Instalments are modelled as multiple payments against one membership instead of 1RT's separate installment records.

Not yet built (reasonable next steps): attendance check-in, freeze / pause, GST invoices / receipts PDF, WhatsApp API automation (today it opens `wa.me` links), trainer assignment.
