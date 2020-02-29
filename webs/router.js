// ES5
define(["vueRouter", "home/router", "explore/router", "about/router", 
    "user/router"],
    function(vueRouter, home, explore, about, user, role){
    return new vueRouter({
            routes: [{
                    path: '/',
                    name: 'root',
                    redirect: 'home'
                },
                home,
                explore,
                about,
                ...user
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