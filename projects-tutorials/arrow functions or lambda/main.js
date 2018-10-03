"use strict"

console.log("\n" + "*".repeat(33));
console.log("\tExample 1\n");

function Prefixer(prefix) {
  this.prefix = prefix;
}

/*
// This should throw an error, prefix undefined
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(function(x) {
    console.log("this value: " + this); // this is undefined
    console.log(this.prefix + x);
  });
}
*/

/*
// A workaround to the code above, albeit cumbersome or tricky, is setting this to a new variable
// the error occurs because the value of "this" changes when we are inside the return statement
// inside the function(arr) {...} while outside the return, the value of this is, an object Prefixer { prefix: "Hello "}
// but inside the function(arr) {...} while inside the return, the value of this is, undefined
Prefixer.prototype.prefixArray = function(arr) {
  let that = this;
  console.log(this);
  return arr.map(function(x) {
    console.log(that.prefix + x);
  });
}
*/

// Now using arrow functions
// The below code works because arrow functions use a "lexical this", I guess it works kind of like in Java
Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(x => {
    console.log(this.prefix +x);
  });
}

let pre = new Prefixer("Hello ");
pre.prefixArray(["Héctor", "Felipe"]);

// Example 2
console.log("\n" + "*".repeat(33));
console.log("\nExample 2\n");

// Without arrow function
let add = function(a, b) {
  let sum = a + b;
  console.log(sum);
  return false;
}

// With arrow function
let addWithArrow = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
}

add(2, 2);
addWithArrow(2, 3);