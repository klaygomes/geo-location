import {myLocationReducer, hostnameLocationReducer, metaReducer, selectors} from './'
import actionsCreators from '../store/action-creators'

import rawGeoData from '../data/raw-free-geoip'
import normalizedGeoData from '../data/normalized-free-geoip'

const DATE_TO_USE = new Date('2017')
const _Date = Date
global.Date = jest.fn(() => DATE_TO_USE)
global.Date.UTC = _Date.UTC
global.Date.parse = _Date.parse
global.Date.now = _Date.now

const defaultState = {
  myLocation: {
    ...normalizedGeoData,
    lastUpdate: DATE_TO_USE
  },
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
        )).toEqual(defaultState.myLocation)
    })
    it('should store correct state', () => {
      expect(
        myLocationReducer(undefined, actionsCreators.myLocationFail(new Error('dumb'))
        )).toEqual({})
    })
    it('should store correct state', () => {
      expect(
        myLocationReducer(undefined, actionsCreators.myLocationReset()
        )).toEqual({})
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
    it('should store correct state', () => {
      expect(
        hostnameLocationReducer(undefined, actionsCreators.hostnameLocationFail(new Error('dumb'))
        )).toEqual({})
    })
  })
  describe('metaReducer', () => {
    it('should return initialState correct', () => {
      const initialState = {dumb: 1}
      expect(metaReducer(initialState, {})).toEqual(initialState)
    })
    it('should store correct state', () => {
      const error = new Error('Dumb Message')
      expect(
        metaReducer(undefined, actionsCreators.errorShow(error)
        )).toEqual({error: {
        'errorObject': error,
        'isVisible': true,
        'message': error.message
      }})
    })
    it('should store correct state', () => {
      expect(
        metaReducer(undefined, actionsCreators.errorHide()
        )).toEqual({error: {
        'errorObject': undefined,
        'isVisible': false,
        'message': undefined
      }})
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
      expect(selectors.locationData(defaultState)).toEqual(defaultState.myLocation)
    })
    it('showMap -> should returns correct value', () => {
      expect(selectors.showMap(defaultState)).toEqual(true)
    })
  })
})
