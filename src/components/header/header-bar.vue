<template>
  <div class="header-bar">
    <div class="header-bar-con">
      <m-geo />
      <m-nav />
    </div>
  </div>
</template>
<script>
import MGeo from './header-bar-geo.vue';
import MNav from './header-bar-nav.vue';
export default {
  components: {
    MGeo,
    MNav
  }
};
</script>

<style lang="less">
.header-bar {
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 999;
  .header-bar-con {
    width: 1190px;
    height: 40px;
    margin: auto;
    //flex实现左右对齐;
    display: flex;
    justify-content: space-between;
  }
}
</style>
