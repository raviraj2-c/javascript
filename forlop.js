/*
// for lop
for ( let i = 0; i < 9 ; i++ ) {
    console.log(i+1)
}
*/




/*
//sum of n natural number
const prompt = require('prompt-sync')();

let sum = 0
let n = prompt("enter the value of n")
n =Number.parseInt(n)

for ( let i=0 ; i<n ; i++){
    sum += (i+1)
    console.log((i+1),"+")
}
console.log("sum of first " + n + " natural number is " + sum)
*/

const prompt = require('prompt-sync')();
let factorial  = 1
{
let n = prompt("enter the value of n")
n =Number.parseInt(n)

for ( let i=1 ; i<n ; i++){
     f = factorial*i
     console.log((factorial*i), "*")
    
}
return factorial;
}
console.log(" factorial of first " + n + " natural number is " +  factorial)