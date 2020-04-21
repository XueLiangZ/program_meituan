import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/static/public_data';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    // 设置appkey默认值
    appkey: '357737054_1569684860333'
  };
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default axios;
