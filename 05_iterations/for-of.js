// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    // console.log(i);
}

const greeings = "Hello JavaScript";
// console.log(greeings.split("").reverse().join(''));
// let a = []
for (const greet of greeings) {
    // if(greet == " ") continue
    // if(greet == " ") break
    // console.log(greet);
    // a.push(greet);
}
// console.log(a.join(''));

// Maps 

const map = new Map();
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('BR', "Bharat")

// console.log(map);
// console.log(map.size);
map.delete("IN")
// console.log(map.size);
for (const [key, value] of map) {
    // console.log(key, ':', value);
}
// myGame = {
//     'game1': "NFS",
//     'game2': "GTA"
//     }
// myGame = [
//     {  'game1': "NFS",
//         'game2': "GTA"  },
//     {   'game1':"COD",
//         'game2':"GTA5"}
// ]

// for (const key of myGame) {
//     console.log(key.game1);
    
// }
