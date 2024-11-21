var c = 300

let a = 200
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "Rupesh"
    function two() {
        const website = "youtube"
        // console.log(userName);
    }
    two()
    // console.log(website);
}
one()

if(true) {
    const userName = "Rupesh";
    if(userName === "Rupesh"){
        const website = " youTube";
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

const addTwo = function(num) {
    return num + 2;
}
addTwo(5)