import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

axios.defaults.baseURL='http://localhost:5000'
Vue.use(VueAxios,axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
