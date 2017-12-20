module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.externals = Object.assign({},
      config.externals,
      {'google': 'google'})
    return config
  },
  webpackDevMiddleware: config => {
    config.externals = Object.assign({},
      config.externals,
      {'google': 'google'})
    return config
  }
}
