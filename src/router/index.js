/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/home',    /*this is the home page, both / and /home should default to this*/
      alias: ['/'],
      name: 'home',
      component: HomePage /*component must match import name*/
    }

  ]
})
