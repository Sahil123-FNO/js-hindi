//const tinderUser = new Object() //this is a singleton object.
//const appUser = {}              //this is literal objrct
//both method is used to declare object.
//here we get same value - empty object.{}
//console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Koshti",
        }   
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);



const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

//const obj3 = { obj1, obj2} //here we get obj1 & obj2 also in value of obj3
// now , we use assign method to combine obj1 & obj2 to get value of obj3.

const obj3 = Object.assign({}, obj1, obj2)
//const obj3 = {...obj1, ...2} // we can also write obj3 by spreding method.
//here when we return value of object3 than all element value will be stored in empty parantheses. that's why we write {} in srtarting.
console.log(obj3);


const users = [
    {},
    {
        id: 1,
        email: "sahil@gmail.com",
    },
    {
        id:2,
        email: "lalu@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//when we return value thats datatype format is in array.
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



