const name = "Prathamesh";
const age = 20;
console.log(name[3]); // This will concatenate the string and number, resulting in "Prathamesh20"



console.log(`my name is ${name} and my age is ${age}`); // This will use template literals to create a string with variables;

const name2 = new String("Prathamesh");
console.log(name2); // This will log the String object, not just the string value
console.log(name2[0]);
console.log(name2.length); // This will log the length of the string object, which is 9
console.log(name2.toUpperCase());
console.log(name2.charAt(5)); // This will log the character at index 5, which is "m"
console.log(name2.indexOf("th")); // This will log the index of the substring "th", which is 2
console.log(name2.substring(0,3)); // This will log the substring from index 0 to 3, which is "Pra"
console.log(name2.slice(0,3)); // This will log the slice from index 0 to 3, which is "Pra"
console.log(name2.split("a")); // This will split the string at "a" and return an array of substrings, ["Pr", "th", "mesh"]
console.log(name2.replace("th", "TH")); // This will replace the first occurrence of "th" with "TH", resulting in "PraTHamesh"
console.log(name2.trim());

