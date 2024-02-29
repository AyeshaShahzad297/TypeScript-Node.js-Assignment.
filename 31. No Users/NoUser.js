"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
let userName = ['Admin', 'Eric', 'Alice', 'James', 'Jennifer'];
if (userName.length != 0) {
    console.log(userName);
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userName = [];
// • If the list is empty, print the message We need to find some users!
if (userName.length === 0) {
    console.log("We need to find some users!");
}
