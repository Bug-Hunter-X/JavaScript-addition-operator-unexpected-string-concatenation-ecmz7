# JavaScript Addition Operator Unexpected String Concatenation
This example demonstrates an uncommon error in JavaScript where the addition operator (+) performs string concatenation instead of numerical addition when one of the operands is a string.

## Bug
The `add` function intends to add two numbers. However, due to type coercion, when one of the operands is a string, the + operator will perform string concatenation.

## Solution
The solution involves type checking and explicit type conversion using `parseInt` or `Number` to ensure both operands are numbers before performing the addition.
