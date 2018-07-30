// file name :test.js
const express  = require('express');
const app  = express();
const router = express.Router();
// 处理/api/login的post请求
router.post('/api/login',function(req,res){
    name=req.body.name ;
    pwd=req.body.pwd   ;
    console.log(name+'--'+pwd) ;
    res.status(200).send(name+'--'+pwd) ;
});

// 处理/api/mylinks的post请求
router.get('/api/mylinks', function(req,res) {
    res.sendfile('./api/links.json') ;
});
app.use(router);

// 处理静态文件
app.use(express.static(__dirname + '/webs'));
// 处理根目录的请求
app.use(function(req,res){
    console.log(".....","req")
    res.sendfile(__dirname + '/webs/index.html') ;
});


// 监听3000端口
app.listen(8099) ;