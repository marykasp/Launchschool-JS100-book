let foo = 'bar';

{
  let foo = 'qux';  // local defined variable
}

console.log(foo) // => 'bar'

// Logs 'bar' to the console because it is a global variable, the foo variable declared inside the code block is not accessible outside the block. The second variable gets initialized to 'qux' but it goes out of scope once the block ends
