
arr = [1,2,3,4,5,6,7,8,9];
rev = []

for(let i = arr.length - 1; i >= 0; i--){
    rev.push(arr[i])
}
// console.log(rev);

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element === 5) {
        // console.log("5 is the middle number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let l = 0; l <= 10; l++) {
    //    console.log(`inner loop value: ${l} and outer value: ${i}`);
        // console.log(`${i} * ${l} = ` + i*l);
        
    }
    
}

let myArray = ["flash","batman","superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(element === 5) {
        console.log('detected 5');
        continue
    }
    console.log(`value of i is ${element}`);
    
}
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(element === 5) {
//         console.log('detected 5');
//         break
//     }
//     console.log(`value of i is ${element}`);
    
// }