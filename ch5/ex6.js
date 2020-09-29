function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Emptry')
  } else {
    console.log('Empty')
  }
}

isArrayEmpty([])

// output is Not Empty since while the array argument passed in is an empty array, has no elements and its length property is 0- it still doesn't evaluate to falsy. Thefore it will return true and the if clause will be executed thereby logging Not Empty to the console
