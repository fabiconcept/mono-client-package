import { EndPoints } from '../../lib/Enum';
import { BusinessCustomerRequest, IndividualCustomerRequest, UpdateCustomerDetails } from '../../lib/interfaces/Request/Customer';
import { IndividualCustomerResponse, BusinessCustomerResponse, CustomerDataResponse, UpdateCustomerDetailsResponse, DeleteCustomerDetailsResponse, CustomerTransactionsResponse } from '../../lib/interfaces/Responses/Customer'; // Adjust imports as necessary

export class CustomerMethods {
    constructor(private request: (endpoint: string, method?: string, body?: any) => Promise<any>) { }

    /**
     * Creates a new individual customer.
     * 
     * Sends a request to the Mono API to create an individual customer with the provided details.
     * 
     * @param data - The details of the individual customer to create.
     * @returns A promise that resolves to the response of the customer creation request.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public createCustomer = {
        individual: async (data: IndividualCustomerRequest): Promise<IndividualCustomerResponse> => {
            return this.request(EndPoints.Customer, "POST", { data });
        },

        /**
         * Creates a new business customer.
         * 
         * Sends a request to the Mono API to create a business customer with the provided details.
         * 
         * @param data - The details of the business customer to create.
         * @returns A promise that resolves to the response of the customer creation request.
         * @throws {Error} Throws an error if the request fails or if the response status is not OK.
         */
        business: async (data: BusinessCustomerRequest): Promise<BusinessCustomerResponse> => {
            return this.request(EndPoints.Customer, "POST", { data });
        },
    };

    /**
     * Retrieves customer data by ID.
     * 
     * Sends a request to the Mono API to fetch data for a customer identified by the provided ID.
     * 
     * @param customer_id - The ID of the customer to retrieve.
     * @returns A promise that resolves to the customer's data.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public getCustomer = async (customer_id: string): Promise<CustomerDataResponse> => {
        return this.request(`${EndPoints.Customer}${customer_id}`);
    };

    /**
     * Retrieves all customers with optional filters.
     * 
     * Sends a request to the Mono API to fetch a list of customers. You can filter results by page, phone, or email.
     * 
     * @param page - The page number for pagination.
     * @param phone - Optional phone filter.
     * @param email - Optional email filter.
     * @returns A promise that resolves to a list of customers.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public getAllCustomers = async (page: string = "", phone: string = "", email: string = ""): Promise<CustomerDataResponse> => {
        const queryParams = new URLSearchParams({ email, phone, page });
        return this.request(`${EndPoints.Customer}?${queryParams.toString()}`);
    };

    /**
     * Retrieves customer transactions by customer ID and period.
     * 
     * Sends a request to the Mono API to fetch transactions for a specific customer within a given period.
     * 
     * @param customer_id - The ID of the customer.
     * @param period - The period for which to retrieve transactions.
     * @param page - The page number for pagination.
     * @returns A promise that resolves to the customer's transaction data.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public getCustomerTransactions = async (customer_id: string, period: string, page: number): Promise<CustomerTransactionsResponse> => {
        const queryParams = new URLSearchParams({ period, page: String(page) });
        return this.request(`${EndPoints.Customer}/${customer_id}/transactions?${queryParams.toString()}`);
    };

    /**
     * Updates customer details.
     * 
     * Sends a request to the Mono API to update the details of an existing customer.
     * 
     * @param customer_id - The ID of the customer to update.
     * @param body - The new details of the customer.
     * @returns A promise that resolves to the response of the update request.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public updateCustomer = async (customer_id: string, body: UpdateCustomerDetails): Promise<UpdateCustomerDetailsResponse> => {
        return this.request(`${EndPoints.Customer}${customer_id}`, "PATCH", { data: body });
    };

    /**
     * Deletes a customer by ID.
     * 
     * Sends a request to the Mono API to delete a customer identified by the provided ID.
     * 
     * @param customer_id - The ID of the customer to delete.
     * @returns A promise that resolves to the response of the delete request.
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    public deleteCustomer = async (customer_id: string): Promise<DeleteCustomerDetailsResponse> => {
        return this.request(`${EndPoints.Customer}${customer_id}`, "DELETE");
    };
}
