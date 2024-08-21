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
            createCustomer: (data) => __awaiter(this, void 0, void 0, function* () {
                return this.request(Enum_1.EndPoints.CreateCustomer, "POST", {
                    data
                });
            })
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
