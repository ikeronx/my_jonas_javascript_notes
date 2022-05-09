/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

// /////////////////////////////////////
// ARRAY DESTRUCTURING - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648521#notes
// Data needed for first part of the section
const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳'],
        starterMenu: ['Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙'],
        mainMenu: ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 '],

        // 1. 🛠 how to make a function return an array and destruct the result into different variables.... receive values from the object's arrays (mainMenu, etc) using indexes
        order(categoryIndex, starterIndex, MainIndex) {
                return [this.categories[categoryIndex], this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
        },
        // 2. 🛠 how to make a function accept multiple arguments then use the spread operator to pass those arguments...
        orderPizza(...ingredients) {
                console.log(`Here's your delicious Pizza with ${ingredients.join(', ')}`);
        },
        // 2. 🛠 how to make a function accept multiple arguments then use the spread operator to pass those arguments...  receive values using spread operator
        // orderPasta(ing1, ing2, ing3) {
        //         console.log(`Here's your delicious Pasta with ${ing1}, ${ing2}, and ${ing3}`);
        // },
        // 3. 🛠 how to use rest operator as an argument which returns an array
        orderFood(mainMenuIndex, mainIngredient, ...otherIngredients) {
                console.log(
                        `Here's your delicious ${
                                this.mainMenu[mainMenuIndex]
                        } with ${mainIngredient} and ${otherIngredients.join(', ')}`
                );
                console.log(`The main ingredient is ${mainIngredient}`);
                console.log(`The other ingredients are ${otherIngredients}`);
        },
};

console.log('----REAL WORLD EXAMPLES----');
// ******* real world example ********
// 1. 🛠 how to make a function return an array and destruct the result into different variables....  - receive values from the object's from arrays (mainMenu, etc) using indexes and object method
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648521#announcements 10:55 timestamp
const [foodCategory, starter, mainCourse] = restaurant.order(0, 2, 0);
console.log(`Food Category: ${foodCategory} Starter Menu: ${starter} Main Menu: ${mainCourse}`); // Food Category: Italian 🇮🇹 Starter Menu: Garlic Bread 🥖 Main Menu: Pizza 🍕

// ******* real world example ********
// 2. 🛠 how to make a function accept multiple arguments then use the spread operator to pass those arguments.  receive values using spread operator
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648535#announcements 12:30 timestamp
const pastaIngredients = ['Tomato 🍅', 'Cheese 🧀', 'Chilli 🌶'];
restaurant.orderPizza(...pastaIngredients); // Here's your delicious Pasta with 🍅, 🍝,🍗

// ******* real world example ********
// 3. 🛠 how to use rest operator as an argument which returns an array
restaurant.orderFood(0, ' 🍇', '🍆', '🍄'); // Here's your delicious Pizza with 🍇 and 🍆 and 🍄
const keronOrder = { ...restaurant.orderFood(1, 'Tomato 🍅', 'Broccoli 🥦', 'Shrimp 🍤') }; // Here's your delicious Pasta with Tomato 🍅 and Broccoli 🥦

console.log('----DESTRUCTING ARRAYS----');

// 🛠 how to destructure arrays inside an object
const [restaurantCategories] = [restaurant.categories];
console.log(restaurantCategories); // ['Italian 🍝', 'Pizzeria 🍕', 'Vegetarian 🥗', 'Organic 🍳']
const [first, second] = restaurant.categories;
console.log(first, second); // 'Italian 🍝' 'Pizzeria 🍕'

// 🛠 how to skip one or more elements
const [first0, , third] = restaurant.categories;
console.log(first0, third); // 'Italian 🍝' 'Vegetarian 🥗'

// 🛠 how to switch the order of elements in an array
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // 'Italian 🍝' 'Vegetarian 🥗'
console.log(secondary); // 'Italian 🍝'

// 🛠 how to destructure nested arrays
const nested = [2, 4, ['hello', 6]];
const [num1, , [greeting, num3]] = nested;
console.log(num1, greeting, num3); // 2 hello 6

// - default values for destructuring elements
const [p, q, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

console.log('----THE SPREAD OPERATOR (...) ARRAYS----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648535#notes

// 🛠 how to copy an array using the spread operator
const mainMenuCopy = [...restaurant.mainMenu];

// 🛠 how to build a new array using the spread operator
const array = [1, 2, 3];
const newArr = [0, ...array, 4, 5];
console.log(newArr); // [0, 1, 2, 3, 4, 5]

// ... another example using the restaurant object
const newMenu = ['Sushi 🍣', ...restaurant.mainMenu, 'Cake 🍰'];
console.log(newMenu); // ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 ', 'Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙']

// 🛠 how to join two arrays using the spread operator
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2); // ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 ', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙', 'Focaccia 🥐', 'Cake 🍰']

// - Iterables: arrays, strings, maps, sets, not objects
const str = 'Keron';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['K', 'e', 'r', 'o', 'n' ' ', 'S.']
console.log(...str); // 'K', 'e', 'r', 'o', 'n'
// console.log(`${...str} Williams`); // cannot use the spread_operator in template literal cause it does expect multiple values separated by a comma

console.log('----THE REST PATTERNS AND PARAMETERS (...) ARRAYS----');
// ****** REST  OPERATOR (ARRAYS) *********
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648543#announcements
// ❗REST OPERATOR, is on the LEFT hand side of the assignment operator, the rest operator is used to collect the remaining arguments into an array
// ❗rest element should always be the last element and there can only be one rest element in an array
const [z, y, ...others] = [1, 2, 3, 4, 5];
console.log(z, y, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza 🍕 Risotto 🍲 [ 'Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙' ]

// ****** REST  OPERATOR (FUNCTIONS) *********
// https://www.javascripttutorial.net/es6/javascript-rest-parameters/
// 🛠 how to use rest operator as an argument which returns an array
const add = function (...numbers) {
        // rest operator is used to collect the remaining arguments into an array
        console.log(numbers.reduce((a, b) => a + b));
};
add(1, 2, 3, 4); // 10

const x = [1, 2, 3, 8];
add(...x); // 14

// /////////////////////////////////////
// https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/
// https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/
// https://www.youtube.com/watch?v=UgEaJBz3bjY&t=3s
// MORE EXAMPLES ARRAY DESTRUCTURING
const arr = ['🍕', '🍺', '🍣'];

const [pizzas, beer, sushi, bacon = '🥓'] = arr;
const newArray = [...arr, bacon];
console.log(pizza); // 🍕
console.log(newArray); // [ '🍕', '🍺', '🍣', '🥓' ]
console.log(newArray[2]); // 🍣

// ******* REST OPERATOR (ARRAYS) ********
const arr2 = ['🍎', '🥑', '🍌'];
const [apple, ...rest] = arr2;
console.log(apple); // 🍎);
console.log(rest); // [ '🥑', '🍌' ]

console.log('----DIFFERENCE BETWEEN SPREAD OPERATOR AND REST OPERATOR----');
// ******* DIFFERENCE BETWEEN SPREAD OPERATOR AND REST OPERATOR********
// 👉 Spread operator serves to copy all the elements into a new array
// 👉 Spread is used on the Right hand side of the assignment operator
// 👉 Rest operator is used to collect the remaining arguments into an array
// 👉 Rest operator is on the LEFT hand side of the assignment operator
// 👉 Rest element should always be the last element and there can only be one rest element in an array

