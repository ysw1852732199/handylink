define([
  'text!home/index.html',
], function(Template) {
  'use strict';
  return {
    name: "home",
    template: Template,
    data: function() {
      return {
        searchText: ""
      }
    },
    methods: {
      search: function() {
        window.open(`https://www.baidu.com/s?wd=${this.searchText}`, "_blank");
      }
    }
  }
});
