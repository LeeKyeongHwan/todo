const webpack = require('webpack')

// vue.config.js
module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // Moment
        moment: 'moment'
      })
    ]
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  }
}
