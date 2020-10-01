// Ask user to enter their age

// require function returns the readline-sync library as an object, can access its methods and properties
let rlSync = require('readline-sync');

// ask user for their age, returns a string, need to convert to a Number in order to perform calcultions on it
let age = Number(rlSync.question("How old are you?\n"));
console.log(`You are ${age} years old.`);

// Print age to the screen- use a for loop
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);

}


