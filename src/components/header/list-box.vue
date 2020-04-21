<template>
  <dl class="sm-list" ref="Myul">
    <div v-for="(item1, index) in datalist" :key="index" :width="item1.width">
      <dt v-if="item1.title">
        {{ item1.title }}
      </dt>
      <div class="clearfix">
        <dd v-for="(item2, i) in item1.list" :key="i">
          <router-link v-if="item1.img" :to="item2.link" tag="a">
            <img
              class="img_app"
              :src="require('../../assets/app-logo/' + item2.src + '.png')"
              :alt="item2.name"
            />
          </router-link>
          <router-link v-else :to="item2.link" tag="a">
            {{ item2.name }}
          </router-link>
        </dd>
      </div>
    </div>
  </dl>
</template>
<script>
export default {
  data () {
    return {};
  },
  mounted () {
    this.setWidth();
  },
  props: ['datalist', 'width'],
  methods: {
    setWidth () {
      if (this.width) {
        this.$refs.Myul.style.width = this.width;
      }
    }
  }
};
</script>

<style lang="less">
.sm-list {
  display: none;
  position: absolute;
  right: -1px;
  top: calc(100% - 1px);
  z-index: -1;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px 0px 3px 3px;
  dl,
  dd {
    padding: 10px 0;
    min-height: 40px;
    float: left;
    text-align: center;
  }
  div {
    width: 100%;
    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .img_app {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin-top: 5px;
  }
}
</style>
