let bar = 1; // global variable

function foo() {
  let bar = 2; // local variable, declare and iniatilize
}

foo();
console.log(bar); // returns 1

// the code will log 1 to the console. Calling foo() creates a locally scoped bar variable that cannot be accessed outside the function. So when passing bar variable to the console.log it will have access to the globally scoped bar variable and therefore print 1 to the console

// not reassigning the global variable a new value since declaring the variable with let keyword
