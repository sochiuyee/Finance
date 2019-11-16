<template>
    <Panel
        :class="$style.panel"
        title="生活服务">
        <ul :class="$style.content">
            <li :class="$style.item">
                <i class="iconfont icon-jiayouqia"/>
                <p>慧加油</p>
            </li>
            <li :class="$style.item">
                <i class="iconfont icon-xinyongqia"/>
                <p>小白信用</p>
                <p>全新升级</p>
            </li>
            <li :class="$style.item">
                <i class="iconfont icon-xinyong"/>
                <p>信用卡还款</p>
            </li>
            <li :class="$style.item">
                <i class="iconfont icon-zhuanrang"/>
                <p>卡转让</p>
            </li>
            <li :class="$style.item">
                <i class="iconfont icon-dingqihuankuan"/>
                <p>定期还款</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    export default {
        name: "Life",
        components:{
            Panel
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel();
        >h2{
            display: none;
        }
    }
    .content{
        @include flex(row);
        padding-bottom: 30px;
    }
    .item{
        flex: 1;
        width: 20%;
        font-size: 26px;
        line-height: 1;
        text-align: center;
        &>i{
            font-size: 90px;
            line-height: 1.3;
        }
        &>p{
            @include textHidden;
            &:nth-child(3){
                margin-top: 12px;
                color: #FF801A;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .iconfont{
        font-size: 70px;
    }
    .icon-jiayouqia{
        color: #FF6A6A;
    }
    .icon-xinyongqia{
        color: #FFB90F;
    }
    .icon-xinyong{
        color: #436EEE;
    }
    .icon-zhuanrang{
        color: 	#6959CD;
    }
    .icon-dingqihuankuan{
        color: #912CEE;
    }
</style>
