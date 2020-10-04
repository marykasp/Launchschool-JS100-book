// What are the final length values?
let array1 = [1,2,undefined,4]
array1.length // 4

let array2 = [1]
array2.length = 5;    // includes the element already defined
console.log(array2);    // [1, <4 empty items>]
console.log(array2.length);   // 5

let array3 = []; // empty array
array3[-1] = [1];

console.log(array3)
// = ['-1': [1]]
console.log(Object.keys(array3))// ['-1']
array3.length // 0 since index values cannot be negative values


let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4);  // [1, 2, 3]
console.log(array4.length); // returns 3

let array5 = [];
array5[100] = 3;
console.log(array5);
// highest index position has a value of 100, so the length of array5 would be 101

array5.length // 5
