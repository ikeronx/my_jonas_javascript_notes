/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----SETS DATA STRUCTURE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648589#announcements
// 👉🏽 Set is a collection of unique values (no duplicates)

// 🛠 how to create a set
// 👉🏽  we need to pass in an iterable object to create a set from the object
// 👉🏽  arrays are iterable objects
// eslint-disable-next-line prettier/prettier
const orderSet = new Set([
        'Pasta 🍝',
        'Pizza 🍕',
        'Pizza 🍕',
        'Risotto 🍲 ',
        'Pasta 🍝',
        'Pizza 🍕',
]);

console.log('-----set methods: add() delete() has() clear() size()-----');
console.log(orderSet); // {'Pasta 🍝', 'Pizza 🍕', 'Risotto 🍲 '}
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza 🍕')); // true
console.log(orderSet.has('Bread')); // false
console.log(orderSet.add('Tacos 🌮')); // {'Pasta 🍝', 'Pizza 🍕', 'Risotto 🍲 ', 'Tacos 🌮'}
console.log(orderSet.delete('Pizza 🍕')); // {'Pasta 🍝', 'Risotto 🍲 ', 'Tacos 🌮'}
// console.log(orderSet.clear()); // {} <-- this will clear the set

// 🛠 how to can loop through a set
for (const item of orderSet) {
        console.log(item); // Pasta 🍝, Risotto 🍲 , Tacos 🌮
}

// 🤔🌍 Real World Example:
// ... the main use case of sets is remove duplicate values from an array by using the set constructor and spread operator to pass in an array / create a new array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = [...new Set(staff)];

console.log(staffSet); // Set { 'Waiter', 'Chef', 'Manager' }
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

