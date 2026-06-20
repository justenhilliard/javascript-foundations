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