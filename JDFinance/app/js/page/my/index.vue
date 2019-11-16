<template>
    <div class="my">
        <my-header></my-header>
        <my-member></my-member>
    </div>
</template>

<script>
    import MyHeader from "./header.vue"
    import MyMember from "./member.vue"
    export default {
        components:{
            MyHeader,
            MyMember
        },
    }
</script>

<style scoped>

</style>
