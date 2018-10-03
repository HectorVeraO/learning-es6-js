"use strict"

let myArray = [11, 22, 33, 44, 55];

// Set
console.log("*".repeat(33));
console.log("\n\tThe Set structure\n");
// Creating a Set
let mySet = new Set(myArray);
console.log(mySet);
// Adding an element to the Set
mySet.add("100");
console.log(mySet);
mySet.add({a: 1, b: 2});
console.log(mySet);
mySet.delete(22);
console.log(mySet);
mySet.clear();
console.log(mySet);
mySet.add(100);
console.log(mySet);
console.log(`Set size: ${mySet.size}`);
mySet.forEach(function(val) {
  console.log(val);
});

// Map
console.log();
console.log("*".repeat(33));
console.log("\n\tThe Map structure\n")
let myMap = new Map([["a1", "hello"], ["b2", "goodbye"]]);
console.log(myMap);
// To add a (key, value) pair
myMap.set("c3", "Foo");
console.log(myMap);
myMap.delete("a1");
console.log(myMap);
console.log(`Map size: ${myMap.size}`);

// WeakSet
// Ver resultados en la consola del navegador, la consola de NodeJS arroja console.log(weakSet); como vacío.
console.log();
console.log("*".repeat(33));
console.log("\n\tThe WeakSet structure\n");

let carWeakSet = new WeakSet();

let car1 = {
  make: "Honda",
  model: "Civic"
};

carWeakSet.add(car1);
console.log(carWeakSet);

let car2 = {
  make: "Toyota",
  model: "Camry"
};

carWeakSet.add(car2);
console.log(carWeakSet);

carWeakSet.delete(car1);
console.log(carWeakSet);

// WeakMap
console.log();
console.log("*".repeat(33));
console.log("\n\tThe WeakMap structure\n");

let carWeakMap = new WeakMap();

let key1 = {
  id: 1
};

car1 = {
  make: "Honda",
  model: "Civic"
};

carWeakMap.set(key1, car1);
console.log(carWeakMap);

let key2 = {
  id: 2
};

car2 = {
  make: "Toyota",
  model: "Camry"
};

carWeakMap.set(key2, car2);
console.log(carWeakMap);

carWeakMap.delete(key1);
console.log(carWeakMap);