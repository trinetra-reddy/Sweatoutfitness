-- =====================================================================
-- Sweatout Fitness — single-gym management schema (Supabase / Postgres)
-- Derived from the 1RT multi-tenant schema with tenant_id / branch_id /
-- roles / devices / notifications etc. removed. One gym, one branch.
--
-- Run once in: Supabase Dashboard > SQL Editor > New query > Run
-- Safe to re-run (idempotent).
-- =====================================================================

-- ---------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------
create or replace function set_updated_at() returns trigger
language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

-- ---------------------------------------------------------------------
-- 1. LOGIN: staff profiles (linked to Supabase Auth users)
--    Anyone who can sign in but has no row here sees nothing.
-- ---------------------------------------------------------------------
create table if not exists profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text not null,
  role        text not null default 'staff' check (role in ('admin','staff')),
  created_at  timestamptz not null default now()
);

create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid());
$$;

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

-- ---------------------------------------------------------------------
-- 2. PLANS (programs / membership types)
-- ---------------------------------------------------------------------
create table if not exists plans (
  id             uuid primary key default gen_random_uuid(),
  name           text not null unique,
  category       text not null default 'gym'
                 check (category in ('gym','personal_training','special','guest')),
  duration_days  int  not null check (duration_days > 0),
  price          numeric(10,2) not null check (price >= 0),
  description    text,
  is_active      boolean not null default true,
  display_order  int not null default 0,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
drop trigger if exists trg_plans_updated on plans;
create trigger trg_plans_updated before update on plans
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------
-- 3. MEMBERS
-- ---------------------------------------------------------------------
create table if not exists members (
  id                 uuid primary key default gen_random_uuid(),
  legacy_client_id   int unique,              -- clientId from the old system
  legacy_membership_no text,                  -- "Membership id" (not unique in old data)
  name               text not null,
  phone              text,
  alt_phone          text,
  email              text,
  gender             text check (gender in ('Male','Female','Other')),
  date_of_birth      date,
  profession         text,
  address            text,
  joined_on          date,
  source             text,                    -- walk-in / reference / website ...
  representative     text,                    -- staff who enrolled them
  trainer            text,
  status             text not null default 'active' check (status in ('active','inactive')),
  notes              text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index if not exists idx_members_phone  on members(phone);
create index if not exists idx_members_name   on members(lower(name));
create index if not exists idx_members_status on members(status);
drop trigger if exists trg_members_updated on members;
create trigger trg_members_updated before update on members
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------
-- 4. MEMBERSHIPS (a purchased plan for a period — one row per bill)
--    Status and balance are derived in the v_memberships view, never stored.
-- ---------------------------------------------------------------------
create table if not exists memberships (
  id             uuid primary key default gen_random_uuid(),
  member_id      uuid not null references members(id) on delete cascade,
  plan_id        uuid references plans(id) on delete set null,
  plan_name      text not null,                 -- snapshot, survives plan edits/deletes
  legacy_bill_id text unique,
  start_date     date not null,
  end_date       date not null,
  amount         numeric(10,2) not null check (amount >= 0),   -- list price
  discount       numeric(10,2) not null default 0 check (discount >= 0),
  tax            numeric(10,2) not null default 0 check (tax >= 0),
  payable        numeric(10,2) not null check (payable >= 0),  -- amount - discount + tax
  written_off    numeric(10,2) not null default 0 check (written_off >= 0), -- forgiven balance
  cancelled      boolean not null default false,
  notes          text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  check (end_date >= start_date)
);
create index if not exists idx_memberships_member on memberships(member_id);
create index if not exists idx_memberships_end    on memberships(end_date);
drop trigger if exists trg_memberships_updated on memberships;
create trigger trg_memberships_updated before update on memberships
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------
-- 5. PAYMENTS (money received against a membership; supports instalments)
-- ---------------------------------------------------------------------
create sequence if not exists receipt_seq start 1;

create table if not exists payments (
  id             uuid primary key default gen_random_uuid(),
  membership_id  uuid not null references memberships(id) on delete cascade,
  member_id      uuid not null references members(id) on delete cascade,
  amount         numeric(10,2) not null check (amount > 0),
  paid_on        date not null default current_date,
  method         text not null default 'cash'
                 check (method in ('cash','upi','card','bank_transfer','cheque','other')),
  receipt_no     text unique default ('SO-' || lpad(nextval('receipt_seq')::text, 6, '0')),
  reference      text,                         -- UPI txn id, cheque no, etc.
  notes          text,
  created_by     uuid references auth.users(id) on delete set null,
  created_at     timestamptz not null default now()
);
create index if not exists idx_payments_member on payments(member_id);
create index if not exists idx_payments_membership on payments(membership_id);
create index if not exists idx_payments_paid_on on payments(paid_on);

-- ---------------------------------------------------------------------
-- 6. INQUIRIES (leads). Website form inserts anonymously (see RLS below).
-- ---------------------------------------------------------------------
create table if not exists inquiries (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  phone              text not null,
  email              text,
  interested_in      text,
  source             text not null default 'walk_in'
                     check (source in ('walk_in','website','phone','whatsapp','instagram','reference','other')),
  status             text not null default 'new'
                     check (status in ('new','contacted','follow_up','trial','converted','lost')),
  follow_up_on       date,
  message            text,
  notes              text,
  converted_member_id uuid references members(id) on delete set null,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);
create index if not exists idx_inquiries_status on inquiries(status);
create index if not exists idx_inquiries_followup on inquiries(follow_up_on);
drop trigger if exists trg_inquiries_updated on inquiries;
create trigger trg_inquiries_updated before update on inquiries
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------
-- VIEWS (security_invoker so RLS of the caller applies)
-- ---------------------------------------------------------------------
create or replace view v_memberships with (security_invoker = true) as
select
  m.*,
  mem.name   as member_name,
  mem.phone  as member_phone,
  coalesce(p.paid, 0)                                         as paid,
  greatest(m.payable - coalesce(p.paid, 0) - m.written_off, 0) as due,
  case
    when m.cancelled              then 'cancelled'
    when m.end_date < current_date then 'expired'
    when m.start_date > current_date then 'upcoming'
    else 'active'
  end as status,
  (m.end_date - current_date) as days_left
from memberships m
join members mem on mem.id = m.member_id
left join (select membership_id, sum(amount) paid from payments group by membership_id) p
       on p.membership_id = m.id;

create or replace view v_payments with (security_invoker = true) as
select pay.*, mem.name as member_name, mem.phone as member_phone, ms.plan_name
from payments pay
join members mem on mem.id = pay.member_id
join memberships ms on ms.id = pay.membership_id;

-- ---------------------------------------------------------------------
-- REPORTS (RPC) — all computed in the database
-- ---------------------------------------------------------------------
create or replace function dashboard_stats() returns jsonb
language plpgsql stable security invoker as $$
declare r jsonb;
begin
  select jsonb_build_object(
    'active_members', (select count(distinct member_id) from v_memberships where status = 'active'),
    'total_members',  (select count(*) from members),
    'expiring_7',     (select count(distinct member_id) from v_memberships where status = 'active' and days_left <= 7),
    'expired_30',     (select count(distinct member_id) from v_memberships v where status = 'expired'
                        and end_date >= current_date - 30
                        and not exists (select 1 from v_memberships x where x.member_id = v.member_id and x.status in ('active','upcoming'))),
    'revenue_today',  (select coalesce(sum(amount),0) from payments where paid_on = current_date),
    'revenue_month',  (select coalesce(sum(amount),0) from payments where date_trunc('month', paid_on) = date_trunc('month', current_date)),
    'revenue_last_month', (select coalesce(sum(amount),0) from payments where date_trunc('month', paid_on) = date_trunc('month', current_date - interval '1 month')),
    'total_due',      (select coalesce(sum(due),0) from v_memberships where not cancelled),
    'new_members_month', (select count(*) from members where date_trunc('month', joined_on) = date_trunc('month', current_date)),
    'open_inquiries', (select count(*) from inquiries where status in ('new','contacted','follow_up','trial')),
    'followups_due',  (select count(*) from inquiries where status in ('new','contacted','follow_up','trial') and follow_up_on <= current_date)
  ) into r;
  return r;
end $$;

create or replace function report_monthly_revenue(months int default 12) returns table(month date, total numeric, payments bigint)
language sql stable security invoker as $$
  select date_trunc('month', paid_on)::date, sum(amount), count(*)
  from payments
  where paid_on >= date_trunc('month', current_date) - make_interval(months => months - 1)
  group by 1 order by 1;
$$;

create or replace function report_plan_summary(from_date date, to_date date)
returns table(plan_name text, sales bigint, billed numeric, collected numeric)
language sql stable security invoker as $$
  select ms.plan_name, count(*), sum(ms.payable),
         coalesce(sum((select sum(amount) from payments p where p.membership_id = ms.id and p.paid_on between from_date and to_date)),0)
  from memberships ms
  where ms.start_date between from_date and to_date and not ms.cancelled
  group by ms.plan_name order by 2 desc;
$$;

create or replace function report_method_summary(from_date date, to_date date)
returns table(method text, total numeric, payments bigint)
language sql stable security invoker as $$
  select method, sum(amount), count(*) from payments
  where paid_on between from_date and to_date group by method order by 2 desc;
$$;

-- Atomic: create a membership and (optionally) its first payment in one transaction.
create or replace function create_membership(
  p_member_id uuid, p_plan_id uuid, p_start date, p_end date,
  p_amount numeric, p_discount numeric, p_tax numeric,
  p_paid numeric default 0, p_method text default 'cash', p_notes text default null
) returns uuid
language plpgsql security invoker as $$
declare
  v_plan text; v_payable numeric; v_id uuid;
begin
  select name into v_plan from plans where id = p_plan_id;
  if v_plan is null then raise exception 'Plan not found'; end if;
  v_payable := greatest(p_amount - p_discount + p_tax, 0);
  if p_paid > v_payable then raise exception 'Payment (%) exceeds payable (%)', p_paid, v_payable; end if;

  insert into memberships (member_id, plan_id, plan_name, start_date, end_date, amount, discount, tax, payable, notes)
  values (p_member_id, p_plan_id, v_plan, p_start, p_end, p_amount, p_discount, p_tax, v_payable, p_notes)
  returning id into v_id;

  if p_paid > 0 then
    insert into payments (membership_id, member_id, amount, method, created_by)
    values (v_id, p_member_id, p_paid, p_method, auth.uid());
  end if;

  update members set status = 'active' where id = p_member_id and status <> 'active';
  return v_id;
end $$;

-- Atomic: record a payment, refusing to over-collect.
create or replace function record_payment(
  p_membership_id uuid, p_amount numeric, p_method text default 'cash',
  p_paid_on date default current_date, p_reference text default null, p_notes text default null
) returns uuid
language plpgsql security invoker as $$
declare v_due numeric; v_member uuid; v_id uuid;
begin
  select due, member_id into v_due, v_member from v_memberships where id = p_membership_id;
  if v_member is null then raise exception 'Membership not found'; end if;
  if p_amount <= 0 then raise exception 'Amount must be positive'; end if;
  if p_amount > v_due then raise exception 'Amount (%) exceeds balance due (%)', p_amount, v_due; end if;
  insert into payments (membership_id, member_id, amount, method, paid_on, reference, notes, created_by)
  values (p_membership_id, v_member, p_amount, p_method, p_paid_on, p_reference, p_notes, auth.uid())
  returning id into v_id;
  return v_id;
end $$;

-- ---------------------------------------------------------------------
-- ROW LEVEL SECURITY — staff only, except website inquiry insert
-- ---------------------------------------------------------------------
alter table profiles    enable row level security;
alter table plans       enable row level security;
alter table members     enable row level security;
alter table memberships enable row level security;
alter table payments    enable row level security;
alter table inquiries   enable row level security;

drop policy if exists profiles_self_read   on profiles;
drop policy if exists profiles_admin_all   on profiles;
create policy profiles_self_read on profiles for select using (id = auth.uid() or is_admin());
create policy profiles_admin_all on profiles for all using (is_admin()) with check (is_admin());

-- Staff: full read/write on operational tables
do $$
declare t text;
begin
  foreach t in array array['plans','members','memberships','inquiries'] loop
    execute format('drop policy if exists %I_staff_all on %I', t, t);
    execute format('create policy %I_staff_all on %I for all using (is_staff()) with check (is_staff())', t, t);
  end loop;
end $$;

-- Public website form: anonymous INSERT only, with sane constraints
drop policy if exists inquiries_public_insert on inquiries;
create policy inquiries_public_insert on inquiries for insert to anon
  with check (source = 'website' and status = 'new' and converted_member_id is null);
grant insert on inquiries to anon;

-- Public website can read active plans (optional: powers a live pricing page)
drop policy if exists plans_public_read on plans;
create policy plans_public_read on plans for select to anon using (is_active);
grant select on plans to anon;

-- Only admins may delete financial records
drop policy if exists payments_staff_all on payments;
drop policy if exists payments_staff_rw  on payments;
drop policy if exists payments_staff_ins on payments;
drop policy if exists payments_admin_mod on payments;
drop policy if exists payments_admin_del on payments;
create policy payments_staff_rw on payments for select using (is_staff());
create policy payments_staff_ins on payments for insert with check (is_staff());
create policy payments_admin_mod on payments for update using (is_admin());
create policy payments_admin_del on payments for delete using (is_admin());

grant select on v_memberships, v_payments to authenticated;
grant execute on function dashboard_stats(), report_monthly_revenue(int),
  report_plan_summary(date,date), report_method_summary(date,date),
  create_membership(uuid,uuid,date,date,numeric,numeric,numeric,numeric,text,text),
  record_payment(uuid,numeric,text,date,text,text) to authenticated;

-- ---------------------------------------------------------------------
-- SEED: plans derived from the legacy packages (prices from real bills)
-- ---------------------------------------------------------------------
insert into plans (name, category, duration_days, price, display_order) values
  ('Monthly Gym',               'gym',               30,  3000, 1),
  ('3 Months Gym',              'gym',               90,  7500, 2),
  ('6 Months Gym',              'gym',              180, 12000, 3),
  ('Annual Gym',                'gym',              365, 18000, 4),
  ('Personal Training - Monthly','personal_training',30, 10000, 5),
  ('Personal Training - 15 Sessions','personal_training',30, 6000, 6),
  ('Personal Training - 3 Months','personal_training',90, 25500, 7),
  ('Personal Training - 6 Months','personal_training',180,44000, 8),
  ('Guest Pass',                'guest',              1,  1000, 9)
on conflict (name) do nothing;
