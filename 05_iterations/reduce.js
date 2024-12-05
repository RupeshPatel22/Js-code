const myNums = [1,2,3,4]

const myTotal = myNums.reduce((acc,currVal) => {
    // console.log(`acc ${acc} and curr ${currVal}`);
    
    return acc +currVal
},0 );
// let myTotal 
// for(i = myNums.length - 1; i >= 0; i--) {
//     // console.log(i);
//     let total = myNums[i] + myNums
//    myTotal = total
// }

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
]

const totalCartValue = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(totalCartValue);
