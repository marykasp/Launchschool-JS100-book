// Ask user to enter their age

// require function returns the readline-sync library as an object, can access its methods and properties
let rlSync = require('readline-sync');

// ask user for their age, returns a string, need to convert to a Number in order to perform calcultions on it
let age = Number(rlSync.question("How old are you?\n"));

// Print age to the screen
console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
