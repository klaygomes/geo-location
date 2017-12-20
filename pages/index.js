import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const Holder = styled.div`
  max-width: 75%;
  padding: 0 .5rem;
  margin: 0 auto;
  background-color: white;
`

export default () => (<Holder>
  <h1>Welcome to my solution page</h1>
  <p>These are my solutions to this frontend challenge</p>
  <h2>What was done</h2>
  <p>All versions are SSR enabled, responsive and acessible (you can use only your keyboard for example and a screen reader)</p>
  <p>All versions were tested on Chrome, Safari, Firefox and Edge (olders browser were neglected althouh there is polyfill)</p>
  <h2>Options</h2>
  <h3>Simple solution with React internal state management</h3>
  <p> <a href='/with-local-state' target='_blank'>Click here</a> to access</p>
  <h3>Solution using React and Redux</h3>
  <p>This solution uses redux-sagas as effects management (SSR rendered), you can use Redux Dev Tools to check for Events and etc.
    <a href='/with-redux' target='_blank'>Click here</a> to access</p>
  <h3>Source Code</h3>
  <p>Source code can be accessed <a href='https://bitbucket.org/klaygomes/ui-challenge/src' target='_blank'>here</a>.</p>
  <h3>Storybook</h3>
  <p>You can access the Storybook <a href='https://cryptoboard-storybook.herokuapp.com' target='_blank'>clicking here.</a></p>
  <h2>What is missing</h2>
  <ul>
    <li>Fix FOIT</li>
    <li>Cache api calls</li>
    <li>More tests?</li>
    <li>Webpack optimization(I did not spend any time on this)</li>
    <li>I18N</li>
  </ul>
  <p>You can acess this page using your cellphone</p>
  <img src='/static/cryptoboard.jpg' />
  <div>My linkedin: https://www.linkedin.com/in/klaygomes/</div>
  <div>Phone: +55 11 977387576</div>
</Holder>)
