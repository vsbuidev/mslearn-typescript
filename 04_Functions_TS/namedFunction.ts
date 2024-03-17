// The syntax for declaring a named function in TypeScript is the same as defining one in JavaScript.
// The only difference with TypeScript is that you can provide a type annotation for the function's parameters and return value.

function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

// Anonymous function
// A function expression (or anonymous function) is a function that isn't pre-loaded into the execution context, and only runs when the code encounters it.

// let addNumbers = function (x: number, y: number): number {
//   return x + y;
// };
// addNumbers(1, 2);

// another example with contextual typing:

let sum = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

console.log(sum([1, 2, 3]));

// As before, you'll get type checking and Intellisense when you use anonymous functions.
// You'll also notice in this example that the variable sum isn't typed,
// but TypeScript is able to determine its type through something called "contextual typing", a form of type inference.
// Contextual typing can reduce the amount of effort required to keep your program typed.

// Arrow functions
// It provide shorthand syntax for defining an anonymous function.
// Due to their concise nature, arrow functions are often used with simple functions and in some event handling scenarios.

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;

// In this example, notice also that the curly braces have been removed and there's no return statement.
// Single line arrow functions can use concise body syntax, or implicit return,
// which allows the omission of the curly brackets and the return keyword.
