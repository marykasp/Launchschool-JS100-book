// What happens when you run the following code?

const NAME = 'Victor'; // constant globally scoped variable

console.log('Good Morning, ' + NAME);  // => Good Morning, Victor
console.log('Good Afternoon, ' + NAME); // => Good Afternoon, Victor
console.log('Good Evening, ' + NAME) // => Good Evening, Victor

// the above code will return the string concatenation using the value Victor

NAME = 'Joe';
// this will return an error since trying to reassign a value to a constant variable
// the rest of the code will not be executed since an error was returned

// need to use let in order to reassign the name variable
