"use strict"
// Default parameters
function greet(greeting) {
  return greeting;
}

function greetWithDefault(greeting = "Hello World!") {
  return greeting;
}

//This one should always print undefined
console.log(`greet() prints: ${greet()}`);
console.log(`greetWithDefault() prints: ${greetWithDefault()}`);
console.log(`greet("Hello") prints: ${greet("Hello")}`);
console.log(`greetWithDefault("Hello") prints: ${greetWithDefault("sad")}`);

//Spread operator
console.log("-----------------------------");
console.log("\tSpread Operator");

// The Spread Operator allows an expression to be expanded in places where multiple arguments are expected

let args = [1,2,3];

function sum(firstNum, secondNum, thirdNum) {
  return firstNum+secondNum+thirdNum;
}

console.log(`sum.apply(null, args), the sum is: ${sum.apply(null, args)}`);
console.log(`sum(...args) the sum is: ${sum(...args)}`);