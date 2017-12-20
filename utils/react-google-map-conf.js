/* global GOOGLE_MAP_URL GOOGLE_MAP_KEY */
import React from 'react'
const props = {style: {height: `400px`}}
export default {
  googleMapURL: GOOGLE_MAP_URL + 'key=' + GOOGLE_MAP_KEY,
  loadingElement: <div {...props} />,
  containerElement: <div {...props} />,
  mapElement: <div {...props} />
}
