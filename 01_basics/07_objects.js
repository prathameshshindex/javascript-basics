const sym = Symbol('secret');
const obj = { [sym]: 42 };

console.log(obj[sym]); // 42

//console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(secret) ]


