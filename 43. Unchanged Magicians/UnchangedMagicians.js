"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];
function show_magicians(magicians) {
    for (let i of magicians) {
        console.log(i);
    }
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `The Great Magician ${magician}`);
    return (greatMagicians);
}
const greatMagiciansNames = make_great(magicians);
// Original magician list.
console.log("\nOriginal List.");
show_magicians(magicians);
// Call show_magicians() to see that the list has actually been modified.
console.log("\nModified List.");
show_magicians(greatMagiciansNames);
