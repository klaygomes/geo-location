const path = require('path')

module.exports = (config) => {

    config.externals = Object.assign({}, 
        config.externals,
        { "google": "google"} )

  return config
}