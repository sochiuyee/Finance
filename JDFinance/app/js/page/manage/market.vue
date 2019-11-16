<template>
    <panel :title="this.data.title" :class="$style.panel">
        <ul>
            <li v-for="item in this.data.financeProducts" :class="$style.product">
                <a :href="item.buyUrl">
                    <p>{{item.rate}}</p>
                    <p>{{item.name}}</p>
                    <p>{{item.rateText}}</p>
                    <p>{{item.recommendReason}}</p>
                </a>
            </li>
        </ul>
    </panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    export default {
        components:{
            Panel
        },
        created() {
            this.data={
                title:'专业投资',
                financeProducts:[
                    {
                        name:'汇添富绝对收益混合A',
                        recommendReason:'成立以来年化收益率9.61%',
                        rate:'+14.04%',
                        rateText:'近一年涨跌幅',
                        buyUrl:'https://jinrong.suning.com/scms/waplc_jjhtfjdsy.html'
                    },
                    {
                        name:'安信稳健增值混合A',
                        recommendReason: '绝对收益王牌产品',
                        rate: '+9.99%',
                        rateText:'近一年涨跌幅',
                        buyUrl: 'https://jinrong.suning.com/scms/waplc_jjaxwj.html?channelCode=H5_JJ_lcsy'
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
        >h2{
            height: 80px;
        }
    }
    .product{
        padding: 14px 28px;
        a{
            @include flex(row);
            p{
                width: 50%;
                @include textHidden;
            }
            p:nth-child(1){
                color: #ff8000;
                font-size: 44px;
            }
            p:nth-child(2){
                font-size: 30px;
                font-weight: bold;
                color: #000;
            }
            p:nth-child(3),p:nth-child(4){
                font-size: 24px;
                color: #999;
            }
        }
    }
</style>
