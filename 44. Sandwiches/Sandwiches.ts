// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items:string[]): string[]{
    console.log("\nSandwich Ingredients:");
        if(items.length == 0){
            console.log("You haven't selected any ingredients for your sandwich.")
        }else{
            items.forEach((item, i)=>{
                console.log(`${i +1}. ${item}`)

            })
        }
return items

}
makeSandwich()
makeSandwich("Lettuce", "Tomato", "Chicken", "Onion", "Mayo");
makeSandwich("Lettuce", "Tomato", "Beef Patty", "Onion", "Mayo");
makeSandwich("Lettuce", "Tomato", "Cheese", "Onion", "Garlic Mayo");