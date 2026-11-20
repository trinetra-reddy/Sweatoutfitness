export type MemberStatus = 'active' | 'inactive';
export type PaymentMethod = 'cash' | 'upi' | 'card' | 'bank_transfer' | 'cheque' | 'other';
export type InquiryStatus = 'new' | 'contacted' | 'follow_up' | 'trial' | 'converted' | 'lost';
export type InquirySource = 'walk_in' | 'website' | 'phone' | 'whatsapp' | 'instagram' | 'reference' | 'other';
export type MembershipStatus = 'active' | 'upcoming' | 'expired' | 'cancelled';

export interface Plan {
  id: string;
  name: string;
  category: 'gym' | 'personal_training' | 'special' | 'guest';
  duration_days: number;
  price: number;
  description: string | null;
  is_active: boolean;
  display_order: number;
}

export interface Member {
  id: string;
  legacy_client_id: number | null;
  legacy_membership_no: string | null;
  member_code: string | null;
  name: string;
  phone: string | null;
  alt_phone: string | null;
  email: string | null;
  gender: 'Male' | 'Female' | 'Other' | null;
  date_of_birth: string | null;
  profession: string | null;
  address: string | null;
  joined_on: string | null;
  source: string | null;
  representative: string | null;
  trainer: string | null;
  status: MemberStatus;
  notes: string | null;
  created_at: string;
}

/** Row of the v_memberships view (status/paid/due are derived by the database). */
export interface Membership {
  id: string;
  member_id: string;
  member_name: string;
  member_phone: string | null;
  plan_id: string | null;
  plan_name: string;
  start_date: string;
  end_date: string;
  amount: number;
  discount: number;
  tax: number;
  payable: number;
  written_off: number;
  paid: number;
  due: number;
  status: MembershipStatus;
  days_left: number;
  cancelled: boolean;
  notes: string | null;
}

/** Row of the v_payments view. */
export interface Payment {
  id: string;
  membership_id: string;
  member_id: string;
  member_name: string;
  member_phone: string | null;
  plan_name: string;
  amount: number;
  paid_on: string;
  method: PaymentMethod;
  receipt_no: string | null;
  reference: string | null;
  notes: string | null;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  interested_in: string | null;
  source: InquirySource;
  status: InquiryStatus;
  follow_up_on: string | null;
  message: string | null;
  notes: string | null;
  converted_member_id: string | null;
  created_at: string;
}

export interface DashboardStats {
  active_members: number;
  total_members: number;
  expiring_7: number;
  expired_30: number;
  revenue_today: number;
  revenue_month: number;
  revenue_last_month: number;
  total_due: number;
  new_members_month: number;
  open_inquiries: number;
  followups_due: number;
}
