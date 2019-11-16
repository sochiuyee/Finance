<template>
    <panel title="特色服务" :class="$style.panel">
        <ul>
            <li v-for="item in data" :class="$style.service">
                <a :href="item.url">
                    <img :src="item.leftImg" alt="">
                    <p>
                        <span>{{item.title}}</span>
                        <span>{{item.content}}</span>
                    </p>
                    <img :src="item.rightImg" alt="">
                </a>
            </li>
        </ul>
    </panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    export default {
        name: "service",
        components:{
            Panel
        },
        data(){
            return {
                data:[
                    {
                        content:'分享体验 赢1111奖励金',
                        title:'6.85%~19.17%逆天组合',
                        leftImg:'//image2.suning.cn/uimg/cms/img/154658849038646176.png',
                        rightImg:'//image2.suning.cn/uimg/cms/img/155369551757078589.png',
                        url:'https://jinrong.suning.com/waplcjjsnztlc818.html'
                    },
                    {
                        content: '享理财系列 4个特色产品',
                        title: '3%~9%收益高 波动小',
                        leftImg: "//image2.suning.cn/uimg/cms/img/154658880637683679.png",
                        rightImg: "//image2.suning.cn/uimg/cms/img/155369563693572112.png",
                        url: 'https://jinrong.suning.com/scms/waplc_jjxlcxl.html'
                    }
                ]
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel;
        >h4{
            display: none;
        }
        h2{
            height: 90px;
        }
    }
    .service{
        padding: 20px 40px;
        clear: both;
        a{
            display: block;
            img:nth-child(1){
                width: 72px;
                height: 72px;
                float: left;
                margin-right: 20px;
            }
            img:nth-child(3){
                width: 192px;
                height: 84px;
                float: right;
            }
            p{
                display: inline-block;
                overflow: hidden;
                &>span:first-child{
                    font-size: 30px;
                    display: block;
                    color: #000;
                }
                &>span:last-child{
                    font-size: 24px;
                    color: #999;
                    display: block;
                }
            }
        }
    }
</style>
