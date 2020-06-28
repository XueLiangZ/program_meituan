<template>
    <div class="alphabet">
        <dl class="h">
            <dt>
                <h3>{{ title }}:</h3>
            </dt>
            <dd v-for="(item, i) in list" :key="i">
                <a :href="'#city-' + item">{{ item }}</a>
            </dd>
        </dl>
        <template v-for="(cityg, i) in cityarr">
            <dl :key="i" class="city-group" :id="'city-'+ cityg.letter">
                <dt>{{ cityg.letter }}</dt>
                <dd>
                    <span v-for="(city, j) in cityg.group" :key="j">
                        {{ city.name }}
                    </span>
                </dd>
            </dl>
        </template>
    </div>
</template>

<script>
export default {
    props: ["title", "list", "cityarr"]
};
</script>
<style lang="less">
.alphabet {
    dl.h {
        dt {
            display: inline-block;
            h3 {
                font-weight: 500;
            }
        }
        dd {
            display: inline-block;
            margin: 0 4px;
            a {
                display: inline-block;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                text-align: center;
                padding-top: 1px;
                box-sizing: border-box;
            }
            a:hover {
                color: #f40;
                background-color: #eee;
            }
        }
    }

    .city-group {
        border: 1px solid #eee;
        padding: 20px;
        margin: 6px;
        display: flex;
        align-items: center;
        dt {
            display: inline-block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            color: white;
            border-radius: 50%;
            background-color: rgb(228, 181, 51);
            text-align: center;
        }

        dd {
            display: inline-block;
            margin-left: 20px;
            max-width: 920px;
            span {
                display: block;
                float: left;
                margin: 0 5px;
                cursor: pointer;
            }
        }
    }
}



</style>
