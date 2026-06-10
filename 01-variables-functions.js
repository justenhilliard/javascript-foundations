// 01-variables-functions.js
// Practicing JavaScript variables and functions

const name = "Justen";
const major = "Computer Science";
let focus = "AI/ML and Data Science";
const currentYear = 2026;
const graduationYear = 2028;

function introducePerson(personName, personMajor, personFocus) {
  return `Hi, I'm ${personName}, a ${personMajor} student focused on ${personFocus}.`;
}

function calculateYearsUntilGraduation(current, graduation) {
  return graduation - current;
}

function updateFocus(newFocus) {
  focus = newFocus;
  return `Updated focus: ${focus}`;
}

console.log(introducePerson(name, major, focus));
console.log(
  `Years until graduation: ${calculateYearsUntilGraduation(currentYear, graduationYear)}`
);
console.log(updateFocus("Web Development and JavaScript"));