<template>
    <div :class="[btnClass,cname]">
        <!-- 插槽安放按钮的实际内容 -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            cname:{
                type:String,
                default:""
            }
        },
        data(){
            return {
                btnClass:"btn"
            }
        }
    }
</script>

<style lang="scss">
    @import "~css/element";
    .btn{
        @include btn();
    }
</style>
