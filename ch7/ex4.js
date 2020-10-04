// use map method to create a new array of values: with strings saying which numbers are even and which are odd

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let stringArray = myArray.map(function (num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(stringArray);

// iterating through array with for loop
let newArray = [];
for(let i = 0; i < myArray.length; i+= 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray.push('even');
  } else {
    newArray.push('odd')
  }
}
console.log(newArray);

// Using forEach method, pushing values up to a new array
let newStringArray = []
myArray.forEach(function (num) {
  if (num % 2 === 0) {
    newStringArray.push('even');
  } else {
    newStringArray.push('odd');
  }
})

console.log(newStringArray);
