interface AccountBalance {
    id: string;
    name: string;
    account_number: string;
    balance: number;
    currency: string;
}

export interface AccountBalanceResponse {
    status: string;
    message: string;
    timestamp: string;
    data: AccountBalance;
}
