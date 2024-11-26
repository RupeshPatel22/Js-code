const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((i) => console.log(i));
// coding.forEach(function (item) {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
//  coding.forEach(printMe)

// coding.forEach((item, index, arr) => console.log(item, index, arr))

const clubs = ["fcb","madrid","bayern","liverpool","city","united"];

// clubs.forEach(function (item) { console.log(item);})

// clubs.forEach((value,index, item) => console.log(value, index, item))

const countryRegion = [
    {
        name: "fcb",
        country: "spain"
    },
    {
        name: "liverpool",
        country: "england"
    },
    {
        name: "sporting",
        country: "portugal"
    }
];

countryRegion.forEach((club) => console.log(club.country !== "spain"))

