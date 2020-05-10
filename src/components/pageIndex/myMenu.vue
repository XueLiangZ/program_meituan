<template>
  <div class="my-menu">
    <div class="mymenu-link">
      <dl v-if="menuList" @mouseleave="enterLeave_1">
        <dt>全部分类</dt>
        <template v-for="(item, index) in menuList">
          <dd :key="index" @mouseenter="enterHandel_1(item.children)">
            <span :class="`icon-${item.icon}`" class="iconfont"></span>
            <template v-for="(t, i) in item.title">
              <span
                v-if="!(i === 0)"
                :key="Math.ceil(Math.random() * 100) + '_' + i"
                >/
              </span>
              <router-link
                :to="t[1]"
                :key="Math.ceil(Math.random() * 100) + '_' + i"
                >{{ t[0] }}</router-link
              >
            </template>
            <span class="icon-arrow iconfont"></span>
          </dd>
        </template>
      </dl>
    </div>
    <div
      class="mymenu-info"
      v-show="isEnter || isEnter_2"
      @mouseenter="enterHandel_2"
      @mouseleave="enterLeave_2"
    >
      <template v-for="(item, index) in curDetail">
        <div
          class="detail"
          :key="Math.ceil(Math.random() * 1000) + '_' + index"
        >
          <div class="title">
            <h2>
              <router-link to="/">{{ item.title }}</router-link>
            </h2>
            <router-link class="more" :to="item.more">
              更多 <span class="icon-arrow iconfont"></span>
            </router-link>
          </div>

          <div
            class="menu-link"
            :key="Math.ceil(Math.random() * 1000) + '_' + index"
          >
            <template v-for="(t, i) in item.list">
              <router-link
                :to="t[1]"
                :key="Math.ceil(Math.random() * 1000) + '_' + i"
                >{{ t[0] }}</router-link
              >
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getMenuList();
  },

  data() {
    return {
      menuList: [],
      isEnter: false,
      isEnter_2: false,
      curDetail: null,
    };
  },
  methods: {
    async getMenuList() {
      const { data: res } = await this.$api.getMenuList();
      // console.dir(res);
      this.menuList = res.data;
      // console.dir(this.menuList);
    },
    enterHandel_1(msg) {
      this.isEnter = true;
      this.curDetail = msg;
    },
    enterLeave_1() {
      setTimeout(() => {
        this.isEnter = false;
      }, 200);
    },
    enterHandel_2() {
      this.isEnter_2 = true;
    },
    enterLeave_2() {
      this.isEnter_2 = false;
    },
  },
};
</script>

<style lang="less">
.my-menu {
  width: 230px;
  height: 475px;
  border: 1px solid #eee;
  border-radius: 3px;
  position: relative;
  background-color: #fff;
  .mymenu-link {
    // width: 228px;
    overflow: hidden;
    dl {
      margin: 10px;
      // border: 1px solid;
      text-align: left;
      dt {
        font-size: 18px;
        font-weight: 700;
        color: #222222;
        margin-bottom: 15px;
        font-family: sans-serif;
      }
      dd {
        font-size: 13px;
        width: 100%;
        height: 20px;
        line-height: 20px;
        padding: 2px 5px;
        &:hover {
          background-color: #fff3cc;
        }
        .icon-arrow {
          float: right;
        }

        .iconfont {
          margin-right: 6px;
        }

        a:hover {
          color: #f40;
        }
      }
    }
  }

  .mymenu-info {
    position: absolute;
    left: calc(100% + 1px);
    bottom: 0px;
    z-index: 99;
    width: 400px;
    height: 430px;
    box-shadow: 0 0 1px 1px #999;
    background-color: #fff;
    .detail {
      margin: 15px;
      // border: 1px solid;
      .title {
        overflow: hidden;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        h2 {
          float: left;
          font-size: 18px;
          font-weight: normal;
          a {
            color: #000;
          }
        }
        a.more {
          display: block;
          float: right;
          font-size: 14px;
          margin-top: 5px;
        }
      }
      .menu-link {
        margin-top: 14px;
        text-align: left;
        a {
          display: inline-block;
          color: #999;
          font-size: 14px;
          margin: 4px;
          &:hover {
            color: #f40;
          }
        }
      }
    }
  }
}
</style>
