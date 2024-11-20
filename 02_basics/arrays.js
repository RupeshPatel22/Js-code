// Arrays

const myArr = [0,1,2,3,4,5];
const myHeros = ["deadpool", "shaktiman", "batman"];
const myArr2 = new Array(11, 2 , 4, 3);
// console.log(myArr2[2]);

//Array Methods

// myArr.push(6); add last in array
// myArr.push(7);
myHeros.pop(); //remove element from end 
 console.log("p", myHeros);
 
// myArr.unshift(9) // add start in array

// myArr.shift() remove element from start

// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

console.log("a", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);




