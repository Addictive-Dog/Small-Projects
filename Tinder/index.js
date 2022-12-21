import { people } from "/data.js";
import { Profile } from "/utils.js";

// This array is going to store the profiles that get clicked so we can rank them later
const clickedProfiles = [];

// the generateRandomObjectKeyName function generates a random name from the people object and returns it.
//This is used in the render function to generate two random profiles, which are then rendered to the screen
//using the Profile class imported from the /utils.js module.
//
function generateRandomObjectKeyName() {
  const names = Object.values(people);
  let randomIndex = Math.ceil(Math.random() * names.length - 1);
  return names[randomIndex];
}

// These are being assigned here with global scope so they can be accessed by other functions.
// They are intitated as undefined.
var ProfileFirst = generateRandomObjectKeyName();
var ProfileSecond = generateRandomObjectKeyName();

// This while function checks if profiles are the same, since they are both undefined, they are
// the same, so the profiles execute the random name function until they they are both unique.
// Then the rest of the function executes and renders them to the screen.
function render() {
  while (ProfileFirst === ProfileSecond) {
    ProfileFirst = generateRandomObjectKeyName();
    ProfileSecond = generateRandomObjectKeyName();
  }
  // Create profiles for the randomly generated names and render them to the screen
  const ProfileOne = new Profile(ProfileFirst);
  const ProfileTwo = new Profile(ProfileSecond);
  document.getElementById("card1").innerHTML = ProfileOne.getProfileHtml();
  document.getElementById("card2").innerHTML = ProfileTwo.getProfileHtml();
}

// executes the render function automatically when app begins
render();

// add an event listener to record swiped card.
document.getElementById("card1").addEventListener("click", () => {
  clickedProfiles.push(ProfileFirst);
  render();
});
document.getElementById("card2").addEventListener("click", () => {
  clickedProfiles.push(ProfileSecond);
  render();
});
