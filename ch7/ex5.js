// use filter method to implement a function that returns a new array with all of the integers from the input array

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
  return array.filter(function (element) {
    return Number.isInteger(element)
  })
};

let newArray = removeNonInteger(array);
console.log(newArray)
