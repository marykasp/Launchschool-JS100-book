let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;  // use this value when array doesn't have desired value

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i; // reassign the global variable to the index where 5 is stored in the array
    break; // the loop will terminate once it finds the index of the value, won't keep searching
  }
}

console.log(indexOfFive);
