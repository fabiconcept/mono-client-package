import { EndPoints } from "../lib/Enum";
import { CustomerMethods } from "./methods/customer";
import { ConnectMethods } from "./methods/connect";
import { BanksResponse } from "../lib/interfaces/Responses";
import { DirectPayMethods } from "./methods/directPay";

const MONO_BASE_URL = "https://api.withmono.com";

export default class MonoClient {
    private secretKey: string;
    public customer: CustomerMethods;
    public connect: ConnectMethods;
    public directPay: DirectPayMethods;

    constructor(MONO_SECRET_KEY: string) {
        this.secretKey = MONO_SECRET_KEY;
        
        this.connect = new ConnectMethods(this.request.bind(this));
        this.customer = new CustomerMethods(this.request.bind(this));
        this.directPay = new DirectPayMethods(this.request.bind(this));

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

    /**
     * Retrieves a list of banks.
     * 
     * This method sends a request to the Mono API to fetch a list of available banks. The response includes details about the banks that are supported by Mono.
     * 
     * @returns A promise that resolves to a `BanksResponse` object containing the list of banks.
     * 
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    async getBankList(): Promise<BanksResponse> {
        return this.request(EndPoints.GetBankList);
    }
}