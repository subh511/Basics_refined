function sum(num1, num2) {
  let result = num1 + num2;
  //return result;
  displayResult(result);
}

function displayResult(data) {
  console.log("result of the sum is :" + data);
}

function displayResultPassive(data) {
  console.log("sum's result is :" + data);
}

//displayResult((sum(1,2)))
console.log(sum(1,2))