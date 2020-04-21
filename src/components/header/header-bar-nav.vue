<template>
  <dl class="nav">
    <dd class="has-list">
      <router-link :to="{ name: 'login' }">
        我的美团
      </router-link>
      <list-box class="list-box" :datalist="ListData" />
    </dd>
    <dd>
      <router-link to="name:app">
        手机APP
      </router-link>
    </dd>
    <dd class="has-list">
      商家中心
      <list-box class="list-box" :datalist="ListShop" width="140%" />
    </dd>

    <dd class="has-list">
      美团规则
      <list-box class="list-box" :datalist="ListRules" />
    </dd>
    <dd class="has-list">
      网站导航
      <list-box
        class="list-box m-group"
        :datalist="ListNav"
        width="1190px"
      />
    </dd>
  </dl>
</template>

<script>
import ListBox from './list-box.vue';

export default {
  mounted () {
    this.getListData();
  },
  data () {
    return {
      ListData: [],
      ListShop: [],
      ListRules: [],
      ListNav: []
      // ListNav: [
      //   {
      //     width: '234px',
      //     title: '酒店旅游',
      //     list: [
      //       {
      //         name: '国际机票',
      //         link: '/'
      //       },
      //       {
      //         name: '火车票',
      //         link: '/'
      //       },
      //       {
      //         name: '民宿',
      //         link: '/'
      //       },
      //       {
      //         name: '经济型酒店',
      //         link: '/'
      //       },
      //       {
      //         name: '主题酒店',
      //         link: '/'
      //       },
      //       {
      //         name: '商务酒店',
      //         link: '/'
      //       },
      //       {
      //         name: '公寓',
      //         link: '/'
      //       },
      //       {
      //         name: '豪华酒店',
      //         link: '/'
      //       },
      //       {
      //         name: '客栈',
      //         link: '/'
      //       },
      //       {
      //         name: '青年旅社',
      //         link: '/'
      //       },
      //       {
      //         name: '度假酒店',
      //         link: '/'
      //       }
      //     ]
      //   },
      //   {
      //     width: '156px',
      //     title: '吃美食',
      //     list: [
      //       {
      //         name: '烤鱼',
      //         link: '/'
      //       },
      //       {
      //         name: '特色小吃',
      //         link: '/'
      //       },
      //       {
      //         name: '烧烤',
      //         link: '/'
      //       },
      //       {
      //         name: '自助餐',
      //         link: '/'
      //       },
      //       {
      //         name: '火锅',
      //         link: '/'
      //       },
      //       {
      //         name: '代金券',
      //         link: '/'
      //       }
      //     ]
      //   },
      //   {
      //     width: '78px',
      //     title: '看电影',
      //     list: [
      //       {
      //         name: '热映电影',
      //         link: '/'
      //       },
      //       {
      //         name: '热门电影',
      //         link: '/'
      //       },
      //       {
      //         name: '热映电影口碑榜',
      //         link: '/'
      //       },
      //       {
      //         name: '最受期待电影',
      //         link: '/'
      //       },
      //       {
      //         name: '国内票房榜',
      //         link: '/'
      //       },
      //       {
      //         name: '北美票发房榜',
      //         link: '/'
      //       },
      //       {
      //         name: '电影排行榜',
      //         link: '/'
      //       }
      //     ]
      //   }
      // ]
    };
  },
  methods: {
    /**
     * 获取列表数据
     */
    async getListData () {
      const { data: res } = await this.$api.getListData();
      this.ListData = res.data.listData;
      this.ListShop = res.data.listShop;
      this.ListRules = res.data.listRules;
      this.ListNav = res.data.listNav;
      // console.dir(this.ListNav)
    }
  },
  components: {
    ListBox
  }
};
</script>

<style lang="less">
.nav {
  height: 100%;
  display: flex;
  dd {
    float: left;
    min-width: 75px;
    padding: 10px 16px;
    border-radius: 3px 3px 0 0;
    position: relative;
    box-sizing: border-box;
    border: 1px solid transparent;

    &.has-list:hover {
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-color: #eee;
      border-bottom-color: transparent;
      color: #fc8a00;
      .list-box {
        display: block;
        &.m-group {
          box-sizing: border-box;
          padding: 35px 40px;
          display: flex;
          // justify-content: space-between;
          .my-group.sm-list {
            margin-right: 40px;
          }
        }
      }
      .list-group {
        display: flex;
      }
    }
  }
}
</style>
