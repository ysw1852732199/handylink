define([
  'text!home/index.html',
], function(Template) {
  'use strict';
  return {
    name: "home",
    template: Template,
    data: function() {
      return {
        website: "handylink"
      }
    },
    methods: {
      openUrl: function() {
        window.open(`https://www.${this.website}.com`, "_blank")
      }
    },
    computed: {
      url: function() {
        console.log(this.website);
        return `https://www.${this.website}.com`;
      }
    }
  }
});
