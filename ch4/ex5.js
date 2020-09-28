function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// Yipeee!!!! will not be logged to the screen because the function has the return keyword before the console.log(words) statement. The return keyword terminates the function
