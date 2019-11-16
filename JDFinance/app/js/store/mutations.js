// * 引入整个模块 as 重命名模块名为types，模块里的内容就可以用types.名称获取
import * as types from './mutation-types'

/**
 *  mutations 里面放置的是我们操作state对象属性的方法
 */
const mutations = {
    //  es6的计算属性命名功能来使用一个常量作为函数名
    [types.SET_HOME](state,data){ // mutations里面的参数，第一个默认为state，接下来的为自定义参数
        if (data) {
            return state.home = data
        } else {
            return state.home = {}
        }
    },

    [types.SET_HOME_HOT_PRODUCT](state,data){
        if (data) {
            return state.homeHotProduct = data
        } else {
            return state.homeHotProduct = {}
        }
    },

    [types.SET_HOME_FUND](state,data){
        if (data) {
            return state.homeFund = data
        } else {
            return state.homeFund = {}
        }
    },

    [types.SET_HOME_BOUND](state,data){
        if (data) {
            return state.homeBound = data
        } else {
            return state.homeBound = {}
        }
    },

    [types.SET_MANAGE_SLIDER](state,data){
        if (data) {
            return state.manageSlider = data
        } else {
            return state.manageSlider = {}
        }
    },

    [types.SET_MANAGE_WELFARE](state,data){
        if (data) {
            return state.manageWelfare = data
        } else {
            return state.manageWelfare = {}
        }
    }
}

export default mutations
