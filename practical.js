
let ma = [{
    subItem: [
       {id:1, item: "item1"},
        {id:2, item: "item2"},
        {id:1, item: "item3"},
    ]},
    {subItem: [
        {id:1, item: "item1"},
        {id:2, item: "item2"},
        {id:1, item: "item3"},
    ]},
    ]
let name = ["raju", "ram", "ramesh", "ravi", "resma"]
let one = ma.flatMap(item => item.subItem)
let two = one.filter(item => item.id === 1)
let three = name.filter(item => item)
console.log(one)
console.log(two)
console.log(three)
    