import axios from 'axios';

function getManageSliderData() {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/getManageSlider',
        data: {
            url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/queryContent',
            params: {
                'reqData': '{"pageId":"2442"}'
            }
        }
    })
}

function getManageWelfareData() {
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/getWelfare',
        data: {
            url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/queryContent',
            params: {
                'reqData': '{"pageId":"2443"}'
            }
        }
    })
}

export {getManageSliderData, getManageWelfareData}

