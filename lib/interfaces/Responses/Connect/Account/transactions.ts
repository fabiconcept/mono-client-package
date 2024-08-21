interface Transaction {
    id: string;
    narration: string;
    amount: number;
    type: string;
    balance: number;
    date: string;
    category: string;
}

export interface TransactionsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Transaction[];
    meta: {
        total: number;
        page: number;
        previous: string | null;
        next: string | null;
    };
}
