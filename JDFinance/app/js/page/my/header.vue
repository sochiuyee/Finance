<template>
    <panel :class="$style.panel">
        <public-header @leftClick="headerLeftClick" @rightClick="headerRightClick">
            <div :class="$style.left" slot="left"></div>
            <p slot="center" :class="$style.center">金融会员</p>
            <div slot="right" :class="$style.right">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </public-header>
        <section :class="$style.box" v-show="rightClick">
            <ul>
                <li :class="$style.headerList" @click="goToHome">
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </li>
                <li :class="$style.headerList">
                    <i class="iconfont icon-sousuo"></i>
                    <p>分类搜索</p>
                </li>
                <li :class="$style.headerList">
                    <i class="iconfont icon-gouwuche"></i>
                    <p>购物车</p>
                </li>
                <li :class="$style.headerList">
                    <i class="iconfont icon-wo"></i>
                    <p>我的</p>
                </li>
                <li :class="$style.headerList">
                    <i class="iconfont icon-zuji"></i>
                    <p>浏览记录</p>
                </li>
            </ul>
        </section>
    </panel>
</template>

<script>
    import Panel from "core/panel.vue"
    import PublicHeader from "public/publicHeader.vue"
    export default {
        components:{
            Panel,
            PublicHeader
        },
        data(){
            return {
                rightClick:false
            }
        },
        methods:{
            headerLeftClick(){
                console.log('leftClick')
            },
            headerRightClick(){
                this.rightClick = !this.rightClick
            },
            goToHome(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel;
        &>h4,h2{
            display: none;
        }
    }
    .box{
        position: absolute;
        right: 10px;
        top: 115px; //header的高度加上三角型的高度
        width: 250px;
        background-color: rgba(0,0,0,0.9);
        color: #fff;
        border-radius: 10px;
        z-index: 100;
        &::before{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            top: -13px;
            right: 10px;
            border-style:solid;
            border-width: 15px;
            border-color: rgba(0,0,0,0.9) rgba(0,0,0,0.9) transparent transparent;
            -webkit-transform: rotate(-45deg);
        }
        .headerList{
            height: 80px;
            @include flex(row);
        }
        i{
            display: inline-block;
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
        }
        p{
            flex: 1;
            line-height: 80px;
            font-size: 28px;
            border-bottom: 1px solid rgba(255,255,255,0.4);
            @include textHidden;
        }
    }
    .left{
        position: relative;
        width: 50px;
        height: 100%;
        &::after{
            content: '';
            width: 20px;
            height: 20px;
            position: absolute;
            left: 30px;
            top: 35px;
            border-top: 3px solid #000;
            border-right: 3px solid #000;
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
        }
    }
    .center{
        font-size: 32px;
        line-height: 90px;
        text-align: center;
    }
    .right{
        font-size: 24px;
        line-height: 1;
        span{
            display: inline-block;
            margin: 0 3px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: gray;
        }
    }
</style>
