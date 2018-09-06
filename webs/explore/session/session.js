define([
    'text!./session.html',
    'service/api'
  ], function(Template, api) {
    'use strict';
    return {
        name: "sessionDemo",
        template: Template,
        data: function() {
            return {
                userinfo: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                api.login(this.userinfo).then(
                    data => {
                        console.log(data);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            logout() {
                api.logout().then(
                    response => {
                        // todo 重定向不知道怎么操作
                        if (response.status == 302) {
                            
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            clear() {
                this.userinfo.username = "";
                this.userinfo.password = "";
            }
        },
        // computed: {
        //     localStorage: function() {


        //         return window.localStorage;
        //     },
        //     sessionStorage: function() {
        //         return window.sessionStorage;
        //     }
        // }
    }
  });