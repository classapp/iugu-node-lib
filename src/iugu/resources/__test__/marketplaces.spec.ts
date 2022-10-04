import Iugu from '../../../iugu'
import nock from 'nock'

test('should return route name', async () => {
  expect(Iugu.marketplaces.routeName).toBe('marketplace')
})

test('should create account', async () => {
  const apiKey = process.env.CLASSAPP_LIVE_API_KEY || 'ECE2B3C3717406E33E0EAC4EF6497F833378E3B4F60F702911DD936C23F84471'
  Iugu.setApiKey(apiKey)
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
