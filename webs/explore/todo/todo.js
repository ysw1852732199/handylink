define([
    'text!./todo.html',
  ], function(Template) {
    'use strict';
    return {
      name: "todo",
      template: Template,
      data: function() {
        return {
          titles: [{
            title: "功能",
            data: "name",
            width: "200px"
          },{
            title: "开发者",
            data: "author",
            width: "100px"
          },{
            title: "开始时间",
            data: "bgnTime",
            width: "120px"
          },{
            title: "结束时间",
            data: "endTime",
            width: "120px"
          },{
            title: "优先级",
            data: "level",
            width: "80px"
          },{
            title: "描述",
            data: "description",
            width: ""
          }
          ],
          todoFuns: [{
            "name": "域名备案",
            "author": "杨春",
            "bgnTime": "2018/08/02",
            "endTime": "-",
            "level": "高",
            "description": "将域名备案之后才能使用，否则无法使用。"
          },{
            "name": "对接百度",
            "author": "",
            "bgnTime": "-",
            "endTime": "-",
            "level": "中",
            "description": "加入百度广告联盟，赚取佣金。"
          },{
            "name": "支付功能",
            "author": "",
            "bgnTime": "-",
            "endTime": "-",
            "level": "低",
            "description": "捐赠功能，支持支付宝，微信付款。"
          }],
          doneFuns: [{
            "name": "HTTPS协议支持",
            "author": "杨春",
            "bgnTime": "2018/08/19",
            "endTime": "2018/08/19",
            "level": "低",
            "description": "支持使用https方式访问网站，提升网站的安全性。",
            "more": `使用nginx服务器中转到本地node app.js的后台。
                    参考：
                      1：nginx本地转发[https://www.cnblogs.com/ganmy/p/6055854.html]; 
                      2:CentOS 7 安装Nginx 并配置自动启动[https://blog.csdn.net/stinkstone/article/details/78082748]`
          },{
            "name": "域名注册",
            "author": "杨春",
            "bgnTime": "2018/07/25",
            "endTime": "2018/07/25",
            "level": "高",
            "description": ""
          },{
            "name": "域名解析",
            "author": "杨春",
            "bgnTime": "2018/07/25",
            "endTime": "2018/07/25",
            "level": "高",
            "description": "将域名解析到阿里云服务器"
          },{
            "name": "前端开发",
            "author": "杨春",
            "bgnTime": "2018/07/20",
            "endTime": "2018/07/29",
            "level": "高",
            "description": "使用element开发一个简单的前端示例页面。"
          },{
            "name": "后端开发",
            "author": "杨春",
            "bgnTime": "2018/07/25",
            "endTime": "2018/08/01",
            "level": "高",
            "description": "使用node.js开发一个简答的示例接口。"
          }]
        }
      }
    }
  });