// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Vuex from 'vuex' //used for global variable purposes
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuex); //used for global variable purposes


/* eslint-disable no-new */

var store = new Vuex.Store({
  state: {
    loginStatus: 0
  }
});

new Vue({
  store,
  el: '#app', //links to App.vue div id = "app"
  router, //how does router work??
  components: {App}, //import App.vue page as a component
  template: '<App/>' //create html/css template from App.vue class
})


