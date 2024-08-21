export interface IndividualCustomerResponse {
    status: string;
    message: string;
    data: {
        id: string;
        name: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        address: string;
        identification_no: string;
        identification_type: string;
        bvn: string;
    };
}

export interface BusinessCustomerResponse {
    status: string;
    message: string;
    data: {
        id: string;
        type: string;
        business_name: string;
        email: string;
        phone: string;
        address: string;
        identification_no: string;
        identification_type: string;
        bvn: string;
    };
}

export interface CustomerDataResponse {
    status: string;
    message: string;
    data: {
        id: string;
        name: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        address: string;
        identification_no: string;
        identification_type: string;
        bvn: string;
    };
}

interface Transaction {
    id: string;
    type: 'credit' | 'debit';
    amount: number;
    narration: string;
    date: string;
    balance: number;
    category: string | null;
}

interface TransactionMeta {
    total: number;
    pages: number;
    previous: string | null;
    next: string | null;
}

interface AccountTransactionData {
    message: string;
    status: string;
    data: {
        transactions: Transaction[];
        meta: TransactionMeta;
    };
}

interface AccountTransaction {
    errored: boolean;
    data: AccountTransactionData;
    error: string | null;
}

interface AccountData {
    account: string;
    account_name: string;
    bank: string;
    account_transaction_data: AccountTransaction;
}

export interface CustomerTransactionsResponse {
    status: string;
    message: string;
    data: AccountData[];
}

export interface UpdateCustomerDetailsResponse {
    status: "successful",
    message: "Customer updated successfully",
    data: null
}

export interface DeleteCustomerDetailsResponse {
    status: "successful",
    message: "Deleted customer successfully",
    data: null
}

  
  