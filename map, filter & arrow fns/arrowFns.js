//real function;

function sum(a, b) {
  return a + b;
}

//arrow function as written below;

const mul = (a, b, c) => {
  return a * b * c;
};

//arrow function as denoted;
let multiply = mul(2, 2, 3);
console.log(multiply);

//simple function as denoted
let add = sum(2, 4);
console.log(add);

//and can written in backend as function and arrow function as denoted below;

/**
 * app.get("/",function(){
 *
 * })
 */

/**
 * app.get("/",()=>{
 * })
 */
