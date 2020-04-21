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
          path: 'search/:id',
          name: 'goods_search',
          component: () => import('../page/goods-list.vue')
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('../page/index.vue')
        },
        {
          path: '/',
          redirect: '/index'
        }
      ]
    },
    {
      path: '/login',
      name: "login",
      component: () => import('../page/login.vue')
    },
    // {
    //   path: "*",
    //   redirect: "/",
    // },
  ]
});
