import {homeSliderFunc,homeIconFunc} from "../page/home/gettersHomeFunc/homeSliderFunc"
import {homeProductFunc} from "../page/home/gettersHomeFunc/homeProductFunc"
import {manageSliderFunc} from "../page/manage/gettersManageFunc/manageSliderFunc"
import {manageWelfareFunc} from "../page/manage/gettersManageFunc/manageWelfareFunc"

// getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
export const getters = {
    homeSlider(state) {
        return homeSliderFunc(state)
    },
    homeIcon(state) {
        return homeIconFunc(state)
    },
    homeFinancialProduct(state) {
        return homeProductFunc(state)
    },
    manageSlider(state) {
        return manageSliderFunc(state)
    },
    manageWelfare(state){
        return  manageWelfareFunc(state)
    }
}
