// what happens when you run the following program

{
  let foo = 'bar';
}

console.log(foo);

// program outputs an error since foo is locally scoped, declared inside a block of code
// foo variable is not accessible outside of the code block
