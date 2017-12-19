import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider, injectGlobal } from 'styled-components'

import { themes, typography } from '../theme'

const req = require.context('../components', true, /\.stories\.js$/)

injectGlobal`
  body {
    font-family: ${typography.fontFamily}
  }
`

addDecorator(story => (
  <ThemeProvider theme={themes['dark']}>
    {story()}
  </ThemeProvider>
))

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)