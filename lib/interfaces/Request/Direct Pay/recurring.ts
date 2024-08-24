export interface VariableMandateBodyParams {
    amount: string;
    type: "recurring-debit";
    method: "mandate";
    mandate_type: "emandate" | "signed" | "gsm";
    debit_type: "variable";
    description: string;
    reference: string;
    customer?: object;
    redirect_url?: string;
    start_date: string;
    end_date: string;
    meta?: object;
}

export interface FixedMandateBodyParams {
    amount: number;
    type: "recurring-debit";
    method: "mandate";
    mandate_type: "emandate" | "signed" | "gsm";
    debit_type: "fixed";
    description: string;
    reference: string;
    customer?: object;
    redirect_url?: string;
    start_date: string;
    end_date: string;
    frequency: "daily" | "weekly" | "monthly" | "yearly" | "days" | "weeks" | "months";
    interval?: string;
    retrial_frequency: string;
    initial_debit_date: string;
    initial_debit_amount?: number;
    grace_period: number;
    minimum_due: number;
    meta?: object;
}

export interface FixedMandateRequest {
    customer: string;
    mandate_type: "signed" | "emandate" | "gsm";
    debit_type: string;
    amount: string;
    reference: string;
    account_number?: string;
    bank_code?: string;
    description: string;
    start_date: string;
    end_date: string;
    frequency: "daily" | "weekly" | "monthly" | "yearly" | "days" | "weeks" | "months";
    interval?: string;
    retrial_frequency: string;
    initial_debit_date: string;
    initial_debit_amount?: number;
    grace_period: number;
    minimum_due: number;
    signature?: string;
    account?: string;
}

export interface VariableMandateRequest {
    customer: string;
    mandate_type: "signed" | "emandate" | "gsm";
    debit_type: string;
    amount: string;
    reference: string;
    account_number?: string;
    bank_code?: string;
    description: string;
    start_date: string;
    end_date: string;
    signature?: string;
    account?: string;
}

// Request to Debit Account
export interface DebitAccountRequest {
    amount: string;
    reference: string;
    narration: string;
    beneficiary?: Beneficiary;
}

interface Beneficiary {
    nuban: string;
    nip_code: string;
}
