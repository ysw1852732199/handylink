const express  = require('express');
const home_link = require('./api/home');
const app  = express();
const router = express.Router();

// 处理/api/mylinks的post请求
router.get('/api/mylinks', home_link.getLinks);
router.get('/api/mylinks/:type', home_link.getLinks);
app.use(router);

// 处理静态文件
app.use(express.static(__dirname + '/webs'));
// 处理根目录的请求
app.use(function(req,res){
    res.sendFile(__dirname + '/webs/index.html') ;
});

app.listen(80) ;