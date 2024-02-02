/*
//what will the following print in javascript?   console.log("har\"".length)

let a = ("har\"");
console.log(a.length);
*/






/*
//eplore the includes, starts with & endswith function of a string


//endswith
let text = "Hello world";
let result = text.endsWith("world",12);
console.log(result);
//includes
let  includes = "Hello world, welcome to the universe.";
let inc = text.includes("world");
console.log(inc);

//startsWith()
let  startsWith = "Hello world, welcome to the universe.";
let start = text.includes("world");
console.log(start);
*/




//write a code to convert a given string to lowecase
let word = ("HEUDSC JNFFIUB JFIUBQBB ")
console.log(word.toLowerCase());

//extract the amount out of this string   "please give Rs 1000"

let amount = ("please give Rs 1000")
console.log(amount.slice(15));


//try to change 4th character of given string were you able to do it ?


let repl = ("please give Rs 1000")
console.log(repl.replace("1000","200"));