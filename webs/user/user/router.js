// ES5
define(["./list"], function(List) {
    return {
            path: "user",
            name: "user_manage",
            component: {
                template: "<router-view></router-view>"
            },
            children: [{
                path: "",
                redirect: "list"
            },{
                path: "list",
                name: "user_list",
                component: List
            }]
        };
});