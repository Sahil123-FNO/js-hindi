const accountID = 144553
let accountEmail = "lalu@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountID = 2 not allowed because const not changed.
accountEmail = "sahil@gmail.com"
accountPassword = "2314"
accountCity = "bombay"

console.log(accountID);

/*
prefer not to use war
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);