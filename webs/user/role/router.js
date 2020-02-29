// ES5
define(["./add", "./list"], function(Add, List) {
    return {
            path: "role",
            name: "role_manage",
            component: {
                template: "<router-view></router-view>"
            },
            children: [{
                path: "",
                redirect: "list"
            },{
                path: "list",
                name: "role_list",
                component: List
            }]
        };
});