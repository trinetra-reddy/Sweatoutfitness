#!/usr/bin/env node
// Import legacy gym data into Supabase.
//
//   Dry run (no DB, writes scripts/out/import-report.json):
//     node scripts/import-legacy.mjs --dry-run
//   Real import (idempotent - safe to re-run):
//     SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/import-legacy.mjs
//
// Files expected in ./data/  (gitignored - contains personal data):
//     data/live-clients.csv        current members + latest bill
//     data/inactive_clients.json   historical clients + billing history
//
// Flags: --csv=path --json=path --json-status=inactive|active
import fs from 'node:fs';
import path from 'node:path';
import { transform } from './legacy-transform.mjs';

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true];
}));
const csvPath = args.csv || 'data/live-clients.csv';
const jsonPath = args.json || 'data/inactive_clients.json';
const jsonStatus = args['json-status'] || 'inactive';

const result = transform({
  csvText: fs.readFileSync(csvPath, 'utf8'),
  jsonText: fs.readFileSync(jsonPath, 'utf8'),
  jsonStatus,
});
fs.mkdirSync('scripts/out', { recursive: true });
fs.writeFileSync('scripts/out/import-report.json', JSON.stringify({ summary: result.summary, warnings: result.warnings }, null, 2));
console.log('Summary:', result.summary);
console.log(`Warnings: ${result.warnings.length} (see scripts/out/import-report.json)`);

if (args['dry-run']) { console.log('Dry run - nothing written.'); process.exit(0); }

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (Project Settings > API). Never commit the service role key.');
  process.exit(1);
}
const { createClient } = await import('@supabase/supabase-js');
const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const chunk = (arr, n = 500) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
async function upsert(table, rows, onConflict) {
  for (const part of chunk(rows)) {
    const { error } = await db.from(table).upsert(part, { onConflict });
    if (error) { console.error(`${table}:`, error.message); process.exit(1); }
  }
  console.log(`  ${table}: ${rows.length} rows`);
}
async function fetchMap(table, keyCol) {
  const map = new Map(); let from = 0;
  for (;;) {
    const { data, error } = await db.from(table).select(`id,${keyCol}`).not(keyCol, 'is', null).range(from, from + 999);
    if (error) { console.error(error.message); process.exit(1); }
    data.forEach((r) => map.set(String(r[keyCol]), r.id));
    if (data.length < 1000) break; from += 1000;
  }
  return map;
}

console.log('Importing...');
const MEMBER_COLS = ['legacy_client_id', 'legacy_membership_no', 'name', 'phone', 'alt_phone', 'email', 'gender',
  'date_of_birth', 'profession', 'address', 'joined_on', 'source', 'representative', 'trainer', 'status', 'notes'];
await upsert('members', result.members.map((m) => Object.fromEntries(MEMBER_COLS.map((c) => [c, m[c] ?? null]))), 'legacy_client_id');
const memberIds = await fetchMap('members', 'legacy_client_id');

const { data: plans, error: pe } = await db.from('plans').select('id,name');
if (pe) { console.error(pe.message); process.exit(1); }
const planIds = new Map(plans.map((p) => [p.name, p.id]));

await upsert('memberships', result.memberships.map(({ member_key, plan_name, ...m }) => ({
  ...m, plan_name, member_id: memberIds.get(member_key), plan_id: planIds.get(plan_name) ?? null,
})), 'legacy_bill_id');
const membershipIds = await fetchMap('memberships', 'legacy_bill_id');

await upsert('payments', result.payments.map(({ member_key, legacy_bill_id, ...p }) => ({
  ...p, member_id: memberIds.get(member_key), membership_id: membershipIds.get(legacy_bill_id),
})), 'receipt_no');
console.log('Done.');
