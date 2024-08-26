"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookUpMethods = void 0;
const Enum_1 = require("../../lib/Enum");
class LookUpMethods {
    constructor(request) {
        this.request = request;
        /**
         * BVN methods for initiating, verifying, and retrieving BVN details.
         */
        this.BVN = {
            /**
             * Initiates a BVN verification process.
             *
             * @param {string} bvn - The Bank Verification Number to be verified.
             * @param {string} scope - The scope of the BVN verification.
             * @returns {Promise<BVNInitiateResponse>} - A promise that resolves to the BVN initiation response,
             * which includes a session-id to be used in subsequent verification steps.
             * it also includes a method to be used in ``Verify`` verification step.
             */
            initiate: (bvn, scope) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.BVN}/initiate`, 'POST', {
                    data: {
                        bvn,
                        scope
                    }
                });
            }),
            /**
             * Verifies the BVN using a specified method.
             *
             * @param {string} method - The method to use for verification (e.g., "otp").
             * @param {string} phone_number - The phone number associated with the BVN.
             * @param {string} session_id - The session ID for the verification process, obtained from the initiation response.
             * @returns {Promise<VerifyResponse>} - A promise that resolves to the verification response.
             */
            verify: (method, phone_number, session_id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.BVN}/verify`, "POST", {
                    data: {
                        method,
                        phone_number
                    }
                }, {
                    "x-session-id string": session_id
                });
            }),
            /**
             * Retrieves BVN details using an OTP and session ID.
             *
             * @param {string} otp - The one-time password for verification.
             * @param {string} session_id - The session ID for retrieving BVN details, obtained from the initiation response.
             * @returns {Promise<BvnDetailsResponse>} - A promise that resolves to the BVN details response.
             */
            getDetails: (otp, session_id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.BVN}/details`, "POST", {
                    data: {
                        otp
                    }
                }, {
                    "x-session-id string": session_id
                });
            }),
        };
        /**
         * CAC methods for looking up business information and retrieving details.
         *
         */
        this.CAC = {
            /**
             * Looks up business information based on the search query.
             *
             * @param {string} search - The search query to look up business information.
             * @returns {Promise<LookupBusinessResponse>} - A promise that resolves to the business lookup response.
             * The response includes an ID field that should be used for further queries.
             */
            lookupBusiness: (search) => __awaiter(this, void 0, void 0, function* () {
                const param = new URLSearchParams({ search });
                return this.request(`${Enum_1.EndPoints.cacLookUp}/business?${param}`);
            }),
            /**
             * Retrieves shareholder details for a specific business ID.
             *
             * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
             * @returns {Promise<ShareholderDetailsResponse>} - A promise that resolves to the shareholder details response.
             */
            shareHoldersDetails: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/cac/company/${id}`);
            }),
            /**
             * Retrieves previous address information for a specific business ID.
             *
             * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
             * @returns {Promise<PreviousAddressResponse>} - A promise that resolves to the previous address response.
             */
            previousAddress: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/cac/company/${id}/previous-address`);
            }),
            /**
             * Retrieves change of name information for a specific business ID.
             *
             * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
             * @returns {Promise<ChangeOfNameResponse>} - A promise that resolves to the change of name response.
             */
            changeOfName: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/cac/company/${id}/change-of-name`);
            }),
            /**
             * Retrieves secretary details for a specific business ID.
             *
             * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
             * @returns {Promise<SecretaryResponse>} - A promise that resolves to the secretary details response.
             */
            secretary: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/cac/company/${id}/secretary`);
            }),
            /**
             * Retrieves director details for a specific business ID.
             *
             * @param {string} id - The ID of the business, obtained from the `lookupBusiness` response.
             * @returns {Promise<DirectorResponse>} - A promise that resolves to the director details response.
             */
            directors: (id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/cac/company/${id}/directors`);
            }),
        };
        /**
         * LookUpMethods for retrieving various types of personal and business information.
         *
         */
        this.LookUpMethods = {
            /**
             * Looks up home address information based on meter number and address.
             *
             * @param {string} meter_number - The meter number associated with the home address.
             * @param {string} address - The address for which home address information is being looked up.
             * @returns {Promise<HomeAddressResponse>} - A promise that resolves to the home address lookup response.
             */
            lookupHomeAddress: (meter_number, address) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/address`, "POST", {
                    data: {
                        meter_number,
                        address
                    }
                });
            }),
            /**
             * Looks up international passport information based on passport number, last name, and date of birth.
             *
             * @param {string} passport_number - The passport number to look up.
             * @param {string} last_name - The last name of the passport holder.
             * @param {string} date_of_birth - The date of birth of the passport holder (in YYYY-MM-DD format).
             * @returns {Promise<InternationalPassportResponse>} - A promise that resolves to the international passport lookup response.
             */
            lookupInternationalPassport: (passport_number, last_name, date_of_birth) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/passport`, "POST", {
                    data: {
                        passport_number,
                        last_name,
                        date_of_birth
                    }
                });
            }),
            /**
             * Looks up TIN (Tax Identification Number) information based on the TIN number and channel.
             *
             * @param {string} number - The TIN number to look up.
             * @param {string} channel - The channel through which the TIN is being looked up.
             * @returns {Promise<TINLookupResponse>} - A promise that resolves to the TIN lookup response.
             */
            lookupTIN: (number, channel) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/tin`, "POST", {
                    data: {
                        number,
                        channel
                    }
                });
            }),
            /**
             * Looks up NIN (National Identification Number) information based on the NIN.
             *
             * @param {string} nin - The NIN to look up.
             * @returns {Promise<NINLookupResponse>} - A promise that resolves to the NIN lookup response.
             */
            lookupNIN: (nin) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/nin`, "POST", {
                    data: {
                        nin
                    }
                });
            }),
            /**
             * Looks up driver's license information based on license number, date of birth, first name, and last name.
             *
             * @param {string} license_number - The driver's license number to look up.
             * @param {string} date_of_birth - The date of birth of the license holder (in YYYY-MM-DD format).
             * @param {string} first_name - The first name of the license holder.
             * @param {string} last_name - The last name of the license holder.
             * @returns {Promise<DriverLicenseLookupResponse>} - A promise that resolves to the driver's license lookup response.
             */
            lookupDriversLicence: (license_number, date_of_birth, first_name, last_name) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/driver_license`, "POST", {
                    data: {
                        license_number,
                        date_of_birth,
                        first_name,
                        last_name
                    }
                });
            }),
            /**
             * Looks up account number information based on NIP code and account number.
             *
             * @param {string} nip_code - The NIP code associated with the account.
             * @param {string} account_number - The account number to look up.
             * @returns {Promise<AccountNumberLookupResponse>} - A promise that resolves to the account number lookup response.
             */
            lookupAccountNumber: (nip_code, account_number) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/account-number`, "POST", {
                    data: {
                        nip_code,
                        account_number
                    }
                });
            }),
            /**
             * Looks up credit history information based on provider and BVN (Bank Verification Number).
             *
             * @param {string} provider - The provider of the credit history information.
             * @param {string} bvn - The BVN associated with the credit history lookup.
             * @returns {Promise<CreditHistoryLookupResponse>} - A promise that resolves to the credit history lookup response.
             */
            lookupCreditHistory: (provider, bvn) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/credit-history/${provider}`, "POST", {
                    data: {
                        bvn
                    }
                });
            }),
            /**
             * Looks up mashup information based on NIN, BVN, and date of birth.
             *
             * @param {string} nin - The NIN (National Identification Number) to look up.
             * @param {string} bvn - The BVN (Bank Verification Number) to look up.
             * @param {string} date_of_birth - The date of birth of the individual (in YYYY-MM-DD format).
             * @returns {Promise<MashupLookupResponse>} - A promise that resolves to the mashup lookup response.
             */
            lookupMashUp: (nin, bvn, date_of_birth) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.cacLookUp}/mashup`, "POST", {
                    data: {
                        nin,
                        bvn,
                        date_of_birth
                    }
                });
            })
        };
    }
    ;
}
exports.LookUpMethods = LookUpMethods;
