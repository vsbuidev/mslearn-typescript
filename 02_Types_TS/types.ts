let x: number; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z: any; //* Declares z without initializing it
// x = "One";
// y = "One";   // But it will throw an error when a value of incompatible type is assigned to the variable.ie.., 'number', 'string', etc..,
z = 1;
z = "One"; // It can be any types when typed with or without 'any' in .ts files
