var defaultConfiguration = {
  API_URL: 'https://freegeoip.net/json/',
  API_PROVIDER_NAME: 'freegeoip.net',
  THEME_NAME: 'dark',
  GOOGLE_MAP_URL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
  GOOGLE_MAP_KEY: 'AIzaSyD637xJI017wi51eURtnlOgg7offASvOBc'
}

module.exports = Object.assign({},
  defaultConfiguration, process.env.NODE_ENV === 'production' && {
    /* production configuration goes here */

  })
