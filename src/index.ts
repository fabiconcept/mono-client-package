import { EndPoints } from "../lib/Enum";
import { AccountLinkingRequest } from "../lib/interfaces/Request/Connect/Authorization/accountLinking";
import { AccountReauthorizationRequest } from "../lib/interfaces/Request/Connect/Authorization/accountReauthorisation";
import { ExchangeTokenRequest } from "../lib/interfaces/Request/Connect/Authorization/exchangeToken";
import { BusinessCustomerRequest, IndividualCustomerRequest, UpdateCustomerDetails } from "../lib/interfaces/Request/Customer";
import { AccountIdentityResponse, BanksResponse} from "../lib/interfaces/Responses";
import { AccountLinkingResponse } from "../lib/interfaces/Responses/Connect/Authorization/accountLinking";
import { AccountReauthorizationResponse } from "../lib/interfaces/Responses/Connect/Authorization/accountReauthorisation";
import { AccountDetailsResponse, AccountsResponse } from "../lib/interfaces/Responses/Connect/Account/accounts";
import { BusinessCustomerResponse, CustomerDataResponse, CustomerTransactionsResponse, DeleteCustomerDetailsResponse, IndividualCustomerResponse, UpdateCustomerDetailsResponse } from "../lib/interfaces/Responses/Customer";
import { ExchangeTokenResponse } from "../lib/interfaces/Responses/Connect/Authorization/exchangeToken";
import { IncomeRecordsResponse, incomeResponse } from "../lib/interfaces/Responses/Connect/Account/income";
import { AccountBalanceResponse } from "../lib/interfaces/Responses/Connect/Account/balance";
import { CreditWorthinessRequest } from "../lib/interfaces/Request/Connect/Account/creditworthiness";
import { CreditWorthinessResponse } from "../lib/interfaces/Responses/Connect/Account/creditworthiness";
import { UnlinkResponse } from "../lib/interfaces/Responses/Connect/Account/unlink";
import { StatementResponseJSON, StatementResponsePDF } from "../lib/interfaces/Responses/Connect/Account/statement";
import { TransactionsResponse } from "../lib/interfaces/Responses/Connect/Account/transactions";
import { AssetResponse } from "../lib/interfaces/Responses/investment/assets";
import { EarningsResponse } from "../lib/interfaces/Responses/investment/earnings";

const MONO_BASE_URL = "https://api.withmono.com";

export default class MonoClient {
    private secretKey: string;

    constructor(MONO_SECRET_KEY: string) { 
        this.secretKey = MONO_SECRET_KEY;
    }

    private async request(endpoint: string, method: string = 'GET', body?: any) {
        const response = await fetch(`${MONO_BASE_URL}${endpoint}`, {
            method,
            headers: {
                'mono-sec-key': `${this.secretKey}`,
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }

        return response.json();
    }

    async getBankList(): Promise<BanksResponse> {
        return this.request(EndPoints.GetBankList);
    }

    public customer = {
        createCustomer: {
            individual: async (data: IndividualCustomerRequest): Promise<IndividualCustomerResponse> => {
                return this.request(EndPoints.Customer, "POST", {
                    data
                });
            },
            
            business: async (data: BusinessCustomerRequest): Promise<BusinessCustomerResponse> => {
                return this.request(EndPoints.Customer, "POST", {
                    data
                });
            },
        },

        getCustomer: async (customer_id: string): Promise<CustomerDataResponse> => {
            return this.request(`${EndPoints.Customer}${customer_id}`);
        },
        
        getAllCustomers: async (page: string ="", phone: string = "", email: string = ""): Promise<CustomerDataResponse> => {
            const queryParams = new URLSearchParams({
                email,
                phone,
                page
            });

            return this.request(`${EndPoints.Customer}?${queryParams.toString()}`);
        },
        
        getCustomerTransactions: async (customer_id: string, period: string, page: number): Promise<CustomerTransactionsResponse> => {
            if (!period || page) throw new Error("Required fields: period & page");

            const queryParams = new URLSearchParams({
                period,
                page: String(page)
            });

            return this.request(`${EndPoints.Customer}/${customer_id}/transactions?${queryParams.toString()}`);
        },

        getAllLinkedAccounts: async (page: string ="", account_number: string = "", name: string = "", institution: string = ""): Promise<CustomerDataResponse> => {
            const queryParams = new URLSearchParams({
                name,
                institution,
                account_number,
                page,
            });

            return this.request(`${EndPoints.AccountDetails}?${queryParams.toString()}`);
        },

        updateCustomer: async (customer_id: string, body: UpdateCustomerDetails): Promise<UpdateCustomerDetailsResponse> => {
            return this.request(`${EndPoints.Customer}${customer_id}`, "PATCH", {
                data: body
            });
        },
        
        deleteCustomer: async (customer_id: string,): Promise<DeleteCustomerDetailsResponse> => {
            return this.request(`${EndPoints.Customer}${customer_id}`, "DELETE");
        },

    }   

    public connect = {
        bankData: {
            authorization: {
                accountLinking: async (data: AccountLinkingRequest): Promise<AccountLinkingResponse> => {
                    return this.request(EndPoints.AccountLinking, "POST", {
                        data
                    });
                },
                exchangeToken: async (data: ExchangeTokenRequest): Promise<ExchangeTokenResponse> => {
                    return this.request(EndPoints.ExchangeToken, "POST", {
                        data
                    });
                },
                accountReauthorisation: async (data: AccountReauthorizationRequest): Promise<AccountReauthorizationResponse> => {
                    return this.request(EndPoints.AccountLinking, "POST", {
                        data
                    });
                },
            },

            account : {
                getAcounts: async(): Promise<AccountsResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}`);
                },

                getDetails: async(id: string): Promise<AccountDetailsResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}/${id}`);
                },
                
                getIdentity: async(id: string): Promise<AccountIdentityResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}/${id}/identity`);
                },

                getBalance: async(id: string): Promise<AccountBalanceResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}/${id}/balance`);
                },

                getIncome: async(id: string, period: string = ""): Promise<incomeResponse> =>{
                    const params = new URLSearchParams({
                        period
                    });

                    return this.request(`${EndPoints.AccountDetails}/${id}/income?${params}`);
                },
                
                getIncomeRecords: async(id: string, page: string = ""): Promise<IncomeRecordsResponse> =>{
                    const params = new URLSearchParams({
                        page
                    });

                    return this.request(`${EndPoints.AccountDetails}/${id}/income-records?${params}`);
                },

                getCreditWorthiness: async(id:string, data: CreditWorthinessRequest): Promise<CreditWorthinessResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}/${id}/creditworthiness`, "POST", {
                        data
                    });
                },
                
                unLink: async(id:string): Promise<UnlinkResponse> =>{
                    return this.request(`${EndPoints.AccountDetails}/${id}/unlink`, "POST");
                },
            },
            
            statements: async (id: string, period: string, output: string = 'Json', format: string = "v2"): Promise<StatementResponseJSON | StatementResponsePDF> => {
                const params = new URLSearchParams({
                    period,
                    output,
                    format
                })
                return this.request(`${EndPoints.AccountDetails}/${id}/statement?${params}`);
            },

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

            investment: {
                getAssets: async (id: string): Promise<AssetResponse> => { 
                    return this.request(`${EndPoints.AccountDetails}/${id}/assets`);
                },
                
                getEarnings: async (id: string): Promise<EarningsResponse> => { 
                    return this.request(`${EndPoints.AccountDetails}/${id}/earnings`);
                },
            }
        }
    }
}