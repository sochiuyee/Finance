var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.post('/', function(req, res, next) {
    var url = decodeURIComponent(req.body.url); // 前端写的地址
    var data = req.body.params;

    var options = {
        uri:url,
        method:'POST',
        headers:{
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36',
            'Origin': 'https://licai.jd.com',
            'Referer': 'https://licai.jd.com/'
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
