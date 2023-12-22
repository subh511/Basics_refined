console.log("hi there!");

setTimeout(function(){
        console.log("from inside async fn")
    },5000);
    
    let a=0;
    for(let i=0; i<10; i++){
        a += i;
    }
    
    console.log(a);


    // function cube(n){
    //     return n*n*n;
    // }

    // function square(n){
    //     return n*n;
    // }

    // function getProductOfAll(a,b,fn){
    //     let val1 = fn(a);
    //     let val2 = fn(b);
    //     return val1+val2;
    // }

    // console.log(getProductOfAll(6,2,cube))
    // console.log(getProductOfAll(6,2,square))