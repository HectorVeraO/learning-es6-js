"use strict";
// Declare global variables here
let animals = [
  { name: "Pancha", species: "Dog" },
  { name: "Perla", species: "Dog" },
  { name: "Amanda", species: "Dog" },
  { name: "Pericolos", species: "Cat" },
  { name: "Palote", species: "Bird" },
  { name: "Julian", species: "Fish" },
  { name: "Charlotte", species: "Cat" },
  { name: "Emerald", species: "Bird" },
  { name: "Karla", species: "Fish" },
  { name: "Roman", species: "Turtle" }
];

// Higher order functions
console.log("\n" + "*".repeat(50));
console.log("\n\tHigher Order Functions\n");

// Examples in arrays
console.log("Some array's higher order functions");
// First filter() function
console.log("\n1. The filer() function, let's filter the animals array by species\n");
let dogs = animals.filter(animal => animal.species === "Dog");
console.log(dogs);
/**
 * The filter() function expects a Boolean to be returned,
 * if the current object passes the condition (ie returns true)
 * it will be included in the new array
 * else it won't be.
 */

// The map() function
console.log("\n2. The map() function, let's create a new array based on the objects found in the original array\n");
let numbers = animals.map( animal => `${animal.name} is ${animal.name.length} letters long` );
console.log(numbers);
/**
 * The map() functione expects a new Object to be returned,
 * which will be added to the new array.
 */

// The reduce() function
/**
 * This is another array transformation function,
 * but it is not specific to any task, so you can customize it to any transformation
 * unlike filter(), map(), etc.
 */
console.log("\n3. The reduce() function, let's count how many animals there are in the animals array\n");
let animalAmmount = animals.reduce((ammount, animal) => ammount + 1, 0);
console.log("There are ", animalAmmount, " animals");
// This example is bad because we can just use the length property to get the ammount of animals in the array, but I couldn't think of anything better