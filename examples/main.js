// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import KnightUI from 'src/index'
import 'packages/theme-default/src/index.less'
// 用于渲染markdown
import 'examples/assets/md.less'
import demoBlock from './components/demo-block.vue'

Vue.component('demo-block', demoBlock)
console.log(KnightUI)
Vue.use(KnightUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
