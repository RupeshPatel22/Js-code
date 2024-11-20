const marvelHeros = ["Thor", "Icronman", "Spiderman"];
const dcHeros = ["Batman", "Flash", "Superman"];

// marvelHeros.push(dcHeros); 
// console.log(typeof marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros); //add two array in to new array
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5,], 6, [7, 8, [9, 0]], 10];
const realArray = anotherArray.flat(Infinity);
console.log(anotherArray);

console.log(realArray);

console.log(Array.isArray("Rupesh"));
console.log(Array.from("Rupesh"));
console.log(Array.from({name: "Rupesh"})); //Interasting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2,score3));








