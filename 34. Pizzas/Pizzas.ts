// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizza : string[] = ['Pepperoni Pizza', 'Cheese Pizza', 'BBQ Pizza']
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Method 1
for(let x=0; x<pizza.length; x++){
console.log("I like " + pizza[x])
}
// Method 2
// for(let x of pizza){
// console.log(`I like ${x}`)
// }

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\nThere are lots of different flavours of pizza in the market.\nI like the BBQ flavour the most.\nI love to have pizza with my family.\nI really love pizza.")