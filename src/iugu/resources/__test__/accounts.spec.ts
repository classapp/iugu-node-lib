import * as fs from 'fs'
import * as path from 'path'
import nock from 'nock'
import Iugu from '../../../iugu'

interface IuguServices {
  accountId: string;
  apiKey: string;
  clientId: string;
  paymentMethodToken: string;
  subApiKey: string;
}

const iuguServices: IuguServices = {
  accountId: '',
  apiKey: '',
  clientId: '',
  paymentMethodToken: '',
  subApiKey: ''
}

beforeAll(() => {
  const apiKey = process.env.API_KEY || 'E54892F5EC916E8889EEDE7274DB0922C3103AB07735A2361DC7C740234DF865'
  Iugu.setApiKey(apiKey)
})
test('should verify account', async () => {
  nock('https://api.iugu.com:443', { encodedQueryParams: true })
    .post('/v1/accounts/34AE95C87EFE453BB7F1F756098BFD35/request_verification', { data: { physical_products: false, business_type: 'Escola', person_type: 'Pessoa Jurídica', automatic_transfer: true, cep: '87080005', city: 'Maringá', district: 'Cidade Universitária', state: 'PR', telephone: 5511970187000, price_range: 'Subconta', bank_ag: '3771', bank_cc: '50612-2', account_type: 'Corrente', bank: 'Itaú', address: 'Avenida Alziro Zarur', cnpj: '36296178000179', company_name: 'Empresa XPTO 2' } })
    .reply(200, { id: 'E77BDA83E2134644A43231FB1A8789ED', data: { price_range: 'Subconta', physical_products: false, business_type: 'Escola', person_type: 'Pessoa Jurídica', automatic_transfer: true, address: 'Avenida Alziro Zarur', cep: '87080005', city: 'Maringá', state: 'PR', telephone: 5511970187000, bank: 'Itaú', bank_ag: '3771', account_type: 'Corrente', bank_cc: '50612-2', cnpj: '36296178000179', company_name: 'Empresa XPTO 2', bank_ispb: '60701190' }, account_id: '34AE95C87EFE453BB7F1F756098BFD35', created_at: '2022-09-30T11:03:25-03:00' }, [
      'Date',
      'Fri, 30 Sep 2022 14:03:27 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'X-HandledBy',
      'api/v1/account#request_verification',
      'X-Cf-Block',
      'DEFAULT',
      'X-UA-Compatible',
      'IE=Edge,chrome=1',
      'ETag',
      '"bf93b54ab4f2ac99369b27cc86cb1255"',
      'Cache-Control',
      'max-age=0, private, must-revalidate',
      'X-Request-Id',
      'b26e61857e467191963f267d3d1ff0e5',
      'X-Runtime',
      '1.882028',
      'Vary',
      'Origin',
      'CF-Cache-Status',
      'DYNAMIC',
      'Set-Cookie',
      '__cfruid=a6b88726e500e60ed3ceee6809c4b12bc94d9018-1664546606; path=/; domain=.iugu.com; HttpOnly; Secure; SameSite=None',
      'Server',
      'cloudflare',
      'CF-RAY',
      '752d80797fcf4b40-GRU',
      'alt-svc',
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    ])
  const data = {
    physical_products: false,
    business_type: 'Escola',
    person_type: 'Pessoa Jurídica',
    automatic_transfer: true,
    cep: '87080005',
    city: 'Maringá',
    district: 'Cidade Universitária',
    state: 'PR',
    telephone: 5511970187000,
    price_range: 'Subconta',
    bank_ag: '3771',
    bank_cc: '50612-2',
    account_type: 'Corrente',
    bank: 'Itaú',
    address: 'Avenida Alziro Zarur',
    cnpj: '36296178000179',
    company_name: 'Empresa XPTO 2'
  }
  const accountId = new Map().set('account_id', '34AE95C87EFE453BB7F1F756098BFD35')
  const response = await Iugu.accounts.requestVerification({ data }, accountId)
  expect(response.id).toBe('E77BDA83E2134644A43231FB1A8789ED')
})
