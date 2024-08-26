export interface HomeAddressResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        verified: boolean;
        house_address: string;
        house_owner: string;
        confidence_level: 0 | 1; // 0 or 1
        disco_code: string;
    };
}

export interface InternationalPassportResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        passport_number: string;
        issued_date: string | null; // Date or null if not available
        expiry_date: string | null; // Date or null if not available
        document_type: string;
        issued_at: string | null; // Date or null if not available
        first_name: string;
        last_name: string;
        middle_name: string;
        dob: string; // Date of Birth in format "DD/MM/YYYY"
        gender: string;
        photo: string | null; // URL or base64 string or null if not available
        signature: string | null; // URL or base64 string or null if not available
    };
}

export interface TINLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        taxpayer_name: string;
        cac_reg_number: string;
        firstin: string;
        jittin: string;
        tax_office: string;
        phone_number: string;
        email: string;
    };
}
  
export interface NINLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        birthcountry: string;
        birthdate: string;
        birthlga: string;
        birthstate: string;
        educationallevel: string;
        email: string;
        employmentstatus: string;
        firstname: string;
        gender: string;
        height: string;
        maritalstatus: string;
        middlename: string;
        nin: string;
        nok_address1: string;
        nok_address2: string;
        nok_firstname: string;
        nok_lga: string;
        nok_middlename: string;
        nok_postalcode: string;
        nok_state: string;
        nok_surname: string;
        nok_town: string;
        spoken_language: string;
        photo: string;
        profession: string;
        religion: string;
        residence_address: string;
        residence_lga: string;
        residence_state: string;
        residence_town: string;
        residencestatus: string;
        self_origin_lga: string;
        self_origin_place: string;
        self_origin_state: string;
        signature: string;
        surname: string;
        telephoneno: string;
        title: string;
        userid: string;
        vnin: string;
        central_iD: string;
        tracking_id: string;
    };
}

export interface DriverLicenseLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        gender: string;
        photo: string;
        license_no: string;
        first_name: string;
        last_name: string;
        middle_name: string;
        issued_date: string;
        expiry_date: string;
        state_ofIssue: string;
        birth_date: string;
    };
}

export interface AccountNumberLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        name: string;
        account_number: string;
        bvn: string;
        bank: {
            name: string;
            code: string;
        };
    };
}

export interface CreditHistoryLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        providers: string[];
        profile: {
            full_name: string;
            dob: string; // Format: DD-MM-YYYY
            address_history: {
                address: string;
                type: string;
                date_reported: string; // Format: DD-MM-YYYY
            }[];
            email_addresses: string[];
            phone_numbers: string[];
            gender: string;
            identifications: {
                type: string;
                no: string;
            }[];
        };
        credit_history: {
            institution: string;
            history: {
                date_opened: string; // Format: DD-MM-YYYY
                opening_balance: number;
                currency: string;
                performance_status: string;
                tenor: number;
                closed_date: string; // Format: DD-MM-YYYY
                loan_status: string;
                repayment_frequency: string;
                repayment_amount: number;
                repayment_schedule: {
                    date: string; // Format: MM-YYYY
                    status: string;
                }[];
            }[];
        }[];
    };
}  

export interface MashupLookupResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        personal_information: {
            title: string;
            first_name: string;
            middle_name: string;
            surname: string;
            gender: string;
            dob: string; // Format: YYYY-MM-DD
            birth_date: string; // Format: YYYY-MM-DD
            birth_country: string;
            birth_state: string;
            birth_lga: string;
            marital_status: string;
            email: string;
            telephone_no: string;
            occupation: string;
            lga_of_origin: string;
            state_of_origin: string;
            watch_listed: boolean;
        };
        identification_numbers: {
            nin: string;
            bvn: string;
        };
        residence_information: {
            address: string;
            town: string;
            lga: string;
            state: string;
            residence_status: string;
        };
        biometrics: {
            photo: string;
        };
    };
}
