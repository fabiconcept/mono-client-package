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

#### `getBankList()`

Retrieve a list of banks.

```typescript
client.getBankList()
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));
```

#### `customer.createCustomer(data: CreateCustomerRequest)`

Create a new customer.

```typescript
const customerData = {
    email: 'john.doe@example.com',
    identity: {
        type: "bvn";
        number: "1234567890";
    };
    firstName: "Abbie";
    lastName: "Dustin";
    address: "saw blanket firm keep";
    phone: "1234567890";
};

client.customer.createCustomer(customerData)
    .then(response => console.log('Customer created:', response))
    .catch(error => console.error('Error:', error));
```

## API Reference

### `MonoClient`

#### `constructor(MONO_SECRET_KEY: string)`

Creates an instance of `MonoClient` with the specified secret key.

#### `async getBankList(): Promise<BanksResponse>`

Fetches the list of banks.

**Returns**: A promise that resolves to the list of banks.

#### `public customer.createCustomer(data: CreateCustomerRequest): Promise<CreateCustomerResponse>`

Creates a new customer with the provided data.

**Parameters**:
- `data`: The customer data to be sent in the request.

**Returns**: A promise that resolves to the response of the customer creation request.

## Types

- **BanksResponse**: Defines the structure of the response for bank list requests.
- **CreateCustomerRequest**: Defines the structure of the request payload for creating a customer.
- **CreateCustomerResponse**: Defines the structure of the response for customer creation.

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