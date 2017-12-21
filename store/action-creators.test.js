import actionsCreators from './action-creators'
import actionTypes from './action-types'

describe('store/action-creators', () => {
  it('myLocationFetch', () => {
    expect(actionsCreators.myLocationFetch()).toEqual({
      'type': actionTypes.FETCH_MYLOCATION
    })
  })
  it('myLocationReset', () => {
    expect(actionsCreators.myLocationReset()).toEqual({
      'type': actionTypes.RESET_MYLOCATION
    })
  })
  it('myLocationStore', () => {
    const state = {dumb: 'state'}
    expect(actionsCreators.myLocationStore(state)).toEqual({
      'type': actionTypes.STORE_MYLOCATION,
      'payload': state
    })
  })
  it('myLocationFail', () => {
    const error = new Error('dumb')
    expect(actionsCreators.myLocationFail(error)).toEqual({
      'type': actionTypes.FAIL_MYLOCATION,
      'error': error
    })
  })
  it('hostnameLocationFetch', () => {
    const hostname = 'avenuecode.com'
    expect(actionsCreators.hostnameLocationFetch(hostname)).toEqual({
      'type': actionTypes.FETCH_HOSTNAMELOCATION,
      'payload': hostname
    })
  })
  it('hostnameLocationStore', () => {
    const state = {dumb: 'state'}
    expect(actionsCreators.hostnameLocationStore(state)).toEqual({
      'type': actionTypes.STORE_HOSTNAMELOCATION,
      'payload': state
    })
  })
  it('hostnameLocationFail', () => {
    const error = new Error('dumb')
    expect(actionsCreators.hostnameLocationFail(error)).toEqual({
      'type': actionTypes.FAIL_HOSTNAMELOCATION,
      'error': error
    })
  })
  it('errorHide', () => {
    expect(actionsCreators.errorHide()).toEqual({
      'type': actionTypes.HIDE_ERROR
    })
  })
  it('errorShow', () => {
    const error = new Error('dumb')
    expect(actionsCreators.errorShow(error)).toEqual({
      'type': actionTypes.SHOW_ERROR,
      'error': error
    })
  })
})
