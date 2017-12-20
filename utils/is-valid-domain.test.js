import isValidDomain from './is-valid-domain'

const validDomains = [
  'www.nytimes.com', 'nytimes.com', 'g1.com.br', 'www.g1.com.br', 'facebook.com:443'
]

const invalidDomains = [
  'http://www.nytimes.com', 'ftp://nytimes.com', 'https://g1.com.br:8090'
]

describe('utils/is-valid-domain', () => {
  describe('given a valid domain it should validate', () => {
    validDomains.forEach(valid => {
      it(valid, () => {
        expect(isValidDomain(valid)).toBeTruthy()
      })
    })
  })
  describe('given a invalid domain it should invalidate', () => {
    invalidDomains.forEach(invalid => {
      it(invalid, () => {
        expect(isValidDomain(invalid)).toBeFalsy()
      })
    })
  })
})
