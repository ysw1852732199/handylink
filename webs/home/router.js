// ES5
define(["home/index"], function(Home) {
    return {
            path: "/home",
            name: "home",
            component: Home
        };
});

// ES6
// import Home from "./index.vue"
// export default {
//     path: "/",
//     component: Home
// }