"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ['John', 'Eric', 'Alice', 'James', 'Jennifer'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['Ronald', 'ERic', 'AliCe', 'Simon', 'Joseph'];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function checkUserName(current_users, new_users) {
    const lowercasedCurrentUserNames = current_users.map(user => user.toLowerCase());
    for (const newuser of new_users) {
        const lowercasedNewUserNames = newuser.toLowerCase();
        if (lowercasedCurrentUserNames.includes(lowercasedNewUserNames)) {
            console.log(`Username "${newuser}" is already taken. Enter a new username.`);
        }
        else {
            console.log(`Username "${newuser}" is available.`);
        }
    }
}
checkUserName(current_users, new_users);
