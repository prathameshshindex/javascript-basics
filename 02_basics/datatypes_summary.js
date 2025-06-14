//primitive data types
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6+)
// 7. bigint (ES11+)

//non primitive data types
// 1. object
// 2. array
// 3. function
// 4. date

const id = Symbol('1234');
const id2 = Symbol('1234');
console.log(id === id2); // false, because symbols are unique




const herose = ["Superman", "Batman",];



let myobject = {
    name : "prathamesh",
    age : 20,
    isActive : true,
}

const myfunction = function(){
    console.log("Hello, World!");
}