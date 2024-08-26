# MonoClient

**MonoClient** is a TypeScript package that provides a simple and intuitive way to interact with the Mono API. Whether you're managing customer data, retrieving bank lists, or performing other API operations, MonoClient makes integration effortless and efficient.

## Features

- **Easy Integration**: Connect to the Mono API with minimal setup.
- **Intuitive Methods**: Access common API endpoints with clearly defined methods.
- **TypeScript Support**: Leverage TypeScript for type safety and better development experience.
- **Error Handling**: Built-in error handling for robust and reliable API interactions.

## Installation

You can install MonoClient via npm:

```bash
npm install mono-client
```

Or with yarn:

```bash
yarn add mono-client
```

## Usage

Here's how you can get started with MonoClient:

### Initialization

First, create an instance of `MonoClient` with your Mono API secret key:

```typescript
import MonoClient from 'mono-client';

const client = new MonoClient('your-secret-key');
```

### Methods
### Methods

| mono-client direct Method                                                                 | Description                                              |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| `getBankList()`                                                        | Retrieves a list of banks.                                    |
| `getBankCoverage()`                                                    | Retrieves the coverage details for supported banks.           |
| `connect`                                                              | Contains methods for managing connections and authorizations. |
| `customer`                                                             | Contains methods for managing customer data and interactions. |
| `directPay`                                                            | Contains methods for handling one-time and recurring payments.|
| `lookUp`                                                               | Contains methods for performing various lookups, such as CAC, TIN, NIN, and more. |

### Example Usage:

```typescript
    import MonoClient from 'mono-client';

    const monoClient = new MonoClient({ apiKey: 'your-api-key-here' });

    // 1. Retrieve a list of banks
    monoClient.getBankList()
        .then(banks => {
            console.log("List of Banks:", banks);
        })
        .catch(error => {
            console.error("Error fetching bank list:", error);
        });

    // 2. Retrieve coverage details for supported banks
    monoClient.getBankCoverage()
        .then(coverage => {
            console.log("Bank Coverage Details:", coverage);
        })
        .catch(error => {
            console.error("Error fetching bank coverage details:", error);
        });
```

### Explanation:

1. **`getBankList()`**:
   - **Description**: This method fetches a list of all the banks supported by the Mono API. The list typically includes the bank's name, code, and other relevant details.
   - **Usage**: The example demonstrates how to use the `getBankList()` method to retrieve and print the list of banks.

2. **`getBankCoverage()`**:
   - **Description**: This method retrieves detailed information about the coverage of supported banks. It includes details on which banks are supported for specific features or operations.
   - **Usage**: The example shows how to call the `getBankCoverage()` method to fetch and display the coverage details. 

These examples illustrate how easy it is to integrate the `mono-client` library's direct methods into your project.

#### client.connect 
Below is a table summarizing the methods in the `ConnectMethods` class, categorized by their respective groups:

