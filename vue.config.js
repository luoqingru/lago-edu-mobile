const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false

  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       bypassOnDebug: true
  //     })
  //     .end()
  // }
})
