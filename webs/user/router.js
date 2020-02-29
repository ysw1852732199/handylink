// ES5
define(["user/menu",
    "./user/router",
    "./user/register",
    "./role/router",
    "./group/router"], 
    function(Menu, UserRouter, Register, RoleRouter, GroupRouter) {
    return [{
        path: "/user",
        name: "user",
        component: Menu,
        children: [{
            path: "",
            redirect: "user"
        },
        UserRouter,
        RoleRouter, 
        GroupRouter]
    },{
        path: "/register",
        name: "user_register",
        component: Register
    }];
});