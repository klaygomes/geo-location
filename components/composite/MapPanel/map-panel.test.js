import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import MapPanel from './'

describe('<MapPanel />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<MapPanel />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(MapPanel.displayName).toBeTruthy()
  })
  it('should has HostnameDispatcher', () => {
    const wrapper = shallow(<MapPanel />)
    expect(wrapper.find('HostnameDispatcher').exists()).toBeTruthy()
  })
  it('should has LocationMap', () => {
    const wrapper = mount(<MapPanel showMap />)
    wrapper.update()
    expect(wrapper.find('LocationMapConfigurated').exists()).toBeTruthy()
  })
  it('should not has LocationMap', () => {
    const wrapper = mount(<MapPanel />)
    wrapper.update()
    expect(wrapper.find('LocationMapConfigurated').exists()).toBeFalsy()
  })
  it('should delegates onHostname event', () => {
    const onHostname = jest.fn()
    const hostname = 'avenuecode.com'
    const wrapper = mount(<MapPanel onHostname={onHostname} />)
    wrapper.find('HostnameDispatcher').props().onDispatch(hostname)
    expect(onHostname.mock.calls[0][0]).toEqual(hostname)
  })
})
