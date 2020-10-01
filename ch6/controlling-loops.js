let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
// create a new array to store updated elements
let upperNames = []


// use continue keyword to skip an iteration, moves onto next iteration
// use break keyword to terminate the loop
for (let index = 0; index < names.length; index++) {
  if (names[index] === 'Naveed') {
      continue; // skips performing the task on this array element
}
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);
