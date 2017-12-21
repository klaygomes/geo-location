import actionTypes from './action-types'

export default {
  myLocationFetch: () => ({type: actionTypes.FETCH_MYLOCATION}),
  myLocationStore: (payload) => ({type: actionTypes.STORE_MYLOCATION, payload}),
  myLocationFail: (error) => ({type: actionTypes.FAIL_MYLOCATION, error}),
  myLocationReset: () => ({type: actionTypes.RESET_MYLOCATION}),
  hostnameLocationFetch: (payload) => ({type: actionTypes.FETCH_HOSTNAMELOCATION, payload}),
  hostnameLocationStore: (payload) => ({type: actionTypes.STORE_HOSTNAMELOCATION, payload}),
  hostnameLocationFail: (error) => ({type: actionTypes.FAIL_HOSTNAMELOCATION, error}),
  errorShow: (error) => ({type: actionTypes.SHOW_ERROR, error}),
  errorHide: () => ({type: actionTypes.HIDE_ERROR})
}
