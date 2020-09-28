// Write a function that gets name from user, Node input with command line using readline-sync API, store string response in a variable that is returned from the function
function getUserName(text) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(text)
  return name; // return user input as a string
}

// call function passing in prompt text, saving return value to a variable
let firstName = getUserName("What is your first name?");
let lastName = getUserName("What is your last name?")
console.log(`Hello, ${firstName} ${lastName}.`)
