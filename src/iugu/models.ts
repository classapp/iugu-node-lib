import { Method } from 'axios'

export interface IuguClient {
  id?: string;
  email: string;
  name: string;
  notes?: string;
  phone?: number;
  phone_prefix?: number;
  cpf_cnpj?: string;
  cc_emails?: string;
  zip_code?: string;
  number?: string;
  street?: string;
  city?: string;
  state?: string;
  district?: string;
  complement?: string;
  custom_variables?: [];
  created_at?: Date;
  updated_at?: Date;
}

export interface IuguPaymentMethod {
  teste: string;
}

export interface IuguPaymentToken {
  id?: string;
  account_id: string;
  data: IuguCreditCard;
  extra_info?: IuguCreditCardExtraInfo;
  method: string;
  test: boolean;
}

export interface IuguCreditCard {
  id?: string;
  number: string;
  verification_value: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
  brand?: string;
  holderName?: string;
  displayNumber?: string;
  bin?: string;
}

export interface IuguCreditCardExtraInfo {
  brand?: string;
  holderName?: string;
  displayNumber?: string;
  bin?: string;
  month?: string;
  year?: string;
}

export interface IuguMethod {
  method: Method;
  path: string;
  urlParams: Array<string> | [];
  checkErrors?: (data: any) => void;
}

export interface IuguInvoice {
  id?: string;
  due_date?: string;
  currency?: string;
  discount_cents?: string;
  email?: string;
  items_total_cents?: number;
  notification_url?: string;
  return_url?: string;
  status?: string;
  ensure_workday_due_date?: boolean;
  expired_url?: string;
  tax_cents?: string;
  updated_at?: Date;
  total_cents?: number;
  credits?: number;
  payable_with?: any;
  per_day_interest_value?: number;
  late_payment_fine?: number;
  per_day_interest?: boolean;
  ignore_canceled_email?: boolean;
  fines?: boolean;
  subscription_id?: string;
  ignore_due_email?: boolean;
  paid_at?: null;
  commission_cents?: null;
  secure_id?: string;
  secure_url?: string;
  customer_id?: null;
  user_id?: null;
  total?: string;
  taxes_paid?: string;
  commission?: string;
  interest?: null;
  discount?: null;
  created_at?: string;
  refundable?: null;
  installments?: null;
  bank_slip?: IuguBankSlip;
  items?: IuguItem[];
  variables?: IuguVariable[];
  custom_variables?: any[];
  logs?: any[];
  payer?: IuguPayer;
  commissions?: any;
  early_payment_discounts?: IuguPaymentDiscount[];
  early_payment_discount?: boolean;
}

export interface IuguPayer {
  cpf_cnpj?: string;
  name?: string;
  phone_prefix?: string;
  phone?: string;
  email?: string;
  address?: IuguAddress;
}

export interface IuguAddress {
  zip_code?: string;
  street?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
  country?: string;
  complement?: string;
}

export interface IuguBankSlip {
  digitable_line?: string;
  barcode_data?: string;
  barcode?: string;
}

export interface IuguItem {
  id?: string;
  description?: string;
  price_cents?: number;
  quantity?: number;
  created_at?: Date;
  updated_at?: Date;
  price?: string;
}

export interface IuguPaymentDiscount {
  days?: number;
  percent?: number;
  value_cents?: number;
}

export interface IuguVariable {
  id?: string;
  variable?: string;
  value?: string;
}