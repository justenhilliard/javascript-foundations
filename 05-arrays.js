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