| **Category**            | **Method**                   | **Description**                                                                                       | **Parameters**                                                                                                                                       | **Returns**                                |
|-------------------------|------------------------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **Authorization**       | `accountLinking`             | Links a new account to the service.                                                                    | `data: AccountLinkingRequest`                                                                                                                        | `Promise<AccountLinkingResponse>`          |
|                         | `exchangeToken`              | Exchanges an authorization token for access credentials.                                               | `data: ExchangeTokenRequest`                                                                                                                         | `Promise<ExchangeTokenResponse>`           |
|                         | `accountReauthorisation`     | Reauthorizes an existing account, typically to refresh access tokens.                                   | `data: AccountReauthorizationRequest`                                                                                                                | `Promise<AccountReauthorizationResponse>`  |
| **Account Management**  | `getAccounts`                | Retrieves all accounts associated with the user.                                                       | None                                                                                                                                                 | `Promise<AccountsResponse>`                |
|                         | `getDetails`                 | Fetches details of a specific account by ID.                                                           | `id: string`                                                                                                                                          | `Promise<AccountDetailsResponse>`          |
|                         | `getIdentity`                | Retrieves the identity information associated with an account.                                         | `id: string`                                                                                                                                          | `Promise<AccountIdentityResponse>`         |
|                         | `getBalance`                 | Fetches the current balance of a specific account.                                                     | `id: string`                                                                                                                                          | `Promise<AccountBalanceResponse>`          |
|                         | `getIncome`                  | Retrieves income information for an account over a specified period.                                   | `id: string`, `period: string = ""`                                                                                                                  | `Promise<IncomeResponse>`                  |
|                         | `getIncomeRecords`           | Retrieves a paginated list of income records for a specific account.                                    | `id: string`, `page: string = ""`                                                                                                                    | `Promise<IncomeRecordsResponse>`           |
|                         | `getCreditWorthiness`        | Evaluates and retrieves creditworthiness information for a specific account.                            | `id: string`, `data: CreditWorthinessRequest`                                                                                                        | `Promise<CreditWorthinessResponse>`        |
|                         | `unLink`                     | Unlinks a previously connected account.                                                                | `id: string`                                                                                                                                          | `Promise<UnlinkResponse>`                  |
| **Statements**          | `statements`                 | Fetches an account statement for a specified period in the desired format (JSON or PDF).               | `id: string`, `period: string`, `output: string = 'Json'`, `format: string = "v2"`                                                                    | `Promise<StatementResponseJSON \| StatementResponsePDF>` |
| **Transactions**        | `transactions`               | Retrieves transactions for an account within a specified date range and criteria.                      | `id: string`, `start: string`, `end: string`, `narration: string`, `type: string`, `paginate: boolean`, `limit: number`                               | `Promise<TransactionsResponse>`            |
| **Investment**          | `getAssets`                  | Retrieves information about investment assets held in a specific account.                               | `id: string`                                                                                                                                          | `Promise<AssetResponse>`                   |
|                         | `getEarnings`                | Fetches earnings from investments for a specific account.                                              | `id: string`                                                                                                                                          | `Promise<EarningsResponse>`                |
| **Data Enrichment**     | `getCategorisation`          | Fetches transaction categorization for a specific account.                                             | `id: string`                                                                                                                                          | `Promise<CategorisationResponse>`          |
|                         | `getCategorisationRecords`   | Retrieves all transaction categorization records.                                                      | None                                                                                                                                                 | `Promise<CategorisationRecordsResponse>`   |
|                         | `getMetadata`                | Fetches metadata associated with transactions for a specific account.                                  | `id: string`                                                                                                                                          | `Promise<MetadataResponse>`                |
|                         | `getMetadataRecords`         | Retrieves all transaction metadata records.                                                            | None                                                                                                                                                 | `Promise<MetadataRecordsResponse>`         |
|                         | `getStatementInsight`        | Fetches insights derived from account statements for a specific account.                               | `id: string`                                                                                                                                          | `Promise<StatementInsightResponse>`        |
|                         | `getInsightRecords`          | Retrieves all records related to statement insights for a specific account.                             | `id: string`                                                                                                                                          | `Promise<InsightRecordsResponse>`          |
| **Cash Flow**           | `getCredit`                  | Retrieves credit transactions for a specific account.                                                  | `id: string`                                                                                                                                          | `Promise<CreditTransactionsResponse>`      |
|                         | `getDebit`                   | Retrieves debit transactions for a specific account.                                                   | `id: string`                                                                                                                                          | `Promise<DebitTransactionsResponse>`       |

This table organizes the methods within the `ConnectMethods` class based on their functionality, providing a quick reference for each method's purpose, required parameters, and return type.

### Example Usage:

```typescript
import MonoClient from 'mono-client';

const monoClient = new MonoClient({ apiKey: 'your-api-key-here' });

// Sample data for account linking and token exchange
const accountLinkingData = { /* Your account linking data here */ };
const tokenExchangeData = { /* Your token exchange data here */ };

async function linkAccount() {
    try {
        const response = await monoClient.connect.bankData.authorization.accountLinking(accountLinkingData);
        console.log("Account Linking Response:", response);
    } catch (error) {
        console.error("Error linking account:", error);
    }
}

async function exchangeToken() {
    try {
        const response = await monoClient.connect.bankData.authorization.exchangeToken(tokenExchangeData);
        console.log("Token Exchange Response:", response);
    } catch (error) {
        console.error("Error exchanging token:", error);
    }
}

// Call the functions
linkAccount();
exchangeToken();
```

