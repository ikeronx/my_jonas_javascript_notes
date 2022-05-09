/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
console.log('-----CONVERTING AND CHECKING NUMBERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648873#questions

// DIFFERENT DATA! Contains movement dates, currency and locale
const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
        interestRate: 1.2, // %
        pin: 1111,

        movementsDates: [
                '2019-11-18T21:31:17.178Z',
                '2019-12-23T07:42:02.383Z',
                '2020-01-28T09:15:04.904Z',
                '2020-04-01T10:17:24.185Z',
                '2022-02-11 T14:11:59.604Z',
                '2022-02-16T17:01:17.194Z',
                '2022-02-17T23:36:17.929Z',
                '2022-02-18T10:51:36.790Z',
        ],
        currency: 'EUR',
        locale: 'pt-PT', // de-DE
};

const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,

        movementsDates: [
                '2019-11-01T13:15:33.035Z',
                '2019-11-30T09:48:16.867Z',
                '2019-12-25T06:04:23.907Z',
                '2020-01-25T14:18:46.235Z',
                '2020-02-05T16:33:06.386Z',
                '2020-04-10T14:43:26.374Z',
                '2020-06-25T18:49:59.371Z',
                '2020-07-26T12:01:20.894Z',
        ],
        currency: 'USD',
        locale: 'en-US',
};

const accounts = [account1, account2];

// floating point numbers
console.log(23 === 23.0); // true <-- all numbers in JS are represented internally as floating point numbers. So basically always as decimals.

// Base 10 - 0 to 9
// Binary base 2 - 0 and 1
console.log(0.1 + 0.2); // numbers are stored inn 64 base 2 format. So that means that numbers are always stored in a binary format So basically, they're only composed of zeros and ones.
console.log(0.1 + 0.2 === 0.3); // false <-- should be true but because they're stored in binary format

console.log('-----how to convert a string to a number-----');
// ❗ - how to convert string to number
console.log(Number('23')); // 23
console.log(+'23.5'); // 23.5 <-- + sign is used to convert to number

// parseInt: is used to convert a string to an integer
console.log(Number.parseInt('30px', 10)); // 30 <-- parseInt() converts a string to an integer and removes letters and other characters from the string !! please the string needs to start with a number for it to work... second argument is the radix. Base 10 is the base of the number system.
console.log(Number.parseInt('ee30px', 10)); // NaN <-- parseInt() wont work with a string that doesn't start with a number
console.log(parseFloat('23.5')); // 23.5 <-- parseFloat() converts to floating point number

// ❗ parseFloat: is used to convert a string to a floating point number
console.log(Number(parseFloat('23.5rem'))); // 23.5 <-- parseFloat() converts to floating point number and removes letters and other characters from the string

console.log('-----how to check if a value is a number-----');
// isNAN: is used to check if a value is a number (means is not a number)
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN('23')); // false
console.log(Number.isNaN(+'23X')); // true
console.log(Number.isNaN(23 / 0)); // false <-- any number deviled by 0 gives us infinity which is not a number.. infinity is not a number

// ❗ isFinite: is the better way to check if a value is a number
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

// - how to calculate the cubic root of a number
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

console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number(MAX_SAFE_INTEGER)); // 9007199254740991

// ~~~ BIGINT is a new predictive type that was added tp js to store number as large as possible ~~~
// - how to use BIGINT in js... add 'n' to the end of the number
console.log(900719925474099187897987979797n); // 9007199254740991n
console.log(BigInt(90071992));

// Bigint works with operators
console.log(100000n + 100000n); // 200000n;
console.log(87871327371291327n * 29312830918903890109182n); // BigInt(87871327371291327n) * BigInt(29312830918903890109182n);

// can't mixed bigInt numbers with regular numbers..wont compute
// console.log(100 + 100n); // TypeError: Cannot convert a BigInt to a number
// console.log(Math.sqrt(16n));
// .. use bigInt() to convert to the number to a  bigInt number then compute
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // 'bigint'
console.log(20n === '20'); // true

// Divisions
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

