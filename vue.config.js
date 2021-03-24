// vue.config.js
module.exports = {
    chainWebpack: config => {  
      // or:
      // modify its options:
      config.plugin('preload').tap(options => {
        option = {
            rel: 'preload',
            as: 'audio'
        }
        return options
      })
    }
  }