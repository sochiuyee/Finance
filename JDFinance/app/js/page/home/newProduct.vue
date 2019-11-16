<template>
    <panel
        :class="$style.panel"
        title="众筹新品">
        <Scroll
            :data="arrData"
            :class="$style.scroll">
            <div :class="$style.listContainer">
                <img :src="item" alt="" v-for="item in arrData">
            </div>
        </Scroll>
    </panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    import Scroll from 'core/scroll.vue'

    export default {
        name: "NewProduct",
        components: {
            Panel,
            Scroll
        },
        data() {
            return {
                arrData: [
                    '//image.suning.cn/uimg/sfp/ad/157326979457895122.png',
                    '//image.suning.cn/uimg/sfp/ad/157326986096163693.png',
                    '//image.suning.cn/uimg/sfp/ad/157347590688984236.png',
                    '//image.suning.cn/uimg/sfp/ad/157327117372177148.png',
                    '//image.suning.cn/uimg/sfp/ad/157327140108667252.png',
                    '//image.suning.cn/uimg/sfp/ad/157327147683151394.png'
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "~css/element";
    .panel {
        @include panel;
        >h2{
            display: none;
        }
    }

    .scroll {
        width: 100%;
        overflow: hidden;
    }
    .listContainer {
        display: inline-block; // 子元素撑开父级元素方法：对父元素float||display：inline-block
        white-space: nowrap;
        img{
            margin: 0 16px;
            width:250px;
            height: 314px;
        }
    }
</style>