console.log(`------ CREATING DATES ------`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648895#questions/16145200

console.log(`------ 4 different ways we can create a date ------`);

// 1: can create a new date by using the new Date() method
const now = new Date(); // current date
console.log(now); // hu Feb 17 2022 13:19:23 GMT-0500 (Eastern Standard Time) <- shows current date and time

// 2: can pass a string into the date constructor fn a date string to create a new date
console.log(new Date('Thu Feb 17 2022 13:22:53')); // Thu Feb 17 2020 00:00:00 GMT-0500 (Eastern Standard Time)
console.log(new Date('Dec  25, 2015')); // Thu Feb 17 2020 00:00:00 GMT-0500 (Eastern Standard Time)

// .. can pass date strings from an object to create a new date
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)
console.log(account1.movementsDates.map((date) => new Date(date))); // Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)

// 3: can pass into the date constructor fn the year, month, day, hour, minute, second, millisecond to create a new date
console.log(new Date(2037, 0, 1, 5, 30, 12)); // Wed Jan 01 2037 05:30:12
console.log(new Date(2020, 10, 31)); // ue Dec 01 2020 00:00:00 <-- js auto corrects the date to the next day

// 4: can pass into the date constructor fn the amount of milliseconds since the epoch (1/1/1970) - epoch is the first day of the year 1970 since the beginning of the UNIX time system (1/1/1970) to create a new date
console.log(new Date(0)); // Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)
// ... create a date that's three days after epoch (unix) time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Thu Jan 03 1970 00:00:00 GMT-0500 (Eastern Standard Time)
// Timestamp of day number 3: 259200000

console.log(`------ how we can use methods to set or get components of a date ------`);
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19 <-- the day of the month
console.log(future.getDay()); // 4 <-- the day of the week... 0 is Sunday, 1 is Monday, etc
console.log(future.getHours()); // 15 <-- the hour of the day
console.log(future.getMinutes()); // 23 <-- the minutes
console.log(future.getSeconds()); // 0 <-- the seconds
console.log(future.toISOString()); // 2037-11-19T20:23:00.000Z <-- toISOString is used ta get a formatted string of the date
console.log(future.getTime()); // 1578180800000 <-- getTime is used to get the amount of milliseconds since the epoch
// console.log(future.toDateString()); // Wed Nov 19 2037 <-- toDateString is used to get a formatted string of the date
// console.log(future.toTimeString()); // 15:23:00 GMT-0500 (Eastern Standard Time) <-- toTimeString is used to get a formatted string of the date
// console.log(future.toLocaleString()); // 11/19/2037 3:23:00 PM <-- toLocaleString is used to get a formatted string of the date and time
// console.log(future.toLocaleDateString()); // 11/19/2037 <-- toLocaleDateString is used to get a formatted string of the date
// console.log(future.toLocaleTimeString()); // 3:23:00 PM <-- toLocaleTimeString is used to get a formatted string of the time
// console.log(future.toJSON()); // 2037-11-19T20:23:00.000Z <-- toJSON is used to get a string of the date
// console.log(future.toString()); // Wed Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time) <-- toString is used to get a string of the date
// console.log(future.valueOf()); // 2142274980000 <-- valueOf is used to get the number of milliseconds since the epoch
// console.log(future.getTimezoneOffset()); // -300 <-- getTimezoneOffset is used to get the timezone offset in minutes

// eslint-disable-next-line prettier/prettier
console.log(`------ how you can use the timestamp to create a new date either by passing in the timestamp or by using the valueOf method ------`);
console.log(new Date(future.valueOf())); // Wed Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time)
console.log(new Date(2142274980000)); // Wed Nov 19 2037 15:23:00 GMT-0500 (Eastern Standard Time)

console.log(`------ how to get current timestamp for the date right now ------`);
console.log(Date.now()); // 1574690981796 <-- the number of milliseconds since the epoch

console.log(`------ set version of the methods: to change year, month, date, hour etc------`);
future.setFullYear(2040); // <-- the setFullYear() method changes the year pf 'future' variable date from 2037 to 2040
console.log(future); // Mon Nov 19 2040 15:23:00 GMT-0500 (Eastern Standard Time)

const currDate = new Date();
console.log(currDate); // 2020
console.log(currDate.toLocaleDateString()); // 2020

console.log(`------ OPERATIONS WITH DATES ------`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648905#questions/16497420

console.log(`------ how to calculate dates ------`);
// - how to create a fn that takes in two dates and returns the days passed between these two dates
const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1)) / (1000 * 60 * 60 * 24); // <- convert the days to numbers

