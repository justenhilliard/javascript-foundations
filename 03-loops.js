// JavaScript Loops Practice

// 1. Basic for loop
console.log("Count from 1 to 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Countdown loop
console.log("\nCountdown from 10 to 1:");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3. Even numbers
console.log("\nEven numbers from 2 to 20:");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 4. Basic while loop
console.log("\nWhile loop countdown:");

let count = 5;

while (count > 0) {
    console.log(count);
    count--;
}

console.log("Done");

// 5. Looping through an array
const shows = [
    "The Late Rotation",
    "Basement Frequency",
    "Blue Hour Broadcast",
    "Vinyl Tap Radio"
];

console.log("\nWCWM Show List:");

for (let i = 0; i < shows.length; i++) {
    console.log(`${i + 1}. ${shows[i]}`);
}

// 6. for...of loop
const songs = ["Dreams", "Sweet Disposition", "Eventually", "Pink + White"];

console.log("\nPlaylist:");

for (let song of songs) {
    console.log(`Now playing: ${song}`);
}

// 7. Accumulator pattern
const numbers = [4, 8, 15, 16, 23, 42];
let total = 0;

for (let number of numbers) {
    total += number;
}

console.log(`\nTotal: ${total}`);

// 8. Count matching values
let evenCount = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        evenCount++;
    }
}

console.log(`Even numbers: ${evenCount}`);

// 9. Find the largest number
const moreNumbers = [12, 5, 8, 130, 44, 2];
let largestNumber = moreNumbers[0];

for (let number of moreNumbers) {
    if (number > largestNumber) {
        largestNumber = number;
    }
}

console.log(`\nLargest number: ${largestNumber}`);

// 10. Filter words manually with a loop
const words = ["radio", "playlist", "signal", "vinyl", "broadcast", "show"];
let longWords = [];

for (let word of words) {
    if (word.length > 5) {
        longWords.push(word);
    }
}

console.log("\nWords longer than 5 letters:");
console.log(longWords);

// 11. Looping through objects in an array
const showSchedule = [
    { title: "The Late Rotation", day: "Monday", genre: "Indie" },
    { title: "Basement Frequency", day: "Tuesday", genre: "Alt Rock" },
    { title: "Blue Hour Broadcast", day: "Wednesday", genre: "Electronic" },
    { title: "Vinyl Tap Radio", day: "Thursday", genre: "Editorial" },
    { title: "Stack Session Selects", day: "Friday", genre: "Live Sessions" }
];

console.log("\nShow Schedule:");

for (let show of showSchedule) {
    console.log(`${show.title} airs on ${show.day} - ${show.genre}`);
}

// 12. Search through array of objects
const searchTerm = "blue";

console.log(`\nSearch results for "${searchTerm}":`);

for (let show of showSchedule) {
    const title = show.title.toLowerCase();

    if (title.includes(searchTerm)) {
        console.log(show.title);
    }
}