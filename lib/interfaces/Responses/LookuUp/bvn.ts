export interface BVNInitiateResponse {
    status: string;
    message: string;
    timestamp: string;
    data: BVNInitiateData;
}

interface BVNInitiateData {
    session_id: string;
    bvn: string;
    methods: VerificationMethod[];
}

interface VerificationMethod {
    method: string;
    hint: string;
}

export interface VerifyResponse {
    status: string;
    message: string;
    timestamp: string;
    data: null;
}

export interface BvnDetailsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        first_name: string;
        last_name: string;
        middle_name: string;
        dob: string;
        phone_number: string;
        phone_number_2: string | null;
        email: string;
        gender: string;
        state_of_origin: string;
        bvn: string;
        nin: string;
        registration_date: string;
        lga_of_origin: string;
        lga_of_Residence: string;
        marital_status: string;
        watch_listed: boolean;
        photoId: string;
    };
}

