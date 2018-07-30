// ES5
define(["vueRouter", "home/router"], function(vueRouter, home){
    console.log("aaaa", home);
    return new vueRouter({
            routes: [{
                    path: '/',
                    name: 'root',
                    redirect: 'home'
                },
                home
            ]
        })
    }
);


// ES6
// import Router from "vue-router";
// import Home from "./home";
// import Explore from "./explore";
// import History from "./history";
// const router = new Router({
//     routes: [
//         history.history
//     ]
// })
// module.exports = router;