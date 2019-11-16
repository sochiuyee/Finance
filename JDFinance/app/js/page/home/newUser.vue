<template>
    <panel
        :class="$style.panel"
        title="赏金任务">
        <!-- 新手内容不是数据驱动，内容不经常变无需抽出成为一个组件，而且布局足够简单，无需再在布局上抽取为组件 -->
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载App<span :class="$style.red">送888元红包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img
                    src="../../../img/gift.jpg"
                    alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img
                            src="../../../img/pocket.jpg"
                            alt="">
                        <h4 :class="$style.red">领128元新手红包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img
                            src="../../../img/white.png"
                            alt="">
                        <h4>打开白条 <span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
        </section>
    </panel>
</template>

<script>
    import Panel from 'core/panel.vue'

    export default {
        name: "Assignment",
        components: {
            Panel
        }
    }
</script>

<style lang="scss" module>
    @import '~css/_element.scss';
    body{
        background-color: #f5f5f5;
    }
    .panel{
        @include panel();
        >h4{
            border-bottom: 1px solid #ddd;
        }
        >h2{
            display: none;
        }
        .content{
            @include list(row);
            .item{
                width: 50%;
                height: 288px;
                box-sizing: border-box; // （border+padding+内容）占50%
                &:first-child{
                    padding: 32px 20px;
                    text-align: center;
                    border-right: 1px solid #ddd;
                    img{
                        width: 132px;
                        height: 132px;
                        margin: 20px auto 0;
                    }
                }
                h4{
                    font-size: 26px;
                    line-height: 40px;
                }
                .red{
                    color: #f00;
                }
                .gray{
                    color: #999;
                    font-size: 24px;
                }
                p{
                    margin-top: 6px;
                    font-size: 24px;
                }
                ul{
                    width: 100%;
                    height: 100%;
                    li{
                        height: 144px;
                        width: 100%;
                        padding: 32px 18px;
                        box-sizing: border-box;
                        &:first-child{
                            border-bottom: 1px solid #ddd;
                        }
                        h4{
                            @include textHidden();
                            text-align: left;
                        }
                        img{
                            width: 80px;
                            height: 80px;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>

