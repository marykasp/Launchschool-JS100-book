// use reduce to compute the sum of the squares of all the numbers in an array

let numbers = [3, 5, 7]; // 3*3 + 5*5 + 7*7

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0)
}

console.log(sumOfSquares(numbers)); // 83
