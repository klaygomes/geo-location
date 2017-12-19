const defaultConfiguration = {
    API_URL: 'https://freegeoip.net/json/'
  }
  
  module.exports = Object.assign({},
    defaultConfiguration, process.env.NODE_ENV === 'production' && {
      /* production configuration goes here */
  
    })