
  define(["axios"], function(axios) {

    let instance = axios.create();
    instance.defaults.headers.common
    instance.defaults.timeout = 2000; //默认超时时间，2秒。
    return {
        registerUser: function(userinfo) {
            return instance({
                method: 'POST',
                url: '/api/user',
                data: userinfo
            })
        },
        getUsers: function() {
            return instance({
                method: 'get',
                url: '/api/users'
            })
        },
        getUser: function(id) {
            return instance({
                method: 'GET',
                url: '/api/users'
            })
        }
    }
});