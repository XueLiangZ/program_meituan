<template>
    <div class="myfooter-contain">
        <div class="footer-link">
					<div class="list" v-for="(group , i1) in Data" :key="i1">
						<dl v-for="(item1,i2) in group" :key="i2">
							<dt>{{ item1.group }}</dt>
							<dd v-for="(itm1 ,i3) in item1.list" :key="i3">
								<router-link :to="itm1.link"> {{ itm1.title }} </router-link>
							</dd>
						</dl>
					</div>
        </div>
        <hr>
        <div class="footer-copyright"></div>
    </div>
</template>

<script>
export default {
  created () {
    this.getData();
  },
  data () {
    return {
      Data: {}
    };
  },
  methods: {
    async getData () {
      const {data: res} = await this.$api.getFooterData();
      // console.dir(res);
      this.Data = res.data;
    }
  }
};
</script>

<style lang="less">
.myfooter-contain {

    .footer-link {
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        & > div {
            width: 150px;
            text-align: left;
            &.list5 {
                width: 300px;
            }

            dl {
                margin-bottom: 30px;
                font-size: 12px;
                a:hover {
                    color: #f60;
                }
                dt,
                dd {
                    width: 100%;
                    margin-bottom: 10px;
                }
                dt {
                    font-size: 14px;
                    font-weight: 400;
                    color: black;
                }
            }
        }
    }
    .footer-copyright{
        width: 100%;
        height: 150px;
    }
}

</style>
