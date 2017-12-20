import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import HostnameDispatcher from './'
import Holder from '../../../utils/Holder'

storiesOf('Commons/HostnameDispatcher', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>This control only dispatch events when filled with a valid hostname</p>
      <HostnameDispatcher onDispatch={action('Hostname Dispatched')} />
    </React.Fragment>
  ))
