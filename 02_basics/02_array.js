const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);  
// concat is used to add another array into first array and return a new array without modifying existing array.When push add another array into first array but not create new array.

const all_new_heros = [...marvel_heros, ...dc_heros] 
//this method is also work like add second array into first array element. you have to prefer this method.

const another_array = [1,2,3, [4,5,6], 7 , [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("sahil"));
// this method to check value is array or not
console.log(Array.from("sahil"));
//from is used to convert value into array
console.log(Array.from({name: "sahil"}));
//but here is not convert value into array. here you have to mention which you have to convert array, like value or key.(intresting)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
