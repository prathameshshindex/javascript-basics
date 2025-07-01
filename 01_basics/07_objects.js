//singleton => it create only if cunstructor is created
//object literals

const sym = Symbol('secret');
const obj = { [sym]: 42 };

//console.log(obj[sym]); // 42

//console.log(Object.keys(obj)); // []
//console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(secret) ]


let obj2 = {
    name: 'Alice',
    age: 30,
    
}

obj2.greetings = function(){
    //console.log(`hello my name is ${this.name} and I am ${this.age} years old`);
    
}

//console.log(obj2.greetings());

//SINGLETON PATTERN
//const tindruser = new Object();


const tindruser = {}
tindruser.name = 'John';
tindruser.age = 25;
tindruser.isLoggedIn = true;

//console.log(tindruser);

const regularUser = {
    na: 'Jane',
    ag: 28,
    isLogge: false,
    // fullname :{
    //     firstname:"prathamesh",
    //     Lastname:"shinde"

    // }
};
//console.log(regularUser.fullname.firstname); // prathamesh

const obj3 = Object.assign({}, tindruser, regularUser); 
//console.log(obj3); // Merges tindruser and regularUser into a new object

const one = { a: 1, b: 2 };
const two = { b: 3, c: 4 };

const merg = Object.assign({}, one, two);
//console.log(merg); // Merges one and two into a new object, with '

const three = {...one, ...two}; // Merges one and two using spread operator
//console.log(three); // Merges one and two into a new object, with 'two

users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
]

users[0].name;
//console.log(users[0].name); // Accessing the name property of the first user

console.log(Object.keys(tindruser));
console.log(Object.values(tindruser));
console.log(Object.entries(tindruser)); // Returns an array of key-value pairs

console.log(tindruser.hasOwnProperty('name')); // true

