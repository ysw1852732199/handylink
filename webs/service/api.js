
  define(["axios"], function(axios) {
    return {
        login: function(userinfo) {
            return axios({
                method:'post',
                url:'/api/login',
                data: userinfo
              })
        },
        logout: function(userinfo) {
            return axios({
                method:'get',
                url:'/api/logout'
              })
        },
        getLinks: function(type){
            return axios({
                method:'get',
                url:`/api/mylinks/${type}`
              })
        }
    }
});