import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VuePageTransition from 'vue-page-transition'
import router from './router'
import './registerServiceWorker'

Vue.use(VuePageTransition)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
