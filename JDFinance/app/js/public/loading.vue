<template>
    <div
        v-if="datas.length==0"
        class="loading">
        <img
            src="../../img/loading.gif"
            alt="">
    </div>
</template>

<script>
export default {
    props:{
        datas:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss">
.loading{
    width: 100%;
    height: 100%;
    img{
        width: 100%;
    }
}
</style>
