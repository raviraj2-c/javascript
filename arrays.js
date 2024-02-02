/*
//create an arry of numbers and take input from the user to add numbers to this array
let array = ["ravi", "fathar", "mother"];
console.log(array);
const prompt = require('prompt-sync')();
let add = prompt("enter the number to add in array")
add = Number.parseInt(add)
array.push(add);
console.log(array);
*/

/*
//keep adding number to the array in until 0 is added to the array

let array = ["kjgfo", "ehue78", "aklgeuf8"];
console.log(array);
const prompt = require('prompt-sync')();
let add
do{
add = prompt("enter the number")
add = Number.parseInt(add);
array.push(add);
}
while(add!=0)
console.log(array);
*/



/*
//filter for numbers divisible by 10 from a given array
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,141,20,30,40]
console.log(array);
const prompt = require ('prompt-sync')();
let age = prompt("enter the number which give the rementerr you want to filter from array ")
let filter = array.filter(you);

function you (array)
{
return array%age==0
}
console.log(filter);
*/



/*
//create an array of square of given numbers
function square (num)
{
    return num*num
}
let array = [];
const prompt = require('prompt-sync')();
let num = prompt("enter the number ");
num=Number.parseInt(num);
array.push(square);
console.log(array);
*/

let arr = [ 2, 3, 4, 5 , 6, 7,]
let n = arr.map((num)=>{
    return num*num
})
console.log(n);