### Explanation:

1. **`linkAccount()`**:
   - **Description**: This function uses the `accountLinking` method to link a bank account. The `try-catch` block is used to handle the success and failure of the operation.
   - **Usage**: The function is called to execute the account linking process, and results or errors are handled and logged appropriately.

2. **`exchangeToken()`**:
   - **Description**: This function uses the `exchangeToken` method to exchange an authorization token for access credentials. It also uses `try-catch` for error handling.
   - **Usage**: The function is invoked to perform the token exchange operation, with results or errors being managed and logged.

These examples illustrate how to use the authorization methods from the connect.bankData namespace in the mono-client library to handle account linking and token exchange operations.


#### client.customer

Here is a table summarizing the methods in the `CustomerMethods` class:

| **Method Name**             | **Description**                                                                                     | **HTTP Method** | **Endpoint**                                                                                  | **Request Body**                       | **Response Type**                       |
|-----------------------------|-----------------------------------------------------------------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------|----------------------------------------|-----------------------------------------|
| `createCustomer.individual` | Creates a new individual customer.                                                                  | POST            | `EndPoints.Customer`                                                                          | `IndividualCustomerRequest`            | `IndividualCustomerResponse`            |
| `createCustomer.business`   | Creates a new business customer.                                                                    | POST            | `EndPoints.Customer`                                                                          | `BusinessCustomerRequest`              | `BusinessCustomerResponse`              |
| `getCustomer`               | Retrieves customer data by ID.                                                                      | GET             | `${EndPoints.Customer}${customer_id}`                                                         | None                                   | `CustomerDataResponse`                  |
| `getAllCustomers`           | Retrieves all customers with optional filters (page, phone, email).                                 | GET             | `${EndPoints.Customer}?page={page}&phone={phone}&email={email}`                               | None                                   | `CustomerDataResponse`                  |
| `getCustomerTransactions`   | Retrieves customer transactions by customer ID and period, with optional pagination (page).         | GET             | `${EndPoints.Customer}/${customer_id}/transactions?period={period}&page={page}`               | None                                   | `CustomerTransactionsResponse`          |
| `updateCustomer`            | Updates the details of an existing customer.                                                        | PATCH           | `${EndPoints.Customer}${customer_id}`                                                         | `UpdateCustomerDetails`                | `UpdateCustomerDetailsResponse`         |
| `deleteCustomer`            | Deletes a customer by ID.                                                                           | DELETE          | `${EndPoints.Customer}${customer_id}`                                                         | None                                   | `DeleteCustomerDetailsResponse`         |


This table organizes the details of each method within the `CustomerMethods` class, including the HTTP method used, the endpoint, the request body (if any), and the expected response type.

### Example Usage:

```typescript
import MonoClient from 'mono-client';

const monoClient = new MonoClient({ apiKey: 'your-api-key-here' });

// 1. Create a new individual customer
const individualCustomerData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    date_of_birth: "1990-01-01",
    // Add other required fields as per API documentation
};

monoClient.createCustomer.individual(individualCustomerData)
    .then(response => {
        console.log("Individual Customer Created:", response);
    })
    .catch(error => {
        console.error("Error creating individual customer:", error);
    });

// 2. Create a new business customer
const businessCustomerData = {
    business_name: "Tech Solutions Ltd.",
    contact_email: "contact@techsolutions.com",
    phone: "0987654321",
    registration_number: "1234567890",
    // Add other required fields as per API documentation
};

monoClient.createCustomer.business(businessCustomerData)
    .then(response => {
        console.log("Business Customer Created:", response);
    })
    .catch(error => {
        console.error("Error creating business customer:", error);
    });
```

