"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.EndPoints = void 0;
var EndPoints;
(function (EndPoints) {
    EndPoints["GetBankList"] = "/v3/banks/list";
    EndPoints["ExchangeToken"] = "/v2/accounts/auth";
    EndPoints["AccountDetails"] = "/v2/accounts";
    EndPoints["AccountLinking"] = "/v2/accounts/initiate";
    EndPoints["Customer"] = "/v2/customers";
    EndPoints["InitiateMandate"] = "/v2/payments/initiate";
    EndPoints["Mandate"] = "/v3/payments/mandates";
    EndPoints["VerifyMandateOTP"] = "/v3/payments/mandates/verify/otp";
    EndPoints["Enrichment"] = "/v1/enrichments";
    EndPoints["CashFlow"] = "/accounts";
    EndPoints["TelcoLogin"] = "/v2/telecom/auth";
    EndPoints["TelcoOTP"] = "/v2/telecom/verify";
    EndPoints["TelcoTokenExchange"] = "/account/auth";
    EndPoints["TelcoAccount"] = "/account/auth";
})(EndPoints || (exports.EndPoints = EndPoints = {}));
var Status;
(function (Status) {
    Status["SUCCESSFUL"] = "successful";
    Status["FAILED"] = "failed";
    Status["PENDING"] = "pending";
})(Status || (exports.Status = Status = {}));
