import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import LocationTable from '../../commons/LocationTable'
import Button from '../../commons/Button'
import Title from '../../commons/Title'

import locationDataShape from '../../../shapes/locationData'

class LocationPanel extends React.PureComponent {
  static displayName = 'LocationPanel'
  static propTypes = {
    onRequestMyLocation: PropTypes.func,
    onResetMyLocation: PropTypes.func,
    locationData: PropTypes.shape(locationDataShape),
    className: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.handleRequestMyLocation = this.handleRequestMyLocation.bind(this)
    this.handleResetMyLocation = this.handleResetMyLocation.bind(this)
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
  render () {
    const {className} = this.props
    return (
      <div className={className}>
        <Title fontWeight={500}>Estimated location</Title>
        <LocationTable className={'centered'} {...this.props.locationData} />
        <div className={'centered'}>
          <Button name='my-location' onClick={this.handleRequestMyLocation} className={'spaced'}>My location</Button>
          <Button name='reset-location' onClick={this.handleResetMyLocation} className={'spaced'}>Reset location</Button>
        </div>
      </div>
    )
  }
}

export default styled(LocationPanel)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .centered {
        margin: 0 auto;
    }
    .spaced {
        margin: 2rem 1rem;
    }
    > div {
        display: flex;
        align-items: space-between;
    }
`
