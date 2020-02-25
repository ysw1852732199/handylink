define([
    'text!./manage.html',
    'service/user'
  ], function(Template, user) {
    return {
        name: "register",
        template: Template,
        data: function(){
            return {
                tableDatas: []
            };
        },
        methods: {
            initData: function() {
                user.getUsers().then(
                    (response) => {
                        this.tableDatas = response.data;
                    },
                    (error) => {
                        console.log(error)
                    })
            }
        },
        mounted(){
          this.initData();
        }
    }
  })