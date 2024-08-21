import { Identity } from "..";

export interface IndividualCustomerRequest {
    identity: Identity,
    email: string;
    type: string;
    last_name: string;
    first_name: string;
    address: string;
    phone: string;
}

export interface BusinessCustomerRequest {
    identity: Identity,
    email: string;
    type: string;
    business_name: string;
    address: string;
    phone: string;
}

export interface UpdateCustomerDetails {
    identity: Identity;
    address: string;
    phone: string;
}