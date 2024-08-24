import { EndPoints } from "../../lib/Enum";
import { InitiatePaymentRequest } from "../../lib/interfaces/Request/Direct Pay/oneTime";
import { DebitAccountRequest } from "../../lib/interfaces/Request/Direct Pay/recurring";
import { InitiatePaymentResponse, TransactionListResponse, VerifyPaymentResponse } from "../../lib/interfaces/Responses/Direct Pay/oneTime";
import { CancelMandateResponse, GetMandateBalanceResponse, InitiateMandateAuthorizationResponse, PauseMandateResponse, ReinstateMandateResponse, RetrieveAllDebitsResponse, RetrieveDebitResponse, RetrieveMandateResponse, SetMethodResponse, VerifyMandateResponse, DebitAccountResponse, RetrievePayoutsResponse, PayoutTransactionsResponse, RefundResponse } from "../../lib/interfaces/Responses/Direct Pay/recurring";
import { CreateMandateResponse } from "../../lib/types/Reponses/DirectPay";
import { CreateMandateRequest, InitiateMandateAuthorizationRequest } from "../../lib/types/Request/DirectPay";

type sourceType = "wallet" | "payout";

export class DirectPayMethods {
    constructor(private request: (endpoint: string, method?: string, body?: any) => Promise<any>) { }

    /**
     * Provides methods for handling one-time payments via DirectPay.
     */
    public oneTime = {
        /**
         * Initiates a one-time payment request.
         * @param {InitiatePaymentRequest} data - The data required to initiate the payment.
         * @returns {Promise<InitiatePaymentResponse>} The response of the payment initiation.
         * @description This method sends a POST request to initiate a one-time payment using the DirectPay service.
         *
         * ## Overview
         * After a successful or failed attempt, the user will be redirected to the specified redirect URL.
         * The URL will include the reference passed when initializing the widget, along with the status and reason (in case of failure).
         * 
         * ### Success
         * The user will be redirected to:
         * `${redirect_url}?reference="reference"&status="successful"`
         * 
         * ### Failure
         * The user will be redirected to:
         * `${redirect_url}?reference="reference"&status="failed"&reason="widget_closed"`
         */
        initiatePayment: async (data: InitiatePaymentRequest): Promise<InitiatePaymentResponse> => {
            return this.request(EndPoints.InitiateOneTimePayment, "POST", { data });
        },
        
         /**
         * Verifies the status of a one-time payment.
         * @param {Object} data - The verification request data.
         * @param {string} data.reference - The reference ID of the payment to verify.
         * @returns {Promise<VerifyPaymentResponse>} The response containing the verification status.
         * @description This method sends a POST request to verify the status of a one-time payment using the provided reference ID.
         */
        verifyPayment: async (data: { reference: string }): Promise<VerifyPaymentResponse> => {
            return this.request(EndPoints.VerifyOneTimePayment, "POST", { data });
        },

        /**
         * Retrieves a list of transactions for one-time payments.
         * @param {Object} requestParams - The parameters for filtering the transaction list.
         * @param {string} [requestParams.page] - The page number for pagination.
         * @param {string} [requestParams.start] - The start date for filtering transactions.
         * @param {string} [requestParams.end] - The end date for filtering transactions.
         * @param {string} [requestParams.status] - The status of transactions to filter by (e.g., successful, failed).
         * @param {string} [requestParams.account] - The account ID for filtering transactions.
         * @param {string} [requestParams.customer] - The customer ID for filtering transactions.
         * @returns {Promise<TransactionListResponse>} The response containing the list of transactions.
         * @description This method sends a GET request to retrieve a list of one-time payment transactions based on the provided filters.
         */
        getAllTransactions: async ({ account = "", customer = "", end = "", page = "", start = "", status = "" }: { page: string, start: string, end: string, status: string, account: string, customer: string }): Promise<TransactionListResponse> => {
            const params = new URLSearchParams({
                account,
                customer,
                end,
                page,
                start,
                status,
            })
            return this.request(`${EndPoints.Payment}/transactions?${params}`);
        }
    }

