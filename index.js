


function one (a,b) {
    if (a<b) {
        return -1;
    } else if (a>b){
         return 1;
    } else if (a=b) {
        return 0;
    } 
}

console.log (one(3,5));


function two (n){
    let result =1;
    for(let i=1;i<=n;i++) {
        result=result*i;   
    }
    return result;
}
console.log(two(10));



/*
 let n=10;
function factorial(n){
    if (n===0) {return 1
    } else {return n*factorial(n-1)
    };
} 
console.log(factorial (n)); 
*/




function three(a,b,c) {
    let result=""+a+b+c;
    result=Number(result);
    return result;

}
console.log(three (4,5,6));



function four(length,width=0){
    if (width===0){
        return length*length;
    } else {
        return length*width;
    }

};
console.log(four(3,4));
