import { EndPoints } from "../lib/Enum";
import { CreateCustomerRequest } from "../lib/interfaces/Request";
import { BusinessCustomerRequest, IndividualCustomerRequest, UpdateCustomerDetails } from "../lib/interfaces/Request/Customer";
import { BanksResponse, CreateCustomerResponse } from "../lib/interfaces/Responses";
import { BusinessCustomerResponse, CustomerDataResponse, CustomerTransactionsResponse, DeleteCustomerDetailsResponse, IndividualCustomerResponse, UpdateCustomerDetailsResponse } from "../lib/interfaces/Responses/Customer";

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
}