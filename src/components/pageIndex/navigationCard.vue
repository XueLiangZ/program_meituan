<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix box_header">
      <span class="title">美团导航</span>
    </div>
    <dl class="box_contain">
      <div class="item_wrap" v-for="(itemgroup, i1) in navList" :key="i1">
        <dt class="title">
          {{ itemgroup.title }}
        </dt>
        <dd>
          <ul class="group">
            <li v-for="(item2, i2) in itemgroup.list" :key="i1 + '-' + i2">
              <router-link :to="{name: 'position' , params:{city: item2} }">
                {{ item2 }}
              </router-link>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </el-card>
</template>

<script>
export default {
  created() {
    this.getNavCardList();
  },
  data() {
    return {
      navList: [],
    };
  },
  methods: {
    async getNavCardList() {
      const { data: res } = await this.$api.getNavCardList();
      if (res.status != "success") {
        console.log("获取推荐列表数据失败");
        return;
      }
      this.navList = res.data;
    },
  },
};
</script>

<style lang="less">
.box-card {
  text-align: left;
  .box_header {
		font-size: 16px;
		font-weight: bolder;
  }
  .box_contain {
    .item_wrap {
      display: flex;
      .title {
        width: 100px;
				font-size: 14px;
				margin-top: 10px;
			}

      .group {
        margin: 10px 50px 0 50px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-flow: row wrap;
        li {
					width: 70px;
          height: 30px;
          line-height: 30px;
        }
			}

			&:last-of-type{
				.group{
        border-bottom: none;
				}
			}
    }
  }
}
</style>
