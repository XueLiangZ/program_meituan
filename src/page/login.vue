<template>
  <div class="login-contain">
    <el-row>
      <el-col>
        <router-link to="/" class="logo-site">logo-site</router-link>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <router-link to="/login">
          <img src="../assets/Fatkun/login-3.jpg" alt="快乐生活" />
        </router-link>
      </el-col>
      <el-col :span="12">
        <form action="/" class="login-form">
          <div class="form_head">
            <router-link to="/login/regeist">账号登录</router-link>
            <router-link to="/login/regeist"
              >手机动态码登录<span class="iconfont icon-mao"></span
            ></router-link>
          </div>
          <div class="form_main">
            <div class="input_item">
              <label for="user_num"> +86 &gt</label>
              <input id="user_num" type="text" placeholder="手机号" />
            </div>

            <div class="input_item">
              <label for="user_num" class="iconfont icon-yule"></label>
              <input id="user_num" type="text" placeholder="密码" />
            </div>
            <div class="tag">
              <router-link to="/forget" class="forget_passwd right"
                >忘记密码?</router-link
              >
            </div>

            <div class="input_item">
              <button type="button" class="login_btn" @click="handelClick">
                登录
              </button>
            </div>

            <div class="tag">
              还没有账号?
              <router-link to="/forget" class="forget_passwd"
                >免费注册?</router-link
              >
            </div>
            <div class="tips_box">
              <span class="tips">用合作网站账号登录</span>

              <div class="other_login">
                <router-link class="qq" to="/qq" tag="span"></router-link>
                <router-link class="weibo" to="/weibo" tag="span"
                  ></router-link
                >
              </div>
            </div>
          </div>
        </form>
      </el-col>
    </el-row>
    <hr />
    <el-row>
      <el-col>
        <ul class="about-list">
          <li>
            <router-link to="/about">关于美团</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">加入我们</router-link>
          </li>
          <li>|</li>

          <li>
            <router-link to="/">商家入住</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">帮助中心</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link to="/">美团手机版</router-link>
          </li>
        </ul>
      </el-col>
      <el-col> </el-col>
    </el-row>
    <hr />
    <el-row class="foot-desc">
      <el-col>
        <p>
          ⓒ2020 美团网团购 meituan.com 京ICP证070791 京公网安备11010502025545号
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handelClick() {
      console.log("1111111111111111");
    },
  },
};
</script>

<style lang="less">
html,
body {
  background-color: #fff;

  .login-contain {
    width: 1190px;
    max-width: 1190px;
    margin: 20px auto;
    text-align: left;

    .logo-site {
      display: inline-block;
      width: 82px;
      height: 54px;
      background-image: url("../assets/Fatkun/login-2.png");
      background-position: -188px -808px;
      background-repeat: no-repeat;

      text-indent: -9999px;
    }

    .login-form {
      width: 250px;
      margin: auto;
      .form_head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .form_main {
        .input_item {
          width: 250px;
          height: 30px;
          margin: 10px 0;
          line-height: 30px;
          border: 1px solid #999;
          border-radius: 4px;
          label {
            display: inline-block;
            min-width: 32px;
            margin: 0 3px;
            color: #666;
            text-align: center;
          }
          input {
            width: 180px;
            height: 100%;
            vertical-align: top;
            &:focus {
              border: none;
              outline: none;
            }
            &::placeholder {
              color: #ccc;
            }
          }
          .login_btn {
            width: 100%;
            height: 100%;
            cursor: pointer;
            border: none;
            background-color: #ffc200;
            font-size: 14px;
            letter-spacing: 0.3rem;
            font-weight: 700;
            &:focus {
              outline: none;
            }
          }
        }
        .tag {
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 10px;
          .forget_passwd {
            color: #f40;

            &:after {
              display: block;
              content: "";
              // height: 0;
              clear: both;
            }
          }
        }
        .right {
          float: right;
        }
        .tips_box {
          width: 100%;
          height: 0px;
          border-bottom: 1px solid #ccc;
          padding: 10px 0;
          margin-bottom: 20px;
          text-align: center;
          .tips {
            display: inline-block;
            margin-top: 3px;
            background-color: #fff;
            padding: 0 5px;
            letter-spacing: 0.1rem;
            color: #666;
          }
          .other_login {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 10px;
            span {
              display: block;
              width: 18px;
              height: 18px;
              margin: 0 5px;
              background-repeat: no-repeat;
              cursor: pointer;
              &.qq {
                background-image: url("../assets/Fatkun/login-2.png");
                background-position: -1250px -491px;
              }
               &.weibo {
                background-image: url("../assets/Fatkun/login-2.png");
                background-position: -1250px -599px;
              }
            }
          }
        }
      }
    }

    .about-list {
      li {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin: 0 8px;
      }
    }
    .foot-desc {
      margin-top: 20px;
      overflow: hidden;
    }
  }
}
</style>
