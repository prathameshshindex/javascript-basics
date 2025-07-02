if (true) {
    let x = 10;
    const y = 20;
    var z = 30; // var is function scoped or globally scoped, not block scoped
    
}
console.log(x); // ReferenceError: x is not defined (x is block scoped)
console.log(y); // ReferenceError: y is not defined (y is block scoped)
console.log(z); // 30 (z is function scoped or globally scoped, accessible here)