import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

window.Vue = new Vue({
  render: h => h(App),
  mounted() {
  }
}).$mount('#app')