import React from 'react'
import PropTypes from 'prop-types'

import LocationMap from '../../commons/LocationMap'
import HostnameDispatcher from '../../commons/HostnameDispatcher'
import Title from '../../commons/Title'

import googleMapConf from '../../../utils/react-google-map-conf'
import locationShape from '../../../shapes/location'

class MapPanel extends React.Component {
  static displayName = 'MapPanel'
  static propTypes = {
    onHostname: PropTypes.func,
    myLocation: locationShape,
    hostnameLocation: locationShape,
    showMap: PropTypes.bool
  }
  constructor (props) {
    super(props)
    this.handleHostnameDispatch = this.handleHostnameDispatch.bind(this)
  }
  handleHostnameDispatch (hostname) {
    if (typeof this.props.onHostname === 'function') {
      this.props.onHostname(hostname)
    }
  }
  render () {
    const { myLocation, hostnameLocation } = this.props
    return (
      <div style={{margin: '0 .5rem'}}>
        <Title fontWeight={500}>Map</Title>
        <HostnameDispatcher onDispatch={this.handleHostnameDispatch} />
        {
          this.props.showMap && <LocationMap
            {...googleMapConf}
            myLocation={myLocation}
            hostnameLocation={hostnameLocation} />
        }
      </div>
    )
  }
}

export default MapPanel
