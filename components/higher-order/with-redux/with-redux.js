/**
 * This version shows how to setup using Redux
 */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import actionsCreators from '../../../store/action-creators'
import { selectors } from '../../../store'
import locationShape from '../../../shapes/location'
import locationDataShape from '../../../shapes/locationData'

const WithRedux = (Component) => connect(
  (state, props) => ({
    myLocation: selectors.myLocation(state),
    hostnameLocation: selectors.hostnameLocation(state),
    locationData: selectors.locationData(state),
    showMap: selectors.showMap(state),
    error: selectors.getErrorMessage(state)
  }),
  dispatch => ({
    requestHostnameLocation (hostname) {
      dispatch(actionsCreators.hostnameLocationFetch(hostname))
    },
    requestMyLocation () {
      dispatch(actionsCreators.myLocationFetch())
    },
    resetMyLocation () {
      dispatch(actionsCreators.myLocationReset())
    },
    hideError () {
      dispatch(actionsCreators.errorHide())
    }
  }))(class SimpleWithRedux extends React.PureComponent {
    static displayName = 'SimpleWithRedux'
    static propTypes = {
      myLocation: locationShape,
      hostnameLocation: locationShape,
      locationData: PropTypes.shape(locationDataShape),
      showMap: PropTypes.bool,
      requestHostnameLocation: PropTypes.func,
      requestMyLocation: PropTypes.func,
      resetMyLocation: PropTypes.func,
      hideError: PropTypes.func,
      error: PropTypes.shape({
        visible: PropTypes.bool,
        message: PropTypes.string
      })
    }
    constructor (props) {
      super(props)

      this.handleOnHostname = this.handleOnHostname.bind(this)
      this.handleOnRequestMyLocation = this.handleOnRequestMyLocation.bind(this)
      this.handleOnResetMyLocation = this.handleOnResetMyLocation.bind(this)
      this.handleOnErrorClick = this.handleOnErrorClick.bind(this)
    }
    handleOnHostname (hostname) {
      this.props.requestHostnameLocation(hostname)
    }

    handleOnRequestMyLocation () {
      this.props.requestMyLocation()
    }

    handleOnResetMyLocation () {
      this.props.resetMyLocation()
    }

    handleOnErrorClick () {
      this.props.hideError()
    }

    render () {
      return <Component
        myLocation={this.props.myLocation}
        hostnameLocation={this.props.hostnameLocation}
        locationData={this.props.locationData}
        showMap={this.props.showMap}
        showError={this.props.error.visible}
        errorMessage={this.props.error.message}
        onErrorClick={this.handleOnErrorClick}
        onHostname={this.handleOnHostname}
        onRequestMyLocation={this.handleOnRequestMyLocation}
        onResetMyLocation={this.handleOnResetMyLocation}
      />
    }
})
WithRedux.displayName = 'WithRedux'
export default WithRedux
