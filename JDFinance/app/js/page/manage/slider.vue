<template>
    <Panel :class="$style.panel">
        <Slider v-if="getSlider">
            <div v-for="item in getSlider" :class="$style.sliderItem">
                <a :href="item.link">
                    <img :src="item.img" alt="">
                </a>
            </div>
        </Slider>
    </Panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    import Slider from 'core/slider.vue'
    export default {
        name: "manageSlider",
        components:{
            Panel,
            Slider
        },
        computed:{
            getSlider(){
                return this.$store.getters.manageSlider
            }
        },
        created(){
            this.getSliderData()
        },
        methods:{
            getSliderData(){
                this.$store.dispatch('manageSliderData')
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel;
        >h4,h2{
            display: none;
        }
        height: 480px;
        background-size: cover;
        background-image: url("../../../img/background.png");
    }
    .sliderItem{
        border-radius: 20px;
    }
</style>

<style scoped lang="scss">
    .container /deep/ .dots{ // 加重权重，覆盖子组件Slider的dots样式
        width: 100px;
        position: absolute;
        bottom: -30px;
        left: 20px;
    }
</style>
