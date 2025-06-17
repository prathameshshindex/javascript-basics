let myarray = [1, 2, 3, 4, 5];
console.log(myarray); // Print the array
console.log(myarray[0]); // Access the first element

let myarray2 = new Array(6, 7, 8, 9, 10);
console.log(myarray2); // Print the second array
console.log(myarray2[0]); // Access the first element of the second array

//
// Array methods***********************************

let myarray3 = [1, 2, 3, 4, 5];
console.log(myarray3.length); // Get the length of the array

myarray3.push(6); // Add an element to the end
console.log(myarray3); // Print the array after push

myarray3.pop(); // Remove the last element
console.log(myarray3); // Print the array after pop

myarray3.unshift(0); // Add an element to the beginning
console.log(myarray3); // Print the array after unshift

myarray3.shift(); // Remove the first element
console.log(myarray3); // Print the array after shift

myarray3.splice(2, 1); // Remove one element at index 2
console.log(myarray3); // Print the array after splice
// 
// myarray3.splice(2, 0, 3); // Insert 3 at index 2
console.log(myarray3); // Print the array after inserting 3


myarray3.reverse(); // Reverse the array
console.log(myarray3); // Print the reversed array


myarray3.sort(); // Sort the array
console.log(myarray3); // Print the sorted array

console.log(myarray3.includes(3)); // Check if the array includes 3
console.log(myarray3.indexOf(3)); // Get the index of 3

const newarr = myarray.join()

console.log(myarray); // Join the array elements into a string

let myarray4 = [1, 2, 3, 4, 5];
console.log(myarray4.slice(1, 3)); // Get a slice of the array from index 1 to 3 (exclusive)

console.log(myarray4.splice(1, 3)); // Remove elements from index 1 to 3 (exclusive) and return them

marvel_heros = [`Iron Man`, `Captain America`, `Thor`, `Hulk`, `Black Widow`];

dc_heros = [`Superman`, `Batman`, `Wonder Woman`, `Flash`, `Aquaman`];

// Concatenate two arrays
marvel_heros.push(dc_heros);

console.log(marvel_heros); // Print the concatenated array

let herose = marvel_heros.concat(dc_heros); // Another way to concatenate arrays
console.log(herose); // Print the concatenated array using concat

marvel_heros.push(...dc_heros); // Spread operator to add elements of dc_heros to marvel_heros
console.log(marvel_heros); // Print the array after using spread operator

//spread operator to copy an array
let allherose = [...marvel_heros, ...dc_heros];
console.log(allherose); // Print the array after copying with spread operator


const another_array = [1,2,3,4,5,[6,7[97]]];

const real_another_array = another_array.flat(Infinity); // Flatten the array to a depth of 2
console.log(real_another_array); // Print the flattened array

console.log(Array.isArray("prathamesh"));
console.log(Array.from("prathamesh"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Create an array from the scores



