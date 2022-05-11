/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳'],
        starterMenu: ['Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙'],
        mainMenu: ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 '],
        openingHours: {
                [weekdays[3]]: {
                        open: 12,
                        close: 22,
                },
                [weekdays[4]]: {
                        open: 11,
                        close: 23,
                },

                [weekdays[5]]: {
                        open: 0,
                        close: 12 + 12,
                },
        },
        // 1. how to make a function return an array and destruct the result into different variables.... receive values from the object's arrays (mainMenu, etc) using indexes
        order(categoryIndex, starterIndex, MainIndex) {
                return [this.categories[categoryIndex], this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
        },
        // 2. how to make a function accept multiple arguments then use the spread operator to pass those arguments...
        orderPizza(...ingredients) {
                console.log(`Here's your delicious Pizza with ${ingredients.join(', ')}`);
        },
        // 3. how to use rest operator as an argument which returns an array
        orderFood(mainMenuIndex, mainIngredient, ...otherIngredients) {
                console.log(
                        `Here's your delicious ${
                                this.mainMenu[mainMenuIndex]
                        } with ${mainIngredient} and ${otherIngredients.join(', ')}`
                );
        },
};

console.log('----LOOPING ARRAYS OLD WAY----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648563#announcements

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// - how to loop through the menu array using for of loop
for (const item of menu) console.log(item);

// - how to find array indexes using for of loop
for (const item of menu.entries()) {
        console.log(`Menu Item ${item[0] + 1}: ${item[1]}`);
}

// 🛠 how to destructure the array using for of loop
for (const [index, item] of menu.entries()) console.table(`${index}: ${item}`);

console.log('----LOOPING OBJECTS----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648577#announcements

// 🛠 how to loop through objects using for of loop
// 1. 🛠 how to get the object PROPERTIES/KEYS use the Object.keys() method

const openingHoursProperties = Object.keys(restaurant.openingHours);
// .... loop through the restaurant openingHours object using for of loop
let openingStr = `we are open ${openingHoursProperties.length} days: `;

for (const day of openingHoursProperties) {
        openingStr += ` ${day}`; // openingStr = 'we are open 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
}
console.log(openingStr); // we are open 3 days: Thursday, Friday, Saturday, Sunday

// 2. 🛠  how to get the object VALUES use the Object.values() method
const openingHoursValues = Object.values(restaurant.openingHours);
console.log(openingHoursValues); // [ { open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 12 + 12 } ]

// 3. 🛠 how to get the object ENTRIES (both properties/keys and values) use the Object.entries() method
const openingHoursEntries = Object.entries(restaurant.openingHours);
// console.log(openingHoursEntries); // [ [ 'Monday', { open: 12, close: 22 } ], [ 'Tuesday', { open: 11, close: 23 } ], [ 'Wednesday', { open: 0, close: 12 + 12 } ], [ 'Thursday', { open: 12, close: 22 } ], [ 'Friday', { open: 11, close: 23 } ], [ 'Saturday', { open: 0, close: 12 + 12 } ], [ 'Sunday', { open: 12, close: 22 } ] ]

// .... loop through the restaurant openingHours object using for of loop and destruct the result into different variables (day, open, close) using destructuring 
for (const [key, { open, close }] of openingHoursEntries) {
        console.log(`On ${key}, we are open at ${open} and close at ${close}`);
}
// for (const [day, hours] of openingHoursEntries) {
//         const restaurantHours = `On ${day} we open at ${hours.open} and we ${hours.close}`;
//          console.log(restaurantHours);
// }
// Monday is open from 12 to 22
// let openingHoursStr = `we are open ${openingStr} days: `;
// for (const time of openingHoursValues) {
//         openingHoursStr += ` ${time.open} - ${time.close}`;
// }
// // .... loop through the restaurant openingHours object using for of loopfor (const hours of openingHoursValues) {
// console.log(openingHoursStr); // { open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 12 + 12 }


console.log('----ENHANCING OBJECT LITERALS ----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648565#announcements
// 📌 1. first es6 enhanced object literal
// 🛠 how to add a object literal inside another object literal by using ES6 enhanced object literals
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const openingHours = {
        [weekdays[4]]: {
                open: '9:00am',
                close: '5:00pm',
        },
        [weekdays[5]]: {
                open: '6:00am',
                close: '10:00pm',
        },

        [`day-${2 + 4}`]: {
                open: '7:00am',
                close: '1:00pm',
        },
};

const restaurant2 = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳'],
        starterMenu: ['Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙'],
        mainMenu: ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 '],
        openingHours, // <-- 📌 1. ES6 enhanced object literal: add the entire openinghours object to the restaurant2 object
        order(categoryIndex, starterIndex, MainIndex) {
                return [this.categories[categoryIndex], this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
        },
        orderPizza(...ingredients) {
                console.log(`Here's your delicious Pizza with ${ingredients.join(', ')}`);
        },
        orderFood(mainMenuIndex, mainIngredient, ...otherIngredients) {
                console.log(
                        `Here's your delicious ${
                                this.mainMenu[mainMenuIndex]
                        } with ${mainIngredient} and ${otherIngredients.join(', ')}`
                );
        },
};
console.log(restaurant2);

// 📌 2. second es6 enhanced object literal
// 🛠  how to compute properties names dynamically
const weekdays2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours2 = {
        [weekdays[4]]: {
                open: '9:00am',
                close: '5:00pm',
        },
        [weekdays[5]]: {
                open: '6:00am',
                close: '10:00pm',
        },

        [`day-${2 + 4}`]: {
                open: '7:00am',
                close: '1:00pm',
        },
};
console.log(hours2); // { 'Friday': { openFri: '9:00am', closeFri: '5:00pm' }, 'Saturday': { openFri: '6:00am', closeFri: '10:00pm' }, 'day-6': { openFri: '7:00am', closeFri: '1:00pm' } }

