//fs is node js library helps to extract files;


const fs = require("fs");


fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data); 
});

console.log("hi there");