"use strict"

// function *g1() also works but Google recommends function* g1()
function* g1() {
  console.log("Hello");
  yield "Yield 1 Ran...";
  console.log("World");
  yield "Yield 2 Ran...";
  return "Returned...";
}

var g = g1();

/*
console.log(g.next());
console.log(g.next());
//this console.log returns the last value with DONE = true
console.log(g.next());
*/

// a for loop doesn't reach the last value
for (const val of g) {
  console.log(val);
}