### Explanation:

1. **`createCustomer.individual(data: IndividualCustomerRequest)`**:
   - **Description**: This method sends a request to the Mono API to create an individual customer with the provided details, such as name, email, phone number, and date of birth.
   - **Usage**: The example demonstrates how to use the `createCustomer.individual` method to create a new individual customer and handle the response or error.

2. **`createCustomer.business(data: BusinessCustomerRequest)`**:
   - **Description**: This method sends a request to the Mono API to create a business customer with the provided details, including business name, contact email, phone number, and registration number.
   - **Usage**: The example shows how to call the `createCustomer.business` method to create a new business customer and process the response or error.

These examples illustrate how to use the `createCustomer` methods of the `mono-client` library to create individual and business customers. Adjust the data fields according to the API's requirements.


#### client.directPay
Below is a table outlining the `DirectPayMethods` along with the corresponding endpoints, methods, and descriptions for each of the actions:

| **Method Name**                  | **Endpoint**                               | **HTTP Method** | **Description**                                                                                         |
|----------------------------------|--------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------|
| `oneTime.initiatePayment`        | `EndPoints.InitiateOneTimePayment`          | POST            | Initiates a one-time payment request.                                                                   |
| `oneTime.verifyPayment`          | `EndPoints.VerifyOneTimePayment`            | POST            | Verifies the status of a one-time payment using a reference ID.                                         |
| `oneTime.getAllTransactions`     | `EndPoints.Payment/transactions`            | GET             | Retrieves a list of transactions for one-time payments based on provided filters.                       |
| `reccurring.initiate`            | `EndPoints.InitiateMandate`                 | POST            | Initiates a recurring payment mandate authorization.                                                    |
| `reccurring.createMandate`       | `EndPoints.CreateMandate`                   | POST            | Creates a new recurring payment mandate.                                                                |
| `reccurring.verifyOTP.setMethod` | `EndPoints.VerifyMandateOTP`                | POST            | Sets the OTP verification method for a recurring payment mandate.                                       |
| `reccurring.verifyOTP.verify`    | `EndPoints.VerifyMandateOTP`                | POST            | Verifies the OTP for a recurring payment mandate.                                                       |
| `reccurring.getMandate`          | `EndPoints.CreateMandate/:id`               | GET             | Retrieves the details of a specific recurring payment mandate by ID.                                    |
| `reccurring.getAllMandate`       | `EndPoints.CreateMandate`                   | GET             | Retrieves all recurring payment mandates with pagination.                                               |
| `reccurring.cancelMandate`       | `EndPoints.CreateMandate/:id/cancel`        | PATCH           | Cancels a specific recurring payment mandate by ID.                                                     |
| `reccurring.pauseMandate`        | `EndPoints.CreateMandate/:id/pause`         | PATCH           | Pauses a specific recurring payment mandate by ID.                                                      |
| `reccurring.reinstateMandate`    | `EndPoints.CreateMandate/:id/reinstate`     | PATCH           | Reinstates a specific recurring payment mandate by ID.                                                  |
| `reccurring.getMandateBalance`   | `EndPoints.CreateMandate/:id/balance-inquiry`| GET            | Retrieves the balance of a specific recurring payment mandate by ID, with optional amount filtering.    |
| `reccurring.getDebit`            | `EndPoints.CreateMandate/:id/debits/:reference`| GET         | Retrieves a specific debit transaction for a recurring payment mandate, with optional reference filtering. |
| `reccurring.getAllDebit`         | `EndPoints.CreateMandate/:id/debits`        | GET             | Retrieves all debit transactions for a specific recurring payment mandate by ID.                        |
| `reccurring.debitAccount`        | `EndPoints.CreateMandate/:id/debit`         | POST            | Debits an account for a recurring payment mandate by ID.                                                |
| `getPayout`                      | `EndPoints.Payouts`                         | GET             | Retrieves payout information based on the provided status.                                              |
| `getPayoutsTransactions`         | `EndPoints.Payouts/:status/transactions`    | GET             | Retrieves payout transactions based on the provided status and account.                                 |
| `RequestRefund`                  | `EndPoints.PayoutsRefund`                   | POST            | Requests a refund for a payout using the provided reference ID and source type (wallet or payout).      |

