let arr = [1,2,3]

// add element to end of array
arr.push(4)
console.log(arr)

// add element to end of array without changing original array
console.log(arr.concat(5))
console.log(arr, "original array remains unmutated")

// remove element from end of array
console.log(arr.pop()) // returns the item it removed, mutates the caller
console.log(arr)

// iterate over each item in an array
arr.forEach(function (element) {
  console.log(element)
})

// write callback as an arrow funciton
arr.forEach(element => console.log(element))

// modify the elements of an array and return a new array of mofidified values
let square = arr.map(num=> num * num)
console.log(square)
console.log(arr) // original array is untouched

// odd properties of arrays
let newArray = []
newArray.length = 3 // set length of array
console.log(newArray)
console.log(newArray[0])

console.log(newArray.filter(element => element === undefined))
newArray.forEach(element => console.log(element))
