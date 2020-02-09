<template>
  <dl class="nav">
    <dd>
      <router-link to="name:login">
        我的美团
      </router-link>
    </dd>
    <dd>
      <router-link to="name:app">
        手机APP
      </router-link>
    </dd>
    <dd>
      商家中心
    </dd>
    <dd>
      美团规则
    </dd>
    <dd>
      网站导航
    </dd>
  </dl>
</template>

<style lang="less">
.nav {
  height: 100%;
  display: flex;
  dd {
    float: left;
    padding: 10px 16px;
    outline: 0.5px solid transparent;
    &:hover {
      background-color: #fff;
      outline: 0.5px solid #ccc;
      color: #fc8a00
    }
  }
}
</style>
