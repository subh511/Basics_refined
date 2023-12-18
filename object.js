let users = '{"name": "samrat","age": "23", "gender": "male" }'

//console.log(userData)


let user = JSON.parse(users);
console.log(user["name"]);