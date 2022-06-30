// console.log(`---- EXPORTING AND IMPORTING IN ES6 MODULES ---`);
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

export { totalPrice, totalQuantity as tq, cart };

// 👷🏽‍♂️🛠 How to export export defaults:
// 👉🏼 We use export defaults when we want to export one thing per module
export default function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
}