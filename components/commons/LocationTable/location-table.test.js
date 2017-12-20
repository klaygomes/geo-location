import React from 'react'
import { shallow, render } from 'enzyme'
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
    const wrapper = render(<LocationTable {...panelInformation} />).text()
    for (let key of ['ip', 'contryName', 'regionName', 'city', 'zipCode', 'lat', 'lng']) {
      it(`contains the text of key ${key} => ${panelInformation[key]}`, () => {
        const str = String(panelInformation[key] || '--')
        expect(wrapper).toEqual(expect.stringContaining(str))
      })
    }
  })
})
