import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { typography, sizes } from '../../../theme'
import colorLuminance from '../../../utils/color-luminance'

import locationDataShape from '../../../shapes/locationData'

class LocationTable extends React.Component {
  static propTypes = {
    ...locationDataShape,
    lastUpdate: PropTypes.object,
    onRequestInformation: PropTypes.func
  }
  static displayName = 'LocationTable'

  descriptionTable = {
    ip: 'IP',
    // TODO: Fix typo
    contryName: 'Country',
    regionName: 'Region',
    city: 'City',
    zipCode: 'Zip Code',
    lat: 'Latitude',
    lng: 'Longitude'
  }

  constructor (props) {
    super(props)

    this.handleOnRequestInformation = Object.keys(this.descriptionTable).reduce((acc, cur) => {
      acc[cur] = () => {
        if (typeof this.props.onRequestInformation === 'function' && this.props.lastUpdate) {
          this.props.onRequestInformation(cur, this.descriptionTable[cur], this.props.lastUpdate)
        }
      }
      return acc
    }, {})
  }

  render () {
    const {
      ip = '--',
      contryName = '--',
      regionName = '--',
      city = '--',
      zipCode = '--',
      lat = '--',
      lng = '--',
      className
    } = this.props

    return (
      <table className={className}>
        <tbody>
          <tr>
            <td>IP</td>
            <td><input type='text' name='ip' value={ip} readOnly style={{border: 'none', width: '100%'}} /></td>
            <td><img info='true' onClick={this.handleOnRequestInformation['ip']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{contryName}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['contryName']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{regionName}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['regionName']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>

          </tr>
          <tr>
            <td >City</td>
            <td>{city}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['city']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>

          </tr>
          <tr>
            <td>Zip Code</td>
            <td>{zipCode}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['zipCode']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>

          </tr>
          <tr>
            <td>Latitude</td>
            <td>{lat}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['lat']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>

          </tr>
          <tr>
            <td>Longitude</td>
            <td>{lng}</td>
            <td><img info='true' onClick={this.handleOnRequestInformation['lng']} width='24px' height='24px' src='https://image.flaticon.com/icons/svg/189/189665.svg' /></td>
          </tr>
        </tbody>
      </table>)
  }
}

export default styled(LocationTable)`
    img {
     cursor: pointer; 
    }
    max-width: 100vw;
    overflow: hidden;
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
        input {
          font-weight: ${typography.thin};
        }
        background-color: rgba(255, 255, 255, .1);
        width: 12rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
  

`
