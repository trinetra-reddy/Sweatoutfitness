// Pure transformation of the old gym system's exports into rows for the new schema.
// No network / DB access here, so it can be dry-run and tested safely.
// Ported from 1RT lib/legacy-gym-import.ts + legacy-gym-packages.ts, extended to
// produce members / memberships / payments and a warnings report.

const clean = (v) => (typeof v === 'string' || typeof v === 'number' ? String(v).trim() : '');

// ---- dates ---------------------------------------------------------------
function validYmd(y, m, d) {
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d &&
    y >= 1990 && y <= 2300 ? `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}` : null;
}
const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
export function parseDate(value) {
  const s = clean(value);
  let m;
  if ((m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(s))) return validYmd(+m[3], +m[2], +m[1]);   // dd-mm-yyyy
  if ((m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s))) return validYmd(+m[1], +m[2], +m[3]);   // yyyy-mm-dd
  if ((m = /^(\d{1,2}) ([A-Za-z]{3}) (\d{4})$/.exec(s))) return validYmd(+m[3], MONTHS[m[2].toLowerCase()], +m[1]); // 23 Jul 2019
  return null;
}
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
const addDays = (ymd, n) => new Date(Date.parse(ymd) + n * 86400000).toISOString().slice(0, 10);
const num = (v) => { const n = Number(clean(v) || 0); return Number.isFinite(n) ? n : NaN; };
const r2 = (n) => Math.round(n * 100) / 100;

// ---- CSV -----------------------------------------------------------------
export function parseCsv(content) {
  const rows = []; let row = [], field = '', quoted = false;
  const input = content.replace(/^﻿/, '');
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; }
      else if (quoted) quoted = false;
      else if (!field) quoted = true;
      else field += c;
    } else if (c === ',' && !quoted) { row.push(field); field = ''; }
    else if ((c === '\n' || c === '\r') && !quoted) {
      if (c === '\r' && input[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((v) => v.trim())) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field); if (row.some((v) => v.trim())) rows.push(row);
  const header = rows.shift().map((h) => h.trim());
  return rows.map((vals) => Object.fromEntries(header.map((h, i) => [h, vals[i] ?? ''])));
}

// ---- plan normalisation ---------------------------------------------------
// Collapses ~35 legacy package spellings into the 9 plans seeded in schema.sql.
export function canonicalPlan(legacyName, days) {
  const n = clean(legacyName).toLowerCase();
  if (/guest/.test(n)) return 'Guest Pass';
  const pt = /person|persan|trin|trainer|pt\b/.test(n);
  if (pt) {
    if (/15|session/.test(n)) return 'Personal Training - 15 Sessions';
    if (/6 ?month/.test(n) || days >= 150) return 'Personal Training - 6 Months';
    if (/(3|three) ?m|5 ?month/.test(n) || days >= 70) return 'Personal Training - 3 Months';
    return 'Personal Training - Monthly';
  }
  if (/annual|year/.test(n) || days >= 330) return 'Annual Gym';
  if (/6 ?month/.test(n) || days >= 150) return '6 Months Gym';
  if (/3 ?month|three/.test(n) || days >= 70) return '3 Months Gym';
  return 'Monthly Gym';
}

// ---- bill -> membership + payment ----------------------------------------
function buildBill({ memberKey, billId, packageName, start, end, amount, discount, tax, payable, paid, paidOn, pending, historical, note, warn }) {
  const w = [];
  const startD = parseDate(start); let endD = parseDate(end);
  if (!startD) { warn(`bill ${billId}: invalid start date "${start}" - skipped`); return null; }
  if (!endD) { warn(`bill ${billId}: invalid end date "${end}" - skipped`); return null; }
  if (endD < startD) { warn(`bill ${billId}: end before start - skipped`); return null; }
  if ([amount, discount, tax, payable, paid, pending].some((x) => !Number.isFinite(x))) { warn(`bill ${billId}: non-numeric amount - skipped`); return null; }
  if (amount < 0 || discount < 0 || payable < 0 || paid < 0) { warn(`bill ${billId}: negative amount/payment (reversal entry) - skipped`); return null; }
  if (paid > payable + 0.01) { warn(`bill ${billId}: paid ${paid} exceeds payable ${payable} - skipped`); return null; }
  if (endD.startsWith('2222')) { // known data-entry error
    endD = addDays(startD, 30); w.push('end date was 2222 (data error) - set to start+30d');
  }
  let d = discount, t = tax;
  if (t < 0) { d = r2(d - t); t = 0; w.push(`negative tax ${tax} folded into discount`); }
  if (Math.abs(amount - d + t - payable) > 0.01) { d = r2(Math.max(amount + t - payable, 0)); w.push('bill did not reconcile; discount recalculated'); }
  const dur = daysBetween(startD, endD);
  const plan = canonicalPlan(packageName, dur);
  let due = r2(Math.max(payable - paid, 0));
  let writtenOff = 0;
  if (due > 0 && (due < 1 || historical)) { writtenOff = due; if (due >= 1) w.push(`historical balance ${due} written off (kept in notes)`); }
  const notes = [`Legacy package: ${packageName}`, ...(note ? [note] : []), ...w].join(' | ');
  w.forEach((x) => warn(`bill ${billId}: ${x}`));
  const membership = {
    member_key: memberKey, legacy_bill_id: billId, plan_name: plan, start_date: startD, end_date: endD,
    amount, discount: d, tax: t, payable, written_off: writtenOff, notes,
  };
  let payment = null;
  if (paid > 0) {
    const paidD = parseDate(paidOn) || startD;
    payment = { member_key: memberKey, legacy_bill_id: billId, amount: paid, paid_on: paidD,
      method: 'cash', receipt_no: `LEG-${billId}`, notes: 'Imported from legacy system' };
  }
  return { membership, payment };
}

