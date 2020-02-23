define([
    'text!./register.html',
    'service/api'
  ], function(Template, api) {
    'use strict';
    return {
      name: "register",
      template: Template,
      data: function() {
        return {
          userinfo: {
            username: "",
            password: "",
            sex: "male"
          }
        }
      },
      methods: {
        register() {
          api.registerUser(this.userinfo).then(
            function(response){
              console.log(response)
            },
            function(error){
              console.log(error)
            })
        },
        cancel() {
          this.$router.push("/home")
        }
      }
    }
  });
  