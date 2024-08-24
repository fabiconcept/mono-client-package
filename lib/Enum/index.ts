export enum EndPoints {
    GetBankList = `/v3/banks/list`,
    ExchangeToken = "/v2/accounts/auth",
    AccountDetails = `/v2/accounts`,
    AccountLinking = `/v2/accounts/initiate`,
    Customer = `/v2/customers`,
    InitiateMandate = `/v2/payments/initiate`,
    Mandate = `/v3/payments/mandates`,
    VerifyMandateOTP = `/v3/payments/mandates/verify/otp`,
    Enrichment = `/v1/enrichments`,
    CashFlow = `/accounts`,
    TelcoLogin = `/v2/telecom/auth`,
    TelcoOTP = `/v2/telecom/verify`,
    TelcoTokenExchange = `/account/auth`,
    TelcoAccount = `/account/auth`,
}

export enum Status {
    SUCCESSFUL = "successful",
    FAILED = "failed",
    PENDING = "pending"
}