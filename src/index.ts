import { EndPoints } from "../lib/Enum";
import { CustomerMethods } from "./methods/customer";
import { ConnectMethods } from "./methods/connect";
import { BanksResponse } from "../lib/interfaces/Responses";

const MONO_BASE_URL = "https://api.withmono.com";

export default class MonoClient {
    private secretKey: string;
    public customer: CustomerMethods;
    public connect: ConnectMethods;

    constructor(MONO_SECRET_KEY: string) {
        this.secretKey = MONO_SECRET_KEY;
        
        this.connect = new ConnectMethods(this.request.bind(this));

        /**
         * Initializes the `CustomerMethods` instance.
         * 
         * This constructor binds the `request` method to the current context and passes it to the `CustomerMethods` class.
         * The `CustomerMethods` class provides methods for interacting with the Mono API's customer-related endpoints.
         * 
         * The `CustomerMethods` class allows you to:
         * - Create new individual or business customers.
         * - Retrieve customer details and lists.
         * - Update and delete customer information.
         * - Fetch customer transactions.
         * 
         * For more information on the customer-related operations, refer to the [Mono API documentation](https://docs.mono.co/docs/customers).
         * 
         * @example
         * const client = new MonoClient('your-secret-key');
         * const customerMethods = new CustomerMethods(client.request.bind(client));
         * 
         * @type {CustomerMethods}
         */
        this.customer = new CustomerMethods(this.request.bind(this));

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