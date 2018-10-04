// The null literal
null

// Boolean literal
true
false

/**
 * Numeric literals
 * be cautious when using them with a leading zero
 */

// Decimal literals
1324545
0888 // will be parsed as 894
0777 // will be parsed as octal, 511 in decimal, this happens because every number after the 0 is fewer than 8
let num = 0777;
console.log(num); // prints 511

// Binary literals
0b111111111111
0B10110

// Octal literals
0o4541
0O4656

// Hexadecimal literals
0x54ABCDEF
0x54AbCdeF
0x54ABCDEF
0X57abcdef
0X54ABCDEF

/**
 * Object literals
 */
var o = { a: "foo", b: "bar", c: 42 };
// shorthand notation. New in ES2015 (ES6)
var a = "foo", b = "bar", c = 42;
var o = { a, b, c };
// instead of
var o = { a: a, b: b, c: c } // yikes

/**
 * Array literals
 */
[154, 544, 454, "asd", true]

/**
 * String literals
 * a string literal is zero or more Unicode code points enclosed in single or double quotes.
 * Unicode code points may also be represented by an escape sequence.
 * All Unicode code points may appear literally in a string literal except for these closing quote code points:
 *   U+005C (Backslash)
 *   U+000D (<CR>)
 *   U+000A (<LF>)
 */

 "foo"
 'bar'
 // Hexadecimal escape sequences \x
 "\xA9" // "©"

 // Unidecode escape sequences \u
 "\u00A9" // "©" (U+A9)

 // Unicode code point escapes
 "\u{2F804}" // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)
 // the same character represented as a surrogate pair
 "\uD87E\uDC04"

 /**
  * Regular expression literals
  */
/ab+c/g
// An "empty" regular expression literal
// the empty non-capturing group is necessary
// to avoid ambiguity with single line comments
var emptyRegex = /(?:)/;

/**
 * Template literals or template strings
 */
`string text`
`string text ${expression} string text`
tag`string text ${expression} string text`