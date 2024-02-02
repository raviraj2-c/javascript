/*
console.log("raviraj first java script progrem");
let a = 12
let b = 2
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a/b=", a/b);
console.log("a*b=", a*b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);
console.log("a==b =", a==b);
console.log("a!==b =", a!==b);
console.log("a>b=", a>b);
console.log("a<b=", a<b);
console.log("a++", a++);
console.log("++a", ++a);
console.log("a--", a--);
console.log("--a", --a);
*/

/*
// use logical operators to find whether the age of a person lies between 10 and 20?
const prompt = require('prompt-sync')();
let age = prompt("whats your age");

age = Number.parseInt(age)
if (age>10 && age<20)
{
    console.log("The age is between 10 & 20 and age is " + age)
}
else 
{
    console.log("The age is not between 10 & 20 and age is " + age )
}
*/

/*
//write a javascript program to find whether a number is divisible by 2 and 3
const prompt = require('prompt-sync')();
let num = prompt("enter the number");
num = Number.parseInt(num)
if (num%2==0 && num%3==0)
{
    console.log("This number " + num + "is divisible by 2 & 3")
}

else
{
    console.log("This number " + num + " is not divisible by 2 & 3")  
}
*/

/*
//write a javascript program to find whether a number is divisible by 2 or 3
const prompt = require('prompt-sync')();
let num = prompt("Enter the number");

num = Number.parseInt(num);
if (num%2== 0 || num%3==0)
{
    console.log("One of the two number is divisible by " +num)
}

else {
    console.log("noon of the two number is divisible by " +num)
}
*/

/*
//print "you can drivi" or "you cannot drive" based on age being greater than 18 using ternary operator

n
let age = prompt("enter your age ");
age = Number.parseInt(age);

if (age<17 && age>0)
{
    console.log("You are not elagebal for driving");
}

else if (age>=18)
{
    console.log("You are elagebal for driving")
}
else
{
 console.log("This is not a velaid age")
}
*/



/*
//demonstrate the use of switch case statements in javascript

const prompt= require("prompt-sync")();
let num = prompt("Enyer the value num ");
num = Number.parseInt(num)

switch(num)
{
case 1 :
    console.log("if num is equal to 1");
    break;
    case 2:
    console.log("if num is equal to 2");
    break;
    case 3:
    console.log("if num is equal to 3");
    break;
    case 4:
    console.log("if num is equal to 4");
    break;
    case 5:
    console.log("if num is equal to 5");
    break;
    case 6:
    console.log("if num is equal to 6");
    break;
    case 7:
    console.log("if num is equal to 7");
    break;
    case 8:
    console.log("if num is equal to 8");
    break
    case 9:
    console.log("if num is equal to 9");
    break;
    default:
    console.log("if numis none of the above");
    
}
*/



/*
//Write a program that determines whether a given number is positive or negative.
const prompt = require('prompt-sync')();
let a = prompt("plese enter the number")
a = Number.parseInt(a);

if(a>0)
{
    console.log("this is a positive number");
}
else
{
    console.log("this is a nagitive number");
}
*/


/*
//Write a program that checks if a number is even or odd.

const prompt = require('prompt-sync')();
let a = prompt("plese enter the number");
a = Number.parseInt(a);

if(a%2 == 0)
{
console.log("this number is even ");
}

else
{
    console.log("this number is odd");
}
*/



/*
//Write a program to determine the greater of two numbers.

const prompt = require('prompt-sync')();
let a = prompt("plese enter the value of a ");
let b = prompt("plese enter the value of b")

a = Number.parseInt(a);
b = Number.parseInt(b);

if(a>b)
{
    console.log("greater number is a");
}

else 
{
    console.log("greater number is b");
}
*/




/*
//Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

const prompt = require('prompt-sync')();
let a = prompt("plese enter our marks");
a= Number.parseInt(a);

if(a>0 && a<=30)
{
    console.log("D");
}

else if (a>30 && a<=60)
{
    console.log("C");
}
else if (a>60 && a<=89)
{
    console.log("B");
}
else
{
    console.log("A");
}
*/




/*
//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

const prompt = require("prompt-sync")();
let a = prompt("plese enter your age ");
a = Number.parseInt(a);

if ( a>0 && a<12)
{
    console.log("ticket price of 5");
}
else if (a<18)
{
console.log(" ticket price of 10");
}
else if (a<60)
{
    console.log("ticket price of 20");
}
else
{
    console.log("ticket price of 15");
}
*/



/*
const prompt = require('prompt-sync')();
let year = prompt("enter the year ");
year = Number.parseInt(year);

if(year%4==0 && year%100!=0 || year%400 == 0)
{
    console.log("thisis a leap year");
}
else
{
    console.log("this is not a leap year");
}
*/




/*
//Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

const prompt = require('prompt-sync')();
let prices = prompt("enter the prices");
prices = Number.parseInt(prices);

if (prices>=100)
{
    console.log("discount of 20");
}
else if(prices>=50) 
{
console.log("discount of 10");
}
else
{
    console.log("discount is 0");
}
*/


/*
//Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
let currentTime = new Date();
let currentHour = currentTime.getHours();
let greeting;

if (currentHour < 12) {
  greeting = "Good morning!";
} else if (currentHour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
console.log(greeting);
*/




//Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height)


function BMI (weight,height)
{
    return (weight/(height*height))
}
const prompt = require('prompt-sync')();
let weight = prompt("enter your waight ");
weight = parseInt(weight);
let height = prompt("enter your height ");
height = parseInt(height);

console.log(BMI);

if (BMI<=10 || BMI>=8)
{
    console.log("you are fit ");
}

else
{
    console.log("you are not fit")
}
