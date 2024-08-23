import { Status } from "../../../Enum";

interface withWebHook {
    status: Status;
    message: string;
    timestamp: string;
    data: null; 
}

export interface CategorisationResponse extends withWebHook {};
export interface MetadataResponse extends withWebHook {};
export interface StatementInsightResponse extends withWebHook {};

interface Transaction {
    id: string;
    type: string;
    narration: string;
    category: string;
}

interface DataItem {
    transactions: Transaction[];
    app: string;
    created_at: string;
    updated_at: string;
}

export interface CategorisationRecordsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: DataItem[];
    meta: {
        total: number;
        pages: number;
        previous: string | null;
        next: string | null;
    };
}
  
interface TransactionMetadata {
    category: string;
    channel: string;
    payee: string;
    payment_method: string;
    ref_num: string;
    payment_processor: string;
    location: string;
    reason: string;
}

export interface MetadataRecordsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: DataItem[];
    meta: {
        total: number;
        pages: number;
        previous: string | null;
        next: string | null;
    };
}
  
interface AveragePerMonth {
    last_12_months: number;
    since_first_transaction: number;
}

interface MonthlySum {
    [key: string]: number;
}

interface InflowOutflow {
    all_transaction: {
        average_per_month: AveragePerMonth;
        monthly_sum: MonthlySum[];
    };
    repeat_transactions: {
        average_per_month: AveragePerMonth;
        monthly_sum: MonthlySum[];
    };
}

interface Insights {
    account: string;
    start_date: string;
    end_date: string;
    transaction_length: number;
    transaction_count: number;
    balance_after_expense: number;
    account_summary: any; // Replace with specific type if known
    activity_insights: any; // Replace with specific type if known
}

interface TransactionDetails {
    highest_debits: any[]; // Replace with specific type if known
    highest_credits: any[]; // Replace with specific type if known
}

interface DataItem {
    insights: Insights;
    transaction_details: TransactionDetails;
    inflow: InflowOutflow;
    outflow: InflowOutflow;
    recurring_transactions: any[]; // Replace with specific type if known
    app: string;
    created_at: string;
    updated_at: string;
}

export interface InsightRecordResponse {
    status: string;
    message: string;
    timestamp: string;
    data: DataItem[];
    meta: {
        total: number;
        pages: number;
        previous: string | null;
        next: string | null;
    };
}