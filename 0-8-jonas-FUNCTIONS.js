/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----DEFAULT PARAMETERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648643#overview
const bookings = [];
const createBooking = (
        // .. you can compute default parameters values
        // .. you can use the default values of the parameters set before it
        flightNum,
        numPassengers = 1,
        price = 199 * numPassengers
) => {
        const booking = {
                flightNum,
                numPassengers,
                price,
        };
        console.log(booking);
        // pushes/adds each booking object to the bookings array
        bookings.push(booking);
};
createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}
// -  how to overwrite default parameters by passing argument when you invoke the function
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 7, price: 0}
createBooking('LH123', 2); // {flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5); // {flightNum: 'LH123', numPassengers: 5, price: 995}
// - how to skip an argument - you add undefined in its place when you invoke the function.
createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}

console.log('-----HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648645#notes
// !! It's important to know how primitives and objects (reference) types works in the context of functions
const flight = 'LH234';
const leanna = {
        name: 'Le-Anna McGuire',
        passport: 247345578,
};

const checkIn = (flightNum, passenger) => {
        flightNum = 'LH999';
        passenger.name = `Mrs ${passenger.name}`;

        if (passenger.passport === 247345578) {
                console.log('Checked In');
        } else {
                console.log('Checked Wrong passport');
        }
};
checkIn(flight, leanna);
// ... the flight variable is a primitive type (string)
// ... when a primitive type is pass to an object it's a copy of the original value
console.log(flight); // LH234
// ... the leanna object/variable is a reference type (object)
// ... when we pass a reference type (object) to a function
// ... what is copied is just a reference to the object in the memory heap
// ... so whatever changes are made to the the leanna variable inside the function
// ... will also apply to the leanna object outside the function when it is pass to the function as an argument (passenger)
// ... hence the leanna object values will be updated/change also
console.log(leanna); // {name: 'Mrs Le-Anna McGuire', passport: 2345578}
// is the same as writing
// flightNum = flight;
// passenger = leanna;

const newPassport = (person) => {
        person.passport = Math.trunc(Math.random() * 100000);
};

// !! please note that the interaction of different functions with the same object can create issues
// !! be aware of this
newPassport(leanna);
checkIn(flight, leanna);
// console.log(leanna);

// # javascript does not pass be by reference only by values
// # in javascript we pass a reference of the values TO the function and not BY reference

console.log('-----HIGHER ODER #1: FUNCTIONS ACCEPTING CALLBACK FUNCTIONS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648655#questions
// There are two types of higher order functions:
// * 1. Function that receives another function... like addEventListener for e.g.

// *** EXAMPLE 1 ***
const oneWord = (str) => str.replace(/ /g, '').toLowerCase();
const upperFirstWord = (str) => {
        const [firstWord, ...others] = str.split(' ');
        return [firstWord.toUpperCase(), ...others].join(' ');
};

// - how to pass a function to another function
// ... step 1: set the a str and the upperFirstWord fn to the higher oder transformer function as parameters
const transformer = (str, fn) => {
        console.log(`The original string: ${str}`); // The original string: JAVASCRIPT is the best!
        // ... step 3: invoke the upperFirstWord/oneWord fn like this:
        console.log(`Transformed string: ${fn(str)}`); // Transformed string: javascriptisthebestest!!!!

        // functions also have properties cause they are objects
        // 'mname' property:
        console.log(`Transformed by: ${fn.name === 'oneWord' ? `${fn.name} 1️⃣` : `${fn.name} 🆙`}`);
        // Transformed ny: upperFirstWord 🆙
        // Transformed by: oneWord  1️⃣
};
// ... step 2: invoke the transformer higher order function then
// ... then pass the str and the upperFirstWord or oneWord function that are callback functions as an arguments like this:
transformer('Javascript is the best!', upperFirstWord); // <-- callback fn
transformer('Javascript is the bestest!!!!', oneWord); // <-- callback fn

// *** EXAMPLE 2 ***
const high5 = () => {
        console.log('👋🏾');
};
document.body.addEventListener('hover', high5); // <-- callback fn

console.log('-----HIGHER ODER #2: FUNCTIONS RETURNING FUNCTIONS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648657#overview
// * 2. Function that returns new function

// *** EXAMPLE 1 ***
const greet = function (greeting) {
        return function (name) {
                console.log(`${greeting} ${name}`);
        };
};
const greeterHey = greet('Hey');
const greeterWadUp = greet('Wad Up!');
greeterHey('Leanna'); // Hey Leanna
greeterWadUp('Willis'); // Wad Up! Willis
greet('Hello sexy')('Terry'); // Hello sexy Terry

// write is an arrow function...
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterBye = greetArr('Byeeeee!!');
greeterBye('James'); // Byeeeee!! James
greetArr('Adios')('Marvin'); // Adios Marvin

console.log('-----FUNCTION METHODS: CALL() APPLY()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648663#overview
// https://www.javascripttutorial.net/javascript-function-type/
// A function object has three important methods: apply(), call() and bind().
// ... the apply() and call() methods call a fn with a given 'this' value and arguments
// ... differences between the apply() and call() method:
// ... 1. you pass the arguments to the apply() method as an array-like object - say.apply(cat, ['What does a cat say?']);
// ... 2. you pass the arguments to the call() function individually - say.call(cat, 'What does a cat say?')

const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
                console.log(`${name} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`);
        },
};
lufthansa.book('LHFN', 'Keron');

// console.log('-----call() method-----');
// // *

// console.log('-----apply() method-----');
// // *
