// console.log(`---- EXPORTING AND IMPORTING IN ES6 MODULES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649463#questions

// 📌 Importing Module
// 👷🏽‍♂️🛠 How to import multiple modules:
// 👷🏽‍♂️🛠 And how to change the name of an imported module using 'as':
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 9); // 9 bread added to cart
// console.log(price, tq); // 237 23

// 👷🏽‍♂️🛠 How to import all the exports of a module at the same time:
import * as ShoppingCart from './shoppingCart.js'; // 237 23

// 👷🏽‍♂️🛠 How to import export defaults
// 👉🏼 We can name export default anything we want when we import it
// eslint-disable-next-line import/first
import add, { cart } from './shoppingCart.js';
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649495#questions

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';

ShoppingCart.addToCart('bread', 8); // 9 bread added to cart
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

add('pizza', 12); // 12 pizza added to cart

console.log('---- INTRODUCTION TO NPM----');

const state = {
        cart: [
                { product: 'bread', quantity: 5 },
                { product: 'rice', quantity: 5 },
        ],
        user: { loggedIn: true },
};

// const stateClone = { ...state }
// create a deep copy of the state object so you wont change the values of the original object (state) being referenced
const stateClone = cloneDeep(state)
stateClone.user.loggedIn = false
console.log(stateClone.user.loggedIn); // false
console.log(state.user.loggedIn); // true
console.log(state);

// const getProducts = (object) => object.cart.flatMap((cartItem) => Object.values([cartItem.product]));
// console.log(getProducts(state));// ['bread', 'rice']

if (module.hot) {
    module.hot.accept()
}


console.log(`---- CONFIGURING BABEL AND POLYFILLING ----`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649505#questions/17644824

class Person {
        greeting = 'hey'
        constructor(name) {
                this.name = name;
                console.log(`${this.greeting}, ${this.name}`);       
        }
}
const keron = new Person('keron');

console.log('Keron' ?? null);

console.log(cart.find(el =>  el.quantity >= 7
));

import 'core-js/stable';
// import 'core-js/stable/array/find'

import "regenerator-runtime/runtime.js";