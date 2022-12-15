import { people } from "/data.js";
import { Profile } from "/utils.js";

// Takes all the names from data object and creates an array of names.

// Generates a randon number between 0 and the size of the keys length
function generateRandomObjectKeyName() {
  const keys = Object.keys(people);
  let randomIndex = Math.ceil(Math.random() * keys.length - 1);
  let randomName = people[keys[randomIndex]];
  return randomName;
}

// Generate two random profile names
// let randomProfileOne = generateRandomObjectKeyName();
/// let randomProfileTwo = generateRandomObjectKeyName();

// Use the random profile numbers to create two new Profile objects
let ProfileOne = generateRandomObjectKeyName();
let ProfileTwo = generateRandomObjectKeyName();

// a function that renders the two randomly generated profiles to the screen
function render() {
  document.getElementById("card1").innerHTML = ProfileOne.getProfileHtml();
  document.getElementById("card2").innerHTML = ProfileTwo.getProfileHtml();
}

render();
// executes the render function automatically when app begins

// new stuff
//if (ProfileOne !== ProfileTwo) {
// document.getElementById("card1").innerHTML = ProfileOne.getProfileHtml();
//document.getElementById("card2").innerHTML = ProfileTwo.getProfileHtml();
//} else {
// Generate new random numbers and random profiles
//randonNumberOne = generateRandomNumber();
// randonNumberTwo = generateRandomNumber();
// randomProfileNameOne = keys[randonNumberOne];
// randomProfileNameTwo = keys[randonNumberTwo];
