export interface LookupBusinessResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Array<{
        nature_of_business_name: string | null;
        classification_id: number;
        delisting_status: string | null;
        company_type_name: string | null;
        active: boolean;
        id: number;
        classification: string | null;
        business_commencement_date: string;
        approved_name: string;
        branch_address: string;
        registration_approved: boolean;
        head_office_address: string | null;
        objectives: string | null;
        registration_date: string;
        email: string;
        address: string;
        city: string;
        lga: string;
        rc_number: string;
        state: string;
    }>;
}

export interface ShareholderDetailsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Array<{
        id: number;
        surname: string;
        firstname: string;
        other_name: string;
        email: string;
        phone_number: string;
        gender: string;
        former_nationality: string;
        age: number;
        city: string;
        occupation: string;
        former_name: string;
        corporation_name: string;
        rc_number: string;
        corporation_company: string | null;
        state: string;
        pobox: string | null;
        accreditationnumber: string;
        is_lawyer: boolean | null;
        last_visit: number;
        form_type: string;
        is_presenter: boolean | null;
        is_chairman: boolean | null;
        num_shares_alloted: number;
        type_of_shares: string;
        date_of_birth: string;
        status: string;
        date_of_termination: string | null;
        date_of_appointment: string | null;
        date_of_change_of_address: string | null;
        former_address: string | null;
        former_postal: string | null;
        former_surname: string;
        former_first_name: string;
        former_other_name: string;
        date_of_status_change: string | null;
        identity_number: string;
        identity_issue_state: string | null;
        other_directorship_details: string;
        portal_user_fk: string | null;
        affiliates_fk: string | null;
        process_type_fk: {
            id: number;
            name: string;
            description: string;
            amount: number;
            type: string | null;
            product_id: string;
            bank_code: string;
        };
        company: string | null;
        same_person_as_fk: string | null;
        nature_of_app_or_discharge: string | null;
        is_designated: boolean | null;
        end_of_appointment: string | null;
        appointed_by: string | null;
        date_of_deed_of_discharge: string | null;
        date_of_resolution: string | null;
        country_fk: {
            id: number;
            name: string;
            code: string;
        };
        country_of_residence: string | null;
        is_carried_over_from_name_avai: boolean | null;
        lga: string | null;
        corporation_registration_date: string | null;
        is_company_deleted: boolean | null;
        government_organisation_name: string | null;
        foreign_organisation_name: string | null;
        company_street_address: string | null;
        company_state: string | null;
        company_city: string | null;
        is_corporate: boolean | null;
        county_of_incorporation_fk: string | null;
        nationality: string | null;
        address: string;
        postcode: string;
        street_number: string;
        affiliates_residential_address: string | null;
        affiliates_psc_information: number;
        legal_owners_of_interests: Array<any>;
        legal_owners_of_voting_rights: Array<any>;
        stock_exchange_soes: Array<any>;
        approved_for_notice_of_psc: string | null;
        company_address2: string;
        full_address2: string;
        affiliate_type_fk: {
            id: number;
            name: string;
            description: string;
        };
    }>;
}

export interface PreviousAddressResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        approved_name: string;
        previous_address: string;
        street_name: string;
        city: string;
        submission_date: string;
        approval_date: string;
        id: number;
        state: string;
    };
}

export interface ChangeOfNameResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        persist_master_id: number;
        new_name: string;
        former_name: string;
        approval_date: string | null;
    }[];
}

interface PersonBase {
    id: number;
    surname: string;
    firstname: string;
    other_name: string;
    email: string;
    phone_number: string;
    gender: string;
    former_nationality: string;
    age: number;
    city: string;
    occupation: string;
    former_name: string;
    corporation_name: string;
    rc_number: string;
    corporation_company: string | null;
    state: string;
    pobox: string | null;
    accreditationnumber: string;
    is_lawyer: boolean | null;
    last_visit: number;
    form_type: string;
    is_presenter: boolean | null;
    is_chairman: boolean | null;
    num_shares_alloted: number | null;
    type_of_shares: string;
    date_of_birth: string | null;
    status: string;
    date_of_termination: string | null;
    date_of_appointment: string | null;
    date_of_change_of_address: string | null;
    former_address: string | null;
    former_postal: string | null;
    former_surname: string;
    former_first_name: string;
    former_other_name: string;
    date_of_status_change: string | null;
    identity_number: string;
    identity_issue_state: string | null;
    other_directorship_details: string | null;
    portal_user_fk: string | null;
    affiliates_fk: string | null;
    process_type_fk: {
        id: number;
        name: string;
        description: string;
        amount: number;
        type: string | null;
        product_id: string;
        bank_code: string;
    };
    company: string | null;
    same_person_as_fk: string | null;
    nature_of_app_or_discharge: string | null;
    is_designated: boolean | null;
    end_of_appointment: string | null;
    appointed_by: string | null;
    date_of_deed_of_discharge: string | null;
    date_of_resolution: string | null;
    country_fk: {
        id: number;
        name: string;
        code: string;
    };
    country_of_residence: string | null;
    is_carried_over_from_name_avai: boolean | null;
    lga: string | null;
    corporation_registration_date: string | null;
    is_company_deleted: boolean | null;
    government_organisation_name: string | null;
    foreign_organisation_name: string | null;
    company_street_address: string | null;
    company_state: string | null;
    company_city: string | null;
    is_corporate: boolean | null;
    county_of_incorporation_fk: string | null;
    nationality: string | null;
    address: string;
    postcode: string;
    street_number: string;
    affiliates_residential_address: number | null;
    affiliates_psc_information: number | null;
    legal_owners_of_interests: any[];
    legal_owners_of_voting_rights: any[];
    stock_exchange_soes: any[];
    approved_for_notice_of_psc: string | null;
    company_address2: string;
    full_address2: string;
    affiliate_type_fk: {
        id: number;
        name: string;
        description: string;
    };
}

interface Secretary extends PersonBase { }

interface Director extends PersonBase {
    num_shares_alloted: number;
    type_of_shares: string;
    date_of_birth: string;
    date_of_termination: string | null;
    date_of_appointment: string | null;
    is_chairman: boolean | null;
}

export interface DirectorResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Director[];
}

export interface SecretaryResponse {
    status: string;
    message: string;
    timestamp: string;
    data: Secretary[];
}
  
  
  