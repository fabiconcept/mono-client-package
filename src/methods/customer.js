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
exports.CustomerMethods = void 0;
const Enum_1 = require("../../lib/Enum");
class CustomerMethods {
    constructor(request) {
        this.request = request;
        /**
         * Creates a new individual customer.
         *
         * Sends a request to the Mono API to create an individual customer with the provided details.
         *
         * @param data - The details of the individual customer to create.
         * @returns A promise that resolves to the response of the customer creation request.
         * @throws {Error} Throws an error if the request fails or if the response status is not OK.
         */
        this.createCustomer = {
            individual: (data) => __awaiter(this, void 0, void 0, function* () {
                return this.request(Enum_1.EndPoints.Customer, "POST", { data });
            }),
            /**
             * Creates a new business customer.
             *
             * Sends a request to the Mono API to create a business customer with the provided details.
             *
             * @param data - The details of the business customer to create.
             * @returns A promise that resolves to the response of the customer creation request.
             * @throws {Error} Throws an error if the request fails or if the response status is not OK.
             */
            business: (data) => __awaiter(this, void 0, void 0, function* () {
                return this.request(Enum_1.EndPoints.Customer, "POST", { data });
            }),
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
        this.getCustomer = (customer_id) => __awaiter(this, void 0, void 0, function* () {
            return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`);
        });
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
        this.getAllCustomers = (...args_1) => __awaiter(this, [...args_1], void 0, function* (page = "", phone = "", email = "") {
            const queryParams = new URLSearchParams({ email, phone, page });
            return this.request(`${Enum_1.EndPoints.Customer}?${queryParams.toString()}`);
        });
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
        this.getCustomerTransactions = (customer_id, period, page) => __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams({ period, page: String(page) });
            return this.request(`${Enum_1.EndPoints.Customer}/${customer_id}/transactions?${queryParams.toString()}`);
        });
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
        this.updateCustomer = (customer_id, body) => __awaiter(this, void 0, void 0, function* () {
            return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`, "PATCH", { data: body });
        });
        /**
         * Deletes a customer by ID.
         *
         * Sends a request to the Mono API to delete a customer identified by the provided ID.
         *
         * @param customer_id - The ID of the customer to delete.
         * @returns A promise that resolves to the response of the delete request.
         * @throws {Error} Throws an error if the request fails or if the response status is not OK.
         */
        this.deleteCustomer = (customer_id) => __awaiter(this, void 0, void 0, function* () {
            return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`, "DELETE");
        });
    }
}
exports.CustomerMethods = CustomerMethods;
