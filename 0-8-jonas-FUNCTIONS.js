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
// - how to skip an argument by adding undefined in its place when you invoke the function.
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
// ... when it was pass to function as a 'passenger'argument will also apply to the leanna object outside the function
// ... hence the leanna object values will be updated/change also
console.log(leanna); // {name: 'Mrs Le-Anna McGuire', passport: 2345578}
// is the same as writing
// flightNum = flight;
// passenger = leanna;

const newPassport = (person) => {
        person.passport = Math.trunc(Math.random() * 100000);
};

// !! example of the interaction of different functions with object can create issues
// !! be aware of this
newPassport(leanna);
checkIn(flight, leanna);
// console.log(leanna);

// # javascript does pass be by reference only by values
// # in javascript we pass a reference of the values TO the function and not BY reference

console.log('-----FIRST-CLASS AND HIGHER-ORDER FUNCTIONS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648649#questions

