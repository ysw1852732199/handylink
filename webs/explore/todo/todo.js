define([
    'text!./todo.html',
  ], function(Template) {
    'use strict';
    return {
      name: "todo",
      template: Template,
      data: function() {
        return {}
      }
    }
  });