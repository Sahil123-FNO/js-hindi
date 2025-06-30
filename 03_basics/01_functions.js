//function means that code you write 10-20 lines, that code you bind in package and now you can take that package copy anywhere.

console.log("S");
console.log("A");
console.log("H");
console.log("I");
console.log("L");

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

sayMyName()
//sayMyName is a function reference & () when you add parentheses means you execute that function.

/*
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
    

addTwoNumbers(3,4)
addTwoNumbers(3,"4") //here it return 34 because both datatype is not same.
addTwoNumbers(3,"a")
addTwoNumbers(3, null)
*/

function addTwoNumbers(number1, number2){
          
    /* let result = number1 + number2
    console.log("hitesh");
    return result */
     //here when we return result than after that anything would not be print.but when we write console.log before return result than it would be print.
     // we can also write function in another way.
    return number1 + number2 //here we store value in function.
}
const result = addTwoNumbers(3,5) //here we store value outside the function
console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username:");
        return  
    } //here we can also write !username means username === undefined
      // In JS "" means false situation or undefined
      //above condition is only print when its true.
    return `${username} just logged in`
}

loginUserMessage("sahil") //function retrun value but you dont give instruction to print it.

console.log(loginUserMessage("Sahil"));
console.log(loginUserMessage());//when we dont give value than it give undefined.
//when we give some value to username than it print min value that when we don't value to print. 


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//here val1= 200 , val2=400 than it give rest value as num1.

//here ... means rest & spread operator , based on the usecase it called a rest or spread operator.
//when we have to calculate multiple values than we use rest operator.

console.log(calculateCartPrice(200, 400, 500, 2000))

/*
const user ={
    username: "sahil",
    price: 199
} */

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}
//here when you run than it give return value, but you have to ensure the type safety that absract you give is available or not & value of function is object or not.
handleObject({
    username: "sahil",
    price: 199
})
//here you can alsopass the object in parantheses rather than first create it.

//const myNewArray = [200, 400, 600, 800]

function retrunSecondValue(getArray){
    return getArray[1]
}
//console.log(retrunSecondValue(myNewArray));

console.log(retrunSecondValue([200,400,600,800]));

