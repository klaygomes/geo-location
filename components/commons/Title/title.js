import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { typography } from '../../../theme'

const Title = styled(({index, className, children}) => React.createElement(
  `h${index}`,
  { className },
  <svg
    viewBox='0 0 40 40'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'>
    <g><path d='m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z' /></g>
  </svg>,
  children
))`
    font-size: ${typography.bigFontSize};
    font-weight: ${({fontWeight}) => fontWeight || typography.xBold};
    color: ${({theme}) => theme.textColor};

    margin: 0;
    padding: 2rem 0;

    letter-spacing: -.1em;
    text-transform: uppercase;

    svg {
        height:.8em;
        line-height: 1em;
        vertical-align: middle;
        fill-opacity: .7;
        padding-bottom: 0.1em;
    }
`

Title.displayName = 'Title'
Title.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node.isRequired
}
Title.defaultProps = {
  index: 1
}

export default Title
