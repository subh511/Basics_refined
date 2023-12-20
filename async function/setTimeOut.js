console.log("hi there!");

setTimeout(function(){
        console.log("from inside async fn")
    },5000);
    
    let a=0;
    for(let i=0; i<10; i++){
        a += i;
    }
    
    console.log(a);
