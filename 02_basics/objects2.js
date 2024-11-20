// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = 1;
tinderUser.name = "Rupesh";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: 'some@gmail.com',
    fullNmae: {
        userFullname : {
            firstName: "Rupesh",
            lastName: "Patel"
        }
    }
}
// console.log(regularUser.fullNmae.userFullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: 'r@p.com'
    },
    {
        id: 2,
        email: 's@p.com'
    },
    {
        id: 3,
        email: 's@j.com'
    }
]
const emails = users.map(i => i.email)
users.forEach(i => console.log(i.id))
// console.log(emails);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "Rupesh"
}

const {courseInstructor} = course; //destructuring object
const {price: rate} = course;
console.log(courseInstructor, rate);







