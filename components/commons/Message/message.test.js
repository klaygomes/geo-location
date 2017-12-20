import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Message from './'

describe('<Message />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Message />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(Message.displayName).toBeTruthy()
  })
})