const score = 100;

console.log(score);

const balence = new Number(100.5);
console.log(balence); // This will log the Number object, not just the number value


console.log(balence.toString().length);
console.log(balence.toFixed(2)); // This will format the number to 2 decimal places, resulting in "100.50"


const othernumber = 100123456789;
console.log(othernumber.toPrecision(3)); // This will format the number to 5 significant digits, resulting in "100.12"
console.log(othernumber.toLocaleString('en-IN'));
console.log(othernumber.toExponential()); // This will format the number according to US locale, resulting in "100,123,456,789"
console.log(othernumber.valueOf ());

// Math operations***********************************

console.log(Math.PI); // This will log the value of PI, approximately 3.14159
console.log(Math.abs); // This will log the value of Euler's number, approximately 2.71828
console.log(Math.sqrt(16)); // This will log the square root of 16, which is 4
console.log(Math.pow(2, 3)); // This will log 2 raised to the power of 3, which is 8
console.log(Math.max(1, 2, 3, 4, 5)); // This will log the maximum value among the arguments, which is 5
console.log(Math.min(1, 2, 3, 4, 5)); // This will log the minimum value among the arguments, which is 1
console.log(Math.random()); // This will log a random number between 0 and 1
console.log(Math.floor(4.7)); // This will log the largest integer less than or equal to 4.7, which is 4
console.log(Math.ceil(4.1)); // This will log the smallest integer greater than or equal to 4.1, which is 5
console.log(Math.round(4.5)); // This will log the value of 4.5 rounded to the nearest integer, which is 5



console.log((Math.random()*10)+1);

console.log(Math.floor((Math.random() * 10) + 1)); // This will log a random integer between 1 and 10


const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // This will log a random integer between 10 and 20
console.log(randomNumber);
