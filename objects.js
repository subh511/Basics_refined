// let users1 = {
//     firstName: "samrat",
//     gender: "male",
// }

// console.log(users1.firstName)

let usersNames = [
  {
    firstName: "samrat",
    gender: "male",
  },
  {
    firstName: "sam",
    gender: "male",
  },
  {
    firstName: "Nikki",
    gender: "female",
  },
];

for (let i = 0; i < usersNames.length; i++) {
  if (usersNames[i].gender == "female") {
    console.log(usersNames[i].firstName);
  }
}
