"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];
function show_magicians(magicians) {
    for (let i of magicians) {
        console.log(i);
    }
}
show_magicians(magicians);
