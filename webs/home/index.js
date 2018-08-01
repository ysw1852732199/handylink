define([
  'text!home/index.html',
  'axios'
], function(Template, axios) {
  'use strict';
  return {
    name: "home",
    template: Template,
    data: function() {
      return {
        searchText: "",
        links: {
          news: [],
          tech: []
        }
      }
    },
    methods: {
      search: function() {
        window.open(`https://www.baidu.com/s?wd=${this.searchText}`, "_blank");
      },
      getLinks: function(type) {
        axios({
          method:'get',
          url:`/api/mylinks/${type}`
        }).then(response=>{
          if (response.status == 200) {
            this.links[type] = response.data;
            console.log(response.data);
          }
        });
      },
      getNews: function() {
        this.getLinks("news");
      },
      getTech: function() {
        this.getLinks("tech");
      }
    },
    mounted(){
      this.getNews();
      this.getTech();
    }
  }
});
