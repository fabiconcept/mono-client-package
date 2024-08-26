import { EndPoints } from "../../lib/Enum";
import { AccountNumberLookupResponse, CreditHistoryLookupResponse, DriverLicenseLookupResponse, HomeAddressResponse, InternationalPassportResponse, MashupLookupResponse, NINLookupResponse, TINLookupResponse } from "../../lib/interfaces/Responses/LookuUp";
import { BvnDetailsResponse, BVNInitiateResponse, VerifyResponse } from "../../lib/interfaces/Responses/LookuUp/bvn";
import { ChangeOfNameResponse, DirectorResponse, LookupBusinessResponse, PreviousAddressResponse, SecretaryResponse, ShareholderDetailsResponse } from "../../lib/interfaces/Responses/LookuUp/CAC";

export class LookUpMethods {
    constructor(private request: (endpoint: string, method?: string, body?: any, moreHeaders?: { [key: string]: string }) => Promise<any>) { };

    /**
     * BVN methods for initiating, verifying, and retrieving BVN details.
     */
    public BVN = {
        /**
         * Initiates a BVN verification process.
         * 
         * @param {string} bvn - The Bank Verification Number to be verified.
         * @param {string} scope - The scope of the BVN verification.
         * @returns {Promise<BVNInitiateResponse>} - A promise that resolves to the BVN initiation response, 
         * which includes a session-id to be used in subsequent verification steps.
         * it also includes a method to be used in ``Verify`` verification step.
         */
        initiate: async (bvn: string, scope: string): Promise<BVNInitiateResponse> => {
            return this.request(`${EndPoints.BVN}/initiate`, 'POST', {
                data: {
                    bvn,
                    scope
                }
            });
        },

        /**
         * Verifies the BVN using a specified method.
         * 
         * @param {string} method - The method to use for verification (e.g., "otp").
         * @param {string} phone_number - The phone number associated with the BVN.
         * @param {string} session_id - The session ID for the verification process, obtained from the initiation response.
         * @returns {Promise<VerifyResponse>} - A promise that resolves to the verification response.
         */
        verify: async (method: string, phone_number: string, session_id: string): Promise<VerifyResponse> => {
            return this.request(`${EndPoints.BVN}/verify`, "POST", {
                data: {
                    method,
                    phone_number
                }
            }, {
                "x-session-id string": session_id
            });
        },

        /**
         * Retrieves BVN details using an OTP and session ID.
         * 
         * @param {string} otp - The one-time password for verification.
         * @param {string} session_id - The session ID for retrieving BVN details, obtained from the initiation response.
         * @returns {Promise<BvnDetailsResponse>} - A promise that resolves to the BVN details response.
         */
        getDetails: async (otp: string, session_id: string): Promise<BvnDetailsResponse> => {
            return this.request(`${EndPoints.BVN}/details`, "POST", {
                data: {
                    otp
                }
            }, {
                "x-session-id string": session_id
            });
        },
    };

    /**
     * CAC methods for looking up business information and retrieving details.
     *
     */
    public CAC = {
        /**
         * Looks up business information based on the search query.
         * 
         * @param {string} search - The search query to look up business information.
         * @returns {Promise<LookupBusinessResponse>} - A promise that resolves to the business lookup response.
         * The response includes an ID field that should be used for further queries.
         */
        lookupBusiness: async (search: string): Promise<LookupBusinessResponse> => {
            const param = new URLSearchParams({ search });
            return this.request(`${EndPoints.cacLookUp}/business?${param}`);
        },

        /**
         * Retrieves shareholder details for a specific business ID.
         * 
         * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
         * @returns {Promise<ShareholderDetailsResponse>} - A promise that resolves to the shareholder details response.
         */
        shareHoldersDetails: async (id: string): Promise<ShareholderDetailsResponse> => {
            return this.request(`${EndPoints.cacLookUp}/cac/company/${id}`);
        },

        /**
         * Retrieves previous address information for a specific business ID.
         * 
         * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
         * @returns {Promise<PreviousAddressResponse>} - A promise that resolves to the previous address response.
         */
        previousAddress: async (id: string): Promise<PreviousAddressResponse> => {
            return this.request(`${EndPoints.cacLookUp}/cac/company/${id}/previous-address`);
        },

        /**
         * Retrieves change of name information for a specific business ID.
         * 
         * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
         * @returns {Promise<ChangeOfNameResponse>} - A promise that resolves to the change of name response.
         */
        changeOfName: async (id: string): Promise<ChangeOfNameResponse> => {
            return this.request(`${EndPoints.cacLookUp}/cac/company/${id}/change-of-name`);
        },

        /**
         * Retrieves secretary details for a specific business ID.
         * 
         * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
         * @returns {Promise<SecretaryResponse>} - A promise that resolves to the secretary details response.
         */
        secretary: async (id: string): Promise<SecretaryResponse> => {
            return this.request(`${EndPoints.cacLookUp}/cac/company/${id}/secretary`);
        },

        /**
         * Retrieves director details for a specific business ID.
         * 
         * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
         * @returns {Promise<DirectorResponse>} - A promise that resolves to the director details response.
         */
        directors: async (id: string): Promise<DirectorResponse> => {
            return this.request(`${EndPoints.cacLookUp}/cac/company/${id}/directors`);
        },
    };

