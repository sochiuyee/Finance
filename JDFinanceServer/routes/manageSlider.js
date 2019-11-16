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
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': 'https://u.jr.jd.com',
            'Referer': 'https://u.jr.jd.com',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
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
