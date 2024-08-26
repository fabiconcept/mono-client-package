export enum EndPoints {
    GetBankList = `/v3/banks/list`,
    GetBankCoverage = `/v3/institutions`,
    ExchangeToken = "/v2/accounts/auth",
    AccountDetails = `/v2/accounts`,
    AccountLinking = `/v2/accounts/initiate`,
    Customer = `/v2/customers`,
    InitiateMandate = `/v2/payments/initiate`,
    CreateMandate = `/v3/payments/mandates`,
    Payment = `/v2/payments/initiate`,
    InitiateOneTimePayment = `/v2/payments/initiate`,
    VerifyOneTimePayment = `/v2/payments/verify`,
    VerifyMandateOTP = `/v3/payments/mandates/verify/otp`,
    Enrichment = `/v1/enrichments`,
    CashFlow = `/accounts`,
    TelcoLogin = `/v2/telecom/auth`,
    TelcoOTP = `/v2/telecom/verify`,
    TelcoTokenExchange = `/account/auth`,
    TelcoAccount = `/account/auth`,
    Payouts = `/v2/payments/payouts`,
    PayoutsRefund = `/v2/payments/refund`,
    BVN = `/v2/lookup/bvn`,
    cacLookUp = `/v3/lookup`,
}

export enum Status {
    SUCCESSFUL = "successful",
    FAILED = "failed",
    PENDING = "pending"
}