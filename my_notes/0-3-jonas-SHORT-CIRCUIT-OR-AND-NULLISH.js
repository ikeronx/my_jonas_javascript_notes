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

        // 1. how to make a function return an array and destruct the result into different variables.... receive values from the object's arrays (mainMenu, etc) using indexes
        order(categoryIndex, starterIndex, MainIndex) {
                return [this.categories[categoryIndex], this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
        },
        // 2. how to make a function accept multiple arguments then use the spread operator to pass those arguments...
        orderPizza(...ingredients) {
                console.log(`Here's your delicious Pizza with ${ingredients.join(', ')}`);
        },
        // 2. how to make a function accept multiple arguments then use the spread operator to pass those arguments...  receive values using spread operator
        // orderPasta(ing1, ing2, ing3) {
        //         console.log(`Here's your delicious Pasta with ${ing1}, ${ing2}, and ${ing3}`);
        // },
        // 3. how to use rest operator as an argument which returns an array
        orderFood(mainMenuIndex, mainIngredient, ...otherIngredients) {
                console.log(
                        `Here's your delicious ${
                                this.mainMenu[mainMenuIndex]
                        } with ${mainIngredient} and ${otherIngredients.join(', ')}`
                );
                // console.log(`The main ingredient is ${mainIngredient}`);
                // console.log(`The other ingredients are ${otherIngredients}`);
        },
};

console.log('----SHORT CIRCUITING (|| and &&)----');
// ****** SHORT CIRCUITING *********
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648547#announcements
// 👉 short circuiting means that if the first value is a truthy value then it will immediately return that value and not evaluate the second value
console.log('----OR----');
console.log(3 || 'Keron'); // 3
console.log(0 || 14); // 14
console.log('' || true); // true
console.log(null || 'money'); // money
console.log(undefined || null); // <-- both falsy values undefined|| 'Keron'); // Keron
console.log(null || undefined || 0 || '' || false || "what's up" || 23); // what's up

// ****** Real world examples*********
// check if restaurant guest exist in restaurant object
// restaurant.numGuests = 25;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10
// 💡 shorter way to write this example using the OR operator
// can use the OR operator to set a default value for a variable if it is not defined in the object
const guest2 = restaurant.numGuests || 15;
console.log(guest2); // 15

console.log('----AND----');
// if both values is true it returns the last value of the expression
// if one of the values is false it returns the first value of the expression cause the whole result is false
console.log(true && 'Keron'); // Keron
console.log(false && 'Keron'); // false
console.log(true && 'Keron' && null && 23); // null

if (restaurant.orderFood) {
        restaurant.orderFood(0, 'Chicken 🍗', 'Pineapple 🍍');
}
// 💡 shorter way to write this if/else example using the && operator
// can use the && operand to execute a block of code if the condition is true
restaurant.orderFood && restaurant.orderFood(0, 'Chicken 🍗', 'Pineapple 🍍'); // Here's your delicious Pizza 🍕 with Chicken 🍗 and Pineapple 🍍

console.log('----NULLISH ----');
// nullish coalescing operator
// if the value is null or undefined it will return the value on the right side of the operator
// if the value is not null or undefined it will return the value on the left side of the operator
restaurant.numGuests2 = 0;
const guest3 = restaurant.numGuests2 ?? 15;
console.log(guest3); // 0

console.log('----LOGICAL ASSIGNMENT OPERATOR----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433404#announcements

const rest1 = {
        name: 'Classico Italiano',
        numGuests: 25,
        owner: 'Keron Williams',
};

const rest2 = {
        name: 'Ristorante Roma',
        numGuests: 0,
};

console.log('---||=---');
// OR assignment operator
// 🛠  how to add a new property to an object using the logical assignment operator
rest1.owner ||= 'Will Smith';
rest2.owner ||= 'James Gordon';
console.log(rest1.owner); // Keron Williams
console.log(rest2.owner); // James Gordon

console.log('---??=---');
// Nullish coalescing assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 15;
console.log(rest1.numGuests); // 10
console.log(rest2.numGuests); // 0

console.log('---&&=---');
// AND assignment operator

// 🛠 how to replace a property value in an object using the logical assignment operator &&=
// rest1.owner = rest1.owner && 'Anonymous1';
rest1.owner &&= 'Anonymous1';
console.log(rest1.owner); // Anonymous1

// rest2.owner = rest2.owner && 'Anonymous2';
rest2.owner &&= 'Anonymous2';
console.log(rest2.owner); // Anonymous2
