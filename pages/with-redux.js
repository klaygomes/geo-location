/* global THEME_NAME */
import React from 'react'

import { injectGlobal, ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'

import GeoLocation from '../components/composite/GeoLocation'
import PageWithRedux from '../components/higher-order/with-redux'

import {ReduxWithSimpleSagas} from '../store'
import { themes, typography } from '../theme'

const GeoLocationWithRedux = PageWithRedux(GeoLocation)

injectGlobal`
  body {
    font-family: ${typography.fontFamily};
    background-color: ${themes[THEME_NAME].main};
    padding: 0 auto;
    margin: 0;
    font-size: 32px;
  }
`

const NextPage = () => (<ThemeProvider theme={themes['dark']}>
  <GeoLocationWithRedux />
</ThemeProvider>)

export default withRedux(ReduxWithSimpleSagas)(NextPage)
