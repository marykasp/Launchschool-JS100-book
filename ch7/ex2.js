// log all even values to the console

let myArray = [1,3,6,11,4,2,4,9,17,16,0];

myArray.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num)
  }
})

// create a new array of even values using filter method
let even = myArray.filter(function (num) {
  if (num % 2 === 0) {
    return num;
  }
})

console.log(even);
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value)
  }
}


