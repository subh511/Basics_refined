//what will be excuted after what(obvious synchronous first then asynchronous second)
function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    //return findSum(100);
    console.log(findSum(100));
}

setTimeout(findSumTill100,100);
//calling sum after 1sec,which is asynchronous in nature;

console.log("hello world");