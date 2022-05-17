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

console.log('----OPTIONAL CHAINING (?.)----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648565#announcements
// 👉🏼 You can use optional chaining you check if a certain property is present in an object, if not, it will return undefined

// 👎🏽 the old way
// 👷🏽‍♂️🛠 how to check if openingHours and fri properties are present in the restaurant object
if (restaurant.openingHours && restaurant.openingHours.fri) {
        console.log(restaurant.openingHours.fri.open); // 9:00am
}

// 👍🏽 the new way with optional chaining (?.)
// 👷🏽‍♂️🛠 how use optional chaining on object properties
// ... if the property (fri) before the question mark is not present in the object, it will return undefined
console.log(restaurant.openingHours?.fri?.open); // undefined

// 🤔🌍 Real World Examples:
// ... loop through the weekdays array and check if the property (open) is present in the restaurant.openingHours object
for (const day of weekdays) {
        // .. checks if the open property exists in the restaurant.openingHours object on a particular day if not then it will be 'closed'
        const open = restaurant.openingHours[day]?.open ?? 'closed';
        console.log(`on ${day}, we open at ${open}`);
}

// 👷🏽‍♂️🛠 how to use optional chaining on object methods
// ... if the property (order) before the question mark is not present in the object, it will return undefined.. use nullish coalescing operator ?? to return a default value
console.log(restaurant.order?.(0, 0, 0) ?? 'order method is not present'); // ['Italian 🇮🇹', 'Focaccia 🥐', 'Pizza 🍕']
console.log(restaurant.pizza?.() ?? 'pizza method is not present'); // undefine (pizza method is not present)

// 👷🏽‍♂️🛠 how to use optional chaining on arrays
// ... if the property (0) before the question mark is not present in the array, it will return undefined.. use nullish coalescing operator ?? to return a default value
const users = [
        {
                name: 'Willis',
        },
        {
                email: 'willis@gmail.com',
        },
];
console.log(users[0]?.name ?? 'name is not present'); // Willis