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



//++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory : Stack (For Primitive) & Heap(For Non-Primitve)
//When stack memory is used means you got copy of variable
//when heap memory is used you get reference value of variable means original value , when you changed the value it also changed in original value.

let myYoutubename = "stocktrader"
let anothername = myYoutubename
console.log(anothername);
//here anothername copy the value of myYoutubename
//now we change the value of anothername
anothername = "lalutrader"
console.log(anothername); 
console.log(myYoutubename);
//now we change anothername value but it don't changed in memory because stack don't change the original value . it only change the value of copy
//when we get myYoutubename value it doesn't change , but when we get value of anothername it changed to new value.



let userone = {
    email: "sahil@gmail.in",
    upi: "758484@ybl"
}

let usertwo = userone
//here we declare two variable userone and usertwo , & we gave value of one to the two. but here usertwo can't copy the value of userone . it take direct refrence of userone value from heap memory
// here both  user get the same reference, don't get copy.

usertwo.email = "lalu@gmail.com"

console.log(usertwo.email);
console.log(userone.email);
// here we changed the value of usertwo email. now value of userone email is also changed.


