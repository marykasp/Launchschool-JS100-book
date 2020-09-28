// write  a program that uses multiply function to multiply two numbers and returns the result
// Ask the user to enter two numbers

function getNumber(text) {
  let rlSync = require('readline-sync');
  let number = Number(rlSync.question(text));
  return number;
}

let number1 = getNumber("Enter the first number: ")
let number2 = getNumber("Enter the second number: ")

function multiply(num1, num2) {
  return num1 * num2;
}

let result = multiply(number1, number2);
console.log(`${number1} * ${number2} = ${result}`)
