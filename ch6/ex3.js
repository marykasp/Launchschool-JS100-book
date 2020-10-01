// infinite loop

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This is an infinite loop because in the condition you are not checking to see if counter is equal to one instead you are using the assignment operator and reassinging the value of counter to 1 on each loop iteration. Therefore there is no condition that is being checked and it will never return false and the loop will never stop running
// reassigning a value just returns tha value which would return a boolean truthy value
