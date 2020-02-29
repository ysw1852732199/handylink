
  define(["axios"], function(axios) {

    let instance = axios.create();
    instance.defaults.headers.common
    instance.defaults.timeout = 2000; //默认超时时间，2秒。
    return {
        getRoles: function() {
            return instance({
                method: 'get',
                url: '/api/roles'
            })
        },
        getRole: function(id) {
            return instance({
                method: 'GET',
                url: '/api/roles/'+id
            })
        },
        deleteRole: function(id) {
            return instance({
                method: 'DELETE',
                url: '/api/roles/'+id
            })
        }
    }
});