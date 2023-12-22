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