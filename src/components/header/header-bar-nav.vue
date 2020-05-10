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
