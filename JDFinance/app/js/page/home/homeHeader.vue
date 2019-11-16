<template>
    <public-header>
        <div :class="$style.left" slot="left">
            <em>注册</em>
            &nbsp;|&nbsp;
            <em>登录</em>
        </div>
        <div :class="$style.center" slot="center"></div>
        <btn slot="right" :class="$style.right">App下载</btn>
    </public-header>
</template>

<script>
    import PublicHeader from "public/publicHeader.vue"
    import Btn from "core/btn.vue"
    export default {
        components:{
            PublicHeader,
            Btn
        }
    }
</script>

<style module lang="scss">
    .left{
        font-size: 28px;
        line-height: 90px;
    }
    .right{
        font-size: 24px;
    }
    .center{
        width: 180px;
        height: 100%;
        margin: 0 auto;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573023303764&di=721204939a7d94bc35f36979eb18d301&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F99%2F30%2F5addacb60dd03_610.jpg") no-repeat;
        background-size: 100% 100%;
    }
</style>
