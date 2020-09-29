function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '133':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113')

// output is Product2, Product3 and product not found since this switch statement doesn't contain any break statements the execution will fall through. JS doesn't care that the criteria for the extra case clauses don't match the value for serial
