<template>
  <div class="search-wrap">
    <el-row class="search-contain">
      <el-col :span="3">
        <router-link tag="h2" class="logo" to="/">美团</router-link>
      </el-col>
      <el-col :span="15">
        <el-row class="search-contaier">
          <el-input
            v-model="searchWords"
            placeholder="请输入内容"
            @focus="handelFocus"
            @blur="handelBlur"
            @input="inputHandel"
          ></el-input>
          <router-link :to="{ name: 'search', params: { id: searchWords } }">
            <el-button type="primary" icon="el-icon-search"></el-button>
          </router-link>
          <dl class="list-hotposition" v-show="isHotplace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotPosition"
              :key="index"
              @click="handelClick(item)"
            >
              <router-link to="/">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="list-search" v-show="isSearch">
            <dt>搜索...</dt>
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="'goodslist/' + item">{{ item }}</router-link>
            </dd>
          </dl>
        </el-row>
        <el-row class="hot-position">
          <router-link
            tag="a"
            to="/"
            v-for="(item, index) in hotPosition"
            :key="index"
            >{{ item }}</router-link
          >
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchWords: null,
      isFocus: false,
      hotPosition: [],
      searchList: null
    };
  },
  created () {
    this.$api.getHotSearch().then((resp) => {
      this.hotPosition = resp.data.data;
    });
  },
  computed: {
    isHotplace: function () {
      return this.isFocus && !this.searchWords;
    },
    isSearch: function () {
      return this.isFocus && this.searchWords;
    }
  },
  methods: {
    handelFocus () {
      this.isFocus = true;
    },
    handelBlur () {
      // 防止失焦点后无法点击跳转,添加延迟
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    inputHandel () {
      this.$api.getSearchList().then((resp) => {
        // console.log(resp.data.data.list)
        var list = resp.data.data.list.filter((item) => {
          return item.includes(this.searchWords);
        });
        this.searchList = list;
      });
    },
    handelClick (item) {
      this.searchWords = item;
    }
  }
};
</script>

<style lang="less" scoped>
.search-wrap {
  width: 100%;
  background-color: #fff;
  padding-top: 20px;
  box-sizing: border-box;
  .search-contain {
    width: 1190px;
    min-width: 1190px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 50px;
    .logo {
      display: block;
      margin: 20px 0px;
      width: 130px;
      height: 50px;
      cursor: pointer;

      background-image: url("../../assets/logo.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      text-indent: -99999px;
      overflow: hidden;
    }
    .search-contaier {
      margin-left: 160px;
      margin-top: 20px;
      position: relative;
      .el-input {
        padding-right: 0px;
        box-sizing: border-box;
        // border: 1px solid;
        outline: none;
        .el-input__inner:focus {
          outline: none;
        }
      }
      .el-button {
        width: 80px;
        height: 40px;
        outline: none;
        position: absolute;
        border: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        right: 0px;
        background-color: #ffc330;
      }
      .list-hotposition,
      .list-search {
        width: calc(100% - 81px);
        padding: 5px 15px;
        box-sizing: border-box;
        border-radius: 0 0 5px 5px;
        box-shadow: 0px 2px 1px 1px #ccc;
        position: absolute;
        background-color: #fff;
        z-index: 5;
        top: 36px;
        left: 1px;
        text-align: left;
        dt {
          margin-bottom: 2px;
        }
        dd {
          display: block;
          margin-bottom: 2px;
        }
      }
    }
    .hot-position {
      margin-top: 10px;
      padding-left: 152px;
      text-align: left;
      a {
        margin: 0 5px;
        color: #999;
        &:hover {
          color: #f40;
        }
      }
    }
  }
}
</style>
