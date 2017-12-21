import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

import Message from './'
import { themes } from '../../../theme'

const theme = themes.dark

describe('<Message />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Message />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(Message.displayName).toBeTruthy()
  })
  it('be default', () => {
    const wrapper = shallow(<Message theme={theme} />)
    expect(toJson(wrapper)).toHaveStyleRule('background-color', theme.success)
  })
  it('be error', () => {
    const wrapper = shallow(<Message danger theme={theme} />)
    expect(toJson(wrapper)).toHaveStyleRule('background-color', theme.error)
  })
})
