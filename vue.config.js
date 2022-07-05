const path = require('path')

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
  },
  // 配置【网站标题】
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '黑马头条'
      return args
    })
  },
  // 替换主题
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量

            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.join(
              __dirname,
              'src/styles/theme.less'
            )}";`
          }
        }
      }
    }
  }
})
