interface HistoryItem {
    period: string;
    amount: number;
    transactions_count: number;
}

interface FlowResponse {
    total: number;
    transactions_count: number;
    history: HistoryItem[];
}