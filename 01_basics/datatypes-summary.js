// how data can be stored or how data can be accessed , based on that there are two types of datatype.

// primitive datatype = 7 types / they are called by value. means this dataype can not get directly , its value given to you by copying and you made changes on copy not original.
/* String , Number , Boolean, null , undefined , Symbol, BigInt */
const rollNo = "11"
let Attendance = 60
let isLoggedIn = true
const outsideTemp = null  //its show its value as a object
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id == anotherId);  //here symbol is use for uniqueness thats why both value is same but it shows it not matched

const bigNumber = 2222334354542534636n



// Non-primitive or Reference 
/* Array , Objects , Functions */
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "sahil",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
// console.log(typeof heros);
// console.log(typeof myFunction);



// JS is dynamically typed language, because we do not declare the datatype of  variable when we declate it and variables types can also change.
// Datatype result
/*
number datatype shows value as number
string datatype string
boolean datatype boolean 
symbol datatype symbol
null datatype object
undefined datatype undefined

object datatype value as an object
function datatype show as a function-object
array shows as a object.
*/
