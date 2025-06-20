//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);  //type of date is object

let myCreatedDate = new Date(2023 , 0 , 12)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023 , 0 , 12 , 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-03-14")  //here we gave date to the yy-mm-dd format. in mm we must have to writ of staring month 01 because its a string not  an array.
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //here we get time in miliseconds
console.log(myCreatedDate.getTime()); // also we get time in miliseconds
console.log(Math.floor(myTimeStamp/1000)); // here we convert mili sec into seconds by dividing by 1000 and converted into round figure.


let newDate2 = new Date()
console.log(newDate2);
console.log(newDate2.getMonth());
console.log(newDate2.getDay());
console.log(newDate2.getMonth() + 1);
console.log(`Today is ${newDate2.getDay()} and time is ${myCreatedDate.getTime()}. `);

newDate2.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC" ,
    }
)