This table gives a clear overview of the methods available in the `DirectPayMethods` class, along with their corresponding endpoints, HTTP methods, and brief descriptions.

### Example Usage:

```typescript
import MonoClient from 'mono-client';
import { InitiatePaymentRequest, InitiatePaymentResponse } from 'mono-client/interfaces';

const monoClient = new MonoClient({ apiKey: 'your-api-key-here' });

// Example data for initiating a payment
const paymentData: InitiatePaymentRequest = {
    amount: 10000, // Amount in smallest currency unit (e.g., kobo for Naira)
    currency: 'NGN', // Currency code
    redirect_url: 'https://your-redirect-url.com', // URL to redirect after payment
    // Additional fields required by the API can be added here
};

async function handlePayment() {
    try {
        // 1. Initiate a one-time payment request
        const paymentResponse: InitiatePaymentResponse = await monoClient.directPay.oneTime.initiatePayment(paymentData);
        console.log("Payment Initiated Successfully:", paymentResponse);
        // Redirect user or handle the response as needed
    } catch (error) {
        console.error("Error initiating payment:", error);
        // Handle errors here, e.g., show error message to the user
    }
}

// Call the function to handle the payment
handlePayment();
```

### Explanation:

1. **`initiatePayment(data: InitiatePaymentRequest): Promise<InitiatePaymentResponse>`**:
   - **Description**: This method initiates a one-time payment request using the DirectPay service. It sends a POST request with the payment data and returns a promise that resolves to the payment initiation response.
   - **Usage**: 
     - The `paymentData` object contains the required fields to initiate the payment, such as `amount`, `currency`, and `redirect_url`.
     - The `handlePayment` function demonstrates how to use `initiatePayment` to start a payment and handle the response or errors using `try-catch`.
     - If the payment is successfully initiated, the user will be redirected to the specified URL with a reference and status. If the payment fails, the user will be redirected with an additional reason for the failure.

These examples showcase how to integrate the `mono-client` library's `oneTime` methods for handling one-time payments in your project while managing errors effectively.


#### client.lookUp
Here's a table summarizing the lookup methods within the `LookUpMethods` class, including the method names, parameters, and return types:

| **Method Name**                     | **Parameters**                                                                                                                                              | **Return Type**                              | **Description**                                                                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `lookupHomeAddress`                 | `meter_number: string, address: string`                                                                                                                     | `Promise<HomeAddressResponse>`               | Looks up home address information based on meter number and address.                                                                                    |
| `lookupInternationalPassport`       | `passport_number: string, last_name: string, date_of_birth: string`                                                                                         | `Promise<InternationalPassportResponse>`     | Looks up international passport information based on passport number, last name, and date of birth.                                                    |
| `lookupTIN`                         | `number: string, channel: string`                                                                                                                           | `Promise<TINLookupResponse>`                 | Looks up TIN (Tax Identification Number) information based on the TIN number and channel.                                                               |
| `lookupNIN`                         | `nin: string`                                                                                                                                                | `Promise<NINLookupResponse>`                 | Looks up NIN (National Identification Number) information based on the NIN.                                                                             |
| `lookupDriversLicence`              | `license_number: string, date_of_birth: string, first_name: string, last_name: string`                                                                      | `Promise<DriverLicenseLookupResponse>`       | Looks up driver's license information based on license number, date of birth, first name, and last name.                                                |
| `lookupAccountNumber`               | `nip_code: string, account_number: string`                                                                                                                  | `Promise<AccountNumberLookupResponse>`       | Looks up account number information based on NIP code and account number.                                                                                |
| `lookupCreditHistory`               | `provider: string, bvn: string`                                                                                                                             | `Promise<CreditHistoryLookupResponse>`       | Looks up credit history information based on provider and BVN (Bank Verification Number).                                                               |
| `lookupMashUp`                      | `nin: string, bvn: string, date_of_birth: string`                                                                                                           | `Promise<MashupLookupResponse>`              | Looks up mashup information based on NIN, BVN, and date of birth.                                                                                       |

