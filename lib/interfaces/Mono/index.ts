interface Identity {
    type: "bvn";
    number: number;
}

export interface CreateCustomerRequest {
    identity: Identity;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: number;
}

// Interface for the request body parameters when creating a fixed mandate

export interface CreateFixedMandateRequest {
    customer: string;
    mandate_type: "emandate";
    debit_type: "fixed";
    amount: string;
    reference: string;
    account_number: string;
    bank_code: string;
    description: string;
    start_date: string;
    end_date: string;
    frequency: "daily" | "weekly" | "monthly" | "yearly";
    interval?: string;
    retrial_frequency: number;
    initial_debit_date: string;
    initial_debit_amount?: number;
    grace_period: number;
    minimum_due: number;
    account?: string; // Optional if using account_id
}





interface AccountDetails {
    bank_code: string;
    account_name: string;
    account_number: string;
    bank_name: string;
}

interface BalanceCheckData {
    id: string;
    has_sufficient_balance: boolean;
    account_balance: number;
    account_details: AccountDetails;
}

export interface BalanceCheckResponse {
    status: string;
    message: string;
    data: BalanceCheckData;
}