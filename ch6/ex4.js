for (let i = 0; i < 5;) {
  console.log(i += 1)
}

// this code would not produce an error, it just omits the iteration component. However the variable is still incremented on line 2 and also its printed to the console.

// The output would not include 0 since you increment i first
