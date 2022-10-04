import nock from 'nock'
import Iugu from '../../../iugu'

test('should configure pix', async () => {
  const apiKey = process.env.SUBACCOUNT_LIVE_API_KEY || 'C75D1F3B8F1468983A5018B68B6DD5E656C8C3008F29D19F28515A8D01C6ECEC'
  Iugu.setApiKey(apiKey)
  nock('https://api.iugu.com:443', { encodedQueryParams: true })
    .put('/v1/payments/pix', { enable: true })
    .reply(200, { success: true }, [
      'Date',
      'Tue, 04 Oct 2022 14:52:03 GMT',
      'Content-Type',
      'application/json; charset=utf-8',
      'Transfer-Encoding',
      'chunked',
      'Connection',
      'close',
      'X-HandledBy',
      'api/v1/payments/pix/configuration#update',
      'X-Cf-Block',
      'DEFAULT',
      'X-UA-Compatible',
      'IE=Edge,chrome=1',
      'ETag',
      '"7363e85fe9edee6f053a4b319588c086"',
      'Cache-Control',
      'max-age=0, private, must-revalidate',
      'X-Request-Id',
      '196b479bcb10390bd1e47e5d70fd0e1b',
      'X-Runtime',
      '2.384126',
      'Vary',
      'Origin',
      'CF-Cache-Status',
      'DYNAMIC',
      'Set-Cookie',
      '__cfruid=6339bb23e8772f5e88d5e45e472400a725732973-1664895123; path=/; domain=.iugu.com; HttpOnly; Secure; SameSite=None',
      'Server',
      'cloudflare',
      'CF-RAY',
      '754ebd288b6e4298-VCP',
      'alt-svc',
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
    ])

  const response = await Iugu.payments.pixConfiguration({ enable: true })
  expect(response.success).toBe(true)
})

test('should return route name', async () => {
  expect(Iugu.payments.routeName).toBe('payments')
})
