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
exports.ConnectMethods = void 0;
const Enum_1 = require("../../lib/Enum");
class ConnectMethods {
    constructor(request) {
        this.request = request;
        /**
         * Contains methods for handling bank-related data operations.
         *
         * The `bank` object provides methods for various banking and connectivity tasks, including:
         *
         * **Authorization**
         * - `accountLinking`: Link a new account.
         * - `exchangeToken`: Exchange an authorization token.
         * - `accountReauthorisation`: Reauthorize an existing account.
         *
         * **Account Management**
         * - `getAccounts`: Retrieve all accounts.
         * - `getDetails`: Get details of a specific account by ID.
         * - `getIdentity`: Fetch the identity associated with an account.
         * - `getBalance`: Get the balance of a specific account.
         * - `getIncome`: Retrieve income details of an account for a given period.
         * - `getIncomeRecords`: Get records of income for a specific account and page.
         * - `getCreditWorthiness`: Assess creditworthiness of an account.
         * - `unLink`: Unlink a specific account.
         *
         * **Statements**
         * - `statements`: Fetch account statements for a specified period and format.
         *
         * **Transactions**
         * - `transactions`: Get transactions for an account within a specified date range and criteria.
         *
         * **Investment**
         * - `getAssets`: Retrieve asset information for an account.
         * - `getEarnings`: Fetch earnings details for an account.
         *
         * **Data Enrichment**
         * - `getCategorisation`: Get transaction categorization for an account.
         * - `getCategorisationRecords`: Retrieve records of transaction categorization.
         * - `getMetadata`: Get transaction metadata for an account.
         * - `getMetadataRecords`: Retrieve records of transaction metadata.
         * - `getStatementInsight`: Get insights from statements for an account.
         * - `getInsightRecords`: Fetch records of statement insights.
         *
         * **Cash Flow**
         * - `getCredit`: Retrieve credit transactions for an account.
         * - `getDebit`: Get debit transactions for an account.
         *
         * For more information on these operations, refer to the [Mono API documentation](https://docs.mono.co/docs/connectivity).
         *
         * @property {object} authorization - Methods related to account authorization.
         * @property {object} account - Methods for managing account details and operations.
         * @property {function} statements - Method to fetch account statements.
         * @property {function} transactions - Method to retrieve account transactions.
         * @property {object} investment - Methods related to account investments.
         * @property {object} dataEnrichment - Methods for enriching and analyzing transaction data.
         * @property {object} cashFlow - Methods for retrieving cash flow information.
         */
        this.bank = {
            /**
             * Handles authorization-related operations.
             *
             * This method includes functionality for account linking, token exchange, and account reauthorization.
             *
             * @namespace connect.bankData.authorization
             */
            authorization: {
                /**
                 * Links an account.
                 *
                 * Initiates a linking process for an account. This is typically used to connect a user’s bank account with the service.
                 *
                 * @param {AccountLinkingRequest} data - The data required for account linking.
                 * @returns {Promise<AccountLinkingResponse>} The response from the account linking request.
                 */
                accountLinking: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.AccountLinking, "POST", {
                        data
                    });
                }),
                /**
                 * Exchanges a token.
                 *
                 * Exchanges an authorization code or token for access credentials.
                 *
                 * @param {ExchangeTokenRequest} data - The data required for token exchange.
                 * @returns {Promise<ExchangeTokenResponse>} The response from the token exchange request.
                 */
                exchangeToken: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.ExchangeToken, "POST", {
                        data
                    });
                }),
                /**
                 * Reauthorizes an account.
                 *
                 * Reauthorizes a previously linked account, typically used for refreshing access tokens.
                 *
                 * @param {AccountReauthorizationRequest} data - The data required for account reauthorization.
                 * @returns {Promise<AccountReauthorizationResponse>} The response from the account reauthorization request.
                 */
                accountReauthorisation: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.AccountLinking, "POST", {
                        data
                    });
                }),
            },
            /**
             * Handles account-related operations.
             *
             * This method includes functionality for retrieving accounts, account details, and performing account management tasks.
             *
             * @namespace connect.bankData.account
             */
            account: {
                /**
                 * Retrieves a list of accounts.
                 *
                 * Fetches all accounts associated with the current context.
                 *
                 * @returns {Promise<AccountsResponse>} The response containing account details.
                 */
                getAccounts: () => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}`);
                }),
                /**
                 * Retrieves details of a specific account.
                 *
                 * Fetches detailed information about a specific account identified by its ID.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<AccountDetailsResponse>} The response containing the account details.
                 */
                getDetails: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}`);
                }),
                /**
                 * Retrieves identity information for a specific account.
                 *
                 * Fetches identity information related to a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<AccountIdentityResponse>} The response containing the account's identity information.
                 */
                getIdentity: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/identity`);
                }),
                /**
                 * Retrieves the balance of a specific account.
                 *
                 * Fetches the current balance of a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<AccountBalanceResponse>} The response containing the account balance.
                 */
                getBalance: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/balance`);
                }),
                /**
                 * Retrieves income information for a specific account.
                 *
                 * Fetches income information for a specific account within a specified period.
                 *
                 * @param {string} id - The ID of the account.
                 * @param {string} [period=""] - The period for which to retrieve income information.
                 * @returns {Promise<IncomeResponse>} The response containing income information.
                 */
                getIncome: (id_1, ...args_1) => __awaiter(this, [id_1, ...args_1], void 0, function* (id, period = "") {
                    const params = new URLSearchParams({ period });
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/income?${params}`);
                }),
                /**
                 * Retrieves income records for a specific account.
                 *
                 * Fetches a paginated list of income records for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @param {string} [page=""] - The page number for pagination.
                 * @returns {Promise<IncomeRecordsResponse>} The response containing income records.
                 */
                getIncomeRecords: (id_1, ...args_1) => __awaiter(this, [id_1, ...args_1], void 0, function* (id, page = "") {
                    const params = new URLSearchParams({ page });
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/income-records?${params}`);
                }),
                /**
                 * Retrieves creditworthiness information for a specific account.
                 *
                 * Evaluates and retrieves creditworthiness information for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @param {CreditWorthinessRequest} data - The data required for creditworthiness evaluation.
                 * @returns {Promise<CreditWorthinessResponse>} The response containing creditworthiness information.
                 */
                getCreditWorthiness: (id, data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/creditworthiness`, "POST", { data });
                }),
                /**
                 * Unlinks a specific account.
                 *
                 * Unlinks a previously connected account, removing its association.
                 *
                 * @param {string} id - The ID of the account to unlink.
                 * @returns {Promise<UnlinkResponse>} The response confirming the unlinking of the account.
                 */
                unLink: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/unlink`, "POST");
                }),
            },
            /**
             * Retrieves a statement for a specific account.
             *
             * Fetches an account statement for a specified period in the desired format (JSON or PDF).
             *
             * @param {string} id - The ID of the account.
             * @param {string} period - The period for the statement.
             * @param {string} [output='Json'] - The format of the output (e.g., 'Json' or 'Pdf').
             * @param {string} [format='v2'] - The version of the format (default is 'v2').
             * @returns {Promise<StatementResponseJSON | StatementResponsePDF>} The response containing the account statement.
             */
            statements: (id_1, period_1, ...args_1) => __awaiter(this, [id_1, period_1, ...args_1], void 0, function* (id, period, output = 'Json', format = "v2") {
                const params = new URLSearchParams({
                    period,
                    output,
                    format
                });
                return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/statement?${params}`);
            }),
            /**
             * Retrieves transactions for a specific account.
             *
             * Fetches transactions for a specific account between the start and end dates with various filters.
             *
             * @param {string} id - The ID of the account.
             * @param {string} start - The start date for the transactions.
             * @param {string} end - The end date for the transactions.
             * @param {string} narration - Optional filter for narration.
             * @param {string} type - Optional filter for transaction type.
             * @param {boolean} paginate - Whether to paginate the results.
             * @param {number} limit - The number of results to return per page.
             * @returns {Promise<TransactionsResponse>} The response containing the transactions data.
             */
            transactions: (id, start, end, narration, type, paginate, limit) => __awaiter(this, void 0, void 0, function* () {
                const params = new URLSearchParams({
                    start: String(start),
                    end: String(end),
                    narration: String(narration),
                    type: String(type),
                    paginate: String(paginate),
                    limit: String(limit),
                });
                return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/transactions?${params}`);
            }),
            /**
             * Handles investment-related operations.
             *
             * Provides methods for retrieving investment assets and earnings.
             *
             * @namespace connect.bankData.investment
             */
            investment: {
                /**
                 * Retrieves investment assets for a specific account.
                 *
                 * Fetches information about investment assets held in a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<AssetResponse>} The response containing the investment assets.
                 */
                getAssets: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/assets`);
                }),
                /**
                 * Retrieves earnings from investments for a specific account.
                 *
                 * Fetches earnings information from investments for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<EarningsResponse>} The response containing investment earnings.
                 */
                getEarnings: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.AccountDetails}/${id}/earnings`);
                }),
            },
            /**
             * Handles data enrichment-related operations.
             *
             * Provides methods for categorizing and enriching transaction data.
             *
             * @namespace ConnectMethods.dataEnrichment
             */
            dataEnrichment: {
                /**
                 * Retrieves transaction categorization for a specific account.
                 *
                 * Fetches categorization of transactions for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<CategorisationResponse>} The response containing transaction categorization data.
                 */
                getCategorisation: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/${id}/transaction-categorisation`);
                }),
                /**
                 * Retrieves all transaction categorization records.
                 *
                 * Fetches all records related to transaction categorization.
                 *
                 * @returns {Promise<CategorisationRecordsResponse>} The response containing all categorization records.
                 */
                getCategorisationRecords: () => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/transaction-categorisation/records`);
                }),
                /**
                 * Retrieves metadata for transactions in a specific account.
                 *
                 * Fetches metadata associated with transactions for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<MetadataResponse>} The response containing transaction metadata.
                 */
                getMetadata: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/${id}/transaction-metadata`);
                }),
                /**
                 * Retrieves all transaction metadata records.
                 *
                 * Fetches all records related to transaction metadata.
                 *
                 * @returns {Promise<MetadataRecordsResponse>} The response containing all metadata records.
                 */
                getMetadataRecords: () => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/transaction-metadata/records`);
                }),
                /**
                 * Retrieves statement insights for a specific account.
                 *
                 * Fetches insights derived from account statements for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<StatementInsightResponse>} The response containing statement insights.
                 */
                getStatementInsight: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/${id}/statement-insights`);
                }),
                /**
                 * Retrieves statement insight records for a specific account.
                 *
                 * Fetches all records related to statement insights for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<InsightRecordResponse>} The response containing statement insight records.
                 */
                getInsightRecords: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.Enrichment}/${id}/statement-insights/records`);
                }),
            },
            /**
             * Handles cash flow-related operations.
             *
             * Provides methods for retrieving credit and debit cash flows for an account.
             *
             * @namespace connect.bankData.cashFlow
             */
            cashFlow: {
                /**
                 * Retrieves credit cash flow for a specific account.
                 *
                 * Fetches credit transactions for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<FlowResponse>} The response containing credit cash flow data.
                 */
                getCredit: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.CashFlow}/${id}/credits`);
                }),
                /**
                 * Retrieves debit cash flow for a specific account.
                 *
                 * Fetches debit transactions for a specific account.
                 *
                 * @param {string} id - The ID of the account.
                 * @returns {Promise<FlowResponse>} The response containing debit cash flow data.
                 */
                getDebit: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.CashFlow}/${id}/debits`);
                })
            }
        };
        /**
         * Provides methods for TelCo authentication and account management.
         */
        this.telCo = {
            /**
             * Authentication methods for TelCo services.
             */
            authenticate: {
                /**
                * Logs in a TelCo user with their phone number and provider.
                * @param {Object} data - The login data.
                * @param {string} data.phone - The user's phone number.
                * @param {string} data.provider - The TelCo provider (e.g., MTN, Airtel).
                * @returns {Promise<LoginResponse>} The login response.
                */
                login: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.TelcoLogin, "POST", {
                        data
                    });
                }),
                /**
                 * Verifies an OTP sent to the user's phone during the login process.
                 * @param {Object} data - The OTP verification data.
                 * @param {string} data.otp - The OTP code received by the user.
                 * @param {string} data.session_id - The session_id is a part of the response from authenticate.login.
                 * @returns {Promise<OTPResponse>} The OTP verification response.
                 */
                otpVerification: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.TelcoOTP, "POST", {
                        data: {
                            otp: data.otp
                        }
                    }, {
                        "x-session-id": data.session_id
                    });
                }),
                /**
                 * Exchanges a code for a token, used for further authenticated requests.
                 * @param {Object} data - The token exchange data.
                 * @param {string} data.code - The code received during the authentication process.
                 * @returns {Promise<TokenExchangeResponse>} The token exchange response.
                 */
                tokenExchange: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.TelcoTokenExchange, "POST", {
                        data
                    });
                })
            },
            /**
             * Account management methods for TelCo services.
             */
            account: {
                /**
                 * Retrieves details of a TelCo account by its ID.
                 * @param {string} id - The ID of the TelCo account.
                 * @returns {Promise<DetailsResponse>} The account details response.
                 */
                getDetails: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.TelcoAccount}/${id}`);
                }),
                /**
                 * Retrieves the balance of a TelCo account by its ID.
                 * @param {string} id - The ID of the TelCo account.
                 * @returns {Promise<BalancesResponse>} The account balances response.
                 */
                getBalances: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.TelcoAccount}/${id}/balances`);
                }),
                /**
                 * Retrieves transactions of a TelCo account by its ID with optional filters.
                 * @param {string} id - The ID of the TelCo account.
                 * @param {TransactionsRequest} requestParams - The transaction request parameters.
                 * @returns {Promise<TelcoTransactionsResponse>} The transactions response.
                 */
                getTransactions: (id, requestParams) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c, _d, _e, _f;
                    const searchParams = new URLSearchParams();
                    searchParams.set("start", (_a = requestParams.start) !== null && _a !== void 0 ? _a : "");
                    searchParams.set("end", (_b = requestParams.end) !== null && _b !== void 0 ? _b : "");
                    if (requestParams.narration) {
                        searchParams.set("narration", (_c = requestParams.narration) !== null && _c !== void 0 ? _c : "");
                    }
                    if (requestParams.type) {
                        searchParams.set("type", (_d = requestParams.type) !== null && _d !== void 0 ? _d : "");
                    }
                    if (requestParams.paginate) {
                        searchParams.set("paginate", (_e = requestParams.paginate.toString()) !== null && _e !== void 0 ? _e : "");
                    }
                    if (requestParams.limit) {
                        searchParams.set("limit", (_f = requestParams.limit.toString()) !== null && _f !== void 0 ? _f : "");
                    }
                    return this.request(`${Enum_1.EndPoints.TelcoAccount}/${id}/transactions?${searchParams}`);
                }),
                /**
                 * Retrieves the identity information of a TelCo account by its ID.
                 * @param {string} id - The ID of the TelCo account.
                 * @returns {Promise<TelcoIdentityResponse>} The account identity response.
                 */
                getIdentity: (id) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(`${Enum_1.EndPoints.TelcoAccount}/${id}//identity`);
                }),
            }
        };
    }
    ;
}
exports.ConnectMethods = ConnectMethods;
