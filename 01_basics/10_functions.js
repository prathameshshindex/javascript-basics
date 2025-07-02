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

function calculation(...num2) {
    return (num2)
    
}

console.log(calculation(10,20,30,40,50)); // Calls the function calculation with multiple arguments and logs the result

function object(anyobj) {
    console.log(`The name is ${anyobj.name} and the age is ${anyobj.age}`);
    
    
}

object({name : "Prathamesh", age: 20}); // Calls the function object with an object argument

mynewarray = [1,2,3,4,5];

function getarray(arr) {
    console.log( `The first element is ${arr[0]} and the last element is ${arr[arr.length - 1]}`);
    
    
}
getarray(mynewarray); // Calls the function getarray with an array argument


