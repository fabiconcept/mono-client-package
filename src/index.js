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
const Enum_1 = require("../lib/Enum");
const MONO_BASE_URL = "https://api.withmono.com";
class MonoClient {
    constructor(MONO_SECRET_KEY) {
        this.customer = {
            createCustomer: {
                individual: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.Customer, "POST", {
                        data
                    });
                }),
                business: (data) => __awaiter(this, void 0, void 0, function* () {
                    return this.request(Enum_1.EndPoints.Customer, "POST", {
                        data
                    });
                }),
            },
            getCustomer: (customer_id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`);
            }),
            getAllCustomers: (...args_1) => __awaiter(this, [...args_1], void 0, function* (page = "", phone = "", email = "") {
                const queryParams = new URLSearchParams({
                    email,
                    phone,
                    page
                });
                return this.request(`${Enum_1.EndPoints.Customer}?${queryParams.toString()}`);
            }),
            getCustomerTransactions: (customer_id, period, page) => __awaiter(this, void 0, void 0, function* () {
                if (!period || page)
                    throw new Error("Required fields: period & page");
                const queryParams = new URLSearchParams({
                    period,
                    page: String(page)
                });
                return this.request(`${Enum_1.EndPoints.Customer}/${customer_id}/transactions?${queryParams.toString()}`);
            }),
            getAllLinkedAccounts: (...args_1) => __awaiter(this, [...args_1], void 0, function* (page = "", account_number = "", name = "", institution = "") {
                const queryParams = new URLSearchParams({
                    name,
                    institution,
                    account_number,
                    page,
                });
                return this.request(`${Enum_1.EndPoints.AccountDetails}?${queryParams.toString()}`);
            }),
            updateCustomer: (customer_id, body) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`, "PATCH", {
                    data: body
                });
            }),
            deleteCustomer: (customer_id) => __awaiter(this, void 0, void 0, function* () {
                return this.request(`${Enum_1.EndPoints.Customer}${customer_id}`, "DELETE");
            }),
        };
        this.secretKey = MONO_SECRET_KEY;
    }
    request(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, method = 'GET', body) {
            const response = yield fetch(`${MONO_BASE_URL}${endpoint}`, {
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
        });
    }
    getBankList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(Enum_1.EndPoints.GetBankList);
        });
    }
}
exports.default = MonoClient;
