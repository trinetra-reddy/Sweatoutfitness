-- Run once in Supabase SQL Editor (safe to re-run).
-- Memberships: staff can read / add / edit; only admins can delete.
-- (Deleting a membership also deletes its payments.)

drop policy if exists memberships_staff_all    on memberships;
drop policy if exists memberships_staff_select on memberships;
drop policy if exists memberships_staff_insert on memberships;
drop policy if exists memberships_staff_update on memberships;
drop policy if exists memberships_admin_delete on memberships;
create policy memberships_staff_select on memberships for select using (is_staff());
create policy memberships_staff_insert on memberships for insert with check (is_staff());
create policy memberships_staff_update on memberships for update using (is_staff()) with check (is_staff());
create policy memberships_admin_delete on memberships for delete using (is_admin());
