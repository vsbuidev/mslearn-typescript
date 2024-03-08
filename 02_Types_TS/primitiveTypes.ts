// primitive types

// Boolean
let flag: boolean;
let yes = true;
let no = false;

// Number
let a: number;
let b = 0;
let c: number = 123.456;
let big: bigint = 100n;

// String
let s: string;
let empty = "";
let abc = "abc";

// In TypeScript, you can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

// JavaScript and TypeScript have two primitive values used to signal absent or uninitialized value: null and undefined. These types are most useful in the context of functions
