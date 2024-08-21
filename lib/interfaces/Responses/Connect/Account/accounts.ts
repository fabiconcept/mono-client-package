import { Customer } from "../../../Request/Connect/Authorization/accountLinking";

interface Institution {
    id: string;
    name: string;
    bank_code: string | null;
    type: string;
}

interface Account {
    id: string;
    name: string;
    account_number: string;
    currency: string;
    balance: number;
    auth_method: string;
    status: string;
    bvn: string;
    type: string;
    institution: Institution;
    customer: Customer;
}

interface AccountsMeta {
    total: number;
    pages: number;
    previous: string | null;
    next: string | null;
}

export interface AccountsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Account[];
    meta: AccountsMeta;
}

interface InstitutionDetails {
    name: string;
    bank_code: string;
    type: string;
}

interface AccountDetails {
    id: string;
    name: string;
    currency: string;
    type: string;
    account_number: string;
    balance: number;
    bvn: string;
    institution: InstitutionDetails;
}

interface AccountDetailsMeta {
    data_status: string;
    auth_method: string;
}

export interface AccountDetailsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        account: AccountDetails;
        meta: AccountDetailsMeta;
    };
}
