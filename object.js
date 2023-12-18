//json.parse;

// let users = '{"name": "samrat","age": "23", "gender": "male" }'
// let user = JSON.parse(users);
// console.log(user["name"]);


//json.stringify()


let object = {
    name: "samrat",
    age: "25",
    gender: "male"
}

const finalString = JSON.stringify(object);
console.log(finalString);