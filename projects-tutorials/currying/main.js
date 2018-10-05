"use strict";

let _ = require("lodash");

// No currying example
console.log("\n", "*".repeat(50));
console.log("\n\tExample without Currying");
console.log();
let dragon = (name, size, element) =>
  name + " is a " +
  size + " dragon that breathes " +
  element + "!";
console.log(dragon("Alduin", "huge", "fire"));

// With currying example, should output the same text
console.log("\n\tExample with Currying (should output the same)");
console.log();
let dragon2 =
  name =>
  size =>
  element =>
  name + " is a " +
  size + " dragon that breathes " +
  element + "!";
console.log(dragon2("Alduin")("huge")("fire"));

// You can even "store" a curried function value midway
console.log("\n\tExample 'storing' a curried function midway (still produces same output)");
console.log();
let alduinDragon = dragon2("Alduin");
let hugeDragon = alduinDragon("huge");
console.log(hugeDragon("fire"));

// You can even curry  a non curried function using libraries like lodash
// Let's curry the dragon() function
console.log("\n\tExample currying the dragon() function with lodash");
console.log();
dragon = _.curry(dragon);
alduinDragon = dragon("Alduin");
hugeDragon = alduinDragon("huge");
console.log(hugeDragon("fire"));

// Applicable example
console.log("\n\tAn applicable example")
console.log();
let dragons = [{
    name: "Flufflykins",
    element: "lightning"
  },
  {
    name: "Noomi",
    element: "lightning"
  },
  {
    name: "Karo",
    element: "fire"
  },
  {
    name: "Doomer",
    element: "timewarp"
  }
];

/*
// Non curried hasElement() function expects element and obj
let hasElement =
  (element, obj) => obj.element === element;
let lightingDragons =
  dragons.filter(x => hasElement("lighting"), x);
*/

// curried hasElement() function expects element THEN object 
let hasElement =
  _.curry((element, obj) => obj.element === element);
let lightingDragons =
  dragons.filter(hasElement("lightning"));
console.log(lightingDragons);