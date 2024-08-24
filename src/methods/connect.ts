import { EndPoints } from "../../lib/Enum";
import { CreditWorthinessRequest } from "../../lib/interfaces/Request/Connect/Account/creditworthiness";
import { AccountLinkingRequest } from "../../lib/interfaces/Request/Connect/Authorization/accountLinking";
import { AccountReauthorizationRequest } from "../../lib/interfaces/Request/Connect/Authorization/accountReauthorisation";
import { ExchangeTokenRequest } from "../../lib/interfaces/Request/Connect/Authorization/exchangeToken";
import { TransactionsRequest } from "../../lib/interfaces/Request/telco/transactions";
import { AccountIdentityResponse, ExchangeTokenResponse } from "../../lib/interfaces/Responses";
import { AccountDetailsResponse, AccountsResponse } from "../../lib/interfaces/Responses/Connect/Account/accounts";
import { AccountBalanceResponse } from "../../lib/interfaces/Responses/Connect/Account/balance";
import { CreditWorthinessResponse } from "../../lib/interfaces/Responses/Connect/Account/creditworthiness";
import { IncomeRecordsResponse, IncomeResponse } from "../../lib/interfaces/Responses/Connect/Account/income";
import { StatementResponseJSON, StatementResponsePDF } from "../../lib/interfaces/Responses/Connect/Account/statement";
import { TransactionsResponse } from "../../lib/interfaces/Responses/Connect/Account/transactions";
import { UnlinkResponse } from "../../lib/interfaces/Responses/Connect/Account/unlink";
import { AccountLinkingResponse } from "../../lib/interfaces/Responses/Connect/Authorization/accountLinking";
import { AccountReauthorizationResponse } from "../../lib/interfaces/Responses/Connect/Authorization/accountReauthorisation";
import { CategorisationRecordsResponse, CategorisationResponse, InsightRecordResponse, MetadataRecordsResponse, MetadataResponse, StatementInsightResponse } from "../../lib/interfaces/Responses/Data Enrichment";
import { AssetResponse } from "../../lib/interfaces/Responses/investment/assets";
import { EarningsResponse } from "../../lib/interfaces/Responses/investment/earnings";
import { LoginResponse, OTPResponse, TokenExchangeResponse } from "../../lib/interfaces/Responses/telcon/auth";
import { BalancesResponse } from "../../lib/interfaces/Responses/telcon/balance";
import { DetailsResponse } from "../../lib/interfaces/Responses/telcon/details";
import { TelcoIdentityResponse } from "../../lib/interfaces/Responses/telcon/identity";
import { TelcoTransactionsResponse } from "../../lib/interfaces/Responses/telcon/transactions";

