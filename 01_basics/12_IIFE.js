(function name(){
    console.log("This is an IIFE function");
})();

// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined

(()=> {
    console.log("DB connected") ;
}
)();

function greet(name) {
    console.log(`Hello, ${name}!`);

    function hii() {
        //console.log(this.name);
        
    }
    hii();
}
greet("Prathamesh"); // Calls the greet function with "Prathamesh" as an argument



