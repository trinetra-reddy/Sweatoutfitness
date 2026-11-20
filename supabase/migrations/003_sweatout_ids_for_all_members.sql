-- Run once in Supabase SQL Editor, AFTER 002, and after the legacy import.
--
-- member_code            = the new Sweatout ID (SO-001, SO-002, ...) - every member gets one
-- legacy_membership_no   = the old system's membership number, kept as a backup / lookup
--
-- This RENUMBERS everyone chronologically (earliest joiner = SO-001), replacing the
-- test codes from migration 002. Do it now, before you share IDs with anyone.
-- Afterwards new members continue from the next number automatically.

-- Next ID: SO-001 ... SO-999, then SO-1000, SO-1001 ...
-- (lpad() TRUNCATES text longer than the width, so it can't be used past 999.)
create or replace function next_member_code() returns text
language plpgsql security definer set search_path = public as $$
declare n bigint := nextval('member_code_seq');
begin
  return 'SO-' || case when n < 1000 then lpad(n::text, 3, '0') else n::text end;
end $$;

-- New members always get the next ID (imports too), but re-running the import
-- on an existing legacy client must not burn a number.
create or replace function assign_member_code() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.member_code is null
     and not (new.legacy_client_id is not null
              and exists (select 1 from members where legacy_client_id = new.legacy_client_id)) then
    new.member_code := next_member_code();
  end if;
  return new;
end $$;

-- Renumber all existing members: oldest joiner first.
update members set member_code = null;
select setval('member_code_seq', 1, false);

do $$
declare r record;
begin
  for r in select id from members
           order by joined_on asc nulls last, legacy_client_id asc nulls last, created_at asc loop
    update members set member_code = next_member_code() where id = r.id;
  end loop;
end $$;

-- Sanity check: should return 0 rows without a code, and the highest number issued.
select count(*) filter (where member_code is null) as without_code,
       count(*) as total,
       max(member_code) as last_code
from members;
