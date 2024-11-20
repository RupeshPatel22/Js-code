// singleton
// Object.create

// Object literals


const mySym = Symbol('key1')
const jsUser = {
    name: "Rupesh",
    "full name" : "Rupesh Patel",
    age: 18,
    [mySym]: "mykey1",
    location: "Surat",
    email: "rupesh.google@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "sturday"]
}

// console.log(typeof jsUser.name);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rupesh@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "rupesh@speedyy.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello Js User");
}

jsUser.greetingTwo = function() {
    console.log(`hello Js User, ${this.name}` );
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());

;



