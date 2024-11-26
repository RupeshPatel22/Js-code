const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//   console.log(`${key} shortcut for ${myObject[key]}`);
}

let myArray = [1,2,3,4,5];
for (const key in myArray) {
   console.log(myArray[key]);
   
}