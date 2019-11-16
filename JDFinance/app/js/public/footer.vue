<template>
    <panel :class="$style.panel">
        <ul :class="$style.content">
            <li v-for="(item,index) in this.footerData"
                :key="index">
                {{ item }}
            </li>
        </ul>
    </panel>
</template>

<script>
    import Panel from "core/panel.vue"
    export default {
        name: "Footer",
        components:{
            Panel
        },
        created(){
          this.footerData = ['Copyright © 2004-2018 京东JD.com 版权所有','投资有风险，购买需谨慎','京东金融平台服务协议','京东金融隐私政策']
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel();
        margin-bottom: 100px; // 避免底部导航栏遮挡
        &>h4,h2{
            display: none;
        }
    }
    .content{
        @include flex(column);
        background-color: #F5F5F5;
        li{
            width: 100%;
            text-align: center;
            color: #999;
            height: 86px;
            line-height: 86px;
            font-size: 24px;
            border-top: 1px solid #ddd;
        }
        li:first-child{
            border: none;
        }
    }
</style>
