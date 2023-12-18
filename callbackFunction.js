function square(n){
    return n*n
}


function sumOfSquare(a,b){

    let val1 = square(a);
    let val2 = square(b);
    return val1 + val2;
}

const ans = sumOfSquare(2,6);
console.log(ans);