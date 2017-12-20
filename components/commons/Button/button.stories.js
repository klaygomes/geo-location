import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './'
import Holder from '../../../utils/Holder'

storiesOf('Commons/Button', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>This is a Default button</p>
      <Button onClick={action('Default button')}>Default Button</Button>
      <p>Disabled button</p>
      <Button onClick={action('Default button')} disabled>Disabled</Button>
    </React.Fragment>
  ))
