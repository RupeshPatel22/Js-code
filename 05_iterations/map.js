const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((num) => num * 10);
// newNums = []
// myNums.forEach((item) => {
//     newNums.push(item + 100)
// })

const newNums = myNums.map(i => i * 10).map(i => i +2).filter(i => i >35)

console.log(newNums);
