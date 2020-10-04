// use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  // map will first create a new array of length values, then the filter method will be called on this new array and only odd values will be filtered out
  let filteredNumbersArray = arr.map(function (element) {
    return element.length
  }).filter(number => {
    return number % 2 === 1;
  });

  return filteredNumbersArray;
}

console.log(oddLengths(arr));
console.log(arr)
