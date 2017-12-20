import styled, {css} from 'styled-components'

import { typography } from '../../../theme'
import colorLuminance from '../../../utils/color-luminance'

const Button = styled.button`
    font-size: ${typography.regularFontSize};
    font-weight: ${typography.bold};
    color: ${({theme}) => theme.textColor};
    border: 1px solid ${({theme}) => theme.lineColor};
    background-color:${({theme}) => colorLuminance(theme.main, 0.4)};
    ${({disabled, theme}) => disabled && css`background-color:${theme.lineColor};`}

    margin: 0;
    padding: 1em 2em;
`
Button.displayName = 'Button'

export default Button