    /**
     * Provides methods for handling recurring payments via DirectPay.
     */
    public reccurring =  {
        /**
         * Initiates a recurring payment mandate authorization.
         * @param {InitiateMandateAuthorizationRequest} data - The data required to initiate the mandate authorization.
         * @returns {Promise<InitiateMandateAuthorizationResponse>} The response of the mandate authorization initiation.
         * @description This method sends a POST request to initiate the authorization for a recurring payment mandate.
         */
        initiate: async(data: InitiateMandateAuthorizationRequest): Promise<InitiateMandateAuthorizationResponse> => {
            return this.request(EndPoints.InitiateMandate, "POST", {
                data
            });
        },

        /**
         * Creates a new recurring payment mandate.
         * @param {CreateMandateRequest} data - The data required to create a new mandate.
         * @returns {Promise<CreateMandateResponse>} The response after creating the mandate.
         * @description This method sends a POST request to create a new recurring payment mandate using the provided data.
         */
        createMandate: async(data: CreateMandateRequest): Promise<CreateMandateResponse>  => {
            return this.request(EndPoints.CreateMandate, "POST", {
                data
            });
        },
        
        /**
         * Provides methods for handling OTP verification and mandate management in recurring payments via DirectPay.
         */
        verifyOTP: {
            /**
             * Sets the OTP verification method for a recurring payment mandate.
             * @param {Object} data - The data required to set the OTP verification method.
             * @param {string} data.session - The session ID for the OTP verification process.
             * @param {string} data.method - The method to be used for OTP verification.
             * @returns {Promise<SetMethodResponse>} The response after setting the OTP verification method.
             * @description This method sends a POST request to set the OTP verification method for a specific session.
             */
            setMethod: async (data: { session: string, method: string }): Promise<SetMethodResponse> => {
                return this.request(EndPoints.VerifyMandateOTP, "POST", {
                    data
                });
            },

            /**
             * Verifies the OTP for a recurring payment mandate.
             * @param {Object} data - The data required to verify the OTP.
             * @param {string} data.session - The session ID for the OTP verification process.
             * @param {string} data.otp - The OTP provided by the user.
             * @returns {Promise<VerifyMandateResponse>} The response after verifying the OTP.
             * @description This method sends a POST request to verify the OTP for a specific session.
             */
            verify: async (data: { session: string, otp: string }): Promise<VerifyMandateResponse> => {
                return this.request(EndPoints.VerifyMandateOTP, "POST", {
                    data
                });
            },

        },

        /**
         * Retrieves the details of a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to retrieve.
         * @returns {Promise<RetrieveMandateResponse>} The response containing the mandate details.
         * @description This method sends a GET request to retrieve the details of a specific mandate by its ID.
         */
        getMandate: async (id: string): Promise<RetrieveMandateResponse> => {
            return this.request(`${EndPoints.CreateMandate}/${id}`);
        },

        /**
         * Retrieves all recurring payment mandates with pagination.
         * @param {number} limit - The number of mandates to retrieve per page.
         * @param {number} page - The page number to retrieve.
         * @returns {Promise<RetrieveMandateResponse>} The response containing the list of mandates.
         * @description This method sends a GET request to retrieve a paginated list of all recurring payment mandates.
         */
        getAllMandate: async (limit: number, page: number): Promise<RetrieveMandateResponse> => {
            const params = new URLSearchParams({
                page: String(page),
                limit: String(limit)
            });
            return this.request(`${EndPoints.CreateMandate}?${params}`);
        },

        /**
         * Cancels a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to cancel.
         * @returns {Promise<CancelMandateResponse>} The response after canceling the mandate.
         * @description This method sends a PATCH request to cancel a specific mandate by its ID.
         */
        cancelMandate: async (id: string): Promise<CancelMandateResponse> => {
            return this.request(`${EndPoints.CreateMandate}/${id}/cancel`, "PATCH");
        },

        /**
         * Pauses a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to pause.
         * @returns {Promise<PauseMandateResponse>} The response after pausing the mandate.
         * @description This method sends a PATCH request to pause a specific mandate by its ID.
         */
        pauseMandate: async (id: string): Promise<PauseMandateResponse> => {
            return this.request(`${EndPoints.CreateMandate}/${id}/pause`, "PATCH");
        },

        /**
         * Reinstates a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to reinstate.
         * @returns {Promise<ReinstateMandateResponse>} The response after reinstating the mandate.
         * @description This method sends a PATCH request to reinstate a specific mandate by its ID.
         */
        reinstateMandate: async (id: string): Promise<ReinstateMandateResponse> => {
            return this.request(`${EndPoints.CreateMandate}/${id}/reinstate`, "PATCH");
        },

        /**
         * Retrieves the balance of a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to check.
         * @param {string} [amount=""] - Optional amount to filter the balance inquiry.
         * @returns {Promise<GetMandateBalanceResponse>} The response containing the mandate balance details.
         * @description This method sends a GET request to retrieve the balance of a specific mandate, optionally filtering by an amount.
         */
        getMandateBalance: async (id: string, amount: string = ""): Promise<GetMandateBalanceResponse> => { 
            const params = new URLSearchParams({
                amount,
            })
            return  this.request(`${EndPoints.CreateMandate}/${id}/balance-inquiry?${params}`);
        },

        /**
         * Retrieves a specific debit transaction for a recurring payment mandate.
         * @param {string} id - The ID of the mandate to retrieve the debit from.
         * @param {string} [reference=""] - Optional reference to filter the debit transaction.
         * @returns {Promise<RetrieveDebitResponse>} The response containing the details of the specific debit transaction.
         * @description This method sends a GET request to retrieve a specific debit transaction from a mandate, optionally filtering by a reference.
         */
        getDebit: async (id: string, reference: string = ""): Promise<RetrieveDebitResponse> => { 
            return  this.request(`${EndPoints.CreateMandate}/${id}/debits/${reference}`);
        },

        /**
         * Retrieves all debit transactions for a specific recurring payment mandate.
         * @param {string} id - The ID of the mandate to retrieve all debits from.
         * @param {string} [reference=""] - Optional reference to filter the debit transactions.
         * @returns {Promise<RetrieveAllDebitsResponse>} The response containing the list of all debit transactions for the mandate.
         * @description This method sends a GET request to retrieve all debit transactions from a mandate, optionally filtering by a reference.
         */
        getAllDebit: async (id: string): Promise<RetrieveAllDebitsResponse> => { 
            return  this.request(`${EndPoints.CreateMandate}/${id}/debits`);
        },

        /**
         * Debits an account for a recurring payment mandate.
         * @param {string} id - The ID of the mandate to debit.
         * @param {DebitAccountRequest} data - The data required to debit the account.
         * @returns {Promise<DebitAccountResponse>} The response after debiting the account.
         * @description This method sends a POST request to debit an account for a specific recurring payment mandate.
         */
        debitAccount: async (id: string, data: DebitAccountRequest): Promise<DebitAccountResponse> => {
            return this.request(`${EndPoints.CreateMandate}/${id}/debit`, "POST", {
                data
            });
        }
    }

