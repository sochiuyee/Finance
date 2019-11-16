import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import {getters} from './getters'
import actions from "./actions";

Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

if (module.hot){
    // 使 mutation 成为可热重载模块
    module.hot.accept(['./mutations'],()=>{
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const newMutations = require('./mutations').default
        store.hotUpdate({
            mutations:newMutations
        })
    })
}

export default store
