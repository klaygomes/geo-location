/* global THEME_NAME */

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Head from 'next/head'
import media from '../utils/media'
import { typography } from '../theme'

const Holder = styled.div`
  max-width: 75%;
  padding: 0 .5rem;
  ${ media.phone`
  max-width: 100%;
  padding: 0 1rem;
  ` }
  margin: 0 auto;
  background-color: white;
  font-size: .8rem;
`

export default () => (<Holder>
  <Head>
    <link rel='stylesheet' href={`/static/styles/fixnext.${THEME_NAME}.css`} />
  </Head>
  <h1>Welcome to my solution page</h1>
  <p>GeoLocation is a working web application which aims to retrieve details about the user's location and allow the user to find out the physical location of websites, by displaying its hosting position on a map.</p>

  <p>For this solution the following technologies were chosen:</p>
  <ul>
    <li>React</li>
    <li>Redux</li>
    <li>Redux Sagas</li>
    <li>Next.js</li>
    <li>Jest</li>
    <li>Enzyme</li>
    <li>Storybook</li>
  </ul>
  <h2>What was done</h2>
  <p>GeoLocation was written with SSR, responsiveness, acessibleness in mind</p>
  <p>It was tested on Chrome, Safari, Firefox and Edge (olders browser were neglected althouh there is polyfill)</p>
  <h2>Options</h2>
  <h3>Solution using React and Redux</h3>
  <p>This solution uses redux-sagas as effects management (SSR rendered), you can use Redux Dev Tools to check for Events and etc.
    <a href='/with-redux' target='_blank'>Click here</a> to access</p>
  <h3>Simple solution with React internal state management</h3>
  <p> <a href='/with-local-state' target='_blank'>Click here</a> to access</p>
  <h3>Source Code</h3>
  <p>Source code can be accessed <a href='https://bitbucket.org/klaygomes/ui-challenge/src' target='_blank'>here</a>.</p>
  <h3>Storybook</h3>
  <p>You can access the Storybook <a href='https://geo-location-storybook.herokuapp.com/' target='_blank'>clicking here.</a></p>
  <h3>Code Coverage</h3>
  <p>You can access the latest code coverage <a href='https://geo-location-coverage.herokuapp.com/' target='_blank'>clicking here.</a></p>
  <h2>What is missing</h2>
  <ul>
    <li>Fix FOIT</li>
    <li>Cache api calls</li>
    <li>More tests?</li>
    <li>Webpack optimization(I did not spend any time on this)</li>
    <li>I18N</li>
  </ul>
  <p>You can acess this page using your cellphone</p>
  <img src='/static/geocode-site.png' />
  <div>My linkedin: https://www.linkedin.com/in/klaygomes/</div>
  <div>Phone: +55 11 977387576</div>
</Holder>)
