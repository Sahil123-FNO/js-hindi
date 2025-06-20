const score = 400

const balance = new Number(100)
console.log(balance);

//when we put this into console we get prototype of variable and we get different method to convert the number.

console.log(balance.toString()); //noe it become the string and we can use the string method or properties on it
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //toFixed is used to give presition value after the decimals point like 100.00

const othernum = 23.82344
const othernum2 = 223.8234
const othernum3 = 1233.8234
console.log(othernum.toPrecision(3));
console.log(othernum2.toPrecision(3));
console.log(othernum3.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 2, 1));
console.log(Math.max(1, 2, 3, 5));

console.log(Math.random()); //always get value between 0 to 1
console.log((Math.random()*10) + 1);  // now get value greater than 1
console.log(Math.floor(Math.random()*10) + 1);  //here floor create lower value to the round figure and we get round number

//to get value between max and min
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min);