    /**
     * LookUpMethods for retrieving various types of personal and business information.
     *
     */
    public LookUpMethods = {
        /**
         * Looks up home address information based on meter number and address.
         * 
         * @param {string} meter_number - The meter number associated with the home address.
         * @param {string} address - The address for which home address information is being looked up.
         * @returns {Promise<HomeAddressResponse>} - A promise that resolves to the home address lookup response.
         */
        lookupHomeAddress: async (meter_number: string, address: string): Promise<HomeAddressResponse> => {
            return this.request(`${EndPoints.cacLookUp}/address`, "POST", {
                data: {
                    meter_number,
                    address
                }
            });
        },

        /**
         * Looks up international passport information based on passport number, last name, and date of birth.
         * 
         * @param {string} passport_number - The passport number to look up.
         * @param {string} last_name - The last name of the passport holder.
         * @param {string} date_of_birth - The date of birth of the passport holder (in YYYY-MM-DD format).
         * @returns {Promise<InternationalPassportResponse>} - A promise that resolves to the international passport lookup response.
         */
        lookupInternationalPassport: async (passport_number: string, last_name: string, date_of_birth: string): Promise<InternationalPassportResponse> => {
            return this.request(`${EndPoints.cacLookUp}/passport`, "POST", {
                data: {
                    passport_number,
                    last_name,
                    date_of_birth
                }
            });
        },

        /**
         * Looks up TIN (Tax Identification Number) information based on the TIN number and channel.
         * 
         * @param {string} number - The TIN number to look up.
         * @param {string} channel - The channel through which the TIN is being looked up.
         * @returns {Promise<TINLookupResponse>} - A promise that resolves to the TIN lookup response.
         */
        lookupTIN: async (number: string, channel: string): Promise<TINLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/tin`, "POST", {
                data: {
                    number,
                    channel
                }
            });
        },

        /**
         * Looks up NIN (National Identification Number) information based on the NIN.
         * 
         * @param {string} nin - The NIN to look up.
         * @returns {Promise<NINLookupResponse>} - A promise that resolves to the NIN lookup response.
         */
        lookupNIN: async (nin: string): Promise<NINLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/nin`, "POST", {
                data: {
                    nin
                }
            });
        },

        /**
         * Looks up driver's license information based on license number, date of birth, first name, and last name.
         * 
         * @param {string} license_number - The driver's license number to look up.
         * @param {string} date_of_birth - The date of birth of the license holder (in YYYY-MM-DD format).
         * @param {string} first_name - The first name of the license holder.
         * @param {string} last_name - The last name of the license holder.
         * @returns {Promise<DriverLicenseLookupResponse>} - A promise that resolves to the driver's license lookup response.
         */
        lookupDriversLicence: async (license_number: string, date_of_birth: string, first_name: string, last_name: string): Promise<DriverLicenseLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/driver_license`, "POST", {
                data: {
                    license_number,
                    date_of_birth,
                    first_name,
                    last_name
                }
            });
        },

        /**
         * Looks up account number information based on NIP code and account number.
         * 
         * @param {string} nip_code - The NIP code associated with the account.
         * @param {string} account_number - The account number to look up.
         * @returns {Promise<AccountNumberLookupResponse>} - A promise that resolves to the account number lookup response.
         */
        lookupAccountNumber: async (nip_code: string, account_number: string): Promise<AccountNumberLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/account-number`, "POST", {
                data: {
                    nip_code,
                    account_number
                }
            });
        },

        /**
         * Looks up credit history information based on provider and BVN (Bank Verification Number).
         * 
         * @param {string} provider - The provider of the credit history information.
         * @param {string} bvn - The BVN associated with the credit history lookup.
         * @returns {Promise<CreditHistoryLookupResponse>} - A promise that resolves to the credit history lookup response.
         */
        lookupCreditHistory: async (provider: string, bvn: string): Promise<CreditHistoryLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/credit-history/${provider}`, "POST", {
                data: {
                    bvn
                }
            });
        },

        /**
         * Looks up mashup information based on NIN, BVN, and date of birth.
         * 
         * @param {string} nin - The NIN (National Identification Number) to look up.
         * @param {string} bvn - The BVN (Bank Verification Number) to look up.
         * @param {string} date_of_birth - The date of birth of the individual (in YYYY-MM-DD format).
         * @returns {Promise<MashupLookupResponse>} - A promise that resolves to the mashup lookup response.
         */
        lookupMashUp: async (nin: string, bvn: string, date_of_birth: string): Promise<MashupLookupResponse> => {
            return this.request(`${EndPoints.cacLookUp}/mashup`, "POST", {
                data: {
                    nin,
                    bvn,
                    date_of_birth
                }
            });
        }
    };

}