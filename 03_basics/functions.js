function name() {
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("E");
    console.log("S");
    console.log("H");
}
// name function reference
// name() function call

// function addTwoNumbers(num1, num2) {
//      console.log(num1 + num2);  
// }
function addTwoNumbers(num1, num2) {
    return num1 + num2
    // let result = num1 + num2
    // return result
}
const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

function loginUserMessage(userName) {
    if(!userName) {
        console.log("Please enter username");
    }else {
        return `${userName} just logged in`
    }
}

// console.log(loginUserMessage("Rupesh"));

function caluclateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(caluclateCartPrice(200, 400, 500, 500));

const user = {
    userName: "Rupesh",
    price: 999
}

function handleObject (obj) {
    // console.log(`username is ${obj.userName} and price is ${obj.price}`);
}

// handleObject(user);
handleObject({
    userName: "Saloni",
    price: 99
})

const arr = [200, 500, 600, 800];

function returnSecondValue(arr) {
    return arr[1]
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue([500,400,600,560]));
