let users_json = "user.json"
let pwd = process.cwd()
let json_file_path = pwd + "/server/mocks/" + users_json
let fs = require("fs")
let users = require(json_file_path)

// 查询用户
function getUsers() {
	users = require(json_file_path)

	return users
}

// 查询用户
function getUserById(userId) {
	return users.find( (item) => {
		return item.Id == userId
	})
}

// 添加用户
function addUser(user) {
	users.push(user)
	saveToFile()
}

// 删除用户
function removeUser(userId) {
	userIndex = users.findIndex((item) => {
		return item.id == String(userId)
	})

	if (userIndex == -1) {
		return false
	}

	users.splice(userIndex, 1)
	saveToFile()
}


function saveToFile() {
	var content = JSON.stringify(users, null, 4);
	fs.writeFile(json_file_path, content, function(err) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log("用户保存成功！");
	});
}


function generateId() {
	id = 0

	users.forEach((item) => {
		id = Math.max(id, Number(item.id))
	})

	return String(id + 1)
}


module.exports = {
	"getUsers": getUsers,
    "addUser": addUser,
    "removeUser": removeUser,
    "generateId": generateId,
}