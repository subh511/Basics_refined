//map,filter,arrow fns as below;
//given a new array, return new array with the value multiply with 2

let array = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] * 2);
}
console.log(newArray);

// in string notation we see as below;

let names = ["sam", "ram", "tam"];

let filteredMethod = names.filter(function (n) {
  if (n.startsWith("s")) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredMethod);