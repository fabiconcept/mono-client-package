interface HistoryItem {
    period: string;
    amount: number;
    transactions_count: number;
}

export interface FlowResponse {
    total: number;
    transactions_count: number;
    history: HistoryItem[];
}