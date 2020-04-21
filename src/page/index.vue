<template>
  <div class="page-index">
    <!-- 首页默认区 包含 mymenu mycard myaside 区域 -->
    <el-row type="flex" justify="space-between">
      <el-col class="menu-contain">
        <my-menu />
      </el-col>
      <el-col class="banner-contain">
        <el-row class="banner-header">
          <el-col>
            <div class="header-link">
              <router-link to="/">美团外卖</router-link>

              <router-link class="red" to="/">猫眼电影</router-link>

              <router-link class="blue" to="/">美团酒店</router-link>

              <router-link to="/">民宿／公寓</router-link>

              <router-link class="orange" to="/">商家入驻</router-link>

              <router-link class="green" to="/">美团公益</router-link>
            </div>
          </el-col>
        </el-row>
        <el-row class="banner-content_1" type="flex" justify="space-between">
          <!-- 轮播图区域 -->
          <el-col class="m-banner-silder">
            <el-carousel trigger="click" height="240px">
              <el-carousel-item v-for="(item, i) in lunbo_Data" :key="i">
                <router-link :to="item.link" class="item_a">
                  <img :src="item.img" alt="i" />
                </router-link>
              </el-carousel-item>
            </el-carousel>
          </el-col>

          <el-col class="m-banner-life">
            <router-link class="" to="/"></router-link>
          </el-col>
          <el-col class="m-login-container">
            <div class="m-login">
              <div class="picture">
                <img
                  src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                  alt
                />
              </div>
              <p>Hi! 你好</p>
              <router-link :to="{ name: 'login' }">
                <el-button round>注册</el-button>
              </router-link>
              <router-link :to="{ name: 'login' }">
                <el-button round>立即登录</el-button>
              </router-link>
            </div>
          </el-col>
        </el-row>
        <el-row class="banner-content_2" type="flex" justify="space-between">
          <el-col :span="7">
            <router-link to="/" tag="a" class="m-item1 item"></router-link>
          </el-col>
          <el-col :span="7">
            <router-link to="/" tag="a" class="m-item2 item"></router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/" tag="a" class="m-item3 item"></router-link>
          </el-col>
          <el-col :span="5">
            <div class="m-downapp">
              <div class="pict"></div>
              <p class="last-p2">美团APP手机版</p>
              <p class="last-p1"><span class="red">1元起</span>吃喝玩乐</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 有格调...  区域 -->
    <el-row>
      <el-col :span="24">
        <!-- <my-card :tab="tab_type1"/> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import myMenu from "../components/pageIndex/myMenu.vue";
// import mySlider from "@/components/index/slider.vue";
// import myCard from "../components/index/mycard";

export default {
  data() {
    return {
      lunbo_Data: [
        {
          img: require("../assets/img/1.jpg"),
          link: "/",
        },
        {
          img: require("../assets/img/2.jpg"),
          link: "/",
        },
        {
          img: require("../assets/img/3.jpg"),
          link: "/",
        },
        {
          img: require("../assets/img/4.jpg"),
          link: "/",
        },
        {
          img: require("../assets/img/5.png"),
          link: "/",
        },
      ],
      tab_type1: {
        classname: "red",
        title: {
          tab: "有格调",
          menu: [
            {
              text: "全部",
              type_d: "all",
            },
            {
              text: "聚会宴请",
              type_d: "food",
            },
            {
              text: "丽人SPA",
              type_d: "spa",
            },
            {
              text: "电影出演",
              type_d: "movie",
            },
            {
              text: "品质出游",
              type_d: "travel",
            },
          ],
        },
        // contain: [
        //   {
        //     img: "//p1.meituan.net/joymerchant/8265296750747296394-32419343-1516971053288.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
        //     link: "/",
        //     title: "水之心",
        //     title_sub: ["水之星"],
        //     price: 77
        //   },
        //   {
        //     img: "//p0.meituan.net/tdchotel/66e2c9aac87c304124dc61d51e16b157326699.jpg@368w_208h_1e_1c",
        //     link: "/",
        //     title: "水之心",
        //     title_sub: ["水之星"],
        //     price: 77
        //   },
        //   {
        //     img: "//p1.meituan.net/dnaimgdark/ad5f0f0920cbdaaa25f842d2383a739f12146020.jpg@368w_208h_1e_1c",
        //     link: "/",
        //     title: "水之心",
        //     title_sub: ["水之星"],
        //     price: 77
        //   }
        // ]
      },
    };
  },
  components: {
    myMenu,
    // mySlider,
    // myCard
  },
};
</script>

<style lang="less">
.page-index {
  max-width: 1190px;
  text-align: center;
  .menu-contain {
    width: 230px;
  }
  .banner-contain {
    width: 940px;
    .banner-header {
      // border: 1px solid;
      .header-link {
        height: 30px;

        text-align: left;
        margin-top: 10px;
        margin-left: 40px;

        a {
          display: inline-block;
          margin: 0 12px;
          font-weight: 700;
          font-size: 16px;
          color: #333;

          &:hover {
            color: chocolate;
          }
        }

        .red:hover {
          color: crimson;
        }

        .blue:hover {
          color: skyblue;
        }

        .orange:hover {
          color: orange;
        }

        .green:hover {
          color: palegreen;
        }
      }
    }

    .banner-content_1 {
      margin-top: 20px;
      box-sizing: border-box;

      .m-banner-silder {
        width: 550px;
        height: 240px;

        .item_a {
          // display: inline-block;
          height: 100%;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
      .m-banner-life {
        width: 150px;
        height: 240px;
        a {
          display: inline-block;
          width: 150px;
          height: 240px;
          background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }

      .m-login-container {
        width: 220px;
        height: 240px;
        background-color: #fff;
        border: 1px solid #eee;

        .m-login {
          margin-top: 40px;

          .picture {
            margin-bottom: 10px;

            img {
              width: 46px;
              height: 46px;
              border-radius: 50%;
              border: 4px solid #ddd;
            }
          }

          .el-button {
            width: 120px;
            height: 40px;
            margin: 5px 0;
          }
        }
      }
    }

    .banner-content_2 {
      margin-top: 10px;
      height: 165px;

      .item {
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
      }

      .m-item1 {
        background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
      }

      .m-item2 {
        background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
      }

      .m-item3 {
        background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
      }

      .m-downapp {
        height: 100%;
        outline: 1px solid #eee;
        overflow: hidden;
        background-color: #fff;

        .pict {
          width: 75px;
          height: 75px;
          margin: 20px auto 10px;
          background-image: url(//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
        }

        .last-p2 {
          font-size: 16px;
          margin-bottom: 5px;
        }

        .last-p1 {
          font-size: 12px;
        }

        .red {
          color: red;
          margin: 0 4px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
