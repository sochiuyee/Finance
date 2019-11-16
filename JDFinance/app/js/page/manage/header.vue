<template>
    <public-header>
        <div :class="$style.left" slot="left">
            <em>注册</em>
            &nbsp;|&nbsp;
            <em>登录</em>
        </div>
        <img :class="$style.center" src="//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571579960983&di=e17a04e3ed99981e37eb5a29fa2bc800&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160531%2Fcf597b52566240a0a8ccee9dbe8cfad1_th.png" alt="" slot="center">
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
        height: 90px;
        position: relative;
        transform: translateX(130px); // 在iPhone 6下，中间的宽度是440px，减去img的宽度180px,剩下260px,除以一半，实现居中效果
    }
</style>
