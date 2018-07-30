define([
    'text!explore/explore.html',
  ], function(Template) {
    'use strict';
    return {
      name: "explore",
      template: Template,
      data: function() {
        return {        }
      },
      methods: {
        openUrl: function() {
          window.open(`https://www.${this.website}.com`, "_blank")
        }
      },
      computed: {
        url: function() {
          return `https://www.${this.website}.com`;
        }
      }
    }
  });
  