console.log('-----MAPS DATA STRUCTURE: FUNDAMENTALS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648593#announcements
// 👉🏽 Map is a collection of key-value pairs
// 👉🏽 data is stored in key value pairs where the key is a string, number, other maps, objects, etc and the value is an object or array or string or number  or boolean
// 👉🏽 difference between a map and an object is that a map keys can be any type (object, numbers, other maps, strings, etc ) of data type while an object keys must be strings
// 👉🏽 difference between an array and a map is that a map can have duplicate keys and an array cannot

// 🛠 how to create a map
const restaurantMap = new Map(); // <-- create empty map first
restaurantMap.set('name', 'Classico Italiano'); // <-- then fill the map using the set method and pass two arguments, the key name and value
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

// ... 💡 you can chain the set method to add key/value pairs to the restaurant map
console.log(
        restaurantMap
                .set('categories', ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳'])
                .set('open', 11)
                .set('close', 23)
                .set(true, 'We are open 😃')
                .set(false, 'We ara close 😢')
);

// 🛠  how to get a value from a map
console.log(restaurantMap.get('name')); // Classico Italiano <-- get the value of the key 'name'
console.log(restaurantMap.get(1)); //  Firenze, Italy <-- get the value of the key '1'
console.log(restaurantMap.get(true)); // We are open 😃 <-- get the value of the key 'true'

// 🛠 how to check if a key exists in a map
console.log(restaurantMap.has('name')); // <-- check if the key 'name' exists in the map

// 🛠 how to delete a key/value pair from a map
// restaurantMap.delete('name'); // <-- delete the key 'name' from the map

// 🛠 how to check the size of a map
console.log(restaurantMap.size); // 8 <-- get the size of the map

// 🛠 how to remove all key/value pairs from a map
// restaurantMap.clear(); // 0 <-- remove all key/value pairs from the map

// 🤔🌍 Real World Example:
// 🛠 how to use the map booleans keys to get results from a map
// ... if result is equal to true then the map key boolean will return true automatically otherwise false if the result is false automatically
const currentTime = 25;
const isOpen = currentTime > restaurantMap.get('open') && currentTime < restaurantMap.get('close');
console.log(restaurantMap.get(isOpen)); // We are open 😃

// 🛠 how to use arrays as map keys
const arr = [1, 2]; // <-- create an array with two values 1 and 2 as keys
restaurantMap.set(arr, 'Test'); // <-- add a key/value pair to the map using the set method and pass two arguments, the key name and value
console.log(restaurantMap.get(arr)); // Test

// 💡 using arrays as map keys can be useful for DOM elements
restaurantMap.set(document.querySelector('h1'), 'heading');
console.log(restaurantMap.get(document.querySelector('h1'))); // heading

// 🛠 how to loop through a map
// for (const [key, value] of restaurantMap) {
//         console.log(`${key} : ${value}`);
// }

console.log('-----MAPS: Iteration-----');
// 🛠 how to create a new map without using the set() method
// 👉🏽 pass in an array inside the map constructor method
// 👉🏽 this array will contain multiple arrays
// 👉🏽 in each of the array the first position will be the keys and the second position will be the values
const question = new Map([
        ['question', 'What is the best programming language in the world?'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'JavaScript'],
        ['correct', 3],
        [true, 'Correct answer 👍'],
        [false, 'Wrong answer, please try again 😢'],
]);
console.log(question);

// 🤔🌍 Real World Example:
// 🛠 how loop through a map array
// quiz app
console.log(question.get('question')); // What is the best programming language in the world?
// ... get the key value pairs that have keys as numbers by looping through the question map
for (const [key, value] of question) {
        if (typeof key === 'number') {
                console.log(`Answer ${key}: ${value}`); // Answer 1: C, Answer 2: Java, Answer 3: JavaScript
        }
}
// 🛠 how to get the answer from the user using prompt
const answer = parseInt(/* prompt */ 'Please select the correct answer.');
// ... if the answer is correct then display the correct answer message and if the answer is incorrect then display the wrong answer message
const correctAnswerMsg = answer === question.get('correct') ? question.get(true) : question.get(false);
console.log(correctAnswerMsg);
// ... jonas way
// const correctAnswerMsg = question.get(question.get('correct') === answer);
// console.log(correctAnswerMsg);

// 🛠 how to convert map back to array
// ... convert question map to an array by using the spread operator
console.log([...question]); // [question, [1, 'C'], [2, 'Java'], [3, 'JavaScript'], [correct, 3], [true, 'Correct answer 👍'], [false, 'Wrong answer, please try again 😢']]
console.log([...question.keys()]); // ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); // ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 'Correct answer 👍', 'Wrong answer, please try again 😢']

// 🛠 how to covert objects to MAPS
const openingHours = {
        thu: {
                open: 12,
                close: 22,
        },
        fri: {
                open: 11,
                close: 23,
        },
        sat: {
                open: 0, // Open 24 hours
                close: 24,
        },
};
// ... convert openinghours object to a map
const hoursMaps = new Map(Object.entries(openingHours));
console.log(hoursMaps); // Map(3) {'thu' => Map(2) {'open' => 12, 'close' => 22}, 'fri' => Map(2) {'open' => 11, 'close' => 23}, 'sat' => Map(2) {'open' => 0, 'close' => 24}}

console.log('-----WHICH DATA STRUCTURE TO USE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648597#announcements

// 📌 FOUR DATA STRUCTURES 👷🏽‍♂️🧱

// 1️⃣ ARRAYS:
// 👉🏽 Use when you need ordered list of values (might contain duplicates)
// 👉🏽 Use when you need to manipulate data

// 2️⃣ OBJECTS:
// 👉🏽 More “traditional” key/value store (“abused” objects)
// 👉🏽 Easier to write and access values with . and []
// 👉🏽 Use when you need to include functions (methods)
// 👉🏽 Use when working with JSON (can convert to map)

// 3️⃣ MAPS:
// 👉🏽 Better performance
// 👉🏽 Keys can have any data type Easy to iterate
// 👉🏽 Easy to compute size
// 👉🏽 Use when you simply need to map key to values
// 👉🏽 Use when you need keys that are not strings

// 4️⃣ Sets:
// 👉🏽 Use when you need to work with unique values
// 👉🏽 Use when high-performance is really important
// 👉🏽 Use to remove duplicates from arrays