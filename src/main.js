// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store/index'
import VueRouter from 'vue-router'
import {routes} from './router/index'
Vue.use(VueRouter)
const router = new VueRouter({
	mode:'history',
	routes
})

import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import UrlMapping from './apis/UrlMapping.js'
Vue.prototype.$UrlMapping = new UrlMapping()
import Apis from './apis/Apis.js'
Vue.prototype.$Apis = new Apis()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//store,
  components: { App },
  template: '<App/>'
})
