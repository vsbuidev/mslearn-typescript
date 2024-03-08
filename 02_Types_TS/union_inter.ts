// Union :
// A union type describes a value that can be one of several types.
// This flexibility can be helpful when a value isn't under your control (for example, values from a library, an API, or user input.)
// The any type can also accept different types, so why would you want to use a union type? The union type restricts the assignment of
// values to the specified types in the union, whereas the any type has no restrictions. Another reason is Intellisense support.
// A union type uses the vertical bar or pipe (|) to separate each type.

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid

// By using type guards :
function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error

// Intersection types
// they are closely related to union types, but they're used differently.
// An intersection type combines two or more types to create a new type that has all properties of the existing types.
// An intersection allows you to add together existing types to get a single type that has all the features you need.
// An Intersection type uses the ampersand (&) to separate each type.
// Intersection types are most often used with interfaces.

interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};

// Literal Types & Literal Narrowing :
// A literal is a more concrete subtype of a collective type.
// What this means is that "Hello World" is a string, but a string isn't "Hello World" inside the type system.
// There are three sets of literal types available in TypeScript: string, number, and boolean.
// By using literal types, you can specify an exact value that a string, number, or boolean must have (for example, "yes", "no", or "maybe".)
// for more refer : https://learn.microsoft.com/en-us/training/modules/typescript-declare-variable-types/6-unions-intersections
// eg.., Note: It's more like boolean type is only valid whether it's true or false is defined as type as below example
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid

// TypeScript also has numeric literal types, which act the same as the string literals.
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid

// We can also use boolean values when defining literal types, or any combination of types.
