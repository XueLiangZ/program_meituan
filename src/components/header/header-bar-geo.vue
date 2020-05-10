<template>
  <dl class="geo">
    <dd class="province">
      <span class="el-icon-location" />
      <router-link to="/changeCity">广州</router-link>
    </dd>
    <dd class="city">
      <router-link to="/changeCity">切换城市</router-link>
    </dd>
    <dd class="posi">
      [
      <router-link to="/changeCity">佛山</router-link>
      <router-link to="/changeCity">顺德</router-link>
      <router-link to="/changeCity">南沙</router-link>
      ]
    </dd>
    <dd class="info">
      <router-link to="/login" class="login">立即登录</router-link>
      <router-link to="/login" class="regist">注册</router-link>
    </dd>
  </dl>
</template>

<style lang="less">
.geo {
  // outline: 1px solid;
  color: #999;
  margin-top: 14px;
  dd {
    float: left;
    &.province {
      margin: 0px;
    }
    &.city,
    &.posi {
      margin: 0 5px;
    }
    &.info {
      margin-left: 10px;
      .login{
        color: #FC8a00;
      }
      .regist{
        margin-left: 5px;
      }
    }
  }
}
</style>
