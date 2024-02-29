// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList:string[] = ["Qasim", "Ali", "Abdullah"];
// for(let i=0; i<guestList.length; i++){
//     console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n")
// };

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let absentGuest:string = "Qasim";
let newGuest:string = "Ahmed";
console.log(`Mr. ${absentGuest} can't come to the dinner.\n\n`);

// • Print a second set of invitation messages, one for each person who is still in your list.
guestList[0] = newGuest;
for(let i=0; i<guestList.length; i++){
    console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n\n")
};

console.log("We have found a bigger table so we are inviting more 3 guests to the dinner.\n\n")

// Add one new guest to the beginning of your array.
guestList.unshift("Hamza");

// • Add one new guest to the middle of your array.
 guestList.splice(2, 0, "Saad");

//  • Use append() to add one new guest to the end of your list. 
guestList.push("Hasnain");

// • Print a new set of invitation messages, one for each person in your list.
for(let i=0; i<guestList.length; i++){
    console.log("Mr. " + guestList[i] + ",\n\nYou are invited to dinner.\n\nThank You.\n\n")
};