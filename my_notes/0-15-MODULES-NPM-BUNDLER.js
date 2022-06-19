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

console.log(`---- EXPORTING AND IMPORTING IN ES6 MODULES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649463#questions
