export interface IncomeResponse {
    status: string,
    message: string,
    timestamp: string,
    data: null
}


interface IncomeStream {
    income_type: string;
    frequency: string;
    monthly_average: number;
    average_income_amount: number;
    currency: string;
    stability: number;
    last_income_amount: number;
    last_income_description: string;
    last_income_date: string;
    periods_with_income: number;
    number_of_incomes: number;
    number_of_months: number;
}

interface IncomeSummary {
    total_income: number;
    employer: string;
}

interface Income {
    account: string;
    income_summary: IncomeSummary;
    income_streams: IncomeStream[];
    income_source_type: string;
    first_transaction_date: string;
    last_transaction_date: string;
    period: string;
    number_of_income_streams: number;
    monthly_average: number;
    monthly_average_regular: number;
    monthly_average_irregular: number;
    total_regular_income_amount: number;
    total_irregular_income_amount: number;
}

interface IncomeRecord {
    income: Income;
    app: string;
    created_at: string;
    updated_at: string;
}

interface IncomeRecordsMeta {
    total: number;
    pages: number;
    previous: string | null;
    next: string | null;
}

export interface IncomeRecordsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: IncomeRecord[];
    meta: IncomeRecordsMeta;
}