import axios from './Interceptor.js';

axios.defaults.baseURL = 'http://localhost:8080/static/public_data';

var api = {
  // 获取Nav 数据
  getListData () {
    return axios({
      method: 'GET',
      url: '/nav_Data.json'
    });
  },

  // 获取热门搜索
  getSearchList (params) {
    return axios.get('/searchList.json', { params });
  },

  // 最近热门搜索
  getHotSearch (params) {
    return axios.get('/hotPosition.json', { params });
  },

  // footer 部分数据
  getFooterData () {
    return axios({
      method: 'GET',
      url: '/footer_Data.json'
    });
  },

  // 首页左侧导航菜单数据  menu
  // icon 指定所用的图标
  getMenuList () {
    return axios({
      method: 'GET',
      url: '/indexMenu_Data.json'
    });
  }

  // // 首页下方（有格调内容区数据获取
  // getByKeyWordsSearch (params) {
  //   return axios.get('/api/meituan/index/resultsByKeywords.json', { params })
  // }
};

export default api;
