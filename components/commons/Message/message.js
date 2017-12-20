import React from 'react'
import styled, {css} from 'styled-components'

import {typography} from '../../../theme'

const Message = styled.div`
    background-color: ${({theme}) => theme.error};
    font-size: ${typography.regularFontSize};
    color:  ${({theme}) => theme.textColor};

    padding: 2rem;
    text-align: center;
`
Message.displayName = 'Message'

export default Message
