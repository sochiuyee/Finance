import {jsonp} from '../methods/jsonp'
import {SAVING_RECOMMEND_PAGE_SIZE,jsonpOptions} from './config'

export function getRecommend(page=1,psize=SAVING_RECOMMEND_PAGE_SIZE) {
    const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
    const data = {
        page,
        psize,
        type: 0,
        fontCatId: ''
    }
    return jsonp(url,data,jsonpOptions)
}
