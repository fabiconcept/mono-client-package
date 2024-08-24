interface MandateAuthorizationData {
    mono_url: string;
    type: 'recurring-debit';
    mandate_type: 'emandate' | 'signed' | 'gsm';
    amount: number;
    description: string;
    reference: string;
    customer: string;
    redirect_url: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    start_date: string; // ISO 8601 date string
    end_date: string; // ISO 8601 date string
}

interface VariableMandateAuthorizationData extends MandateAuthorizationData {
    method: 'mandate';
}

export interface InitiateMandateAuthorizationResponse {
    status: 'successful';
    message: string;
    data: MandateAuthorizationData | VariableMandateAuthorizationData;
}

// E-mandate response interface
export interface EmAndateResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        mandate_type: "emandate";
        debit_type: "variable";
        status: "active";
        approved: boolean;
        reference: string;
        account_name: string;
        account_number: string;
        bank: string;
        customer: string;
        description: string;
        start_date: string;  // e.g. 2023-12-13T00:00:00.000Z
        end_date: string;    // e.g. 2024-05-25T00:00:00.000Z
        date: string;        // e.g. 2023-12-13T07:36:17.114Z
        transfer_destinations: {
            bank_name: string;
            account_number: string;
            icon: string;
        }[];
    };
}

// Signed mandate response interface
export interface SignedMandateResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        mandate_type: "signed";
        debit_type: "variable";
        status: "active";
        approved: boolean;
        reference: string;
        account_name: string;
        account_number: string;
        bank: string;
        customer: string;
        description: string;
        start_date: string;  // e.g. 2023-12-14T00:00:00.000Z
        end_date: string;    // e.g. 2024-05-25T00:00:00.000Z
        date: string;        // e.g. 2023-12-11T18:03:26.246Z
    };
}

// Tokenized mandate response interface
export interface TokenizedMandateResponse {
    status: "successful";
    message: string;
    data: {
        status: "initiated";
        mandate_type: "emandate";
        debit_type: "variable";
        amount: number;  // In kobo
        reference: string;
        account_name: string;
        account_number: string;
        bank: string;
        customer: string;
        description: string;
        live_mode: boolean;
        start_date: string;  // e.g. 2024-09-22T00:00:00.000Z
        end_date: string;    // e.g. 2024-12-22T00:00:00.000Z
        date: string;        // e.g. 2024-07-30T10:52:15.971Z
        otp_destinations: {
            session: string;
            methods: {
                type: "phone_number" | "email";
                value: string;
            }[];
        };
    };
}

export interface SetMethodResponse {
    status: string,
    message: string,
    data: {
        phone_number: string,
        action: string,
        session: string
    }
}

export interface VerifyMandateResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        status: "approved";
        mandate_type: "emandate";
        debit_type: "variable";
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
        start_date: string;  // e.g. 2025-01-17T00:00:00.000Z
        end_date: string;    // e.g. 2025-12-21T00:00:00.000Z
        date: string;        // e.g. 2024-07-11T07:55:14.257Z
        amount: number;      // In kobo
    };
}

// Retrieve Mandate response interface
export interface RetrieveMandateResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        status: string;  // e.g., "active"
        mandate_type: string;  // e.g., "emandate"
        debit_type: string;  // e.g., "variable"
        approved: boolean;
        amount: number;  // In kobo
        account_name: string;
        account_number: string;
        institution: {
            bank_code: string;  // e.g., "057"
            nip_code: string;  // e.g., "000015"
            name: string;  // e.g., "ZENITH INTERNATIONAL BANK PLC"
        };
        customer: string;
        narration: string;
        start_date: string;  // e.g., 2023-12-13T00:00:00.000Z
        end_date: string;  // e.g., 2024-05-25T00:00:00.000Z
        date: string;  // e.g., 2023-12-13T08:36:17.114Z
    };
}

export interface CancelMandateResponse {
    status: "success",
    response_code: string,
    message: string,
    timestamps: string,
    documentation: string,
    data: null
}

