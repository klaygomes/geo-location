import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import LocationPanel from './'

describe('<Message />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LocationPanel />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(LocationPanel.displayName).toBeTruthy()
  })
  it('should delegates onRequestMyLocation event', () => {
    const onRequestMyLocation = jest.fn()
    const wrapper = mount(<LocationPanel onRequestMyLocation={onRequestMyLocation} />)
    wrapper.find('Button[name="my-location"]').props().onClick()
    expect(onRequestMyLocation.mock.calls.length).toBe(1)
  })
  it('should delegates onResetMyLocation event', () => {
    const onResetMyLocation = jest.fn()
    const wrapper = mount(<LocationPanel onResetMyLocation={onResetMyLocation} />)
    wrapper.find('Button[name="reset-location"]').props().onClick()
    expect(onResetMyLocation.mock.calls.length).toBe(1)
  })
  it('should delegates onRequestInformation event', () => {
    const onRequestInformation = jest.fn()
    const wrapper = mount(<LocationPanel onRequestInformation={onRequestInformation} />)
    wrapper.find('LocationTable').props().onRequestInformation()
    expect(onRequestInformation.mock.calls.length).toBe(1)
  })
})
