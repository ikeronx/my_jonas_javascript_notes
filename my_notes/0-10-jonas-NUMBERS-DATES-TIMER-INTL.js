/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
console.log('-----CONVERTING AND CHECKING NUMBERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648873#questions

// floating point numbers
console.log(23 === 23.0); // true <-- all numbers in JS are represented internally as floating point numbers. So basically always as decimals.

// Base 10 - 0 to 9
// Binary base 2 - 0 and 1
console.log(0.1 + 0.2); // numbers are stored inn 64 base 2 format. So that means that numbers are always stored in a binary format So basically, they're only composed of zeros and ones.
console.log(0.1 + 0.2 === 0.3); // false <-- should be true but because they're stored in binary format

console.log('-----how to convert a string to a number-----');
// !! - how to convert string to number
console.log(Number('23')); // 23
console.log(+'23.5'); // 23.5 <-- + sign is used to convert to number

// parseInt: is used to convert a string to an integer
console.log(Number.parseInt('30px', 10)); // 30 <-- parseInt() converts a string to an integer and removes letters and other characters from the string !! please the string needs to start with a number for it to work... second argument is the radix. Base 10 is the base of the number system.
console.log(Number.parseInt('ee30px', 10)); // NaN <-- parseInt() wont work with a string that doesn't start with a number
console.log(parseFloat('23.5')); // 23.5 <-- parseFloat() converts to floating point number

// !! parseFloat: is used to convert a string to a floating point number
console.log(Number(parseFloat('23.5rem'))); // 23.5 <-- parseFloat() converts to floating point number and removes letters and other characters from the string

console.log('-----how to check if a value is a number-----');
// isNAN: is used to check if a value is a number (means is not a number)
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN('23')); // false
console.log(Number.isNaN(+'23X')); // true
console.log(Number.isNaN(23 / 0)); // false <-- any number deviled by 0 gives us infinity which is not a number.. infinity is not a number

// !! isFinite: is the better way to check if a value is a number
console.log(Number.isFinite(23)); // true
console.log(Number.isFinite('23')); // false
console.log(Number.isFinite('23')); // false
console.log(Number.isFinite(+'23X')); // false
console.log(Number.isFinite(23 / 0)); // false <-- infinity is not a number

// isInteger: is used to check if a value is an integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.6)); // false

console.log('-----MATH AND ROUNDING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648879#announcements

console.log('-----how to get square root or cubic root of a number-----');
// - how to find the square root of a number
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5 <-- ** is the power operator
console.log(25 ** 0.5); // 5

// - hpw to calculate the cubic root of a number
console.log(Math.cbrt(27)); // 3
console.log(27 ** (1 / 3)); // 3

console.log('-----how to get the max or min value of a set of numbers-----');
// - how to get the max value
console.log(Math.max(1, 2, 3, 4, 5)); // 5
const nums = [1, 2, 3, 4, 5];
console.log(Math.max(...nums)); // 5

// - how to get the min value
console.log(Math.min(1, 2, 3, 4, 5)); // 1
const nums2 = [-16, 0, 1, 2, 3, 4, 5];
console.log(Math.min(...nums2)); // -16

// *** practice ***
// find the max and min number in the array **
const nums3 = [-80, 0, -6, '100px', 2, 3, 4, 5]; // min and max can convert strings with just integers and floats but not with letters like in this case
const numberz = nums3.map((num) => Number.parseFloat(num));
console.log(Math.max(...numberz)); // 100
console.log(Math.min(...numberz)); // -80

console.log('-----how to get random numbers-----');
// - how to get a random number
// step 1: use Math.random() to get a random number between 0 and 1 'Math.random()'
// step 2: multiply the random number by the max number 'Math.random() * any number' and then use Math.floor() to remove decimals and round down the integer
console.log(Math.floor(Math.random() * 6) + 1); // 3 <- get the number between 0 and 5 (inclusive)...add + 1 to get the number between 1 and 6 (inclusive) because the mathFloor() method removes decimals part and the + 1 is to get the number between 1 and 6 (inclusive)

// ** practice example 1: create 10 random dice roles
console.log(
        // create a empty array with the length of 10
        Array(10)
                // and fill it with random numbers between 1 and 6 (inclusive)
                .fill()
                .map(() => Math.floor(Math.random() * 6) + 1)
); // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4]

// !! practice example 2:
// use the 'Math.trunc(Math.random() * any number)'...
// to always generate random integers between two values.
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(5, 10)); // 12
/* 
~~~ longer explanation of on the min max fn  above works ~~
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649575#questions/16041200
Here's the function:

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

Now, let's follow the execution for min=5 and max=10, so for randomInt(5, 10);:
1. The Math.random() can give us a value between 0 and 1 (excluded), for example, 0.2123123.
2. The (max - min), so in our case 10 - 5 gives us 5.
3. We multiply the random fraction by 5, so 0.2123123 * 5, which gives 1.0615615.
4. We add 1 to it, which gives us 2.0615615.
5. We floor it using Math.floor(), which gives us 2.
6. We add a min value to the result of Math.floor(), which gives us 7.
7 is in the range of 5-10, but it also work for all other values of random number. For example, if Math.random() gives us 0, the result of the whole function will be 5, etc.
*/

console.log('-----how to round integers-----');
// - how to round integers
console.log(Math.trunc(23.6)); // 23 <-- removes decimal part

console.log(Math.round(15.3)); // 15 <-- rounds to the nearest integer
console.log(Math.round(15.6)); // 16 <-- rounds to the nearest integer

console.log(Math.ceil(23.8)); // 24 <-- always rounds up
console.log(Math.ceil(23.4)); // 24 <-- always rounds up

console.log(Math.floor(23.8)); // 24 <-- always rounds down
console.log(Math.floor(23.4)); // 24 <-- always rounds down

// ~~ difference between Math.trunc() and Math.floor() ~~
console.log(Math.trunc(-23.4)); // -23 <-- removes decimal part
console.log(Math.floor(-23.4)); // -24 <-- removes the decimal part and rounds it down

console.log('-----how to round decimals-----');
// - how to round decimals
console.log((2.7).toFixed(0)); // 3 !! <-- toFixed() converts a number to a string when it rounds to
console.log((2.7).toFixed(3)); // 2.700 <-- rounds to the nearest integer and adds zeros to the end base how many decimal places you add to the  toFixed() method for example toFixed(3) will round to 3 decimal places
console.log((2.435).toFixed(2)); // 2.44
console.log(+(2.435).toFixed(2)); // 2.44

console.log(+(2.435).toFixed(2)); // 80

console.log('-----THE REMINDER OPERATOR-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648885#questions/16145200

console.log('-----how to get the remainder of a division-----');

// odd numbers: gives reminders
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 2 = 3 * 2 + 2

// even numbers are divisible by 2 reminder is 0
console.log(10 % 2); // 0
console.log(10 / 2); // 5 = 2 * 2 * 2 + 2 * 2 + 1

// ** practice examples  ***
// how to use the reminder operator to change the color of the rows by the index that divisible 2 and 3 in the movements table
/*
labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
      // 0, 2, 4, 6
      if (i % 2 === 0) row.style.backgroundColor = 'orangered';
      // 0, 3, 6, 9
      if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
  });
*/

// create a fn that checks if a number is even or not
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(133)); // false

console.log('-----NUMERIC SEPARATORS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433416#questions/16145200

// underscores can use as numeric separator in js to separate numbers
console.log(1000000); // 1000000
console.log(1_000_000); // 1000000
console.log(15_00); // 1500

// ~~ please note that you can only use underscores between numbers..not at beginning, end, next to decimal points etc~~
// examples.. not valid.. throws an error:
// const PI = _3._1415_

// ... convert methods dont work on underscores
// ... avoid using them on data from a an API etc
console.log(Number('100_00')); // NAN
console.log(Number.parseInt('100_00')); // 100 <- get only part of the number not entire number

console.log('----- WORKING WITH BIGINT -----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648887#questions/16145200
