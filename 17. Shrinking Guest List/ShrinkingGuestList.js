"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList = ["Qasim", "Ali", "Abdullah"];
// for(let i=0; i<guestList.length; i++){
//     console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n")
// };
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let absentGuest = "Qasim";
let newGuest = "Ahmed";
console.log(`Mr. ${absentGuest} can't come to the dinner.\n\n`);
// • Print a second set of invitation messages, one for each person who is still in your list.
guestList[0] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n\n")
// };
console.log("We have found a bigger table so we are inviting more 3 guests to the dinner.\n\n");
// Add one new guest to the beginning of your array.
guestList.unshift("Hamza");
// • Add one new guest to the middle of your array.
guestList.splice(2, 0, "Saad");
//  • Use append() to add one new guest to the end of your list. 
guestList.push("Hasnain");
// • Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guestList.length; i++) {
    console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n\n");
}
;
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry! We couldn't find a bigger table. We are unable to invite more than 2 guests for dinner.\n");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry! Mr. ${removeGuest}, We are unable to invite you for dinner.`);
}
;
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < guestList.length; i++) {
    console.log("Mr. " + guestList[i] + ",\n\nYou are still invited to dinner.\n\nThank You.\n\n");
}
;
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.splice(0, 2);
console.log(guestList);
