// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //links to App.vue div id = "app"
  router, //how does router work??
  components: { App }, //import App.vue page as a component
  template: '<App/>' //create html/css template from App.vue class
})
