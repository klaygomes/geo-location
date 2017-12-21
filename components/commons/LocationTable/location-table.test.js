import React from 'react'
import { shallow, render, mount } from 'enzyme'
import 'jest-styled-components'

import LocationTable from './'
import panelInformation from '../../../data/panel-information'

describe('<LocationTable />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LocationTable />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(LocationTable.displayName).toBeTruthy()
  })
  describe('should display each field correctly', () => {
    const wrapper = render(<LocationTable {...panelInformation} />)
    const wrapperText = wrapper.text()
    for (let key of ['contryName', 'regionName', 'city', 'zipCode', 'lat', 'lng']) {
      it(`contains the text of key ${key} => ${panelInformation[key]}`, () => {
        const str = String(panelInformation[key] || '--')
        expect(wrapperText).toEqual(expect.stringContaining(str))
      })
    }
    it('contains ip', () => {
      const input = wrapper.find('input[name="ip"]')
      expect(input[0].attribs.value).toEqual(panelInformation['ip'])
    })
  })

  it('should delegate onRequestInformation for each item', () => {
    const onRequestInformation = jest.fn()
    const wrapper = mount(<LocationTable {...panelInformation} onRequestInformation={onRequestInformation} />)
    const infoImges = wrapper.find('img[info]')
    infoImges.forEach((img) => {
      img.props().onClick()
    })
    expect(onRequestInformation.mock.calls.length).toBe(infoImges.length)
  })
})
