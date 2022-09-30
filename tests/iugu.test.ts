import Iugu, { IuguClient, IuguPaymentToken, IuguInvoice, IuguCharge, IuguPaymentMethod, IuguAccount } from '../src/iugu'
import * as fs from 'fs'
import * as path from 'path'
import nock from 'nock'

interface IuguServices {
  accountId: string;
  apiKey: string;
  clientId: string;
  paymentMethodToken: string;
  subApiKey: string;
}

let iuguServices: IuguServices = {
  accountId: '',
  apiKey: '',
  clientId: '',
  paymentMethodToken: '',
  subApiKey: ''
}

beforeAll(() => {
  const file = fs.readFileSync(path.join(__dirname, 'iugu_services.json'), 'utf8')
  iuguServices = JSON.parse(file)
  Iugu.setApiKey(iuguServices.apiKey)
})
test('should create account', async () => {
  nock('https://api.iugu.com:443', { encodedQueryParams: true })
    .post('/v1/marketplace/create_account', { name: 'ClassApp Account' })
    .reply(200, { account_id: '34AE95C87EFE453BB7F1F756098BFD35', name: 'ClassApp Account', live_api_token: 'C75D1F3B8F1468983A5018B68B6DD5E656C8C3008F29D19F28515A8D01C6ECEC', test_api_token: 'D9C992307AA83A24092D6494759E39745B3837D708B58937ADD26A700D3D4FFD', user_token: 'E54892F5EC916E8889EEDE7274DB0922C3103AB07735A2361DC7C740234DF865', commissions: null }, [
      'Date',
      'Fri, 30 Sep 2022 13:32:00 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'X-HandledBy',
      'api/v1/market_place#create_account',
      'X-Cf-Block',
      'DEFAULT',
      'X-UA-Compatible',
      'IE=Edge,chrome=1',
      'ETag',
      '"8528c7c0698d075144e5aa40ca8df77b"',
      'Cache-Control',
      'max-age=0, private, must-revalidate',
      'X-Request-Id',
      'e56aacc3c218d9a3ea1f7cb9e350b586',
      'X-Runtime',
      '1.146865',
      'Vary',
      'Origin',
      'CF-Cache-Status',
      'DYNAMIC',
      'Set-Cookie',
      '__cfruid=307427a2eefae0f643ef7d01dd23a7430def9d39-1664544720; path=/; domain=.iugu.com; HttpOnly; Secure; SameSite=None',
      'Server',
      'cloudflare',
      'CF-RAY',
      '752d526d894551d2-GRU',
      'alt-svc',
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    ])
  const account = {
    name: 'ClassApp Account'
  }

  const spyCreateAccount = jest.spyOn(Iugu.marketplaces, 'createAccount')
  const response = await Iugu.marketplaces.createAccount(account)
  expect(spyCreateAccount).toHaveBeenCalledTimes(1)
  expect(response).toStrictEqual({
    account_id: '34AE95C87EFE453BB7F1F756098BFD35',
    name: 'ClassApp Account',
    live_api_token: 'C75D1F3B8F1468983A5018B68B6DD5E656C8C3008F29D19F28515A8D01C6ECEC',
    test_api_token: 'D9C992307AA83A24092D6494759E39745B3837D708B58937ADD26A700D3D4FFD',
    user_token: 'E54892F5EC916E8889EEDE7274DB0922C3103AB07735A2361DC7C740234DF865',
    commissions: null
  })
})
// test('should list invoices', async () => {
//   const urlParams: Map<string, string> = new Map()
//   urlParams.set('paid_at_from', '2019-01-30T00:00:00-03:00')
//   urlParams.set('paid_at_to', '2020-04-30T00:00:00-03:00')

//   const resultInvoices = await Iugu.invoices.list('', undefined, urlParams) as any
//   expect(resultInvoices.totalItems).toBeDefined()
// })

// test('should create client', async () => {
//   const client: IuguClient = {
//     name: 'Vinicius Picanco',
//     email: 'teste@teste.com'
//   }
//   const resultClient = await Iugu.customers.create(client, undefined)
//   expect(resultClient.name).toBe(client.name)
//   expect(resultClient.email).toBe(client.email)
//   expect(resultClient.id).toBeDefined()
// })

// test('should create token', async () => {
//   const payment: IuguPaymentToken = {
//     account_id: iuguServices.accountId,
//     method: 'credit_card',
//     test: true,
//     data: {
//       number: '4111111111111111',
//       verification_value: '472',
//       first_name: 'Vinicius',
//       last_name: 'Picanco',
//       month: '07',
//       year: '2021'
//     }
//   }
//   const resultPayment = await Iugu.paymentToken.create(payment, undefined)

//   expect(resultPayment.id).toBeDefined()
// })

// test('should create invoice', async () => {
//   const date = new Date()
//   const invoice: IuguInvoice = {
//     email: 'teste@teste.com',
//     due_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
//     items: [
//       {
//         description: 'Alcool em gel',
//         quantity: 1,
//         price_cents: 30000
//       }
//     ],
//     payer: {
//       cpf_cnpj: '34737969052',
//       name: 'Vinicius Picanco',
//       address: {
//         zip_code: '36010070',
//         number: '125'
//       }
//     }
//   }
//   const resultInvoice = await Iugu.invoices.create(invoice, undefined)
//   expect(resultInvoice.id).toBeDefined()
// })

// test('should create payment methods', async () => {
//   const payment: IuguPaymentToken = {
//     account_id: iuguServices.accountId,
//     method: 'credit_card',
//     test: true,
//     data: {
//       number: '4111111111111111',
//       verification_value: '472',
//       first_name: 'Vinicius',
//       last_name: 'Picanco',
//       month: '07',
//       year: '2021'
//     }
//   }
//   const resultPayment = await Iugu.paymentToken.create(payment, undefined)

//   const paymetMethod: IuguPaymentMethod = {
//     description: 'Meu cartão',
//     token: resultPayment.id,
//     set_as_default: false
//   }
//   const urlParams: Map<string, string> = new Map()
//   urlParams.set('customer_id', iuguServices.clientId)
//   const resultPaymentMethod = await Iugu.customers.createPaymentMethod(paymetMethod, urlParams)
//   expect(resultPaymentMethod.id).toBeDefined()
// })

// test('should create charge', async () => {
//   const date = new Date()
//   const invoice: IuguInvoice = {
//     email: 'teste@teste.com',
//     due_date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
//     items: [
//       {
//         description: 'Alcool em gel',
//         quantity: 1,
//         price_cents: 30000
//       }
//     ],
//     payer: {
//       cpf_cnpj: '34737969052',
//       name: 'Vinicius Picanco',
//       address: {
//         zip_code: '36010070',
//         number: '125'
//       }
//     }
//   }

//   const resultInvoice = await Iugu.invoices.create(invoice, undefined)
//   const charge: IuguCharge = {
//     customer_payment_method_id: iuguServices.paymentMethodToken,
//     customer_id: iuguServices.clientId,
//     invoice_id: resultInvoice.id
//   }

//   const resultCharge = await Iugu.charge.create(charge, undefined)

//   expect(resultCharge.message).toBe('Autorizado')
// })
