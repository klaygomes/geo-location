import React from 'react'
import { storiesOf } from '@storybook/react'

import LocationMap from './'
import Holder from '../../../utils/Holder'
import locations from '../../../data/locations'
import googleMapConf from '../../../utils/react-google-map-conf'

storiesOf('Commons/LocationMap', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>A default map will always show São Paulo with a default zoom of 8 without any markers</p>
      <LocationMap
        {...googleMapConf}
      />
    </React.Fragment>))
  .add('With home location', () => (
    <React.Fragment>
      <p>If it has only one marker it will use it as center point</p>
      <LocationMap
        myLocation={locations.myLocation}
        {...googleMapConf}
      />
    </React.Fragment>))
  .add('With hostname location', () => (
    <React.Fragment>
      <p>If it has only one marker it will use it as center point</p>
      <LocationMap
        hostnameLocation={locations.hostnameLocation}
        {...googleMapConf}
      />
    </React.Fragment>))
  .add('With hostname & user location', () => (
    <React.Fragment>
      <p>If there are two markers it will merge its bounds and center the map based on that</p>
      <LocationMap
        {...locations}
        {...googleMapConf}
      />
    </React.Fragment>))
