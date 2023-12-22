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