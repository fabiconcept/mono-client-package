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
const customer_1 = require("./methods/customer");
const connect_1 = require("./methods/connect");
const directPay_1 = require("./methods/directPay");
const MONO_BASE_URL = "https://api.withmono.com";
class MonoClient {
    constructor(MONO_SECRET_KEY) {
        this.secretKey = MONO_SECRET_KEY;
        this.connect = new connect_1.ConnectMethods(this.request.bind(this));
        this.customer = new customer_1.CustomerMethods(this.request.bind(this));
        this.directPay = new directPay_1.DirectPayMethods(this.request.bind(this));
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
    /**
     * Retrieves a list of banks.
     *
     * This method sends a request to the Mono API to fetch a list of available banks. The response includes details about the banks that are supported by Mono.
     *
     * @returns A promise that resolves to a `BanksResponse` object containing the list of banks.
     *
     * @throws {Error} Throws an error if the request fails or if the response status is not OK.
     */
    getBankList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(Enum_1.EndPoints.GetBankList);
        });
    }
}
exports.default = MonoClient;
