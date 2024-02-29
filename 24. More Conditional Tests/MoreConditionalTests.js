"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Test for Equality: ", "Cube" === "Cube");
console.log("Test for Equality: ", "Cube" === "Circle");
console.log("Test for Inequality: ", "Cube" !== "Circle");
console.log("Test for Inequality: ", "Cube" !== "Cube");
// • Tests using the lower case function
console.log("Lowercase func test: ", "HELLO WORLD".toLowerCase() === "hello world");
console.log("Lowercase func test: ", "HELLO WORLD".toLowerCase() === "Hello World");
// Numerical tests involving equality and inequality
console.log("Test for Equality: ", 44 === 44);
console.log("Test for Equality: ", 44 === 45);
console.log("Test for Inequality: ", 44 !== 45);
console.log("Test for Inequality: ", 44 !== 44);
// Numerical tests involving greater than
console.log("Test using greater than: ", 6 > 3);
console.log("Test using greater than: ", 6 > 9);
// Numerical tests involving less than
console.log("Test using less than: ", 5 < 10);
console.log("Test using less than: ", 10 < 5);
// Numerical tests involving greater than equal to 
console.log("Test using greater than equal to: ", 10 >= 5);
console.log("Test using greater than equal to: ", 10 >= 20);
// Numerical tests involving less than equal to
console.log("Test using less than equal to: ", 5 <= 10);
console.log("Test using less than equal to: ", 10 <= 5);
// • Tests using "and" and "or" operators
console.log("Test using 'and' operator: ", 6 === 6 && 8 === 8);
console.log("Test using 'and' operator: ", 6 === 6 && 7 === 5);
console.log("Test using 'or' operator: ", 3 === 3 || 2 === 3);
console.log("Test using 'or' operator: ", 4 === 5 || 6 === 9);
// • Test whether an item is in a array
let colors = ["blue", "red", "black", "white", "green"];
console.log("Test to check an array item: ", colors.includes("white"));
console.log("Test to check an array item: ", colors.includes("grey"));
// • Test whether an item is not in a array
console.log("Test to check an item not in array: ", !colors.includes("purple"));
console.log("Test to check an item not in array: ", !colors.includes("blue"));
