<template>
  <div class="item-list">
    <div class="title">
      <router-link to=""> {{ title }} </router-link>
      <span class="el-icon-caret-bottom"></span>
    </div>
    <div class="list">
      <h4>{{ list.title }}</h4>
      <template v-for="(item, index) in list.items">
        <router-link class="i-item" tag="span" :key="index" to="">{{ item }}</router-link>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "list"]
};
</script>

<style lang="less">

.item-list {
  // height: 25px;
  position: relative;
  .title {
    margin-right: 20px;
    height: 25px;
    line-height: 25px;
	}
	&:hover .list{
    display: block;
	}

  .list {
    display: none;
    position: absolute;
    left: -15px;
    top: calc(100% + 10px);
    height: 220px;
    width: 510px;
    box-sizing: border-box;
    padding: 30px 20px;
    border: 1px solid #999;
    background-color: #fff;
		border-radius: 5px;
    text-align: left;
    z-index: 9999;

    h4 {
      color: #999;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    span.i-item {
      display: inline-block;
      width: 116px;
      font-size: 14px;
      color: #666;
      margin: 2px auto;
    }
  }
  .list::before,
  .list::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 22px;
    top: -20px;
    border: 10px solid transparent;
    border-bottom-color: #999;
  }
  .list::after {
    left: 24px;
    top: -16px;
    border: 8px solid transparent;
    border-bottom-color: #fff;
  }
}
</style>
