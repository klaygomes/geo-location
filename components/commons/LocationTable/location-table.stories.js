import React from 'react'
import { storiesOf } from '@storybook/react'

import LocationPanel from './'
import Holder from '../../../utils/Holder'

import panelInformation from '../../../data/panel-information'

storiesOf('Commons/LocationPanel', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>Location panel without any information</p>
      <LocationPanel />
    </React.Fragment>
  ))
  .add('Populated', () => (
    <React.Fragment>
      <p>Location panel populated</p>
      <LocationPanel {...panelInformation} />
    </React.Fragment>
  ))
