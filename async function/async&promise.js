// function samAsyncFunction(){
//     let p = new Promise(function(resolve){
//         resolve("hi there!")
//     })
//     return p;
// }

// function main(){
//     samAsyncFunction().then(function(value){
//         console.log(value);
//     })
// }

// main();

function samAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("hi there!");
  });
  return p;
}

async function main() {
  let value = await samAsyncFunction();
  console.log(value);
}

main();
