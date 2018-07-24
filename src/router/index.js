import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
//import HomePage from '@/components/HomePage' //dont forget about this
import routeTest from '@/components/routeTest'

Vue.use(Router)

export default new Router({
  routes: [
    { //Homepage - loading screen
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/test',
      name: 'test',
      component: routeTest
    }
  ]
})
