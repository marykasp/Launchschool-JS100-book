const FOO = 'bar';

{
  const FOO = 'qux';
}

console.log(FOO)  // => 'bar'

// It will log the global scoped variable. On line 4 a constant local scoped variable is being declared, it is not accessible outside the scope of the code block. These two variables are separate entities- one is a global variable and the other is a local variable
