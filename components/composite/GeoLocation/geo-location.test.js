import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import GeoLocation from './'

describe('<GeoLocation />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<GeoLocation />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(GeoLocation.displayName).toBeTruthy()
  })
  it('should delegates onHostname event', () => {
    const onHostname = jest.fn()
    const hostname = 'avenuecode.com'
    const wrapper = mount(<GeoLocation onHostname={onHostname} />)
    wrapper.find('MapPanel').props().onHostname(hostname)
    expect(onHostname.mock.calls[0][0]).toBe(hostname)
  })
  it('should delegates onResetMyLocation event', () => {
    const onResetMyLocation = jest.fn()
    const wrapper = mount(<GeoLocation onResetMyLocation={onResetMyLocation} />)
    wrapper.find('LocationPanel').props().onResetMyLocation()
    expect(onResetMyLocation.mock.calls.length).toBe(1)
  })
  it('should delegates onResetMyLocation event', () => {
    const onRequestMyLocation = jest.fn()
    const wrapper = mount(<GeoLocation onRequestMyLocation={onRequestMyLocation} />)
    wrapper.find('LocationPanel').props().onRequestMyLocation()
    expect(onRequestMyLocation.mock.calls.length).toBe(1)
  })
})
