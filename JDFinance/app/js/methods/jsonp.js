import originJSONP from 'jsonp' // 下载的jsonp需要手动把data拼接到url后面，现封装jsonp实现拼接data的功能

function jsonp(url, data, option) {
    // 将data参数拼接到url后面
    url += url.includes('?') ? '&' : '?' + param(data)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => { // 下载的JSONP的使用jsonp(url, opts, fn) https://github.com/webmodules/jsonp
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

// 将参数的对象形式转成字符串
function param(data) {
    let url = ''
    for (let key in data) {
        let value = data[key] !== undefined ? data[key] : ''
        // url进行拼接后第0位是&第一位开始才是参数 拼接后url变量结果：&属性A=data1&属性2=data2
        url += `&${key}=${encodeURIComponent(value)}`
    }
    // 返回将object形式的参数变成：属性A=data1&属性2=data2
    return url ? url.substring(1) : ''
}

export {jsonp}
