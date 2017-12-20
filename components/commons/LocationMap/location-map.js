/* global google */
import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import locationShape from '../../../shapes/location'
import googleMapStyles from '../../../utils/googleMapStyles'
import locations from '../../../data/locations'

class LocationMap extends React.Component {
  static propTypes = {
    myLocation: locationShape,
    hostnameLocation: locationShape
  }

  static defaultProps = {
    myLocation: {},
    hostnameLocation: {}
  }

 static displayName = 'LocationMap'

 constructor (props) {
   super(props)

   this.state = {
     defaultCenter: locations.myLocation,
     defaultOptions: { styles: googleMapStyles, disableDefaultUI: false, maxZoom: 12 },
     defaultZoom: 6
   }

   this.storeMapReference = this.storeMapReference.bind(this)
   this.fitMapBounds = this.fitMapBounds.bind(this)
 }
 componentDidMount () {
   this.fitMapBounds(this.props)
 }
 componentWillReceiveProps (nextprops) {
   this.fitMapBounds(nextprops)
 }

 fitMapBounds ({hostnameLocation, myLocation}) {
   if (!hostnameLocation && !myLocation) return
   if (typeof google === 'undefined') return

   const bounds = new google.maps.LatLngBounds()

   hostnameLocation.lat && bounds.extend(hostnameLocation)
   myLocation.lat && bounds.extend(myLocation)

   this.setState({
     defaultCenter: bounds.getCenter()
   }, () => {
     this.mapReference.fitBounds(bounds)
   })
 }
 storeMapReference (ref) {
   this.mapReference = ref
 }
 render () {
   const { myLocation, hostnameLocation } = this.props

   return (
     <GoogleMap
       ref={this.storeMapReference}
       defaultZoom={this.state.defaultZoom}
       defaultCenter={this.state.defaultCenter}
       defaultOptions={this.state.defaultOptions}
     >
       {hostnameLocation && <Marker name='hostnameLocation' position={hostnameLocation} icon='/static/icons/marker.svg' />}
       {myLocation && <Marker name='myLocation' position={myLocation} icon='/static/icons/home.svg' />}
     </GoogleMap>
   )
 }
}

export const BareLocationMap = withGoogleMap(props => <LocationMap {...props} />)

const LocationMapConfigurated = withScriptjs(BareLocationMap)
LocationMapConfigurated.displayName = 'LocationMapConfigurated'

export default LocationMapConfigurated
