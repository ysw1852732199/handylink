require.config({
  baseUrl: "/",
  paths: {
    // "vue": "libs/vue/vue",
    "vueRouter": "libs/vue-router/vue-router",
    // "elementUI": "libs/element-ui/element",
    'text': '/libs/require.text',
    "axios": "/libs/axios"
  }
});

define([
  // 'vue',
  'router',
  // 'vueRouter',
  // 'elementUI'
], function(router) {
  'use strict';
  let app = new Vue({
      router: router
    }).$mount('#app');
});

window.onscroll = function(){
  // 获取页面向上滚动距离，chrome浏览器识别document.body.scrollTop，而火狐识别document.documentElement.scrollTop，这里做了兼容处理
  var toTop = document.documentElement.scrollTop || document.body.scrollTop;
  //var winHeight = document.documentElement.clientHeight;
  // 如果滚动超过一屏，返回顶部按钮出现，反之隐藏
  if (toTop > 0) {
    document.getElementById("scrollTop").style.display = 'block';
  } else {
    document.getElementById("scrollTop").style.display = 'none';
  }
}