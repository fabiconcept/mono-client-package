interface Meta {
    data_status: 'AVAILABLE';
    auth_method: 'mobile_banking';
}

interface Institution {
    name: string;
    type: 'PERSONAL_BANKING';
}

interface Account {
    _id: string;
    institution: Institution;
    name: string;
    accountNumber: string;
    type: 'telecom_account';
    balance: number;
    currency: 'NGN';
    bvn: null | string;
}

export interface DetailsResponse {
    meta: Meta;
    account: Account;
}