'use strict'
/*
//var a = 'Test1';
//let b = 'Test2';

//console.log(a);
//console.log(b);

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

// Both console.log should print "50"
// because the second var a declaration is overriding the first
testVar();

function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// Now the first console.log should print "50" and the second "30"
// since we scoped the variable using let
testLet();


for (let i = 0; i < 10; i++) {
  console.log(i);
}


// this console.log should print 10 when the i variable
// is declared using "var", but when we use "let"
// the console.log should throw an undefined error.
console.log(i);
*/

const colors = [];

// We can add elements to the array
colors.push('red');
colors.push('blue');
/*
// But we cannot modify the variable itself, this line should throw an error
colors = 'Green';
*/
console.log(colors);