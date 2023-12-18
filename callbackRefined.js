function cube(n){
    return n*n*n;
}

function square(n){
    return n*n;
}

function sumOfSomething(a,b,callback){
    console.log(a);
    console.log(callback);
    let val1 = callback(a);
    let val2 = callback(b);
    return val1+val2;
}
let final = sumOfSomething(3,3,cube);
console.log(final);