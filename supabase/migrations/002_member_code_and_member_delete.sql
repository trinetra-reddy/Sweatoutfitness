-- Run once in Supabase SQL Editor (safe to re-run).
-- 1) Auto-generated member IDs for NEW members: SO-001, SO-002, ... (grows to SO-1000+ on its own)
-- 2) Only admins can delete members.

create sequence if not exists member_code_seq start 1;
alter table members add column if not exists member_code text unique;

create or replace function assign_member_code() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- Imported legacy members keep their old numbers; only new members get a code.
  if new.member_code is null and new.legacy_client_id is null then
    -- NOTE: 003 replaces this function (lpad truncates above 999). Only matters if you have 1000+ members.
    new.member_code := 'SO-' || lpad(nextval('member_code_seq')::text, 3, '0');
  end if;
  return new;
end $$;

drop trigger if exists trg_members_code on members;
create trigger trg_members_code before insert on members
  for each row execute function assign_member_code();

grant usage, select on sequence member_code_seq, receipt_seq to authenticated;

-- Backfill: members created in the app before this change that have no number at all
do $$
declare r record;
begin
  for r in select id from members
           where member_code is null and legacy_client_id is null and legacy_membership_no is null
           order by created_at loop
    update members set member_code = 'SO-' || lpad(nextval('member_code_seq')::text, 3, '0') where id = r.id;
  end loop;
end $$;

-- Delete: admin only (staff can still read / add / edit)
drop policy if exists members_staff_all    on members;
drop policy if exists members_staff_select on members;
drop policy if exists members_staff_insert on members;
drop policy if exists members_staff_update on members;
drop policy if exists members_admin_delete on members;
create policy members_staff_select on members for select using (is_staff());
create policy members_staff_insert on members for insert with check (is_staff());
create policy members_staff_update on members for update using (is_staff()) with check (is_staff());
create policy members_admin_delete on members for delete using (is_admin());
