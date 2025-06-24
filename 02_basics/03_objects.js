//we can declare objects in a two way; 1.Literal 2.Constructor
//singleton - when we declare object by constructor then it is singleton.
//Object.create - this is a constructor method

//Object literals: In object we give a key & value.
//This is literals method. In object we can define key & value both
const mySyn = Symbol ("key1")  //how to put these symbol into key-value.
const JsUser = {
    name: "Sahil", //here name is also treat as string
    "full name": "Sahil Koshti",
    age: 18,
    [mySyn]: "mykey1", //this is method to give value to the symbol
    location: "Gujarat",
    email: "sahil@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//you can access object by 2way.
console.log(JsUser.email); //when use . than not mention key as a string.
console.log(JsUser["email"]); //here you have to mention email like string.
//console.log(JsUser.full name);// here we cannot access value by . method
console.log(JsUser["full name"]);//here we can access value by string method

console.log(JsUser["mySyn"]);
console.log(typeof(JsUser["mySyn"]));
console.log(JsUser[mySyn]); //this is right method to find symbol value.

JsUser.email = "sahil@chatgpt.com"//using overwriting you can change the val
//you can also block the changing value. 
//Object.freeze(JsUser)
JsUser.email = "sail@lau"
console.log(JsUser);

//now add function into object.
JsUser.greeting = function(){
    console.log("Hello JS User");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());


console.log(JsUser.greeting); 
//when we refer method than it shows value undefined.
//console.log(JsUser.greeting()); // it give value , it's not a function


//when acccess value than mostly use . method, use [] method when it's necesarry.



