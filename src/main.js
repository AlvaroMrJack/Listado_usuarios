import Vue from 'vue'
import Axios from '@/plugins/axios'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = Axios;

const accessToken = localStorage.getItem('accsess_token');

if(accessToken) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

new Vue({
  router,
  store,
  vuetify,
  Axios,
  render: h => h(App)
}).$mount('#app')
