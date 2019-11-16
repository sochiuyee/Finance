<template>
    <scroll :class="$style.scroll" :mouseWheel="true">
        <div :class="$style.manage">
            <manage-header></manage-header>
            <manage-slider></manage-slider>
            <manage-welfare></manage-welfare>
            <manage-market></manage-market>
            <manage-service></manage-service>
        </div>
    </scroll>
</template>

<script>
    import Scroll from "core/scroll.vue"
    import ManageHeader from "./header.vue"
    import ManageSlider from "./slider.vue"
    import ManageWelfare from "./welfare.vue"
    import ManageMarket from "./market.vue"
    import ManageService from "./service.vue"
    export default {
        components:{
            Scroll,
            ManageHeader,
            ManageSlider,
            ManageWelfare,
            ManageMarket,
            ManageService
        }
    }
</script>

<style lang="scss" module>
    .scroll{
        position: fixed;
        width: 100%;
        top:0;
        bottom: 90px; // 避免底部navbar的遮挡
    }
</style>
