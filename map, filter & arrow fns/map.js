//map function on array

//simple ways to do map;
let array = [1, 2, 3, 4, 5];

function mul(i) {
  return i * 2;
}

const ans = array.map(mul);
console.log(ans);

//the advance way of doing map;

let multi = array.map(function (i) {
  return i * 3;
});
console.log(multi);

/**
 * Assignments;
 * create a map function that takes two input an array;
 * and tranforms the arrow into new one using the tranformation fn;
 */
