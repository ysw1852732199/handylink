userManager = require("./user")

// 检查用户是否存在
function checkUser(userName, userPass) {
    for (let item of userManager.getUsers()) {
        if (item.username === userName && userPass == item.password) {
            return item;
        }
    }

    return undefined;
}

// 校验用户数据合法性
function validateUser(user) {
    if (user.username == undefined || user.username == "" || 
        user.password == undefined || user.password == "") {
        return {
            "errorCode": "400001",
            "errorMessage": "username or password is incorrect!"
        };
    }

    if (user.sex == undefined || user.sex == "") {
        return {
            "errorCode": "400002",
            "errorMessage": "user sex is incorrect!"
        };
    }

    return undefined
}

function convertToUser(data) {
    return {
        "id": userManager.generateId(), 
        "username": data.username,
        "password": data.password,
        "sex": data.sex,
        "birthday": data.birthday || "",
        "cardId": data.cardId || ""
    }
}

// 注册用户 
function registerUser(req, res) {
    user = convertToUser(req.body)

    error = validateUser(user)
    console.log(error)
    if (error != undefined) {
        res.json(error);
    }
    userManager.addUser(user);
    res.json("OK")
}

// 删除用户
function removeUser(req, res) {
    userManager.removeUser(user)
}

module.exports = {
    "checkUser": checkUser, 
    "registerUser": registerUser, 
    "removeUser": removeUser
};