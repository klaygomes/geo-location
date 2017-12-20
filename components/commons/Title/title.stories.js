import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from './'
import Holder from '../../../utils/Holder'

storiesOf('Commons/Title', module)
  .addDecorator(story => (
    <Holder>
      {story()}
    </Holder>
  ))
  .add('Default', () => (
    <React.Fragment>
      <p>This is a H1 title</p>
      <Title>GeoLocation</Title>
      <p>This is a H2 title</p>
      <Title index={2}>GeoLocation</Title>
      <p>This is a H8 title</p>
      <Title index={8}>GeoLocation</Title>
      <p>This is a H3 title with 500 as weight</p>
      <Title index={3} fontWeight={500}>GeoLocation</Title>
    </React.Fragment>
  ))
