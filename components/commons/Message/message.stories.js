import React from 'react'
import { storiesOf } from '@storybook/react'

import Message from './'
import Holder from '../../../utils/Holder'

storiesOf('Commons/Message', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>Default message</p>
      <Message>This is a default message</Message>
    </React.Fragment>
  ))
  .add('danger', () => (
    <React.Fragment>
      <p>Default message</p>
      <Message danger>This is a danger message</Message>
    </React.Fragment>
  ))
