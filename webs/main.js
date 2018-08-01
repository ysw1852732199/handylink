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