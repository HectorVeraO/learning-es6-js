"use strict";
// Try the examples below 1 at a time, or else the results will get mixed

/**
 * var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 * The var declaration above was to try AJAX Request directly from NodeJS to a remote Server
 * but I couldn't make it work,
 * so try this sample with a browser
 */

// Example 1
console.log("\nTraversy Media");
console.log("\n" + "*".repeat(33));
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

// Example from MPJ Fun Fun Function, EXECUTE ON BROWSER
console.log("\nFun Fun Function, EXECUTE ON BROWSER");
console.log("\n" + "*".repeat(50));
// Example using callbacks, don't use when you need it to be COMPOSABLE it it's horrible, if you do you'll get the NodeJS Christmas Tree of DOOM
// THREE IMAGES OF CATS SHOULD BE DISPLAY ON THE SCREEN
console.log("\nExample using callbacks");

function loadImageCallbacked(url, callback) {
  let image = new Image();
  image.onload = function() {
    callback(null, image);
  };
  image.onerror = function() {
    let message = "Couldn't load image at " + url;
    callback(new Error(message));
  }
  image.src = url;
}

// addImg() function is also used in the promise example
let addImg = src => {
  let imgElement = document.createElement("img");
  imgElement.src = src;
  document.body.appendChild(imgElement);
}

loadImageCallbacked("./img/cat1.jpg", (error, img1) => {
  if (error) throw error;
  addImg(img1.src);
  loadImageCallbacked("./img/cat2.jpg", (error, img2) => {
    if (error) throw error;
    addImg(img2.src);
    loadImageCallbacked("./img/cat3.jpg", (error, img3) => {
      if (error) throw error;
      addImg(img3.src);
    });
  });
});

// Example from MPJ Fun Fun Function, EXECUTE ON BROWSER
console.log("\nFun Fun Function, EXECUTE ON BROWSER");
console.log("\n" + "*".repeat(50));
// Example using PROMISES, use them when you need to compose
// THREE IMAGES OF CATS SHOULD BE DISPLAY ON THE SCREEN
console.log("\nExample using promises");
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      let message = "Couldn't load image at " + url;
      reject(new Error(message));
    };
    image.src = url;
  });
};

Promise.all([
  loadImage("./img/cat1.jpg"),
  loadImage("./img/cat2.jpg"),
  loadImage("./img/cat3.jpg")
]).then((images) => {
  images.forEach(i => {
    addImg(i.src);
  });
}).catch((errors) => {
  // Do error handling here
});