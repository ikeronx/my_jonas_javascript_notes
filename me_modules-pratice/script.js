// console.log(`---- EXPORTING AND IMPORTING IN ES6 MODULES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649463#questions

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