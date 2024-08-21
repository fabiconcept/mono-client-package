export interface ExchangeTokenResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        id: string;
    };
}

interface CustomerData {
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
}

export interface CreateCustomerResponse {
    status: string;
    message: string;
    data: CustomerData;
}

export interface AccountDetails {
    status: string,
    message: string,
    timestamp: string,
    data: {
        account: {
            id: string,
            name: string,
            currency: string,
            type: string,
            account_number: string,
            balance: string,
            bvn: string,
            institution: {
                name: string,
                bank_code: string,
                type: string
            }
        },
        meta: {
            data_status: string,
            auth_method: string
        }
    }
}

interface CustomerData {
    full_name: string;
    bvn: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    address_line1: string;
    state_of_origin: string;
    lga_of_origin: string;
    marital_status: string;
    created_at: string;
    updated_at: string;
}

export interface AccountIdentityResponse {
    status: string;
    message: string;
    timestamp: string;
    data: CustomerData;
}

export interface CreateFixedMandateResponse {
    status: string;
    message: string;
    data: {
        status: string;
        mandate_type: string;
        debit_type: string;
        amount: number;
        reference: string;
        account_name: string;
        account_number: string;
        bank: string;
        customer: string;
        description: string;
        live_mode: boolean;
        start_date: string;
        end_date: string;
        date: string;
        otp_destinations?: {
            session: string;
            methods: Array<{
                type: string;
                value: string;
            }>;
        };
    };
}

interface Bank {
    name: string;
    bank_code: string;
    nip_code: string;
    direct_debit: boolean;
}

interface BanksData {
    banks: Bank[];
}

export interface BanksResponse {
    status: string;
    message: string;
    data: BanksData;
}
  
export interface OtpResponse {
    status: string; 
    message: string;
    data: {
        phone_number: string;
        action: string;      
        session: string;     
    };
}

export interface MandateResponse {
    status: string;
    message: string;
    data: {
        id: string;
        status: string;
        mandate_type: string;
        debit_type: string;
        ready_to_debit: boolean;
        nibss_code: string;
        approved: boolean;
        reference: string;
        account_name: string;
        account_number: string;
        bank: string;
        bank_code: string;
        customer: string;
        description: string;
        live_mode: boolean;
        start_date: string;
        end_date: string;
        date: string;
        amount: number;
    };
}
