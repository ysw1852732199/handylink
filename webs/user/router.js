// ES5
define(["./user", "./register", "./manage"], function(User, Register, Manage) {
    return {
            path: "/user",
            name: "user",
            component: User,
            children: [{
                path: "",
                redirect: ""
            },{
                path: "register",
                name: "user_register",
                component: Register
            },{
                path: "manage",
                name: "user_manage",
                component: Manage
            }]
        };
});