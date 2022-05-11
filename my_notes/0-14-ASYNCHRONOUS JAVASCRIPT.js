/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log(`----  ASYNCHRONOUS JAVASCRIPT, AJAX AND APIS ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649283#questions/13295838

// 📌 SYNCHRONOUS CODE - BLOCKING
// 👉🏽 Synchronous code is executed line by line
// 👉🏽 Each line of code waits for previous line to finish
// 👎🏽 Long-running operations block code execution 
// 🤔 Example:
const header = document.querySelector('.header');
header.style.color = 'red';
// alert('Please select'); // <-- blocking
header.style.color = 'orange';

// 📌 ASYNCHRONOUS CODE - NON-BLOCKING
// 👉🏽 Asynchronous code is executed after a task that runs in the “background” finishes
// 👍🏽 Asynchronous code is non-blocking
// 👉🏽 Execution doesn’t wait for an asynchronous task to finish its work
// 👉🏽 Callback functions alone do NOT make code asynchronous!
// 🤔 Example:
const header2 = document.querySelector('.header');
header2.style.color = 'red';
// setTimeout(function () { // <-- async function (non blocking)
//         alert('Please select');
// }, 5000);
header2.style.color = 'green';
