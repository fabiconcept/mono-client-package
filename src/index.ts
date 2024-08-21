import { EndPoints } from "../lib/Enum";
import { CreateCustomerRequest } from "../lib/interfaces/Mono";
import { BanksResponse, CreateCustomerResponse } from "../lib/interfaces/Mono Api Responses";

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

    public 

    public customer = {
        createCustomer: async (data: CreateCustomerRequest): Promise<CreateCustomerResponse> => {
            return this.request(EndPoints.CreateCustomer, "POST", {
                data
            });
        }

        
    }

    
}