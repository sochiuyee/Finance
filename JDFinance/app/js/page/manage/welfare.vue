<template>
    <Panel :class="$style.panel">
        <div :class="$style.content">
            <div :class="$style.title" v-if="welfareData.title">
                <h4 class="title">{{ welfareData.title.title }}</h4>
                <img :src="welfareData.title.rightImg" alt="">
            </div>
            <div :class="$style.center" v-if="welfareData.tabs">
                <div :class="$style.tabsHeader">
                    <img :src="welfareData.tabs.icon" alt="">
                    <span>{{welfareData.tabs.headerText}}</span>
                    <a href="#">{{welfareData.tabs.buttonText}}</a>
                </div>
                <div :class="$style.bottom">
                    <ul>
                        <li v-for="item in welfareData.tabs.tab">
                            {{item.text}}
                            <span v-if="Number(item.redFlag)!==0" :class="$style.redFlag"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Slider v-if="welfareData.slider" :loop="welfareData.slider.length!==1">
            <section v-for="item in welfareData.slider">
                <a :href="item.link">
                    <img :src="item.img" alt="">
                </a>
            </section>
        </Slider>
    </Panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    import Slider from 'core/slider.vue'

    export default {
        name: "Welfare",
        components: {
            Panel,
            Slider
        },
        computed: {
            welfareData() {
                return this.$store.getters.manageWelfare
            }
        },
        created() {
            this.getWelfareData()
        },
        methods: {
            getWelfareData() {
                this.$store.dispatch('manageWelfareData')
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";

    .panel {
        @include panel;
        font-size: 40px;
        margin-left: 32px;
        margin-right: 32px;

        > h4,h2 {
            display: none;
        }
    }

    .content {
        margin: 24px 0 0;
        position: relative;

        .title {
            h4 {
                font-size: 40px;
                font-weight: bold;
                display: inline-block;
            }

            img {
                width: 278px;
                height: 78px;
                position: absolute;
                right: 0;
                top: 0;
            }
        }
        .center{
            border-radius: 20px;
            margin-top: 60px;
        }
        .tabsHeader{
            background-color: #FFDAB9;
            border-radius: 20px 20px 0 0;
            padding: 0 20px;
            @include flex(row);
            justify-content: space-around;
            align-items: center;
            height: 168px;

            img {
                width: 88px;
                height: 88px;
            }

            span {
                font-size: 32px;
                color: rgb(81, 28, 0);
                font-weight: bold;
            }

            a {
                display: inline-block;
                font-size: 26px;
                color: #fff;
                width: 168px;
                height: 64px;
                border-radius: 32px;
                background-color: rgb(255, 110, 0);
                text-align: center;
                line-height: 64px;
            }
        }

        .bottom{
            box-sizing: content-box;
            border-radius: 0 0 20px 20px;
            height: 88px;
            border-bottom: 20px solid rgba(232,232,232,0.6);
            @include flex(column);
            justify-content: center;
            ul{
                @include flex(row);
                li{
                    text-align: center;
                    position: relative;
                    flex: 1;
                    line-height: 1;
                    color: #999;
                    font-size: 26px;
                    border-right: 1px solid #999;
                    &:last-child{
                        border-right: none;
                    }
                }
            }
            .redFlag{
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background-color: red;
                position: absolute;
                right: 20px;
                top: -10px;
            }
        }
    }
</style>

<style scoped lang="scss">
    .container /deep/ .slider {
        margin: 0;
    }
</style>
