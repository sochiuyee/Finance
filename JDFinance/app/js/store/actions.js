import {getHomeSliderData,getHomeHotProductData,getHomeFund,getHomeBond} from '../api/home'
import {getManageSliderData,getManageWelfareData} from '../api/manage'

import * as types from './mutation-types'

const actions = {
    homeData(context){
        return getHomeSliderData().then(res=>{
            // 请求完数据后，提交mutation去改变state
            context.commit(types.SET_HOME,res.data.resultData.resultFloorList)
        })
    },

    homeHotProductData(context){
        return getHomeHotProductData().then(res=>{
            context.commit(types.SET_HOME_HOT_PRODUCT,res.data)
        })
    },

    homeFundData(context){
        return getHomeFund().then(res=>{
            context.commit(types.SET_HOME_FUND,res.data)
        })
    },

    homeBoundData(context){
        return getHomeBond().then(res=>{
            context.commit(types.SET_HOME_BOUND,res.data)
        })
    },

    manageSliderData(context){
        return getManageSliderData().then(res=>{
            context.commit(types.SET_MANAGE_SLIDER,res.data)
        })
    },

    manageWelfareData(context){
        return getManageWelfareData().then(res=>{
            context.commit(types.SET_MANAGE_WELFARE,res.data)
        })
    }
}

export default actions
