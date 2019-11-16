<template>
    <public-header>
        <i slot="left" class="iconfont icon-jiantou" :class="$style.left"></i>
        <div slot="center" :class="$style.center">
            <span>京东好物</span>
            <i class="iconfont icon-jingdong-"></i>
        </div>
    </public-header>
</template>

<script>
    import PublicHeader from "public/publicHeader.vue"
    export default {
        name: "SavingHeader",
        components:{
            PublicHeader,
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .left{
        line-height: 90px;
    }
    .center{
        font-size: 32px;
        text-align: center;
        line-height: 90px;
        &>i{
            color: #EE2D1B;
            font-size: 36px;
        }
    }
</style>