// ---- main ------------------------------------------------------------------
export function transform({ csvText, jsonText, jsonStatus = 'inactive' }) {
  const warnings = [];
  const members = new Map();   // key -> member
  const memberships = [], payments = [];
  const warn = (m) => warnings.push(m);

  // 1) Live clients (CSV): current members with their latest bill
  for (const r of parseCsv(csvText)) {
    const key = clean(r.clientId);
    if (!key) { warn('CSV row without clientId skipped'); continue; }
    const start = parseDate(r.start);
    members.set(key, {
      key, legacy_client_id: Number(key), legacy_membership_no: clean(r.membershipId) || null,
      name: clean(r.name), phone: clean(r.phone) || null, joined_on: start, status: 'active',
      notes: null,
    });
    const bill = buildBill({
      memberKey: key, billId: clean(r.billId), packageName: clean(r.package), start: r.start, end: r.end,
      amount: num(r.amount), discount: num(r.discount), tax: num(r.tax), payable: num(r.payable),
      paid: num(r.paid), paidOn: r.paidOn, pending: num(r.pending), historical: false,
      note: clean(r.notes) ? `Legacy note: ${clean(r.notes)}` : '', warn,
    });
    if (bill) { memberships.push(bill.membership); if (bill.payment) payments.push(bill.payment); }
  }

  // 2) Historical clients (JSON)
  const data = JSON.parse(jsonText);
  let skippedDupClient = 0;
  for (const c of data) {
    const key = clean(c.client_id);
    if (members.has(key)) { skippedDupClient++; warn(`client ${key} present in both files; CSV copy kept`); continue; }
    const p = c.details?.profile ?? {};
    const gender = ['Male', 'Female', 'Other'].includes(clean(p.Gender)) ? clean(p.Gender) : null;
    const remarks = [clean(p.Remarks), clean(p['Client reference']) && `Ref: ${clean(p['Client reference'])}`].filter(Boolean).join(' | ');
    members.set(key, {
      key, legacy_client_id: Number(key), legacy_membership_no: clean(p['Membership id']) || null,
      name: clean(p['Client name']) || `Client ${key}`, phone: clean(p.Contact) || null,
      alt_phone: clean(p['Alternative contact']) || null, email: clean(p.eMail) || null, gender,
      date_of_birth: parseDate(p['Date Of Birth']), profession: clean(p.Profession) || null,
      address: clean(p.Address) || null, joined_on: parseDate(p['Date of Joining']),
      source: clean(p['Client source']) || null, representative: clean(p['Client representative']) || null,
      trainer: clean(p.Trainer) || null, status: jsonStatus, notes: remarks || null,
    });
    for (const b of c.details?.tables?.['Gym membership billing history'] ?? []) {
      const bill = buildBill({
        memberKey: key, billId: clean(b['Bill id.']), packageName: clean(b.Subscription),
        start: b['Start date'], end: b['End Date'], amount: num(b.Amount), discount: num(b.Discount),
        tax: num(b.Tax), payable: num(b.Payable), paid: num(b['Total paid']),
        paidOn: b['Date Of payment'], pending: num(b.Pending), historical: true, note: '', warn,
      });
      if (bill) { memberships.push(bill.membership); if (bill.payment) payments.push(bill.payment); }
    }
    for (const b of c.details?.tables?.['Personal training billing history'] ?? []) {
      const payable = num(b['Amount Payable']), discount = num(b.Discount);
      const bill = buildBill({
        memberKey: key, billId: `PT-${clean(b['Bill id.'])}`, packageName: clean(b.Subscription) || 'personal training',
        start: b['Start date'], end: b['End Date'], amount: r2(payable + discount), discount, tax: num(b.Tax),
        payable, paid: num(b['Down payment']), paidOn: b['Date Of payment'], pending: num(b.Pending),
        historical: true, note: 'From PT billing history', warn,
      });
      if (bill) { memberships.push(bill.membership); if (bill.payment) payments.push(bill.payment); }
    }
  }

  // de-dup bill ids defensively
  const seen = new Set();
  const uniqueMemberships = memberships.filter((m) => !seen.has(m.legacy_bill_id) && seen.add(m.legacy_bill_id));
  const keep = new Set(uniqueMemberships.map((m) => m.legacy_bill_id));
  const uniquePayments = payments.filter((p) => keep.has(p.legacy_bill_id));

  const paidBy = new Map();
  uniquePayments.forEach((p) => paidBy.set(p.legacy_bill_id, p.amount));
  const summary = {
    members: members.size, membersActive: [...members.values()].filter((m) => m.status === 'active').length,
    memberships: uniqueMemberships.length, payments: uniquePayments.length,
    revenueImported: r2(uniquePayments.reduce((s, p) => s + p.amount, 0)),
    outstandingDue: r2(uniqueMemberships.reduce((s, m) =>
      s + Math.max(m.payable - (paidBy.get(m.legacy_bill_id) || 0) - m.written_off, 0), 0)),
    skippedBills: warnings.filter((w) => w.includes('skipped')).length,
    warnings: warnings.length,
  };
  return { members: [...members.values()], memberships: uniqueMemberships, payments: uniquePayments, warnings, summary };
}
