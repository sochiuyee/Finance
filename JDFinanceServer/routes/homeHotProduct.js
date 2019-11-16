var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.post('/', function(req, res, next) {
    var url = decodeURIComponent(req.body.url); // 前端写的地址 (在axios请求时data里的url)
    var data = req.body.params; // 前端写的参数（在axios请求时data里的params)

    var options = {
        uri:url,
        method:'POST',
        headers:{
            'Origin': 'https://licai.jd.com',
            'Referer': 'https://licai.jd.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36'
        },
        form:data
    };

    request(options,function(error,response,body){
        console.log('body:',body);
        try{
            res.json(JSON.parse(body)) // 请求的数据转换成JSON格式
        }catch(e){
            res.json({}) // 没有数据就显示{}
        }
    });
});

module.exports = router;
