import Vue from 'vue'
import App from './App.vue'
import common from './lib/index'
Vue.use(common,{storageKey:"testRoot"})
new Vue({
  el: '#app',
  render: h => h(App)
})
