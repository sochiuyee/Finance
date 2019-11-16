import axios from 'axios'

export function getHomeSliderData() {
    return axios({
        method:'post',
        url:'http://localhost:3000/api',
        data:{
            url:'https://ms.jr.jd.com/gw/generic/base/h5/m/baseGetOutH5MessageListNew',
            params:{
                reqData: '{"userType":67,"missionPlatformsEnumCode":4,"channel":"","deviceId":"","reportUserType":"50067","qingChannel":null,"clientVersion":null,"osVersion":null,"deviceInfo":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1","jdAppVersion":"","jrAppVersion":"","mac":"","qingClientType":"ios","idfa":""}',
                source: 'jrm'
            }
        }
    })
}

export function getHomeHotProductData() {
    return axios({
        method:'post',
        url:'http://localhost:3000/api/getHomeHotProduct',
        data:{
            url:'https://licai.jd.com/async/getTodayHotProduct.action?areaId=75&_dc=1571989989458',
            params:{
                areaId: 75,
                _dc: 1571989989458
            }
        }
    })
}

export function getHomeFund() {
    return axios({
        method:'post',
        url:'http://localhost:3000/api/getHomeFund',
        data:{
            url:'https://licai.jd.com/async/financing/getFixedProductListByXiaoBaiInterface.action?areaId=79&_dc=1571989989480',
            params:{
                areaId: 79,
                _dc: 1571989989480
            }
        }
    })
}

export function getHomeBond() {
    return axios({
        method:'post',
        url:'http://localhost:3000/api/getBound',
        data:{
            url:'https://licai.jd.com/async/financing/getFundNormalProList.action?areaId=64&_dc=1571989989486',
            params:{
                areaId: 64,
                _dc: 1571989989486
            }
        }
    })
}


