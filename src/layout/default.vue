<template>
  <el-container>
    <el-header height=''>
      <header-bar />
      <header-search />
    </el-header>
    <el-main>

      <m-body class="m-page" />
    </el-main>
    <el-footer>
      <m-footer />
    </el-footer>
  </el-container>
</template>

<script>
import HeaderBar from '../components/header/header-bar.vue'
import HeaderSearch from '../components/header/header-search.vue'

import MHeader from './header.vue'
import MBody from './body.vue'
import MFooter from './footer.vue'

export default {
  components: {
    HeaderBar,
    HeaderSearch,
    MHeader,
    MBody,
    MFooter
  }
}

</script>

<style lang="less">
.el-container {
  .el-header {
    background-color: #f8f8f8;
    padding: 0px;
  }
  .el-main {
    width: 1190px;
    margin: 0 auto;
    .m-page {
      outline: 1px solid;
    }
  }
  .el-footer {
    width: 1190px;
    margin: 0 auto;
  }
}
</style>
