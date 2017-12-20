import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import GeoLocation from './'
import Holder from '../../../utils/Holder'
import panelInformation from '../../../data/panel-information'
import locations from '../../../data/locations'

storiesOf('Composite/GeoLocation', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>This an empty example</p>
      <GeoLocation />
    </React.Fragment>
  ))
  .add('With handlers and data', () => (
    <React.Fragment>
      <p>This is a full populated example</p>
      <GeoLocation
        {...locations}
        locationData={panelInformation}
        onHostname={action('onHostname')}
        onRequestMyLocation={action('onRequestMyLocation')}
        onResetMyLocation={action('onResetMyLocation')}
      />
    </React.Fragment>
  ))
  .add('With handlers, data and error', () => (
    <React.Fragment>
      <p>This is a full populated example</p>
      <GeoLocation
        {...locations}
        showError
        locationData={panelInformation}
        onErrorClick={action('onErrorClick')}
        onHostname={action('onHostname')}
        onRequestMyLocation={action('onRequestMyLocation')}
        onResetMyLocation={action('onResetMyLocation')}
      />
    </React.Fragment>
  ))