This table gives a clear overview of the various methods within the `LookUpMethods` class, making it easier to understand and utilize each method's purpose, inputs, and outputs.

Here’s how you can structure the example usage and explanation for the first two methods under `LookUpMethods`:

### Example Usage:

```typescript
import MonoClient from 'mono-client';

const client = new MonoClient("your-api-key-here");

// 1. Initiate a BVN verification process
client.lookUpClient.BVN.initiate('12345678901', 'scope_example')
    .then(response => {
        console.log("BVN Initiation Response:", response);
    })
    .catch(error => {
        console.error("Error initiating BVN verification:", error);
    });

// 2. Verify the BVN using a specified method
client.lookUpClient.BVN.verify('otp', '1234567890', 'session-id-example')
    .then(response => {
        console.log("BVN Verification Response:", response);
    })
    .catch(error => {
        console.error("Error verifying BVN:", error);
    });
```

### Explanation:

1. **`initiate`**:
   - **Description**: This method starts the BVN verification process. It requires a Bank Verification Number (`bvn`) and a verification scope (`scope`). The response includes a session ID, which will be needed for subsequent verification steps.
   - **Usage**: The example demonstrates how to call the `initiate` method to start the BVN verification process and print the response.

2. **`verify`**:
   - **Description**: This method verifies the BVN using a specified method (e.g., OTP). It requires the verification method, phone number associated with the BVN, and a session ID obtained from the initiation response. The response includes details of the verification process.
   - **Usage**: The example shows how to call the `verify` method to complete the BVN verification and print the response.

These examples illustrate how to integrate the `LookUpMethods` class methods into your application, making it straightforward to initiate and verify BVN information.

## API Reference

### `MonoClient`

#### `constructor(MONO_SECRET_KEY: string)`

Creates an instance of `MonoClient` with the specified secret key.

**Reference**: [Mono API Documentation](https://docs.mono.co/api)

#### `async getBankList(): Promise<BanksResponse>`

Fetches the list of banks.

**Returns**: A promise that resolves to the list of banks.

**Reference**: [Get Bank List](https://docs.mono.co/api/direct-debit/mandate/get-banks)

#### `public customer.createCustomer(data: CreateCustomerRequest): Promise<CreateCustomerResponse>`

Creates a new customer with the provided data.

**Parameters**:
- `data`: The customer data to be sent in the request.

**Returns**: A promise that resolves to the response of the customer creation request.

**Reference**: [Customer Methods](https://docs.mono.co/api)

#### `public connect.someMethod(data: ConnectRequest): Promise<ConnectResponse>`

Contains methods for managing connections and authorizations.

**Reference**: [Connect Methods](https://docs.mono.co/api)

#### `public directPay.someMethod(data: DirectPayRequest): Promise<DirectPayResponse>`

Contains methods for handling one-time and recurring payments.

**Reference**: [DirectPay Methods](https://docs.mono.co/api)

#### `public lookUp.someMethod(data: LookUpRequest): Promise<LookUpResponse>`

Contains methods for performing various lookups, such as CAC, TIN, NIN, and more.

**Reference**: [LookUp Methods](https://docs.mono.co/api)

#### `async getBankCoverage(): Promise<CoverageResponse>`

Retrieves the coverage details for supported banks.

**Returns**: A promise that resolves to the bank coverage details.

**Reference**: [Get Bank Coverage](https://docs.mono.co/api/miscellaneous/bank-coverage)


## Contributing

We welcome contributions to MonoClient! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes.
4. Submit a pull request with a description of your changes.

## License

MonoClient is licensed under the [MIT License](LICENSE).

## Support

If you have any questions or issues, please open an issue on the GitHub repository or contact us at [favourajokubi@gmail.com](favourajokubi@gmail.com).