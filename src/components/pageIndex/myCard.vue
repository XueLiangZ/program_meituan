<template>
  <div class="minsu_container">
    <div class="minsu_head" :style="{'backgroundColor': color}">
      <dl class="title">
        <dt>{{ title }}</dt>
        <dd
          :class="index1 == curIndex ? 'active' : ''"
          v-for="(item1, index1) in sugList"
          :key="index1"
          @mouseover="hanedelOver(index1)"
        >
          {{ item1.title }}
        </dd>
      </dl>
      <router-link to="/" class="total">
        全部 <span class="iconfont icon-arrow"></span>
      </router-link>
    </div>
    <div
      class="con_item"
      v-for="(item1, index1) in sugList"
      :key="index1"
      v-show="index1 == curIndex"
    >
      <div class="minsu_main">
        <el-card v-for="(i1, j1) in item1.carList" :key="index1 + '_' + j1">
          <router-link to="/">
            <div class="img_wrap">
              <img
                :src="require(`../../assets/img/card_minsu/${i1.img}`)"
                class="image item_img"
              />
              <img src="../../assets/user_head.png" class="user_head" alt="" />
            </div>
            <div class="desc">
              <h1>{{ i1.desc.title }}</h1>
              <p class="p1">
                <span>
                  整套{{ i1.desc.p1[0] }}整居室-可住{{ i1.desc.p1[1] }}人
                </span>
                <span>|</span>
                <span>{{ i1.desc.p1[2] }}</span>
              </p>
              <p class="p2">
                <span>￥</span><span class="price">{{ i1.desc.price }}</span>
              </p>
            </div>
          </router-link>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.sugList[0]);
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  props: ["sugList", "title","color"],
  methods: {
    hanedelOver(i) {
      this.curIndex = i;
    },
  },
};
</script>

<style lang="less">
.minsu_container {
  // height: 300px;
  margin-top: 30px;
  border: 1px solid #eee;
  .minsu_head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    .title {
      color: azure;
      dt {
        display: inline-block;
        margin-left: 20px;
        font-size: 16px;
      }
      dd {
        display: inline-block;
        margin-left: 8px;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        &.active::after {
          content: "";
          display: block;
          border: 6px solid transparent;
          border-bottom-color: #fff;
          position: absolute;
          bottom: -1px;
          left: 0px;
          right: 0px;
          width: 1px;
          margin: 0 auto;
          // transform: translateX(50%) translateY(-20px);
        }
      }
    }
    .total {
      color: azure;
      margin-right: 15px;
      &:hover {
        color: brown;
      }
    }
  }
  .minsu_main {
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    .el-card {
      width: 370px;
      display: inline-block;
      padding: 0;
      margin-bottom: 20px;
      .el-card__body {
        padding: 0;
      }
      .img_wrap {
        position: relative;
        .item_img {
          width: 370px;
          height: 208px;
          border-radius: 2px;
        }
        .user_head {
          width: 40px;
          height: 40px;
          background-color: #fff;
          position: absolute;
          bottom: -20px;
          right: 16px;
          padding: 4px;
          border-radius: 50%;
        }
      }
      .desc {
        margin: 10px 5px;
        text-align: left;
        line-height: 18px;
        h1 {
          display: inline-block;
          width: 250px;
          height: 16px;
          overflow: hidden; /* 超出的文本隐藏 */
          white-space: nowrap;
          text-overflow: ellipsis; /* 溢出用省略号显示 */
          font-size: 16px;
          font-weight: 600;
        }
        .p1 {
          font-size: 10px;
          color: #ccc;
        }
        .p2 {
          color: red;
          font-size: 12px;
          vertical-align: text-bottom;
          .price {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
