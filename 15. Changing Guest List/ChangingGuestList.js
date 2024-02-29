"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList = ["Qasim", "Ali", "Abdullah"];
for (let i = 0; i < guestList.length; i++) {
    console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n");
}
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let absentGuest = "Qasim";
let newGuest = "Ahmed";
console.log(`Mr. ${absentGuest} can't come to the dinner.`);
// • Print a second set of invitation messages, one for each person who is still in your list.
guestList[0] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n\n");
}
