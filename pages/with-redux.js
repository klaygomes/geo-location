/* global THEME_NAME */
import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'

import GeoLocation from '../components/composite/GeoLocation'
import PageWithRedux from '../components/higher-order/with-redux'

import {ReduxWithSimpleSagas} from '../store'
import { themes, typography } from '../theme'

const GeoLocationWithRedux = PageWithRedux(GeoLocation)

injectGlobal`

`

const NextPage = () => (
<React.Fragment>
  <Head>
    <link rel='stylesheet' href={`/static/styles/theme.${THEME_NAME}.css`} />
  </Head>
  <ThemeProvider theme={themes['dark']}>
  <GeoLocationWithRedux />
</ThemeProvider>
</React.Fragment>)

export default withRedux(ReduxWithSimpleSagas)(NextPage)
