<template>
    <div :class="$style.goods">
        <goods-header></goods-header>
        <recommend></recommend>
        <public-navbar></public-navbar>
    </div>
</template>

<script>
    import GoodsHeader from "./header.vue"
    import Recommend from "./recommend.vue"
    import PublicNavbar from "public/navbar.vue"
    export default {
        name: "SavingIndex",
        components:{
            GoodsHeader,
            Recommend,
            PublicNavbar
        }
    }
</script>

<style module lang="scss">
    .goods{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
