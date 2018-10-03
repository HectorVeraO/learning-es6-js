"use strict"

let theString = "Hello, my name is Héctor and I love JavaScript";

// startsWith()
// endsWith()
// includes()

console.log(`startsWith String method: ${theString.startsWith("Hello")}`);
console.log(`endsWith String method  : ${theString.endsWith("JavaScript")}`);
console.log(`includes String method  : ${theString.includes("love")}`);


// Number methods

// Hexadecimal values
console.log(0xFF);
console.log(`${0xFF}`);
// Binary
console.log(0b101011);
// Octal
console.log(0o543);

// isFinite()
// isNaN() Not A Number
// isInteger()

console.log(`isFinite Number method : ${Number.isFinite(3)}`);
console.log(`isNaN Number method    : ${Number.isNaN("string")}`);
console.log(`isInteger Number method: ${Number.isInteger(5)}`);