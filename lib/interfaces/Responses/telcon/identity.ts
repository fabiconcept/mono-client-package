export interface TelcoIdentityResponse {
    fullName: string;
    phone: string;
    gender: 'male' | 'female';
    bvn: null | string;
    dob: string; // ISO 8601 date string
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
}