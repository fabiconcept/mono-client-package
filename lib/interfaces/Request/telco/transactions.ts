export interface TransactionsRequest {
    start?: string; // format: DD-MM-YYYY
    end?: string; // format: DD-MM-YYYY
    narration?: string;
    type?: 'debit' | 'credit';
    paginate?: boolean;
    limit?: number; // int32
}