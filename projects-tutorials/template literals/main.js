"use strict"

// Without Template literals this is what we do,
// we concatenate Strings using +
/*
let template = 
  "<h1>Hello</h1>" +
  "<p>This is a simple template in JavaScript</p>";
*/

//With Template literals we can do
//you can even use variables inside templates
//without concatenating
//just use ${varName}
//and you can also use functions in the same manner
function makeUppercase(word) {
  return word.toUpperCase();
}
let name = "Héctor";
let template = 
  `<h1>${makeUppercase("Hello")}, ${name}</h1>
  <p>This is a simple template in JavaScript</p>`

document.getElementById("template").innerHTML = template;