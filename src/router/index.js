import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/default.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})
