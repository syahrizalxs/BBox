import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(vuetify, {
  theme: {
    primary: '#0077B5',
  },
})

Vue.config.productionTip = true
Vue.config.devTool = true

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
