if (true) {
  console.log("This will always run");
    
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged in");
}


let temperature = 30;
if (temperature ===30) {
  console.log("temperature is 30");
}
else {
  console.log("temperature is not 30");
}
  
let age = 18;
if (age <18){
    console.log("You are a minor");
    
}else if (age>= 18 ){
    console.log("You are an adult");
}

let loggedIn = true;
let debitcard = false;

if (loggedIn && debitcard) {
  console.log("You can make a purchase");
}

if (loggedIn || debitcard) {
  console.log("You can make a purchase with either logged in or debit card");   
    
}

//*********SWITCH CASE******** */
const month = 5;
switch (month ) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("february");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("April");
        
        break;
    case 5:
        console.log("May");
        
        break;

    default:
        log("Invalid month");
        break;
}

const array = [1, 2, 3, 4, 5];
if (array.length ===0) {
    console.log("Array is empty");


}

const emptyobject = {};
if(Object.keys(emptyobject).length ===0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let val1;
val1= 5 ?? 10
val1 = null ?? 10;
console.log(val1); // 10

//ternary operator
 
 const icetea = 300;
 const price = icetea > 200 ? "Expensive" : "Cheap";
 console.log(price); // "Expensive"


    


