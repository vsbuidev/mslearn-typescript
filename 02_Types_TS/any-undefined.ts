// 01_Any type :

// The `any` type is the one type that can represent any JavaScript value with no constraints.

let randomValue: any = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK

// Because randomValue is registered as any, all of the following examples are valid TypeScript and will not generate a compile-time error.
// However, runtime errors may occur depending on the actual datatype of the variable.
// Given the previous example where randomValue is set to a Boolean value, the following lines of code will generate issues at runtime:

console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error

// 02_Unknown type :

let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = "Mateo";

console.log(randomValue2.name); // Error: Object is of type unknown
randomValue2(); // Error: Object is of type unknown
randomValue2.toUpperCase(); // Error: Object is of type unknown

// The core difference between any and unknown is you are unable to interact with a variable of type unknown; doing so generates a compiler error.
// any bypasses any compile-time checks, and the object is evaluated at runtime; if the method or property exists it will behave as expected.

// Type Asserion
// A type assertion tells TypeScript you've performed any special checks that you need before calling the statement.
// It tells the compiler "trust me, I know what I’m doing."
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
// It has no runtime effect and is used purely by the compiler.
// Type assertions have two forms. One is the as-syntax:
// (randomValue as string).toUpperCase();
// The other version is the "angle-bracket" syntax:
// (<string>randomValue).toUpperCase();

let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = "Mateo";

if (typeof randomValue3 === "string") {
  console.log((randomValue3 as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}

// Type guards:
// The previous example demonstrates the use of typeof in the if block to examine the type of an expression at runtime.
// This conditional test is called a type guard.
// You may be familiar with using typeof and instanceof in JavaScript to test for these conditions.
// TypeScript understands these conditions and will change type inference accordingly when used in an if block.
