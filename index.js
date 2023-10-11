
/*

function one (a,b) {
    if (a<b) {
        return -1;
    } else if (a>b){
         return 1;
    } else if (a=b) {
        return 0;
    } 
}

console.log (one(5,5));


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


/*

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
*/



function perfectNumber(n){
    let sum=0;
    let remains;
    for (let i=1;i<n-1;i++){
        remains=n%1;
    if (remains===0){
        sum+=i;
        }
    };
    if (n===sum){
        console.log(n+'-Совершенное число');
    }else {
        console.log('Не совершенное число');
    }
};
 

function time(hh,mm,ss){
return (ss,mm,hh)
};