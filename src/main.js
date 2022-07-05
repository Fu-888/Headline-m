import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//
import '@/styles/index.less'
//  动态设置 REM 基准值（html 标签的字体大小）
import 'amfe-flexible'
// 引入组件
import TouTiaoIcon from '@/components/icon.vue'

// vant组件库
import Vant from 'vant'
import 'vant/lib/index.less'

// 注册全局组件
Vue.component('TouTiaoIcon', TouTiaoIcon)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
