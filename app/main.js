import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

require('normalize.css')

import VCalendar from 'v-calendar'
Vue.use(VCalendar, {
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L',
  }
})

window.Vue = new Vue({
  render: h => h(App),
  mounted() {
  }
}).$mount('#app')
