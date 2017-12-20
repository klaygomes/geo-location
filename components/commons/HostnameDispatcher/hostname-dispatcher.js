import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { typography } from '../../../theme'

import isValidDomain from '../../../utils/is-valid-domain'
import noop from '../../../utils/noop-func'
import Button from '../Button'

const Holder = styled.div`
    border: solid ${({theme}) => theme.lineColor} 1px;
    display: flex;
    padding: 0;
    padding-left: 1rem;
    margin-bottom: 1rem;
`
const TextBox = styled.input.attrs({
  type: 'text'
})`
      color: ${({theme}) => theme.textColor};
      font-weight: ${typography.thin};
      flex-grow: 2;
      border-left: 0;
      border-right: none;
      border-top: none;
      border-bottom: none;
      height: 2em;
      width: 95%;
      font-size: 1.77rem;
  `
TextBox.displayName = 'TextBox'

const Span = TextBox.withComponent('span').extend`
    flex-grow: 0;
    width: auto;
    line-height: 2em;
`
Span.displayName = 'Span'

const Dispatcher = Button.extend`
  border-left: solid ${({theme}) => theme.lineColor} 1px;

  border: none;
`
Dispatcher.displayName = 'Dispatcher'

const Error = styled.span`
        color: ${({theme}) => theme.error};
        font-size: ${typography.regularFontSize};

        vertical-align: top;
    `
Error.displayName = 'Error'

class HostnameDispatcher extends React.PureComponent {
  static propTypes = {
    onDispatch: PropTypes.func,
    onTextChange: PropTypes.func
  }
  static defaultProps = {
    onDispatch: noop,
    onTextChange: noop
  }
  static displayName = 'HostnameDispatcher'
  constructor (props) {
    super(props)
    this.state = {
      isValid: true,
      value: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.storeTextBoxRef = this.storeTextBoxRef.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  storeTextBoxRef (ref) {
    this.textBoxRef = ref
  }
  handleOnClick (ev) {
    this.setState({
      isValid: isValidDomain(this.state.value)
    }, () => {
      if (!this.state.isValid) {
        this.textBoxRef.select()
        return
      }
      if (typeof this.props.onDispatch === 'function') {
        this.props.onDispatch(this.state.value)
      }
    })
  }
  handleKeyPress (ev) {
    if (ev.key === 'Enter' && ev.shiftKey === false) {
      this.handleOnClick(ev)
    }
  }
  handleTextChange (ev) {
    this.setState({
      value: ev.target.value,
      isValid: true
    }, () => {
      if (typeof this.props.onTextChange === 'function') {
        this.props.onTextChange(ev)
      }
    })
  }
  render () {
    return (
      <React.Fragment>
        <Holder {...this.state}>
          <Span>http://</Span>
          <TextBox
            isValid={this.state.isValid}
            onChange={this.handleTextChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.value}
            placeholder='example.com'
            innerRef={this.storeTextBoxRef} />
          <Dispatcher
            onClick={this.handleOnClick}
            disabled={this.state.froozenUI}>Locate</Dispatcher>
        </Holder>
        {!this.state.isValid && <Error>Please inform a valid hostname</Error>}
      </React.Fragment>)
  }
}

export default HostnameDispatcher
