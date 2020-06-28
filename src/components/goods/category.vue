<template>
  <div class="filter-component">
    <div class="sort">
      <div class="label">
        <label>分类</label>
        <router-link class="all" to>全部</router-link>
      </div>
      <div class="f-content">
        <template v-for="(item, index) in data">
          <product-list :key="index" :title="item.name" :list="item.items" />
        </template>
      </div>
    </div>
    <div class="area">
      <div class="label">
        <label>区域</label>
        <router-link class="all" to>全部</router-link>
      </div>
      <div class="f-content">
        <template v-for="(item, index) in data">
          <product-list :key="index" :title="item.name" :list="item.items" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import productList from "./product-list.vue";

export default {
  data() {
    return {
      data: [
        {
          name: "美食",
          items: {
            title: "美食",
            items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"],
          },
        },
        {
          name: "外卖",
          items: {
            title: "外卖",
            items: [" 外卖"],
          },
        },
      ],
    };
  },
  components: {
    productList,
  },
};
</script>

<style lang="less">
.filter-component {
  border: 1px solid #eee;
  padding: 0 25px;
  min-height: 60px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #eee;

  & > div:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .sort,
  .area {
    display: flex;
    padding: 10px 0;
    .label {
      flex: 2;
      display: flex;
      height: 25px;
      line-height: 25px;

      label {
        display: inline-block;
      }
      .all {
        display: inline-block;
        padding: 0 8px;
        border-radius: 12px;
        background-color: orange;
        margin-left: 38px;
      }
    }
    .f-content {
      flex: 8;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
