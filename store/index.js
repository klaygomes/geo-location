/**
 * Attention! Attention!
 * For the sake of simplicity I decided to put all redux related stuff in this file
 */

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from '../saga'
import actionTypes from './action-types'

import normalizeFreeGeoIp from '../utils/normalize-free-geoip'

export const initialState = {
  myLocation: {},
  hostnameLocation: {}
}

// REDUCERS
export const myLocationReducer = (state = initialState.myLocation, action) => {
  switch (action.type) {
    case actionTypes.STORE_MYLOCATION:
      return normalizeFreeGeoIp(action.payload)
    case actionTypes.RESET_MYLOCATION:
    case actionTypes.FAIL_MYLOCATION:
      return {}
    default: return state
  }
}

export const hostnameLocationReducer = (state = initialState.hostnameLocation, action) => {
  switch (action.type) {
    case actionTypes.STORE_HOSTNAMELOCATION:
      return normalizeFreeGeoIp(action.payload)
    case actionTypes.FAIL_HOSTNAMELOCATION:
      return {}
    default: return state
  }
}

// SELECTORS

export const selectors = {
  myLocation (state) {
    return {
      lat: +state.myLocation.lat,
      lng: +state.myLocation.lng
    }
  },
  hostnameLocation (state) {
    return {
      lat: +state.hostnameLocation.lat,
      lng: +state.hostnameLocation.lng
    }
  },
  locationData (state) {
    return state.myLocation
  },
  showMap (state) {
    return !!state.hostnameLocation.lng
  }
}

/* istanbul ignore next: no need to text configuration routines */
function rdxWithSimpleSagas (iniState = initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const rootReducer = combineReducers({
    myLocation: myLocationReducer,
    hostnameLocation: hostnameLocationReducer
  })

  const store = createStore(
    rootReducer,
    iniState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const ReduxWithSimpleSagas = rdxWithSimpleSagas