export class ConnectMethods {
    constructor(private request: (endpoint: string, method?: string, body?: any) => Promise<any>) {}

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
    public bank = {
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
            accountLinking: async (data: AccountLinkingRequest): Promise<AccountLinkingResponse> => {
                return this.request(EndPoints.AccountLinking, "POST", {
                    data
                });
            },

            /**
             * Exchanges a token.
             * 
             * Exchanges an authorization code or token for access credentials.
             * 
             * @param {ExchangeTokenRequest} data - The data required for token exchange.
             * @returns {Promise<ExchangeTokenResponse>} The response from the token exchange request.
             */
            exchangeToken: async (data: ExchangeTokenRequest): Promise<ExchangeTokenResponse> => {
                return this.request(EndPoints.ExchangeToken, "POST", {
                    data
                });
            },

            /**
             * Reauthorizes an account.
             * 
             * Reauthorizes a previously linked account, typically used for refreshing access tokens.
             * 
             * @param {AccountReauthorizationRequest} data - The data required for account reauthorization.
             * @returns {Promise<AccountReauthorizationResponse>} The response from the account reauthorization request.
             */
            accountReauthorisation: async (data: AccountReauthorizationRequest): Promise<AccountReauthorizationResponse> => {
                return this.request(EndPoints.AccountLinking, "POST", {
                    data
                });
            },
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
            getAccounts: async (): Promise<AccountsResponse> => {
                return this.request(`${EndPoints.AccountDetails}`);
            },

            /**
             * Retrieves details of a specific account.
             * 
             * Fetches detailed information about a specific account identified by its ID.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<AccountDetailsResponse>} The response containing the account details.
             */
            getDetails: async (id: string): Promise<AccountDetailsResponse> => {
                return this.request(`${EndPoints.AccountDetails}/${id}`);
            },

            /**
             * Retrieves identity information for a specific account.
             * 
             * Fetches identity information related to a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<AccountIdentityResponse>} The response containing the account's identity information.
             */
            getIdentity: async (id: string): Promise<AccountIdentityResponse> => {
                return this.request(`${EndPoints.AccountDetails}/${id}/identity`);
            },

            /**
             * Retrieves the balance of a specific account.
             * 
             * Fetches the current balance of a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<AccountBalanceResponse>} The response containing the account balance.
             */
            getBalance: async (id: string): Promise<AccountBalanceResponse> => {
                return this.request(`${EndPoints.AccountDetails}/${id}/balance`);
            },

            /**
             * Retrieves income information for a specific account.
             * 
             * Fetches income information for a specific account within a specified period.
             * 
             * @param {string} id - The ID of the account.
             * @param {string} [period=""] - The period for which to retrieve income information.
             * @returns {Promise<IncomeResponse>} The response containing income information.
             */
            getIncome: async (id: string, period: string = ""): Promise<IncomeResponse> => {
                const params = new URLSearchParams({ period });
                return this.request(`${EndPoints.AccountDetails}/${id}/income?${params}`);
            },

            /**
             * Retrieves income records for a specific account.
             * 
             * Fetches a paginated list of income records for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @param {string} [page=""] - The page number for pagination.
             * @returns {Promise<IncomeRecordsResponse>} The response containing income records.
             */
            getIncomeRecords: async (id: string, page: string = ""): Promise<IncomeRecordsResponse> => {
                const params = new URLSearchParams({ page });
                return this.request(`${EndPoints.AccountDetails}/${id}/income-records?${params}`);
            },

            /**
             * Retrieves creditworthiness information for a specific account.
             * 
             * Evaluates and retrieves creditworthiness information for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @param {CreditWorthinessRequest} data - The data required for creditworthiness evaluation.
             * @returns {Promise<CreditWorthinessResponse>} The response containing creditworthiness information.
             */
            getCreditWorthiness: async (id: string, data: CreditWorthinessRequest): Promise<CreditWorthinessResponse> => {
                return this.request(`${EndPoints.AccountDetails}/${id}/creditworthiness`, "POST", { data });
            },

            /**
             * Unlinks a specific account.
             * 
             * Unlinks a previously connected account, removing its association.
             * 
             * @param {string} id - The ID of the account to unlink.
             * @returns {Promise<UnlinkResponse>} The response confirming the unlinking of the account.
             */
            unLink: async (id: string): Promise<UnlinkResponse> => {
                return this.request(`${EndPoints.AccountDetails}/${id}/unlink`, "POST");
            },
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
        statements: async (id: string, period: string, output: string = 'Json', format: string = "v2"): Promise<StatementResponseJSON | StatementResponsePDF> => {
            const params = new URLSearchParams({
                period,
                output,
                format
            })
            return this.request(`${EndPoints.AccountDetails}/${id}/statement?${params}`);
        },

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
        transactions: async (id: string, start: string, end: string, narration: string, type: string, paginate: boolean, limit: number): Promise<TransactionsResponse> => { 
            const params = new URLSearchParams({
                start: String(start),
                end: String(end),
                narration: String(narration),
                type: String(type),
                paginate: String(paginate),
                limit: String(limit),
            })
            return this.request(`${EndPoints.AccountDetails}/${id}/transactions?${params}`);
        },

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
            getAssets: async (id: string): Promise<AssetResponse> => { 
                return this.request(`${EndPoints.AccountDetails}/${id}/assets`);
            },
            
            /**
             * Retrieves earnings from investments for a specific account.
             * 
             * Fetches earnings information from investments for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<EarningsResponse>} The response containing investment earnings.
             */
            getEarnings: async (id: string): Promise<EarningsResponse> => { 
                return this.request(`${EndPoints.AccountDetails}/${id}/earnings`);
            },
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
            getCategorisation: async (id: string): Promise<CategorisationResponse> => {
                return this.request(`${EndPoints.Enrichment}/${id}/transaction-categorisation`);
            },

            /**
             * Retrieves all transaction categorization records.
             * 
             * Fetches all records related to transaction categorization.
             * 
             * @returns {Promise<CategorisationRecordsResponse>} The response containing all categorization records.
             */
            getCategorisationRecords: async (): Promise<CategorisationRecordsResponse> => {
                return this.request(`${EndPoints.Enrichment}/transaction-categorisation/records`);
            },

            /**
             * Retrieves metadata for transactions in a specific account.
             * 
             * Fetches metadata associated with transactions for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<MetadataResponse>} The response containing transaction metadata.
             */
            getMetadata: async (id: string): Promise<MetadataResponse> => {
                return this.request(`${EndPoints.Enrichment}/${id}/transaction-metadata`);
            },

            /**
             * Retrieves all transaction metadata records.
             * 
             * Fetches all records related to transaction metadata.
             * 
             * @returns {Promise<MetadataRecordsResponse>} The response containing all metadata records.
             */
            getMetadataRecords: async (): Promise<MetadataRecordsResponse> => {
                return this.request(`${EndPoints.Enrichment}/transaction-metadata/records`);
            },

            /**
             * Retrieves statement insights for a specific account.
             * 
             * Fetches insights derived from account statements for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<StatementInsightResponse>} The response containing statement insights.
             */
            getStatementInsight: async (id: string): Promise<StatementInsightResponse> => {
                return this.request(`${EndPoints.Enrichment}${id}/statement-insights`);
            },

            /**
             * Retrieves statement insight records for a specific account.
             * 
             * Fetches all records related to statement insights for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<InsightRecordResponse>} The response containing statement insight records.
             */
            getInsightRecords: async (id: string): Promise<InsightRecordResponse> => {
                return this.request(`${EndPoints.Enrichment}${id}/statement-insights/records`);
            },
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
            getCredit: async (id: string): Promise<FlowResponse> => {
                return this.request(`${EndPoints.CashFlow}/${id}/credits`);
            },

            /**
             * Retrieves debit cash flow for a specific account.
             * 
             * Fetches debit transactions for a specific account.
             * 
             * @param {string} id - The ID of the account.
             * @returns {Promise<FlowResponse>} The response containing debit cash flow data.
             */
            getDebit: async (id: string): Promise<FlowResponse> => {
                return this.request(`${EndPoints.CashFlow}/${id}/debits`);
            }
        }
    }

    /**
     * Provides methods for TelCo authentication and account management.
     */
    public telCo = {
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
            login: async(data: { phone: string, provider: string }): Promise<LoginResponse> => {
                return this.request(EndPoints.TelcoLogin, "POST", {
                    data
                });
            },
            
            /**
             * Verifies an OTP sent to the user's phone during the login process.
             * @param {Object} data - The OTP verification data.
             * @param {string} data.otp - The OTP code received by the user.
             * @returns {Promise<OTPResponse>} The OTP verification response.
             */
            otpVerification: async(data: { otp: string}): Promise<OTPResponse> =>{
                return this.request(EndPoints.TelcoOTP, "POST", {
                    data
                });
            },

            /**
             * Exchanges a code for a token, used for further authenticated requests.
             * @param {Object} data - The token exchange data.
             * @param {string} data.code - The code received during the authentication process.
             * @returns {Promise<TokenExchangeResponse>} The token exchange response.
             */
            tokenExchange: async(data: { code: string}): Promise<TokenExchangeResponse> =>{
                return this.request(EndPoints.TelcoTokenExchange, "POST", {
                    data
                });
            }
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
            getDetails: async (id: string): Promise<DetailsResponse> => {
                return this.request(`${EndPoints.TelcoAccount}${id}`);
            },
            
            /**
             * Retrieves the balance of a TelCo account by its ID.
             * @param {string} id - The ID of the TelCo account.
             * @returns {Promise<BalancesResponse>} The account balances response.
             */
            getBalances: async (id: string): Promise<BalancesResponse> => {
                return this.request(`${EndPoints.TelcoAccount}${id}/balances`);
            },
            
            /**
             * Retrieves transactions of a TelCo account by its ID with optional filters.
             * @param {string} id - The ID of the TelCo account.
             * @param {TransactionsRequest} requestParams - The transaction request parameters.
             * @returns {Promise<TelcoTransactionsResponse>} The transactions response.
             */
            getTransactions: async (id: string, requestParams: TransactionsRequest): Promise<TelcoTransactionsResponse> => {
                const searchParams = new URLSearchParams();
                
                searchParams.set("start", requestParams.start ?? "");
                searchParams.set("end", requestParams.end ?? "");
                
                if (requestParams.narration) {
                    searchParams.set("narration", requestParams.narration ?? "");
                }
                if (requestParams.type) {
                    searchParams.set("type", requestParams.type ?? "");
                }
                if (requestParams.paginate) {
                    searchParams.set("paginate", requestParams.paginate.toString() ?? "");
                }
                if (requestParams.limit) {
                    searchParams.set("limit", requestParams.limit.toString() ?? "");
                }
                
                return this.request(`${EndPoints.TelcoAccount}${id}/transactions`);
            },
            
            /**
             * Retrieves the identity information of a TelCo account by its ID.
             * @param {string} id - The ID of the TelCo account.
             * @returns {Promise<TelcoIdentityResponse>} The account identity response.
             */
            getIdentity: async (id: string): Promise<TelcoIdentityResponse> => {
                return this.request(`${EndPoints.TelcoAccount}${id}//identity`);
            },
        }
    }

    
}
