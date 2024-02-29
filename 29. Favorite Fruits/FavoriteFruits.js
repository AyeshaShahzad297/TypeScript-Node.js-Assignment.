"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['Mango', 'Strawberry', 'Watermelon'];
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mangoes!");
}
;
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberries!");
}
;
if (favorite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon!");
}
;
if (!favorite_fruits.includes("Apple")) {
    console.log("Sorry! We don't have that fruit.");
}
;
if (!favorite_fruits.includes("Peach")) {
    console.log("Sorry! We don't have that fruit.");
}
;
