<template>
   <div class="list-itm">
      <div class="pic">
         <img
            src="https://p1.meituan.net/merchantpic/f8db6a9327e370e00bacfdc072984db8162392.jpg@220w_125h_1e_1c"
            :alt="data.title"
         />
      </div>
      <div class="info">
         <div class="msg">
            <h4>
               <router-link to="">
                  {{ data.title }}
               </router-link>
            </h4>
            <div class="row-s">
               <el-rate
                  :value="data.score"
                  :disabled="true"
                  text-color="#ff9900"
               >
               </el-rate>
               <span class="comment" v-if="data.score > 4.5">很好</span>
               <span class="comment" v-else-if="data.score > 4">好</span>
               <span class="comment" v-else-if="data.score > 3.5">一般</span>
               <span class="comment" v-else-if="data.score > 3">还行</span>
               <span class="comment" v-else>差</span>
               <span class="score">{{ data.score }}</span>
               <span class="commentnum"> {{data.commentNum}}人评价</span>
            </div>
            <div>
               <span class="tab-info">
                  <span v-for="(item, index) in data.tab" :key="index">
                     {{ index > 0 ? "|" : "" }}
                     {{ item }}
                  </span>
               </span>
               <span class="address">{{ data.address }}</span>
               <router-link class="map" to=""
                  ><span class="el-icon-location"></span> 查看地图</router-link
               >
            </div>
            <p class="price">人均¥{{ data.avgPrice }}</p>
         </div>
         <div
            class="coupon"
            v-for="(item, index) in data.dealItems"
            :key="index"
         >
            <h4>{{ item.title }}</h4>
            <p class="prices">
               <span>¥{{ item.price }}</span>
               <span class="counterPrice">门市价{{ item.counterPrice }}</span>
            </p>
            <p class="salenum">
               <span
                  >{{ item.saleNum }} <i>{{ item.priceType }}</i>
               </span>
            </p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
      };
   },
   props:[
      'data',
   ]
};
</script>

<style lang="less">

.list-itm {
   padding: 14px 20px;
   overflow: hidden;
   .pic {
      float: left;
      width: 220px;
      // height: 120px;
      border-radius: 5px;
      overflow: hidden;
   }
   .info {
      float: left;
      margin-left: 50px;
      text-align: left;
      .msg {
         border-bottom: 1px dashed #ccc;
         padding-bottom: 15px;
         h4 {
            margin-bottom: 5px;
            a {
               color: #333;
               font-size: 18px;
               font-weight: 600;
            }
         }
         .row-s {
            .score {
               margin: 0 10px;
            }
         }
         .tab-info,.address {
            margin-right: 10px;
         }

         & > div {
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            margin: 10px 0;
            .el-rate {
               display: inline-block;
            }
         }
      }

      .coupon {
         margin-top: 15px;
         .prices {
            margin: 5px 0;
         }
         .counterPrice {
            margin: 5px 0 0 10px;
         }
         .salenum {
            color: orangered;

            i {
               font-style: normal;
            }
         }
      }
   }
}


</style>
