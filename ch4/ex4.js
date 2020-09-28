// use the times function shown below to write a program that logs the value of 1!

// 1! expansion 1, result 1
// 2! expansion 1 * 2, result 2
// 3! expansion 1 * 2 * 3 result 6

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result); // log result to screen
  return result
}

let oneFactorial = times(1,1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fourFactorial);
