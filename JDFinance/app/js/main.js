import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import store from './store/index.js' // 引入vuex实例仓库

import 'css/index.scss' // 引入项目需要的css文件

import 'lib-flexible/flexible' // 引入下载的flexible

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false // 声明不是生产环境

// 允许使用vue-devtools插件检查代码
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(VueLazyload,{
    preLoad:1,
    error:require('../img/error.jpg'), // 引入图片需要添加require，vue-lazyload是在main.js文件中引入，不会被webpack进行编译，src中的文件会被webpack编译，包括img文件夹中的图片地址，会在编译过程中改变。因此vue-lazyload无法正确获得图片地址，就不能显示图片了。
    loading:require('../img/imgLoading.gif'),
    attempt:1
})

new Vue({
    el:'#app',
    router,
    store, // 在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
    components:{
        App
    },
    template:"<App />"
})
