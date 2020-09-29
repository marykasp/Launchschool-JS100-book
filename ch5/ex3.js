function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('This is not a number');
    return
  }

  if (num % 2 === 0) {
      console.log('even')
  } else {
      console.log('odd')
  }


}

evenOrOdd(2)
evenOrOdd(3)
evenOrOdd('5')
