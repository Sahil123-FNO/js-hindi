//string can be written in single coat ot double coat.
const name = "sahil"
const repoCount = 50

console.log(name + repoCount + "value")
//Nowdays this is not a good method for mention a string together.
// In mordendays we use backticks. here we do string interpolation. we create a placeholder and we write in this a variable.

console.log(` hello my name is ${name} and my repo count is ${repoCount}`) //here you have to use backticks not single coat.

const gamename = new String('Sahil.lalu.trader')

console.log(gamename[0]); //how to access keyvalue pair.
console.log(gamename.__proto__); //here this is way to know prototype. it give outpit {} means its not empty, something object.


//there are many methods in string .that we can directly access 
//you have to learn different type of  string method from mdn.
console.log(gamename.length); //length function shows the character length of the string.
console.log(gamename.toUpperCase()); //uppercase fun show convert all char. to uppercase but not in original because string use stack memory
console.log(gamename.charAt('2')); //chartAt fun shows at which index position which character
console.log(gamename.indexOf('u')); //indexof fun shows which character is at which function

const newName = gamename.substring(0, 4) //here we cannot give negative value to substring
console.log(newName);

const anothername = gamename.slice(-8,3) //here we can get the -8 to 3 position value but 3is not count
console.log(anothername);

const newString = "    sahil     "
console.log(newString);
console.log(newString.trim()); //here this fun avoid pre & post spaces

const url = "https://sahil.com/sahil%20koshti"
console.log(url.replace('%20', '-'));
console.log(url.includes('sahil'));

console.log(gamename.split('.'));  //here split is used to split the string based spaces, dot, des etc. here we get three diffrent string.



