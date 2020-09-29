// takes string as argument returns all cpas when string is longer than 10 characters

function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase()
  } else {
    return string;
  }
}
