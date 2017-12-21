import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

import { themes } from '../../../theme'
import colorLuminance from '../../../utils/color-luminance'

import Button from './'

const theme = themes.dark

describe('<Button />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(Button.displayName).toBeTruthy()
  })
  it('should be a normal button', () => {
    const wrapper = shallow(<Button theme={theme} />)
    expect(toJson(wrapper)).toHaveStyleRule('background-color', colorLuminance(theme.main, 0.4))
  })

  it('should clickable', () => {
    const mockCallback = jest.fn()
    const wrapper = mount(<Button onClick={mockCallback} theme={theme} />)
    wrapper.simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  describe('should be disabled', () => {
    it('has correct style', () => {
      const wrapper = shallow(<Button theme={theme} disabled />)
      expect(wrapper.props().disabled).toBeTruthy()
      expect(toJson(wrapper)).toHaveStyleRule('background-color', theme.lineColor)
    })

    it('not clickable', () => {
      const mockCallback = jest.fn()
      const wrapper = mount(<Button onClick={mockCallback} theme={theme} disabled />)
      wrapper.simulate('click')
      expect(mockCallback.mock.calls.length).toBe(0)
    })
  })
})
