// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import './plugins/axios';
import App from './App';
import router from './router';
import api from './API/api.js';

import './plugins/plugin';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$api = api;

Vue.config.productionTip = false;

// Vue.env.NODE_ENV = "production";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
