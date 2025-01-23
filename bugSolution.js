function add(a, b) {
  //Convert operands to numbers
  a = Number(a);
  b = Number(b);

  //Check if both are numbers before adding
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }
  return a + b;
}

console.log(add(1, '2')); // Output: 3
console.log(add(1, 2)); // Output: 3
console.log(add('a',2)); // Output: Invalid input: Operands must be numbers
