// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
function make_shirt(size:string, text:string): void{
console.log(`You just confirmed your order of a T-Shirt of ${size} size that has a text "${text}" printed on it`)
}

// Call the function.
make_shirt("large", "Now or Never")
make_shirt("medium", "I can achieve anything I want")
make_shirt("small", "I like programming")
