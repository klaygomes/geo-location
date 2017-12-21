import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import Title from '../../commons/Title'
import LocationPanel from '../LocationPanel'
import MapPanel from '../MapPanel'
import Message from '../../commons/Message'

import locationShape from '../../../shapes/location'

const Column = styled.div`
    @media(min-width: 950px) {
    display:table-cell;
    width: 50%;
        ${({first}) => first && css`
        border-right: 1px solid ${({theme}) => theme.lineColor};
        padding-right: 2rem;
    `}

    ${({second}) => second && css`
        padding-left: 2rem;
    `}
    }
`
Column.displayName = 'Column'

class GeoLocation extends React.Component {
  static propTypes = {
    onHostname: PropTypes.func,
    onRequestMyLocation: PropTypes.func,
    onResetMyLocation: PropTypes.func,
    onErrorClick: PropTypes.func,
    className: PropTypes.string,
    myLocation: locationShape,
    hostnameLocation: locationShape,
    showMap: PropTypes.bool,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
    locationData: PropTypes.shape(locationShape)
  }
  constructor (props) {
    super(props)

    this.state = {
      showInfo: false,
      infoMessage: ''
    }
    this.handleRequestMyLocation = this.handleRequestMyLocation.bind(this)
    this.handleResetMyLocation = this.handleResetMyLocation.bind(this)
    this.handleHostnameDispatch = this.handleHostnameDispatch.bind(this)
    this.handleOnRequestInformation = this.handleOnRequestInformation.bind(this)
    this.handleOnErrorClick = this.handleOnErrorClick.bind(this)
    this.handleCloseInfo = this.handleCloseInfo.bind(this)
  }
  handleHostnameDispatch (hostname) {
    if (typeof this.props.onHostname === 'function') {
      this.props.onHostname(hostname)
    }
  }
  handleRequestMyLocation (ev) {
    if (typeof this.props.onRequestMyLocation === 'function') {
      this.props.onRequestMyLocation(ev)
    }
  }
  handleResetMyLocation (ev) {
    if (typeof this.props.onResetMyLocation === 'function') {
      this.props.onResetMyLocation(ev)
    }
  }
  handleOnErrorClick (ev) {
    if (typeof this.props.onErrorClick === 'function') {
      this.props.onErrorClick(ev)
    }
  }
  handleOnRequestInformation (...args) {
    const [_, info, date] = args
    const infoMessage = `This is your ${info} according to ${API_PROVIDER_NAME} at ${date}`
    this.setState({
      showInfo: true,
      infoMessage
    })
  }

  handleCloseInfo () {
    this.setState({
      showInfo: false,
      infoMessage: ''
    })
  }
  render () {
    const {
      className,
      myLocation,
      hostnameLocation,
      showMap,
      showError,
      errorMessage,
      locationData
    } = this.props
    return (
      <React.Fragment>
        {showError && <Message danger onClick={this.handleOnErrorClick}>{errorMessage}</Message>}
        {this.state.showInfo && <Message onClick={this.handleCloseInfo}>{this.state.infoMessage}</Message>}

        <Title>GeoLocation Test</Title>
        <div className={className}>
          <Column first>
            <LocationPanel
              onRequestMyLocation={this.handleRequestMyLocation}
              onResetMyLocation={this.handleResetMyLocation}
              onRequestInformation={this.handleOnRequestInformation}
              locationData={locationData}
            />
          </Column>
          <Column second>
            <MapPanel
              myLocation={myLocation}
              hostnameLocation={hostnameLocation}
              showMap={showMap}
              onHostname={this.handleHostnameDispatch}
            />
          </Column>
        </div>
      </React.Fragment>
    )
  }
}

export default styled(GeoLocation)`
  background-color: ${({theme}) => theme.main};

  min-height: 100%;
  display: table;
  max-width: 1324px;
  margin: 0 auto;
`