// eslint-disable-next-line prettier/prettier
const Days1 = calcDaysPassed(
    new Date(2022, 1, 17),
    new Date(2022, 1, 20)
);
console.log(Days1); // 3

console.log(`------ INTERNATIONALIZING DATES (INTL) ------`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648909#questions/16505196
// * Internationalization API allows us to format strings in different languages and countries (e.g. French, Spanish, etc)
// * Intl is a global object that provides access to the internationalization API and the formatting API for dates and numbers (e.g. currency, percent, etc) using the Intl.DateTimeFormat and Intl.NumberFormat objects respectively
// * Intl.DateTimeFormat is used to format dates and Intl.NumberFormat is used to format numbers

console.log(`------ how to use the Intl() method to format dates  ------`);
const todayDate = new Date();
const locale = navigator.language; // <- get the current locale of the browser (e.g. en-US, fr-FR, etc)
const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
};
console.log(new Intl.DateTimeFormat(locale, options).format(todayDate)); // 2/18/2022, 4:55 PM
// console.log(new Intl.DateTimeFormat('en-US', options).format(todayDate)); // 2/18/2022
// console.log(new Intl.DateTimeFormat('ar-SA').format(todayDate)); // ٢٠/١٨/٢٢٢٢
// console.log(new Intl.DateTimeFormat('ko-KR').format(todayDate)); // 2022년 2월 18일

console.log(`------ how to use the Intl() method to format numbers  ------`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648915#questions/16505196
const numm = 38884762.23;
const options2 = {
        style: 'currency', // 'unit' 'percent' 'currency'
        unit: 'celsius', // 'celsius' 'fahrenheit' 'kelvin'
        currency: 'EUR', // 'USD' 'EUR' 'GBP' 'ILS' 'JPY' 'BRL' 'RUB' 'INR' 'CNY' 'KRW' 'PLN'
        useGrouping: false, // true or false
};
console.log('US:       ', new Intl.NumberFormat('en-US', options2).format(numm)); // 38,884,762.23
console.log('Germany:', new Intl.NumberFormat('de-DE', options2).format(numm)); // 3.888.476,23 €
console.log('France:  ', new Intl.NumberFormat('fr-FR', options2).format(numm)); // 3 888 476,23 €
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options2).format(numm)); // ٣٨٬٨٨٤٬٧٦٢٫٢٣
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options2).format(numm)); // 3,888,476.23 원

console.log(`------ TIMERS: SETTIMEOUT() AND SETINTERVAL() ------`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648919#questions/16505196
// https://www.youtube.com/watch?v=RXWAZ0C_mds&t=93s
// * setTimeout() and setInterval() are used to set a timer that will run a function after a certain amount of time
// * setTimeout() is used to set a timer that will run a function after a certain amount of time - the set timeout timer runs just once, and then stops
// * setInterval() is used to set a timer that will run a function every certain amount of time - the set interval timer runs repeatedly until the timer is stopped

console.log(`------ setTimeOut ------`);
// *** examples ***
// - how to use setTimeout() to run a function after a certain amount of time
setTimeout(() => {
        console.log('Here is your pizza 🍕'); // <-- this code will run 5 seconds later
}, 5000);
console.log('waiting...');

// - how to pass in a argument to the setTimeout() function
const ingredients = ['Olives 🫒', 'chilli 🌶'];
const pizzaTimer = setTimeout(
        (ing1, ing2) => {
                console.log(`Here's your pizza with ${ing1} and ${ing2}`); // <-- this code will run 5 seconds later
        },
        5000,
        ...ingredients // <- her we pass the ingredients array as arguments to the setTimeout() function here
);
// .....can use clearTimeout() to delete the timer
if (ingredients.includes('chilli 🌶')) clearTimeout(pizzaTimer); // <-- the setTimeout pizzaTimer fn won't run if the 'chilli 🌶' ingredient is included in the ingredients array

// - how to use setInterval() to run a function every certain amount of time
// setInterval
setInterval(() => {
        const noww = new Date();
        // console.log(noww.toLocaleTimeString()); // <-- this code will run every second
}, 1000); // <-- this code will run every 5 secondS
// 2:00:40 PM
// 2:00:50 PM
