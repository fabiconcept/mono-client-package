export enum EndPoints {
    GetBankList = `/v3/banks/list`,
    ExchangeToken = "/v2/accounts/auth",
    AccountDetails = `/v2/accounts/`,
    CreateCustomer = `/v2/customers`,
    InitiateMandate = `/v2/payments/initiate`,
    CreateMandate = `/v3/payments/mandates`,
    VerifyMandateOTP = `v3/payments/mandates/verify/otp`,
}