/* eslint-disable no-console */
/* eslint-disable no-console */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

// /////////////////////////////////////
// OBJECTS DESTRUCTURING - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648527#notes
// Data needed for first part of the section
const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳'],
        starterMenu: ['Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙'],
        mainMenu: ['Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 '],
        openingHours: {
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
        },
        // 1. how to pass an object to a function as an argument
        orderDelivery({ startIndex = 1, mainIndex = 1, address, time = `4:00` }) {
                console.table(`Order received! ${this.starterMenu[startIndex]}
            and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`); // Order received! Focaccia 🥐 and Pizza 🍕 will be delivered to Via Angelo Tavanti 23, Firenze, Italy at 11:25
        },
};

console.log('----REAL WORLD EXAMPLES----');
// ******* Real World Example ********
// 1. passing objects as arguments
restaurant.orderDelivery({
        time: '22:30',
        address: 'Via Angelo Tavanti 23, Firenze, Italy',
        mainIndex: 2,
        startIndex: 2,
}); // Order received! Garlic Bread 🥖 and Risotto 🍲 will be delivered to Via Angelo Tavanti 23, Firenze, Italy at 22:30
// ... default values for arguments can be set in the function definition itself ...
restaurant.orderDelivery({
        address: 'Rose Hall',
}); // Order received! Garlic Bread 🥖 and Risotto 🍲 will be delivered to Via Angelo Tavanti 23, Firenze, Italy at 4:00

console.log('----DESTRUCTING OBJECTS----');
// ******* Destruct objects ********
// - how to destructure an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}[[Prototype]]: Object (4) ['Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳']

// - how to change the property names of an object
// eslint-disable-next-line prettier/prettier
const {
        name: restaurantName,
        openingHours: hours,
        categories: tags
} = restaurant;
console.log(restaurantName, hours, tags); // Classico Italiano..

// - how to set default values for an object property if it is not defined in the object
const { menu = [], starterMenu: Starters = [] } = restaurant;
console.log(menu, Starters); // [] ['Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙']

// - how to switch or mutate an object variables
let a = 24;
let b = 12;

const obj = {
        a: 231,
        b: 29,
        c: 30,
};
({ a, b } = obj); // destructuring an object and setting the variables to the values of the object properties (a = 231, b = 29) and then destructuring the object again
console.log(a, b); // 231 29

// - how to destructure nested objects
const {
        openingHours: {
                fri: { open: openFri, close: closeFri },
                sat: { open: openSat, close: closeSat },
        },
} = restaurant;
console.log(`
Open Friday: ${openFri} 
Close Friday: ${closeFri} 
Open Saturday: ${openSat} 
Close Saturday:  ${closeSat}
`); // Open Friday: 11 Close Friday: 23 Open Saturday: 0 Close Saturday: 24

console.log('----THE SPREAD OPERATOR (...) OBJECTS----');
// ****** SPREAD OPERATOR (OBJECTS) ********
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648535#notes
// - how to create a new object from an existing one
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant); // { foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: [ 'Italian 🇮🇹', 'Pizzeria 🇺🇸', 'Vegetarian 🥗', 'Organic 🍳' ], starterMenu: [ 'Focaccia 🥐', 'Bruschetta 🥪', 'Garlic Bread 🥖', 'Caprese Salad 🥙' ], mainMenu: [ 'Pizza 🍕', 'Pasta 🍝', 'Risotto 🍲 ' ], openingHours: { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }, order: [Function], orderDelivery: [Function], founder: 'Guiseppe' }

// - how to copy an object using spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano

console.log('----REST PATTERN and PARAMETERS----');
// ****** REST  OPERATOR (OBJECTS) *********
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648543#announcements
// REST OPERATOR, is on the left hand side of the assignment operator, the rest operator is used to collect the remaining arguments into an array
// rest element should always be the last element and there can only be one rest element in an object literal
const { sat, ...weekDays } = restaurant.openingHours; // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }
console.log(sat, weekDays); // { open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// ******* DIFFERENCE BETWEEN SPREAD OPERATOR AND REST OPERATOR********
// Spread operator serves to copy all the elements into a new array
// Spread is used on the Right hand side of the assignment operator
// Rest operator is used to collect the remaining arguments into an array
// Rest operator is on the LEFT hand side of the assignment operator
// Rest element should always be the last element and there can only be one rest element in an array
