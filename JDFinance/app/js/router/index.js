import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'*',
        redirect:'/home' // 重定向到首页
    },
    {
        path:'/home',
        name:'home',
        component: () => import('../page/home/index.vue'),
    },
    {
        path: '/manage',
        name: 'manage',
        component: () => import('../page/manage/index.vue'),
    },
    {
        path:'/my',
        name:'my',
        component: () => import('../page/my/index.vue')
    },
    {
        path:'/goods',
        name:'goods',
        component: () => import('../page/goods/index.vue')
    }
]

export default new VueRouter({
    routes
})
