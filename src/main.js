import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import ScrollMagic from "vue-scrollmagic"
import lazyLoading from "./directives/lazyLoading"
import store from "./store"
Vue.use(ScrollMagic)

Vue.directive('lazyload', lazyLoading)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store: store,
  render: h => h(App),
}).$mount('#app')

