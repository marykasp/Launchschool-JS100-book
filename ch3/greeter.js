// Write a dynamic greeter program named greeter.js, ask for name then output Hello name!
// Modify to ask for the first and last names of the user

// 1. Node require function to retrieve the readline-sync library as an object, store in variable
let rlSync = require('readline-sync');

// 2. Get name from user, store string response in name variable
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

// 3. Print message with user's name to the console, template literal
console.log(`Hello, ${firstName} ${lastName}!`)

