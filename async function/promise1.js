let a = new Promise(function(resolve){
    resolve("foo");
});

function callback(){
    console.log(a)
}

//console.log(a)
a.then(callback);