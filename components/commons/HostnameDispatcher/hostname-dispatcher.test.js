import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import HostNameDispatcher from './'

describe('<HostNameDispatcher />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<HostNameDispatcher />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(HostNameDispatcher.displayName).toBeTruthy()
  })
  describe('as valid', () => {
    let wrapper, mockCallback
    const event = {target: {value: 'avenuecode.com'}}

    beforeEach(() => {
      mockCallback = jest.fn()

      wrapper = mount(<HostNameDispatcher onDispatch={mockCallback} />)
      wrapper.find('TextBox').simulate('change', event)
      wrapper.find('Dispatcher').simulate('click')
      wrapper.update()
    })
    it('should not display an error if invalid hostname', () => {
      expect(wrapper.find('Error').exists()).toBeFalsy()
    })
    it('should dispatch hostname', () => {
      expect(mockCallback.mock.calls[0][0]).toBe(event.target.value)
    })
  })
  describe('as invalid', () => {
    let wrapper, mockCallback
    beforeEach(() => {
      const event = {target: {value: 'invalid-host'}}
      mockCallback = jest.fn()

      wrapper = mount(<HostNameDispatcher onDispatch={mockCallback} />)
      wrapper.find('TextBox').simulate('change', event)
      wrapper.find('Dispatcher').simulate('click')
      wrapper.update()
    })
    it('should display an error if invalid hostname', () => {
      expect(wrapper.find('Error').exists()).toBeTruthy()
    })
    it('should not dispatch hostname', () => {
      wrapper.find('Dispatcher').simulate('click')
      expect(mockCallback.mock.calls.length).toBe(0)
    })
  })
})
