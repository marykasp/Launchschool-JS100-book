/// Iterating over elements in an array using while and for loops

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0

while (index < names.length) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
  index += 1;  // initialization variable increment
}

console.log(names);
console.log(upperNames)