    /**
     * Retrieves payout information based on the provided status.
     * @param {string} status - The status to filter payouts by.
     * @returns {Promise<RetrievePayoutsResponse>} The response containing the payout information.
     * @description This method sends a GET request to retrieve payout information based on the provided status.
     */
    getPayout = async (status: string): Promise<RetrievePayoutsResponse> => {
        const param = new URLSearchParams({ status });

        return this.request(`${EndPoints.Payouts}?${param}`);
    }

    /**
     * Retrieves payout transactions based on the provided status and account.
     * @param {string} status - The status to filter payouts by.
     * @param {string} account - The account to filter payouts by.
     * @returns {Promise<PayoutTransactionsResponse>} The response containing the payout transactions.
     * @description This method sends a GET request to retrieve payout transactions based on the provided status and account.
     */
    getPayoutsTransactions = async (status: string, account: string): Promise<PayoutTransactionsResponse> => {
        const param = new URLSearchParams({ account });

        return this.request(`${EndPoints.Payouts}/${status}/transactions?${param}`);
    }

    /**
     * Requests a refund for a payout.
     * @param {Object} data - The data required to request a refund.
     * @param {string} data.reference - The reference ID of the payout to refund.
     * @param {sourceType} data.source - The source of the payout to refund (either "wallet" or "payout").
     * @returns {Promise<RefundResponse>} The response after requesting the refund.
     * @description This method sends a POST request to request a refund for a payout using the provided reference ID and source.
     */
    RequestRefund = async (data: { reference: string, source: sourceType }): Promise<RefundResponse> => {
        return this.request(`${EndPoints.PayoutsRefund}`, "POST", {
            data,
        });
    }
}
