interface StatementData {
    id: string;
    status: string;
    path: string;
}

export interface StatementResponsePDF {
    status: string;
    message: string;
    data: StatementData;
}

interface Transaction {
    id: string;
    type: string;
    amount: number;
    narration: string;
    balance: number | null;
    date: string;
    category: string | null;
}

export interface StatementResponseJSON {
    status: string;
    message: string;
    timestamp: string;
    data: Transaction[];
    meta: {
        count: number;
    };
}

