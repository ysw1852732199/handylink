// ES5
define(["./user", "./register"], function(User, Register) {
    return {
            path: "/user",
            name: "user",
            component: User,
            children: [{
                path: "",
                redirect: "register"
            },{
                path: "register",
                name: "user_register",
                component: Register
            }]
        };
});