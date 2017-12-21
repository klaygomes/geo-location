import styled from 'styled-components'
import {typography} from '../../../theme'

const Message = styled.div`
    background-color: ${({theme, danger}) => danger ? theme.error : theme.success};
    font-size: ${typography.regularFontSize};
    color:  ${({theme}) => theme.textColor};

    cursor: pointer;
    padding: 2rem;
    text-align: center;
`
Message.displayName = 'Message'

export default Message
