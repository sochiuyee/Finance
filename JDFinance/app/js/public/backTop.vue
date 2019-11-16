<template>
    <transition name="fade">
        <div :class="$style.backTopContainer" @click="backTop">
            <i class="iconfont icon-huidaodingbu" :class="$style.backTop"></i>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "backTop",
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            backTop(){
                this.$emit('backTop')
            }
        }
    }
</script>

<style module lang="scss">
    .bcakTopContainer{
        width: 90px;
        height: 90px;
        background-color: rgba(0,0,0,.6);
        border-radius: 50%;
    }
    .backTop{
        font-size: 70px;
        color: #999;
    }
</style>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
