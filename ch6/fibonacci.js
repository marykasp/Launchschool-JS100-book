// each number in the sequence is the sum of the previous two numbers in the sequence

fibonacci(0)  // = 0
fibonacci(1)  // = 1
fibonacci(n) // fibonacci(n - 1) + fibonacci(n - 2) for all n >= 2

function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2); // recursion
}

// invokes itself twice,m once with a number 1 less than the current number, and once with a number 2 less than the current number
