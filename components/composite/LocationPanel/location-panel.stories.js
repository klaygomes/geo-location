import React from 'react'
import { storiesOf } from '@storybook/react'

import LocationPanel from './'
import Holder from '../../../utils/Holder'

storiesOf('Composite/LocationPanel', module)
  .addDecorator(story => (
  <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <LocationPanel />
    </React.Fragment>
  ))
