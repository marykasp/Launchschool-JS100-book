// duplicated console.log call several times, calling it whenever we want to output/log a string to the string
console.log('hello');
console.log('hi');
console.log('how do you do');
console.log('Quite all right');

// create a function that logs to the console whatever argument is passed to it when called
function say(words) {
  console.log(words);
}

say('hello');
say("hi");
say("how are you");
say("I'm fine")
