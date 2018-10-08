"use strict";

const msg = `
  the dragons array is a Functor since it implements a map() method
  this map() method has to meet certain requirements for dragons array
  to be considered a Functor
  1. Transformation of contents (map takes the values and uses the callback to transform the values)
  2. Maintain structure (map will RETURN a collection with the same properties than the previous one, keeps array length, etc.)
  3. Return a new Functor (the value returned MUST be another Functor, so it implements map, allowing chaining)
`;

console.log("\n" + "*".repeat(50));
console.log("\n Examples")
console.log();

// the dragons array is a Functor since it implements a map() method
// this map() method has to meet certain requirements for dragons array
// to be considered a Functor
// 1. Transformation of contents (map takes the values and uses the callback to transform the values)
// 2. Maintain structure (map will RETURN a collection with the same properties than the previous one, keeps array length, etc.)
// 3. Return a new Functor (the value returned MUST be another Functor, so it implements map, allowing chaining)

const dragons = [
  { name: "Fluffykins", health: 70 },
  { name: "Alduin", health: 65000 },
  { name: "Deathwing", health: 90000}
];

const names = dragons
  .map(dragon => dragon.name);

console.log(names);

// A cool thing about Functors is that they return
// a collection with the same structure that the previous
// one, so you can keep on chaining map methods.

const nameLengths = names
  .map(name => name.length);
console.log(nameLengths);
console.log();
console.log(msg);