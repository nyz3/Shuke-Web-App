/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Newsfeed from '@/components/Newsfeed'
import LatestNews from '@/components/LatestNews'
import TrendingNews from '@/components/TrendingNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',    /*this is the home page, both / and /home should default to this*/
      alias: ['/'],
      name: 'home',
      component: HomePage /*component must match import name*/
    },
    {
      path: '/news',    /*this is the home page, both / and /home should default to this*/
      name: 'news',
      component: HomePage /*component must match import name*/
    },
    {
      path: '/about',    /*this is the home page, both / and /home should default to this*/
      name: 'about',
      component: HomePage /*component must match import name*/
    },
    {
      path: '/contact',    /*this is the home page, both / and /home should default to this*/
      name: 'contact',
      component: HomePage /*component must match import name*/
    },
    {
      path: '/newsfeed',
      name: 'newsfeed',
      component: Newsfeed
    },
    {
      path: '/latest',
      name: 'latest',
      component: LatestNews
    },
    {
      path: '/trending',
      name: 'trending',
      component: TrendingNews
    }
  ]
})
