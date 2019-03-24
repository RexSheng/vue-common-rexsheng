import Vue from 'vue'
import App from './App.vue'
import common from './lib/index'
Vue.use(common)
new Vue({
  el: '#app',
  render: h => h(App)
})
