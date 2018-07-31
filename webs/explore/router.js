// ES5
define(["explore/explore",
    "./todo/todo",
    "./me/me",
    "./alipay/alipay",
    "./weixin/pay"], function(Explore, Todo, AboutMe, AliPay, WeixinPay) {
    return {
            path: "/explore",
            name: "explore",
            component: Explore,
            children: [{
                path: "",
                name: "explore_about_me",
                component: AboutMe
            },{
                path: "todo",
                name: "explore_todo",
                component: Todo
            },{
                path: "alipay",
                name: "explore_alipay",
                component: AliPay
            },{
                path: "wxpay",
                name: "explore_wxpay",
                component: WeixinPay
            }]
        };
});