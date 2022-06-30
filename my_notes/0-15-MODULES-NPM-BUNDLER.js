/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
('use strict');

console.log(`---- AN OVERVIEW OF MODERN JAVASCRIPT DEVELOPMENT ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649441#questions

// 📌 THREE STEPS OF MODERN JAVASCRIPT DEVELOPMENT:
// 1️⃣ DEVELOPMENT 👉🏼 Divide code into multiple modules (e.g - index.js, dom.js, math.js) and 3rd-Party packages from NPM (Node Package Manager) such as React, Leaflet, Chakra.ui )
// 2️⃣ BUILD PROCESS 👉🏼 The modules and 3rd-Party packages are compressed into one big Javascript Bundle by using a bundler such as webpack / parcel / vite and then we the transpiled/polyfilled the modern js code into old js es5 syntax by using babel
// 3️⃣ DEPLOYMENT 👉🏼 The Javascript Bundle (the final file) is then deployed / send to production which means the app is being use by real users

console.log(`---- OVERVIEW OF MODULES IN JAVASCRIPT ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649453#questions

// 📌 WHY MODULES:
// 👉🏼 Compose software: Modules are small building blocks that we put together to build complex applications;
// 👉🏼 Isolate components: Modules can be developed in isolation without thinking about the entire codebase;
// 👉🏼 Abstract code: Implement low-level code in modules and import these abstractions into other modules;
// 👉🏼 Organized code: Modules naturally lead to a more organized codebase;
// 👉🏼 Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

// ❗️ Modules are imported (dependencies) synchronously and downloaded asynchronously.
// ❗️ Modules are imported into the main.js / index.js file before the main.js /index.js code is executed
// ❗️ Modules that imported linked to exported modules (dom.js, rand.js)

// 🤔 Example:
// import { rand } from './math.js'; // dependencies
// import { showdice } from './dom.js'; // dependencies
// const dice = rand(1, 6, 2) // index.js
// showdice(dice) // index.js

/*
console.log(`---- EXPORTING AND IMPORTING IN ES6 MODULES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649463#questions

// 📌 Exporting Module
// 👷🏽‍♂️🛠 How to export a module:
const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
};

// 👷🏽‍♂️🛠 How to export multiple modules
// 👷🏽‍♂️🛠 And how to change name of exported module using 'as'
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// 👷🏽‍♂️🛠 How to export export defaults:
// 👉🏼 We use export defaults when we want to export one thing per module
export default function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
};

// 📌 Importing Module
// 👷🏽‍♂️🛠 How to import multiple modules:
// 👷🏽‍♂️🛠 And how to change the name of an imported module using 'as':
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 9); // 9 bread added to cart
// console.log(price, tq); // 237 23

// 👷🏽‍♂️🛠 How to import all the exports of a module at the same time:
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 9); // 9 bread added to cart
console.log(ShoppingCart.totalPrice, ShoppingCart.tq); // 237 23

// 👷🏽‍♂️🛠 How to import export defaults
// 👉🏼 We can name export default anything we want when we import it
// eslint-disable-next-line import/first
import add from './shoppingCart.js';
add('pizza', 12); // 12 pizza added to cart
*/

console.log(`---- TOP-LEVEL AWAIT (ES2022) ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433458#questions/16445282
// 👉🏼 we can use 'await' keyword outside an async which call a top-level await
// 👉🏼❗️ please note it can only work in modules... won't work in a normal script that doesn't have the type 'module'

// 👷🏽‍♂️🛠 How to use top-level await outside an async fn:
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
// console.log(data);

// .. 🤔 another example using await to get return values from a function that returns a promise:
const getPost = async () => {
        try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok) throw new Error(`${errorMsg} (${response.status})`);
                const data = await res.json();

                return { title: data.at(-1).title, text: data.at(-1).body };
        } catch (error) {
                console.log(error.message);
        }
};

const lastPost = await getPost();
console.log(lastPost);
// text: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
// title: "at nam consequatur ea labore ea harum"

console.log(`---- THE MODULE PATTERN ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649469#questions/16580844
// 👎🏽 the old way of importing modules working with modules:

const ShoppingCart2 = (() => {
        const cart = [];
        const shippingCost = 10;
        const totalPrice = 237;
        const totalQuantity = 23;

        const addToCart = function (product, quantity) {
                cart.push({ product, quantity });
                console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
        };

        const orderStock = function (product, quantity) {
                console.log(`${quantity} ${product} ordered from supplier`);
        };

        return {
                addToCart,
                cart,
                totalPrice,
                totalQuantity,
        };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2); 
console.log(ShoppingCart2.shippingCost);

console.log(`---- commonJS MODULES---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649477#questions
// 👉🏼 commonJS is a different module system
// 👎🏽 the old way of importing modules

// 👷🏽‍♂️🛠 How the commonJS module system works:
/*
exports.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
        );
    };

   // Import
    const { addTocart } = require('./shoppingCart.js');
*/