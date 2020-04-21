<template>
  <el-container>
    <el-header height=''>
      <m-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer height=''>
      <m-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MHeader from '../components/header/index.vue';
import MBody from '../page/index.vue';
import MFooter from '../components/footer/index.vue';

export default {
  components: {
    MHeader,
    MBody,
    MFooter
  }
};

</script>

<style lang="less">
.el-container {
  display: flex;
  .el-header {
    background-color: #f8f8f8;
    padding: 0;
  }
  .el-main {
    width: 1190px;
    padding:0;
    margin: -40px auto 0;
    .m-page {
      outline: 1px solid;
    };
    position: relative;
    z-index: 2;
  }
  .el-footer {
    width: 1190px;
    margin: 0 auto;
  }
}
</style>
