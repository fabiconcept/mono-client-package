export interface InitiatePaymentResponse {
    status: 'successful';
    message: string;
    data: PaymentData;
}

export interface PaymentData {
    id: string;
    mono_url: string;
    type: 'onetime-debit';
    method: 'account' | 'transfer';
    amount: number;
    description: string;
    reference: string;
    customer: string;
    redirect_url: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    meta: {};
}

export interface VerifyPaymentResponse {
    status: 'successful';
    message: string;
    timestamp: string; // ISO 8601 date string
    data: VerifyPaymentData;
}

interface VerifyPaymentData {
    id: string;
    channel: 'account';
    fee: number;
    type: 'onetime-debit';
    status: 'successful';
    amount: number;
    currency: 'NGN';
    description: string;
    reference: string;
    live_mode: boolean;
    account: Account;
    customer: string;
    refunded: boolean;
    device_fingerprint: string;
    ip_address: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    meta: {
        locked: null;
    };
}

interface Account {
    id: string;
    name: string;
    account_number: string;
    currency: 'NGN';
    balance: number;
    type: 'WALLET ACCOUNT';
    bvn: string;
    live_mode: boolean;
    institution: Institution;
    scope: string[];
}

interface Institution {
    name: string;
    type: 'PERSONAL_BANKING';
    timeout: number;
    available: boolean;
    scope: string[];
    bank_code: string;
}


export interface TransactionListResponse {
    status: 'successful';
    message: string;
    timestamp: string; // ISO 8601 date string
    data: {
        payments: Payment[];
    };
    meta: {
        paging: {
            total: number;
            pages: number;
            previous: null | string;
            next: null | string;
        };
    };
}

interface Payment {
    id: string;
    type: 'onetime-debit';
    status: 'pending' | 'successful' | 'failed' | 'cancelled' | 'abandoned';
    amount: number;
    description: string;
    currency: 'NGN';
    account: TransactionAccount;
    customer: null;
    reference: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    fee?: number;
}

interface TransactionAccount {
    id: string;
    institution: TransactionInstitution;
    name: string;
    account_number: string;
    currency: 'NGN';
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
}

interface TransactionInstitution {
    id: string;
    name: string;
    type: 'PERSONAL_BANKING';
}