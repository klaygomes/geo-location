/* global API_URL */

import axios from 'axios'
import {put, call} from 'redux-saga/effects'

import {fetchLocation} from './'
import actionsCreators from '../store/action-creators'

import rawGeoData from '../data/raw-free-geoip'

describe('saga/fetchLocation', () => {
  ['myLocation', 'hostnameLocation'].forEach((type) => {
    describe(`type:${type}`, () => {
      let saga
      beforeEach(() => {
        saga = fetchLocation(actionsCreators[`${type}Fetch`](''))
      })
      it('call api', () => {
        expect(saga.next().value).toEqual(call(axios.get, API_URL))
      })
      it('put to store', () => {
        saga.next()
        const called = saga.next({data: rawGeoData})
        expect(called.value).toEqual(put(actionsCreators[`${type}Store`](rawGeoData)))
      })
      it('put to store', () => {
        const fooError = new Error('foo error')
        saga.next()
        const called = saga.throw(fooError)
        expect(called.value).toEqual(put(actionsCreators[`${type}Fail`](fooError)))
      })
    })
  })
})
