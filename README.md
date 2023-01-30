# @classapp-tech/iugu-node-lib

## Installation
Use the package manager node to install.

```bash
npm install @classapp-tech/iugu-node-sdk
```

## Usage
Initialize the sdk using you API key, previously generated:

```bash
import Iugu, { IuguCustomer } from 'iugu-node-sdk'

Iugu.setApiKey('<YOUR API KEY>')
```
There are some models that were created to standardize the responses and requests for the API.
An example of using the API in TypeScript to create a client:

```bash
const client: IuguCustomer = {
    name: 'John Doe',
    email: 'mail@domain.com'
}

// You can use await
const resultClient : IuguCustomer = await Iugu.customers.create(client, undefined)

// Or you can use .then
Iugu.customers.create(client, undefined).then((cli: IuguCustomer) => {
    // On success
}).catch((error: Error) => {
    // On error
})
```

All methods follow the pattern Iugu._{resource}_._{method}_(_model_,_urlParams_) - URL parameters must be passed by the second parameter of the methods, as follows:

```bash
const client: IuguCustomer = {
    name: 'John Doe',
    email: 'mail@domain.com'
}

const urlParams: Map<string, string> = new Map()
urlParams.set('id', '558958DB714B389EA6B1FF0A33D75505')

// Pode ser utilizar com await
const resultClient : IuguCustomer = await Iugu.customers.update(client, urlParams)

// Ou
Iugu.customers.create(client, urlParams).then((cli: IuguCustomer) => {
    // On success
}).catch((error: Error) => {
    // On error
})
```

## More info
To find out which requests are available and which parameters to pass, access the documentation [dev.iugu.com/reference](https://dev.iugu.com/reference) for reference.

## Credits
- This library was created based on the [Vinícius Picanço](https://github.com/V1pi) repository.

## Keywords
iugu