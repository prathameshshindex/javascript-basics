if (true) {
    let x = 10;
    const y = 20;
    var z = 30; // var is function scoped or globally scoped, not block scoped
    
}
console.log(x); // ReferenceError: x is not defined (x is block scoped)
console.log(y); // ReferenceError: y is not defined (y is block scoped)
console.log(z); // 30 (z is function scoped or globally scoped, accessible here)

function one() {
    const name = "Prathamesh";
    function two() {
        console.log(name); // "Prathamesh" (name is accessible here due to closure)
    }
    two();
}

one(); // Calls the function one, which in turn calls two and logs "Prathamesh"

const two = function (num) {
    return num * 2; // Function expression, can be called after declaration
}

console.log(two(5)); // 10 (calls the function expression two with argument 5)


