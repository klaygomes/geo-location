/* global API_URL */
/**
 * Attention! Attention!
 * For the sake of simplicity I decided to put all redux-saga related stuff in this file
 */
import {put, call, takeLatest, all} from 'redux-saga/effects'
import axios from 'axios'

import actionTypes from '../store/action-types'
import actionsCreators from '../store/action-creators'

const actionMapper = {
  [actionTypes.FETCH_MYLOCATION]: {
    store: actionsCreators.myLocationStore,
    fail: actionsCreators.myLocationFail
  },
  [actionTypes.FETCH_HOSTNAMELOCATION]: {
    store: actionsCreators.hostnameLocationStore,
    fail: actionsCreators.hostnameLocationFail
  }
}

export const fetchLocation = function * fetchLocation ({type, payload}) {
  const actions = actionMapper[type]

  try {
    const {data} = yield call(axios.get, `${API_URL}${payload || ''}`)
    yield put(actions.store(data))
  } catch (err) {
    yield put(actions.fail(err))
  }
}

export const rootSaga = function * rootSaga () {
  yield all([
    takeLatest(actionTypes.FETCH_MYLOCATION, fetchLocation),
    takeLatest(actionTypes.FETCH_HOSTNAMELOCATION, fetchLocation)
  ])
}
