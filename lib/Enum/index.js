"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPoints = void 0;
var EndPoints;
(function (EndPoints) {
    EndPoints["GetBankList"] = "/v3/banks/list";
    EndPoints["ExchangeToken"] = "/v2/accounts/auth";
    EndPoints["AccountDetails"] = "/v2/accounts/";
    EndPoints["Customer"] = "/v2/customers";
    EndPoints["InitiateMandate"] = "/v2/payments/initiate";
    EndPoints["CreateMandate"] = "/v3/payments/mandates";
    EndPoints["VerifyMandateOTP"] = "v3/payments/mandates/verify/otp";
})(EndPoints || (exports.EndPoints = EndPoints = {}));
