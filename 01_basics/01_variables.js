const accountId = 14325;
let accountEmail = "rupeshpatel@js.com";
var accountPassword = '12345';
accountCity = "Surat";
let accountState;

// accountId = 21; //Not allowed

accountEmail = "rp@js.com";
accountPassword = '212121212';
accountCity = "Mumbai";

/* 
Prefer not to use var 
because of the issue in block scope and functional scope 
*/
console.table([accountId, accountEmail,accountPassword, accountCity,accountState]);

// console.log(accountId);
