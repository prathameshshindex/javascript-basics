let date = new Date();
console.log(date); // Current date and time
console.log(date.toString()); // String representation of the date
console.log(date.toISOString()); // ISO format
console.log(date.getFullYear()); // Get the year
console.log(date.getMonth() + 1); // Get the month (0-11, so add 1)
console.log(date.getDate()); // Get the day of the month
console.log(date.getHours()); // Get the hours
console.log(date.getMinutes()); // Get the minutes
console.log(date.getSeconds()); // Get the seconds
console.log(date.getMilliseconds()); // Get the milliseconds
console.log(date.toLocaleString());
console.log(date.toLocaleDateString()); // Local date string


let myTimestamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimestamp); // Print the timestamp