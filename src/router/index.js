import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/default.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/search/:id',
          name: 'search',
          component: () => import('../page/goodsList.vue')
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('../page/index.vue')
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('../page/changeCity.vue')
        },
        {
          path: '/',
          redirect: '/index'
        },
      
       
      ]
    },
    {
      path: '/login',
      name: "login",
      component: () => import('../page/login.vue')
    },
    //  {
    //       path: "*",
    //       redirect: "/",
    //     },
  ]
});
