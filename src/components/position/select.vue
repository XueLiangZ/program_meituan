<template>
    <div class="container">
        <div class="box">
            <span class="s-title">{{ title }}</span>
            <i class="el-icon-caret-bottom"></i>
        </div>

        <div class="s-slider-down" v-show="slider">
            <h3>{{ list.title }}</h3>
            <div class="provice-wrap">
                <template v-for="(g, i) in newlist">
                    <div class="itm-1" :key="i">
                        <template v-for="(gi, j) in g">
                            <span :key="i + '-' + j" @click="change(gi)">
                                {{ gi }}
                            </span>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSliderdown: false,
            value: null
        };
    },
    props: ["list", "slider", "title"],
    created() {
        this.value = this.title;
    },
    computed: {
        newlist() {
            var oldlist = this.list.items;
            var len = oldlist.length;
            var groups = Math.ceil(len / 5);
            console.log(groups);
            var newlist = [];
            for (var i = 0; i < groups; i++) {
                if (i == groups - 1) {
                    newlist.push(oldlist.slice(5 * i + 0));
                } else {
                    newlist.push(oldlist.slice(5 * i + 0, 5 * i + 5));
                }
            }
            return newlist;
        }
    },
    methods: {
        change(val) {
            // console.log($event.$attr('data-msg'))
            // this.value = val;s
            this.$emit('changeTitle' ,val)
        }
    }
};
</script>
<style lang="less">
.container {
    width: 150px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;
    .box {
        cursor: pointer;

        .s-title {
            font-size: 16px;
            margin-left: 10px;
        }
        i {
            margin-right: 0;
            margin-left: auto;
            position: relative;
            left: 70px;
        }
    }

    .s-slider-down {
        position: absolute;
        z-index: 99;
        min-width: 100%;
        min-height: 50px;
        top: calc(100% + 5pxb);
        left: 0px;
        padding-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-top: 4px;
        padding-left: 25px;
        background-color: #fff;
        // display: none;
        .provice-wrap {
            display: flex;
            font-size: 0;
            line-height: 20px;
            span {
                display: table;
                height: 20px;
                width: 40px;
                padding: 1px 8px;
                margin: 6px 38px 6px 0;
                font-size: 16px;
                color: #999;
                background-color: rgb(196, 211, 218);
                // border: 1px solid;
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
    .s-slider-down::before {
        display: block;
        content: "";
        width: 0;
        height: 0;
        border: 7px solid transparent;
        border-top: 0;
        border-bottom-color: #ccc;
        position: absolute;
        left: 20px;
        top: -7px;
    }
    .s-slider-down::after {
        display: block;
        content: "";
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top: 0;
        border-bottom-color: #fff;
        position: absolute;
        left: 22px;
        top: -5px;
    }
}

</style>
