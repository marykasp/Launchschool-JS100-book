// write a program that asks for two numbers from the user, adds them, then displays the result

// 1. Use Node require function to get the library of the readline-sync API, store in variable to access its properties and methods
let rlSync = require('readline-sync');

// 2. Get two numbers from the user, store each in a variable- returns a string, need coerce the strings to numbers
let number1 = Number(rlSync.question("Enter the first number\n"));
let number2 = Number(rlSync.question("Enter a second number\n"));

// 3. Calculate the sum of the two numbers, store answer in variable
let sum = number1 + number2

// 4. Print message to the screen letting user know the sum
console.log(`The numbers ${number1} and ${number2} add to ${sum}.`)
