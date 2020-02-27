define([
    'text!./manage.html',
    'service/user'
  ], function(Template, user) {
    return {
        name: "register",
        template: Template,
        data: function(){
            return {
                tableDatas: [],
                cannotDeleteUsers: ["admin", "yangchun", "dingfangmin"]
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
            },
            deleteUser: function (row) {
                user.deleteUser(row.id).then(
                    (response) => {
                        console.log("用户删除成功！")
                        console.log(response)

                        this.tableDatas = this.tableDatas.filter(
                                (item) => {return item.id != row.id});
                    },
                    (error) => {
                        console.log("用户删除失败！")
                        console.log(error)
                    }
                    )
            }
        },
        mounted(){
          this.initData();
        }
    }
  })