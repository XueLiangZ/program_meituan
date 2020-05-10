<template>
  <div class="city-page">
    <el-card class="city-wrapper">
      <el-row>
        <province-select class="province-select" />
      </el-row>
      <hr />
      <el-row>
        <hot-city title="热门城市" :list="hotlist" />
      </el-row>
      <hr />
      <el-row>
        <hot-city title="最近访问" :list="recentlist" />
      </el-row>
      <hr />
      <el-row>
        <!-- <hot-city title="按拼音首字母选择" :list="letterlist" /> -->
        <alphabet
          title="按首大写字母选择"
          :list="letterlist"
          :cityarr="citygroup"
        />
      </el-row>
      <hr />
      <el-row>a: 鞍山</el-row>
    </el-card>
  </div>
</template>
<script>
import provinceSelect from "../components/position/province";
import hotCity from "../components/position/hotcity";
import alphabet from "../components/position/alphabet";

export default {
  created() {
    var obj = {};
    this.citylist.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    // obj.sort((a, b) => {
    //     return a.firstChar.chartCodeAt() > b.firstChart.chartCodeAt();
    // });
    var arr = new Array();
    for (var prop in obj) {
      arr.push({
        letter: prop,
        group: obj[prop],
      });
    }
    arr.sort(function (a, b) {
      return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
    });
    this.citygroup = arr;
  },
  data() {
    return {
      hotlist: ["北京", "上海", "天津", "上海", "广东"],
      recentlist: ["广东"],
      letterlist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      citylist: [
        {
          id: 1,
          name: "上海",
          firstChar: "s",
        },
        {
          id: 2,
          name: "重庆",
          firstChar: "c",
        },
        {
          id: 3,
          name: "天津",
          firstChar: "t",
        },
        {
          id: 4,
          name: "湖南",
          firstChar: "h",
        },
        {
          id: 5,
          name: "安徽",
          firstChar: "a",
        },
        {
          id: 6,
          name: "汉中",
          firstChar: "h",
        },
        {
          id: 7,
          name: "昆明",
          firstChar: "k",
        },
        {
          id: 8,
          name: "无锡",
          firstChar: "w",
        },
        {
          id: 4,
          name: "湖南",
          firstChar: "h",
        },
        {
          id: 5,
          name: "安徽",
          firstChar: "a",
        },
        {
          id: 6,
          name: "汉中",
          firstChar: "h",
        },
        {
          id: 7,
          name: "昆明",
          firstChar: "k",
        },
        {
          id: 8,
          name: "无锡",
          firstChar: "w",
        },
        {
          id: 4,
          name: "湖南",
          firstChar: "h",
        },
        {
          id: 5,
          name: "安徽",
          firstChar: "a",
        },
        {
          id: 6,
          name: "汉中",
          firstChar: "h",
        },
        {
          id: 7,
          name: "昆明",
          firstChar: "k",
        },
        {
          id: 8,
          name: "无锡",
          firstChar: "w",
        },
        {
          id: 4,
          name: "湖南",
          firstChar: "h",
        },
        {
          id: 5,
          name: "安徽",
          firstChar: "a",
        },
        {
          id: 6,
          name: "汉中",
          firstChar: "h",
        },
        {
          id: 7,
          name: "昆明",
          firstChar: "k",
        },
      ],
      citygroup: null,
    };
  },
  components: {
    provinceSelect,
    hotCity,
    alphabet,
  },
  //@click.native 给组件根元素绑定原生点击事件
};
</script>
<style lang="less" scoped>
.city-page {
  width: 1080px;
  margin: 0 auto;
  margin-top: 50px;
  .city-wrapper {
    padding: 10px;
    .el-row {
      margin: 25px 0;
		}
		.province-select{
			text-align: left;
		}
		hr{
	
			background-color: #eee;
			height: 1px;
			border: none;
		}
  }
}
</style>
