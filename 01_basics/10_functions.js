function sayMyname(){
    console.log("My name is prathamesh");
    
}

sayMyname(); // Calls the function sayMyname

function addTwonumbers(number1,number2) {
    console.log(number1 + number2   );
    
    
}
addTwonumbers(10,20); // Calls the function addTwonumbers with arguments 10 and 20

function addTwonumbers(number1,number2) {
    let result = number1 + number2;
    return result; // Returns the sum of number1 and number2   
    
    
}
let sum = addTwonumbers(10,20); // Calls the function and stores the result in sum
console.log(sum); 

function addTwonumbers(number1,number2) {
    return number1 + number2;
}




