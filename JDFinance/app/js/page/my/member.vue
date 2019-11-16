<template>
    <panel title="会员" :class="$style.panel">
        <ul>
            <li :class="$style.list" v-for="item in listData">
                <i class="iconfont" :class="item.icon"></i>
                <p>{{item.info}}</p>
                <p>
                    {{item.linkText}}
                </p>
            </li>
        </ul>
    </panel>
</template>

<script>
    import Panel from "core/panel.vue"
    export default {
        components:{
            Panel
        },
        created() {
            this.listData = [{
                icon:'icon-touxiang',
                info:'',
                linkText:'会员福利'
            },{
                icon:'icon-renminbi',
                info: '我的资产',
                linkText: '查看全部资产'
            },{
                icon:'icon-xingxing',
                info:'我的优惠券',
                linkText:'查看全部'
            },{
                icon:'icon-qianbi',
                info:'我的金币',
                linkText:'赚金币兑好物'
            },{
                icon:'icon-huangjinjintiao',
                info:'我的金条',
                linkText:'查看额度'
            },{
                icon:'icon-jieqian',
                info:'我的借钱',
                linkText:'查看全部产品'
            },{
                icon:'icon-paper-industry',
                info:'我的白条',
                linkText:'去提额'
            },{
                icon:'icon-xinyongqia',
                info:'兑换优惠券',
                linkText:'去兑换'
            },{
                icon:'icon-dunpai',
                info:'我的保障',
                linkText:'全方位保障'
            },{
                icon:'icon-iconfontzhizuobiaozhun023150',
                info:'我的爱车',
                linkText:''
            },{
                icon:'icon-shiming',
                info:'实名认证',
                linkText:''
            },{
                icon:'icon-kefu',
                info:'帮助中心',
                linkText:''
            }]
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
    }
    .list{
        @include flex(row);
        position: relative;
        &:nth-child(1){
            border-top: 5px solid rgba(220,220,220,0.35);
            height: 140px;
        }
        @include iconColor(1,#999);
        @include iconColor(2,#DDA520);
        @include iconColor(3,#FFC125);
        @include iconColor(4,#FFD700);
        @include iconColor(5,#EEC900);
        @include iconColor(6,#FFB90F);
        @include iconColor(7,#4876FF);
        @include iconColor(8,#1E90FF);
        @include iconColor(9,#3CB371);
        @include iconColor(10,#B8860B);
        @include iconColor(11,#4169E1);
        @include iconColor(12,#4169E1);
        &:not(:nth-child(1)){
            height: 112px;
            >i{
                font-size: 48px;
                margin: 34px 32px 0
            }
        }
        &:nth-child(1),&:nth-child(10),&:nth-child(11),&:nth-child(12){
            border-bottom: 16px solid rgba(220,220,220,0.35);
        }
        &>i{
            font-size: 100px;
            margin: 5px 32px;
        }
        &>p:nth-child(2){
            font-size: 32px;
            @include textHidden;
            line-height: 112px;
        }
        &>p:nth-child(3){
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 28px;
            color: #999;
            &::after{ // 使用伪元素做箭头
                position: absolute;
                content: '';
                width: 15px;
                height: 15px;
                top: 13px;
                right: -30px;
                border-top: 2px solid #999;
                border-right: 2px solid #999;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }
</style>
