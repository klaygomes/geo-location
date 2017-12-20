import React from 'react'
import { storiesOf } from '@storybook/react'

import MapPanel from './'
import Holder from '../../../utils/Holder'
import Button from '../../commons/Button'

storiesOf('Composite/MapPanel', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('No map', () => (
    <React.Fragment>
      <MapPanel />
    </React.Fragment>
  ))
  .add('With map', () => (
    <React.Fragment>
      <MapPanel showMap />
    </React.Fragment>
  ))
