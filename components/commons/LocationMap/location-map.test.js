import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import locations from '../../../data/locations'
import googleMapConf from '../../../utils/react-google-map-conf'

import {BareLocationMap as LocationMap} from './location-map'

describe('<LocationMap />', () => {
  let setCenter, fitBounds
  beforeEach(() => {
    setCenter = jest.fn()
    fitBounds = jest.fn()
    global.google = {
      maps: {
        Map: function () {
          this.setCenter = setCenter
          this.setOptions = jest.fn()
          this.setZoom = jest.fn()
          this.fitBounds = fitBounds
        },
        Marker: function () {
          this.setIcon = jest.fn()
          this.setPosition = jest.fn()
          this.setMap = jest.fn()
        },
        LatLngBounds: function () {
          this.fitMapBounds = jest.fn()
          this.extend = jest.fn()
          this.getCenter = jest.fn()
        }
      }
    }
  })
  it('should render without crashing', () => {
    const wrapper = shallow(<LocationMap {...googleMapConf} />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(LocationMap.displayName).toBeTruthy()
  })
  it('should contains my location marker', () => {
    const wrapper = mount(<LocationMap {...googleMapConf} myLocation={locations.myLocation} />)
    wrapper.update()
    expect(wrapper.find('Marker[name="myLocation"]').props().position).toBe(locations.myLocation)
  })
  it('should contains hostlocation marker', () => {
    const wrapper = mount(<LocationMap {...googleMapConf} hostnameLocation={locations.hostnameLocation} />)
    wrapper.update()
    expect(wrapper.find('Marker[name="hostnameLocation"]').props().position).toBe(locations.hostnameLocation)
  })
  it('should contains center map base on marker', () => {
    const wrapper = mount(<LocationMap {...googleMapConf} hostnameLocation={locations.myLocation} />)
    wrapper.update()
    expect(setCenter.mock.calls[0][0]).toBe(locations.myLocation)
  })
})
