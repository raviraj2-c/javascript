//write a progrem to print the marks of a student in a object using for loop     obj={harry:98, rohan:70,aakash:7}
/*
let marks =
{
    harry:98,
    rohan:70,
    aakash:7
}
for(let i=0 ; i<Object.keys(marks).length; i++)
{
    console.log("marks of " + Object.keys(marks)[i] + " : " + marks[Object.keys(marks)[i]])
}
*/


/*
//write the program in Q1 using for in loop
let marks =
{
    harry:98,
    rohan:70,
    aakash:7
}
for(let i in marks)
{
    console.log(i + " : " + marks[i])
}
*/




//write a program to print "try again " until the user enters the correct number
const prompt = require('prompt-sync')();
let a = 8
let i
while (i!= a) 
{
    console.log("plese do once more time")
    i=prompt("enter the number")
}
console.log("this is a curect number")



/*
//write a function to find mean of 5 numbers

const coordi =(a,b,c,d) =>
{
let q = a+b+c+d;
return q;
}

console.log(coordi(1,2,3,4))
*/