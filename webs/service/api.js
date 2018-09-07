
  define(["axios"], function(axios) {

    let instance = axios.create();
    instance.defaults.timeout = 2000; //默认超时时间，2秒。
    return {
        login: function(userinfo) {
            return instance({
                method:'post',
                url:'/api/login',
                data: userinfo
              })
        },
        logout: function(userinfo) {
            return instance({
                method:'get',
                url:'/api/logout'
              })
        },
        getLinks: function(type){
            return instance({
                method:'get',
                url:`/api/mylinks/${type}`
              })
        }
    }
});