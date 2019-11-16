<template>
    <scroll :data="recommend" :listenScroll="listenScroll" @scroll="onLoadPage" @scrollEnd="showBackTopIcon" :class="$style.scroll" :mouseWheel="true">
        <panel :class="$style.panel" ref="content">
            <loading v-if="recommend.length==0"></loading>
            <ul v-else :class="$style.recommendList">
                <li :class="$style.recommendItem" v-for="item in recommend">
                    <img v-lazy="item.baseinfo.picUrl" alt="" :class="$style.recommendImg">
                    <p :class="$style.recommendName">{{item.name.shortName}}</p>
                    <span :class="$style.priceStart">￥</span>
                    <span :class="$style.recommendPrice">{{item.price.actPrice}}</span>
                    <span :class="$style.priceEnd">.00</span>
                </li>
            </ul>
        </panel>
        <back-top :visible="isBacktopVisible" :class="$style.backTopIcon" v-show="isBacktopVisible"></back-top>
    </scroll>
</template>

<script>
    import Panel from 'core/panel.vue'
    import Loading from 'public/loading.vue'
    import Scroll from 'core/scroll.vue'
    import BackTop from 'public/backTop.vue'
    import {getRecommend} from '../../api/goods'

    export default {
        components: {
            Loading,
            Scroll,
            Panel,
            BackTop
        },
        data() {
            return {
                recommend: [],
                curPage: 1,
                totalPage: 1,
                readyToLoad:'', // 允许发送请求标志位
                isBacktopVisible:false // 回到顶部图标出现标志位
            }
        },
        created() {
            this.listenScroll = true;
            this.getRecommendData()
            this.isBacktopVisible = false
        },
        methods: {
            getRecommendData() {
                if (this.curPage > this.totalPage) {
                    return new Promise.reject(new Error('没有更多了'))
                } else {
                    this.readyToLoad = true // 发送请求加载数据
                    return getRecommend(this.curPage).then(data => {
                        return new Promise(resolve => {
                            if (data) {
                                this.curPage++
                                this.totalPage = data.totalPage
                                this.recommend = this.recommend.concat(data.itemList)
                                this.readyToLoad = false // 请求完毕，不允许发送请求
                                resolve()
                            }
                        })
                    })
                }
            },
            onLoadPage(pos) { // 滚动加载商品
                this.$nextTick(()=>{
                    let clientHeight = document.documentElement.clientHeight
                    let scrollTop = -pos.y
                    let scrollHeight = this.$refs.content.$el.clientHeight

                    // 页面底部距离可视区域还要preLoadDis距离时就开始加载内容
                    let preLoadDis = 180;

                    if (scrollTop+clientHeight>=scrollHeight-preLoadDis) {
                        console.log(scrollTop+clientHeight>=scrollHeight-preLoadDis)
                        if (this.readyToLoad) { // 上一次请求未加载完成，不允许下一次发送请求数据
                            return;
                        }
                        this.getRecommendData()
                    }
                })
            },
            showBackTopIcon(pos){
                this.$nextTick(()=>{
                    this.isBacktopVisible = pos.y<0&&-pos.y>document.documentElement.clientHeight
                })
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .scroll{
        position: absolute; // 需要给滚动scroll定位absolute，占满视口高度
        width: 100%;
        height: 100%;
        top: 90px;
        bottom: 90px;
        overflow: hidden;
    }
    .panel {
        display: inline-block; // 使子元素撑开父元素高度
        @include panel;
        & > h4,h2 {
            display: none;
        }
    }
    .recommendList {
        float: left;
        @include flex(row);
        justify-content: space-around;
    }
    .recommendItem {
        width: 49%;
        margin-bottom: 40px;
        &:last-child{
            margin-bottom: 90px;
        }
    }

    .recommendLink {
        display: block;
    }
    .recommendImg {
        display: block;
        position: relative;
        width: 334px;
        margin: 0 auto 20px;
        border-radius: 20px 20px 0 0;
    }
    .recommendName {
        @include textMultiLine(2);
        font-size: 28px;
        color: #333;
        padding: 0 20px;
        line-height: 1.5;
    }
    .recommendPrice {
        font-size: 36px;
        color: #EF4034;
        font-weight: bold;
    }

    .priceStart {
        @extend .recommendPrice;
        font-size: 24px;
        position: relative;
        right: -8px;
        top: -1px;
    }
    .priceEnd {
        @extend .priceStart;
        left: -5px;
        right: 0;
    }
    .backTopIcon{
        position: fixed;
        right: 20px;
        bottom: 120px;
    }
</style>
