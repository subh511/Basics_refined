//fs is node js library helps to extract files;

//const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err,data){
//     console.log(data); 
// });

// console.log("hi there");

const fs = require("fs");
function KiratReadFile(){
    console.log("inside kiratsReadfiles");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("./a.txt","utf-8", function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data)
}

KiratReadFile().then(onDone);

