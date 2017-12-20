import normalizeFreeGeoIp from './normalize-free-geoip'

import rawGeoData from '../data/raw-free-geoip'
import normalizedGeoData from '../data/normalized-free-geoip'

describe('utils/normalize-free-geoip', () => {
  it('given a valid geo ip data it should normalize it', () => {
    expect(normalizeFreeGeoIp(rawGeoData)).toEqual(normalizedGeoData)
  })
})
