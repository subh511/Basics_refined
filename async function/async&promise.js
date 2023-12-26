function samAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there!")
    })
    return p;
}

function main(){
    samAsyncFunction().then(function(value){
        console.log(value);
    })
}

main();