export  interface PauseMandateResponse extends CancelMandateResponse {}
export  interface ReinstateMandateResponse extends CancelMandateResponse {}

export interface GetMandateBalanceResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        has_sufficient_balance: boolean;
        account_balance: number;
    };
}

// Retrieve Debit response interface
export interface RetrieveDebitResponse {
    status: "successful";
    message: string;
    data: {
        id: string;
        channel: string;
        fee: number;
        type: string;
        status: string;
        amount: number;
        currency: string;
        description: string;
        reference: string;
        object_id: string;
        live_mode: boolean;
        app: string;
        business: string;
        refunded: boolean;
        created_at: string;
        updated_at: string;
        __v: number;
    };
}

// Retrieve All Debits response interface
export interface RetrieveAllDebitsResponse {
    status: "successful";
    message: string;
    data: Debit[];
}

// Single Debit interface
interface Debit {
    id: string;
    channel: string;
    fee: number;
    type: string;
    status: string;
    amount: number;
    currency: string;
    description: string;
    reference: string;
    object_id: string;
    live_mode: boolean;
    app: string;
    business: string;
    refunded: boolean;
    created_at: string;
    updated_at: string;
    __v: number;
}

// Response for Debiting an Account
export interface DebitAccountResponse {
    status: string;
    message: string;
    response_code: string;
    data: DebitAccountData;
}

interface DebitAccountData {
    status: string;
    amount: number;
    customer: string;
    mandate: string;
    reference_number: string;
    account_debited: AccountDetails;
    beneficiary: BeneficiaryDetails;
    date: string;
}

interface AccountDetails {
    bank_code: string;
    account_name: string;
    account_number: string;
    bank_name: string;
}

interface BeneficiaryDetails {
    bank_code: string;
    account_name: string;
    account_number: string;
    bank_name: string;
}

// Response for retrieving payouts
export interface RetrievePayoutsResponse {
    status: string;
    message: string;
    data: PayoutsData;
    meta: MetaData;
}

// Data object within the PayoutsResponse
interface PayoutsData {
    payouts: Payout[];
}

// Individual Payout object interface
interface Payout {
    id: string;
    status: string;
    amount: number;
    fee: number;
    currency: string;
    date: string;
    bank: string;
    message: string;
    settled_amount?: number;
    settled_account?: SettledAccount;
    processor?: string;
    response?: string;
}

// SettledAccount object interface
interface SettledAccount {
    beneficiary_bank: string;
    beneficiary_account_name: string;
    beneficiary_account_number: string;
}

// MetaData object interface
interface MetaData {
    paging: PagingData;
}

// PagingData object interface
interface PagingData {
    total: number;
    pages: number;
    previous: string | null;
    next: string | null;
}

export interface PayoutTransactionsResponse {
    status: string;
    message: string;
    data: PayoutTransactionsData;
    meta: MetaData;
  }
  
  interface PayoutTransactionsData {
    payments: Payment[];
  }
  
  interface Payment {
    id: string;
    type: string;
    status: string;
    amount: number;
    description: string;
    currency: string;
    account: PaymentAccount;
    customer: Customer | null;
    reference: string;
    created_at: string;
    updated_at: string;
    fee: number;
  }
  
  interface PaymentAccount {
    id: string;
    institution: AccountInstitution;
    name: string;
    account_number: string;
    currency: string;
    created_at: string;
    updated_at: string;
  }
  
  interface AccountInstitution {
    id: string;
    name: string;
    type: string;
  }
  
  interface Customer {
    id: string;
    name: string;
    email: string;
  }
  

export interface RefundResponse {
    status: string;
    message: string;
    timestamp: string;
    data: RefundData;
}

interface RefundData {
    id: string;
    reference: string;
    refunded: boolean;
    refunded_amount: number;
    beneficiary: Beneficiary;
}

interface Beneficiary {
    name: string;
    bank_name: string;
    bank_code: string;
    account_number: string;
}

