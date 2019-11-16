<template>
    <div id="app">
        <keep-alive>
            <!--router-view是放置路由的地方-->
            <router-view></router-view>
        </keep-alive>
        <public-navbar></public-navbar>
    </div>
</template>


<script>
    import PublicNavbar from 'public/navbar.vue'
    export default {
        name:'app',
        components:{
            PublicNavbar
        }
    }
</script>

<style lang="scss"></style>
