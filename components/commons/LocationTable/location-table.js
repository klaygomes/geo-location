import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { typography, sizes } from '../../../theme'
import colorLuminance from '../../../utils/color-luminance'

import locationDataShape from '../../../shapes/locationData'

class LocationTable extends React.PureComponent {
  static propTypes = locationDataShape
  static displayName = 'LocationTable'

  render () {
    const {
      ip = '--',
      contryName = '--',
      regionName = '--',
      city = '--',
      zipCode = '--',
      lat = '--',
      lng = '--',
      ...rest
    } = this.props

    return (
      <table {...rest}>
        <tbody>
          <tr>
            <td>IP</td>
            <td>{ip}</td>
          </tr>
          <tr>
            <td >Country</td>
            <td >{contryName}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td >{regionName}</td>
          </tr>
          <tr>
            <td >City</td>
            <td >{city}</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td >{zipCode}</td>
          </tr>
          <tr>
            <td >Latitude</td>
            <td >{lat}</td>
          </tr>
          <tr>
            <td >Longitude</td>
            <td >{lng}</td>
          </tr>
        </tbody>
      </table>)
  }
}

export default styled(LocationTable)`
    tr:nth-child(odd){
        background-color: ${({theme}) => theme.lineColor};
    }
    tr:nth-child(even) {
        background-color: ${({theme}) => colorLuminance(theme.lineColor, 0.1)};
    }
    td {
        padding: .5rem ${sizes.defaultPadding};
        font-size: ${typography.regularFontSize};
    }

    td:first-child {
        font-weight: ${typography.light};
        color: ${({theme}) => theme.main};
        min-width: 10rem;
    }

    td:nth-child(2){
        font-weight: ${typography.thin};
        
        background-color: rgba(255, 255, 255, .1);
        min-width: 12rem;
    }

`
