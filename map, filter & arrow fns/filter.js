/**
 * filter function
 *
 */

//first simple of doing this method;
let array = [1, 2, 3, 4, 5];

let newArr = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    newArr.push(array[i]);
  }
}
console.log(newArr);

//second is the filtered method of approaching the method;

function even(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const filtered = array.filter(even);
console.log(filtered);

//third method is the pure way of doing filter;

let filteredMethod = array.filter(function even(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredMethod)
