<template>
    <div class="pro-container">
        <h3>按省份选择:</h3>
        <my-select
            class="city-select select"
            :list="citylist"
            :title="province"
            :slider="isshow_c"
            @click.native="change_c"
            v-doclick="change_c"
            @changeTitle="changeTitle_P"
        />
        <my-select
            class="province-select select"
            :title="city"
            :list="citylist"
            :slider="isshow_p"
            @click.native="change_p"
            v-doclick="hidden"
            @changeTitle="changeTitle_C"
        />
        <span class="searh-sp">直接搜索:</span>
        <el-select
            v-model="value"
            :filterable="true"
            :remote="true"
            :reserve-keyword="false"
            placeholder="请输入城市中文或英文"
            :remote-method="remoteMethod"
            :loading="loading"
        >
            <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item"
                :value="item"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script>
import mySelect from "./select";
export default {
    data() {
        return {
            province: "省份",
            city: "城市",
            isshow_c: false,
            isshow_p: false,
            citylist: {
                title: "省份",
                items: [
                    "山东",
                    "重庆",
                    "济南",
                    "山东",
                    "重庆",
                    "重庆",
                    "山东",
                    "重庆",
                    "济南",
                    "山东",
                    "重庆",
                    "重庆",
                    "1",
                    "重庆"
                ]
            },
            options: [
                "山东",
                "重庆",
                "济南",
                "山东",
                "重庆",
                "重庆",
                "山东",
                "重庆",
                "济南",
                "山东",
                "重庆",
                "重庆"
            ],
            value: "",
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona", "Arkansas"]
        };
    },

    components: {
        mySelect
    },
    methods: {
        change_c(e) {
            // e.stopPropagation();
            // console.log("change-----c");
            this.isshow_c = !this.isshow_c;
        },
        change_p(e) {
            // e.stopPropagation();
            // console.log("change-----p");

            this.isshow_p = !this.isshow_p;
        },
        hidden() {
            this.isshow_c = this.isshow_p = false;
        },
        remoteMethod(val) {
            console.log("获取后端数据:" + val);

            //需要ajax请求
        },
        changeTitle_C(val){
            this.city = val
        },
        changeTitle_P(val){
            this.province = val
        }

    },
    directives: {
        doclick: {
            bind(ele, bindings, vnode) {
                document.addEventListener(
                    "click",
                    e => {
                        // console.log("捕获重置样式");
                        bindings.value();
                    },
                    true
                );
            }
        }
    }
};
</script>

<style lang="less" scoped>
.pro-container {
    h3 {
        display: inline-block;
        font-weight: 500;
    }
    .select,
    .searh-sp {
        display: inline-block;
        margin-left: 50px;
    }
}
</style>
