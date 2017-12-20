import React from 'react'
import { shallow, render } from 'enzyme'
import 'jest-styled-components'

import Title from './'

const innerText = 'Testing is fun ;)'

describe('<Title />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Title>{innerText}</Title>)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should be h1', () => {
    const wrapper = shallow(<Title>{innerText}</Title>)
    expect(wrapper.dive().name()).toEqual('h1')
  })
  it('should be h2', () => {
    const wrapper = shallow(<Title index={2}>{innerText}</Title>)
    expect(wrapper.dive().name()).toEqual('h2')
  })
  it('should be h3', () => {
    const wrapper = shallow(<Title index={3}>{innerText}</Title>)
    expect(wrapper.dive().name()).toEqual('h3')
  })
  it('should have expected text', () => {
    const wrapper = render(<Title index={3}>{innerText}</Title>)
    expect(wrapper.text()).toEqual(expect.stringContaining(innerText))
  })
})
