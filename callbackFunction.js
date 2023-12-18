// function square(n){
//     return n*n
// }

// function sumOfSquare(a,b){

//     let val1 = square(a);
//     let val2 = square(b);
//     return val1 + val2;
// }

function cube(n) {
  return n * n * n;
}
function square(n) {
  return n * n;
}

function sumOfSquare(a, b) {
  let val1 = square(a);
  let val2 = square(b);
  return val1 + val2;
}

function sumOfCubes(a, b) {
  let val1 = cube(a);
  let val2 = cube(b);
  return val1 + val2;
}

const ans1 = sumOfSquare(2, 6);
console.log(ans1);
const ans2 = sumOfCubes(2, 3);
console.log(ans2)
