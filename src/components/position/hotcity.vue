<template>
  <div class="hot-city">
    <h3>{{ title }}:</h3>
    <p v-for="(item, i) in list" :key="i">
      <router-link to="/">{{ item }}</router-link>
    </p>
    <span></span>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
};
</script>
<style lang="less">
.hot-city {
  display: flex;
  h3 {
    font-weight: 500;
  }
  p {
    display: inline-block;
    margin-left: 50px;
    a {
      margin: 0 20px;
      font-size: 16px;
    }
    a:hover {
      color: tomato;
    }
  }
}
</style>
