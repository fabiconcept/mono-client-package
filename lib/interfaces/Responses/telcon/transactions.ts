interface Paging {
    total: number;
    page: number;
    previous: null | string;
    next: null | string;
}

interface Transaction {
    _id: string;
    type: 'debit' | 'credit';
    amount: number;
    narration: string;
    balance: number;
    date: string; // ISO 8601 date string
    currency: string; // e.g. "NGN"
}

export interface TelcoTransactionsResponse {
    paging: Paging;
    data: Transaction[];
}