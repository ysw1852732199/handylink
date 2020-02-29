// ES5
define(["./list"], function(List) {
    return {
            path: "group",
            name: "group_manage",
            component: {
                template: "<router-view></router-view>"
            },
            children: [{
                path: "",
                redirect: "list"
            },{
                path: "list",
                name: "group_list",
                component: List
            }]
        };
});