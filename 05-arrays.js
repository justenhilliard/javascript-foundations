// Creating an array
const fruits = ["apple", "banana", "mango", "kiwi"];
console.log(fruits);

console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]); // last item, kiwi

fruits.push("orange"); // adds to the end
fruits.unshift("grape"); // adds to the beginning
console.log(fruits);

fruits.pop(); // removes last item
fruits.shift(); // removes first item
console.log(fruits);


// Looping through an array
for (let i = 0; i < fruits.length; i++) 
{
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
  
  fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
  });


  // map - create a new array based on the original
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// filter - create a new array with items that pass a test
const longNames = fruits.filter((fruit) => fruit.length > 5);
console.log(longNames);


// find - get the first item that matches a condition
const foundFruit = fruits.find((fruit) => fruit.startsWith("b"));
console.log(foundFruit);

// includes - check if an array contains a value
console.log(fruits.includes("mango")); // true or false

// indexOf - find the position of an item
console.log(fruits.indexOf("mango"));


// sort - sort array elements (alphabetically by default for strings)
const sortedFruits = [...fruits].sort();
console.log(sortedFruits);

// reduce - boil array down to a single value
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(`Total: ${total}`);