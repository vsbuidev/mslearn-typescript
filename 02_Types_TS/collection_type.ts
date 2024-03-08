// The object types are all class, interface, array, and literal types (anything that isn't a primitive type.)
// For now, let's look at the array and Tuple types.
// Arrays can be written in two ways in TS.
// let list: number[] = [1, 2, 3];
// or
// let list: Array<number> = [1, 2, 3];
// Tuples
// Having an array of the same value types is useful, but sometimes you have an array that contains values of mixed types.
// For that purpose, TypeScript provides the Tuple type. To declare a Tuple, use the syntax variableName: [type, type, ...].
let person1: [string, number] = ["Marcia", 35]; // Valid

let person2: [string, number] = ["Gracia", 30, true]; // Invalid

let person3: [string, number] = [35, "Marcia"]; // Invalid
