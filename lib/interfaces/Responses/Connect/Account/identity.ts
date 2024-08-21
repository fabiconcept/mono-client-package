interface AccountIdentity {
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
    data: AccountIdentity;
}
