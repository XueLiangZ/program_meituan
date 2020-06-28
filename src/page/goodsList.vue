<template>
  <div class="Search_contain">
    <!-- 面包屑 -->
    <el-row class="row_breadcrumb">
      <el-col>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            >{{ position }}{{ searchWords }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 分类区域 -->
    <el-row>
      <el-col>
        <category />
      </el-col>
    </el-row>

    <!-- 搜索商品列表展示区 -->
    <el-card>
      <el-row>
        <el-col class="common-list">
          <ul class="sort-options">
            <li v-for="(item, index) in queue" :key="index">
              <router-link
                to=""
                @click.native="setitem(item.key)"
                :class="{ active: item.key == curitem ? true : false }"
                >{{ item.name }}
              </router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-for="(item, i) in sortList" :key="i">
          <main-list :data="item" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      curitem: "AI",
      queue: [
        {
          key: "AI",
          name: "智能排序",
        },
        {
          key: "price",
          name: "价格排序",
        },
        {
          key: "renqi",
          name: "人气最高",
        },
        {
          key: "pinjia",
          name: "评价最高",
        },
      ],
      sortList: [
        {
          image: "http://p0.meituan.net/ xc",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: " x",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setitem(val) {
      console.log(val);
      this.curitem = val;
    },
  },
  computed: {
    ...mapState(["position"]),
    searchWords() {
      return this.$route.params.id;
    },
  },
  components: {
    category: () => import("../components/goods/category.vue"),
    mainList: () => import("../components/goods/shopping-info-list.vue"),
  },
};
</script>

<style lang="less">
.Search_contain {
  margin-top: 60px;
  // height: 200px;
  .row_breadcrumb {
    margin-bottom: 20px;
  }
  .sort-options {
    text-align: left;
    margin-bottom: 10px;
    li {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      margin: 0 20px;
    }
  }
}
</style>
