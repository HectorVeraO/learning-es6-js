"use strict"

// Try the examples below 1 at a time, or else the results will get mixed

/**
 * var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 * The var declaration above was to try AJAX Request directly from NodeJS to a remote Server
 * but I couldn't make it work,
 * so try this sample with a browser
 */

// Example 1
console.log("*".repeat(33));
console.log("\n\tExample 1\n");
// Immediately resolved promised
var myPromise = Promise.resolve("Foo");

myPromise.then(res => console.log(res));

// Example 2
console.log();
console.log("*".repeat(33));
console.log("\n\tExample 2\n");
// Delayed sum by 2000 miliseconds
var myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});

myPromise2.then(res => {
  res += 3;
  console.log(res);
});

// Example 3
console.log();
console.log("*".repeat(33));
console.log("\n\tExample 3\n");
// AJAX Request
function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.send();
  });
}

// http://jsonplaceholder.typicode.com/todos is a remote API for testing for different types go to
// http://jsonplaceholder.typicode.com
getData("GET", "http://jsonplaceholder.typicode.com/todos")
  .then(function (data) {
    let todos = JSON.parse(data);
    let output = "";
    for (const todo of todos) {
      output += `
        <li>
          <h3>${todo.title}</h3>
          <p>Completed: ${todo.completed}</p>
        </li>
      `;
    }
    document.getElementById("template").innerHTML = output;
  })
  .catch(function (err) {
    console.log(err)
  });