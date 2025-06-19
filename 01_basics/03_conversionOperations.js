// let score = "33abc"

//const {score} = req.body // here you get value from backend and it can be in any form . thats why we always check it

/* console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //here it create a score value string to a number 
console.log(typeof valueInNumber);//it also show a typeof valueInNumber as a number  
console.log(valueInNumber); // but when we add some alphabet in score value and convert variable value into number it show the type as a number but when we see output it show as a NaN. its also a type of datatype
*/

/*
let score1 = null
let score2 = Number(score1)
console.log(typeof score2); // here it shows type as a number
console.log(score2); // here value will be 0

let score3 = true
let score4 = false
let value1 = Number(score3)
let value2 = Number(score4)
console.log(value1);
console.log(value2);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof score4);
console.log(typeof score3);
*/

// "33" => 33
// "33abc" => NaN
//true = 1 / false = 0

/*
let isLoggedIn = "sahil"
let isLoggedOut = "0"
let isNot = ""
let isMe = "Sahil"

let BagisLoggedIn = Boolean(isLoggedIn)
let BagisLoggedout = Boolean(isLoggedOut)
let Bagisnot = Boolean(isNot)
let BagisMe = Boolean(isMe)

console.table([BagisLoggedIn, BagisLoggedout, Bagisnot, BagisMe]);



let number = 33
let stringnumber = String(number)
console.log(stringnumber)
console.log(typeof stringnumber);

*/


// ********************************    Operations ***************************************
let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = 2
let str2 = 3
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2")
console.log("1"+2+2);
console.log(1+2+"2");
//in JS if string is first then it show first string and after that conversion
//but string is in last than first do operation and than conversion

console.log(true);
console.log(+true);
console.log(+"")

let gamescore = 100
++gamescore; //this is prefixies
gamescore++; //this is postfixies
console.log(gamescore);

// search prefix and postfix on mdn and learn abount it.





