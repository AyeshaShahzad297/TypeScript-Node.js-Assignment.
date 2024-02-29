// Great Magicians: Start with a copy of your program from Exercise 39. 

let magicians: string[] =['Harry Houdini', 'David Copperfield', 'Criss Angel'];
function show_magicians(magicians: string[]): void{
    for(let i of magicians){
        console.log(i);
    }
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `The Great Magician ${magician}`);
    return (greatMagicians)
}
const greatMagiciansNames: string [] = make_great(magicians);

// Call show_magicians() to see that the list has actually been modified.
console.log("\nModified List.")
show_magicians(greatMagiciansNames)
