// use reduce method to return an array of odd string lengths

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((filteredNumbersArray, string) => {
    let length = string.length;
    if(length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, [])
}
