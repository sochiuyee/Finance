<template>
    <div :class="$style.publicHeader">
        <div :class="$style.headerLeft" v-if="$slots.left" @click="leftClick">
            <slot name="left"></slot>
        </div>
        <div :class="$style.headerCenter" v-if="$slots.center">
            <slot name="center"></slot>
        </div>
        <div :class="$style.headerRight" v-if="$slots.right" @click="rightClick">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "publicHeader",
        methods:{
            leftClick(){
                this.$router.back()
            },
            rightClick(){
                this.$emit('rightClick')
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .publicHeader{
        @include flex(row);
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 90px;
        background-color: #fff;
    }
    .headerLeft{
        height: 100%;
        margin-left: 20px;
        ~ .headerRight{
            position: static; // 当左边有内容就不需要绝对定位到右边，之前因为父元素flex布局排列到左边的后面
        }
    }
    .headerCenter{
        height: 100%;
        flex: 1;
        margin: 0 10px; // 如果左右都没有内容，左右需要留10px
        ~ .headerRight{
            position: static; // 当左边和中间都有内容就不需要绝对定位到右边
        }
    }
    .headerRight{
        height: 100%;
        position: absolute;
        right: 0;
        margin-right: 10px;
        @include flex(row); // 使用绝对定位，父元素的flex布局失效，需要自身设置居中对齐
        justify-content: center;
        align-items: center;
    }
</style>
