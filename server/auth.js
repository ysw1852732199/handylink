var users = [{
        "name": "admin",
        "password": "123456"
    }, {
        "name": "yangchun",
        "password": "654321"
    }
];

// 检查用户是否存在
function checkUser(userName, userPass) {
    for (let item of users) {
        if (item.name === userName && userPass == item.password) {
            return item;
        }
    }

    return undefined;
}

module.exports = checkUser;