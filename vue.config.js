// const path = require('path')

const { defineConfig } = require('@vue/cli-service')
// defineConfig:提示语法
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint, build serve将不会进行eslint检查
  lintOnSave: false, // 关闭语法检查

  // 写原生webpack的配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 3000,
      host: 'localhost'
    }
    //  // 解析路径
    // resolve: {
    //   alias: {
    //     '#': path.join(__dirname, 'src/components')
    //   }
    // }
  }
})
