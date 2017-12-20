import {myLocationReducer, hostnameLocationReducer, selectors} from './'
import actionsCreators from '../store/action-creators'

import rawGeoData from '../data/raw-free-geoip'
import normalizedGeoData from '../data/normalized-free-geoip'

const defaultState = {
  myLocation: normalizedGeoData,
  hostnameLocation: normalizedGeoData
}

describe('store/store', () => {
  describe('myLocationReducer', () => {
    it('should return initialState correct', () => {
      expect(myLocationReducer(defaultState, {})).toEqual(defaultState)
    })
    it('should store correct state', () => {
      expect(
        myLocationReducer(undefined, actionsCreators.myLocationStore(rawGeoData)
        )).toEqual(normalizedGeoData)
    })
  })
  describe('hostnameLocationReducer', () => {
    it('should return initialState correct', () => {
      const initialState = {dumb: 1}
      expect(hostnameLocationReducer(initialState, {})).toEqual(initialState)
    })
    it('should store correct state', () => {
      expect(
        hostnameLocationReducer(undefined, actionsCreators.hostnameLocationStore(rawGeoData)
        )).toEqual(normalizedGeoData)
    })
  })
  describe('selectors', () => {
    const expectedValue = {'lat': 37.4192, 'lng': -122.0574}
    it('hostnameLocation -> should returns correct value', () => {
      expect(selectors.hostnameLocation(defaultState)).toEqual(expectedValue)
    })
    it('myLocation -> should returns correct value', () => {
      expect(selectors.myLocation(defaultState)).toEqual(expectedValue)
    })
    it('locationData -> should returns correct value', () => {
      expect(selectors.locationData(defaultState)).toEqual(normalizedGeoData)
    })
    it('locationData -> should returns correct value', () => {
      expect(selectors.showMap(defaultState)).toEqual(true)
    })
  })
})
