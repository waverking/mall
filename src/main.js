import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "components/common/toast"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/image/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
