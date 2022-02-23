/* eslint-disable no-plusplus */
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
// ... will also apply to the leanna object outside the function when it is pass to the 'checkIn' function as an argument (passenger)
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

// # javascript does not pass by reference only by values
// # in javascript we pass a reference of the values TO the function and not BY reference

console.log('-----HIGHER ODER #1: FUNCTIONS ACCEPTING CALLBACK FUNCTIONS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648655#questions
// There are two types of higher order functions:
// * 1. Function that receives another function... like addEventListener using callbacks for example

// *** EXAMPLE 1 ***
const oneWord = (str) => str.replace(/ /g, '').toLowerCase();

const upperFirstWord = (str) => {
        const [firstWord, ...others] = str.split(' ');
        return [firstWord.toUpperCase(), ...others].join(' ');
};

// - how to pass a function to another function
// ... step 1: set the str and the upperFirstWord fn to the higher oder transformer function as parameters
const transformer = (str, fn) => {
        console.log(`The original string: ${str}`); // The original string: JAVASCRIPT is the best!
        // ... step 3: invoke the upperFirstWord/oneWord fn inside the transformer (higher order fn) like this:
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
// - how to make a function return another function
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

// - how to write is an arrow function...
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterBye = greetArr('Byeeeee!!');
greeterBye('James'); // Byeeeee!! James
greetArr('Adios')('Marvin'); // Adios Marvin

console.log('-----FUNCTION METHODS: CALL() APPLY()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648663#overview
// https://www.javascripttutorial.net/javascript-function-type/
// A function object has three important methods: apply(), call() and bind().
// ... the call() and apply() methods call a fn with a given 'this' value and ARGUMENTS
// ... differences between the call() and apply() method:
// ... 1. you pass the arguments to the call() function individually - say.call(cat, 'What does a cat say?')
// ... 2. you pass the arguments to the apply() method as an array-like object - say.apply(cat, ['What does a cat say?']);
// ... these methods allows us to explicity define the this keyword in any function we choose

// *** EXAMPLES ***
// - how to use the call() and bind() method
const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        book(flightNum, name) {
                console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
                this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
        },
};
lufthansa.book(239, 'Leanna McGuire');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],
};

const swiss = {
        airline: 'Swiss Air Lines',
        iataCode: 'LX',
        bookings: [],
};

// ... step 1. we can take lufthansa.book fn and store it in a new variole since javascript has first call functions:
// eslint-disable-next-line prefer-destructuring
const book = lufthansa.book;

// ... step 2. we can apply the book variable fn which is the lufthansa book method to the eurowings object
// ... to objects (eurowings, lufthansa etc) by using function methods to point to the object 'this' keyword:
console.log('-----call() method-----');
// the call() method calls the book function which will then point to the objects (swiss, lufthansa, eurowings etc) 'this' keyword then we set the arguments
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
book.call(lufthansa, 239, 'Mary Kate'); // Mary Kate booked a seat on Lufthansa flight LH239
book.call(swiss, 583, 'Alexis Rode'); // Alexis Rode booked a seat on Swiss Air Lines flight LX583

// this does not work:
// book(23, 'Sarah Williams') // <-- !! this wont work cause the 'this' keyword points points to a regular function call which the arguments equals to undefined... since the book variable is in the global name space and not a function

console.log('-----apply() method-----');
// * the apply() method takes an array of arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583

// better way:
// is using the call() method with the spread operator instead of using the apply method:
book.call(swiss, ...flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583

console.log('-----FUNCTION METHODS: BIND()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648667#overview
// * the bind() method creates a new function instance whose this value is bound to the object that you provide
// !! using the bind() method will not call the function but will return a new function instance

// *** example ***
const bookSwiss = book.bind(swiss);
const bookLufthansa = book.bind(lufthansa);
const bookEurowings = book.bind(eurowings);
bookSwiss(45, 'Robyn Fenty'); // Robyn Fenty booked a seat on Swiss Air Lines flight LX45
bookLufthansa(456, 'Kaydel Gordon'); // Kaydel Gordon booked a seat on Lufthansa flight LH456
bookEurowings(245, 'Kayum Stapleton'); // Kayum Stapleton booked a seat on Eurowings flight EW245

// - how to preset the arguments when you use the bind() method:
// ... preset the book 'flightNum' value/argument
const bookSwiss249 = book.bind(swiss, 249);
bookSwiss249('Robyn Fenty'); // Robyn Fenty booked a seat on Swiss Air Lines flight LX249
bookSwiss249('Jerry'); // Jerry booked a seat on Swiss Air Lines flight LX249

console.log('-----other situations when we can use the function methods-----');
// *** with event listeners example **
// - how to use the bind() method with event listeners:
// ... step 1. add a new properties to the lufthansa object
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
        // ... step 2. <-- make sure the function is not an arrow function when you use the bind() method to call the function in the addeventlistener below
        console.log(this);
        this.planes++;

        console.log(`${this.airline} now has ${this.planes} planes`);
};
const buyPlaneBtn = document.querySelector('.buy');
// ... step 3. bind() the lufthansa.buyPlane fn to the lufthansa object to point to the lufthansa object 'this' keyword and add the lufthansa object to the event listener as a callback function
buyPlaneBtn.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // Lufthansa now has 301 planes

// *** with partial applications ***
// * partial application means with can preset parameters
// * partial application is a function that takes a function as an argument and returns a function

// *** example ***
// - how to use the partial application method:
// ... step 1. create a fn general fn that we'll bind to
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 123.23

// ... step 2. use the bind() method to bind() the addVat to the addTax fn and preset the rate (argument) and use null in place of the object 'this' keyword we want to point to:
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(50)); // 61.5

// *** challenge ***
// ... write it as a function that returns another function
const addTax2 = (rate) => (value) => value + value * rate;
addTax2(0.1)(200); // 123.23

const addVAT2 = addTax2(0.23);
console.log(addVAT2(60)); // 79.6

console.log('-----CODING CHALLENGE #5 135-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648673#overview

// .... jonas way
const poll = {
        question: 'What is your favorite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        answers: new Array(4).fill(0),
        // get answer fn
        registerNewAnswer() {
                // Display a prompt window for the user to input the number of the option they want to vote for
                const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
                // register answer
                // if the input is a number and if the number is between 0 and 3 (inclusive) then we register the answer in the answers array at the index of the number we got as an input (answer) - 1 (because the array starts at 0) and we increment the answer by 1 (because we want to count the number of times the user answered the question) - this is the same as this.answers[answer - 1]++ but we use the array method .fill() instead of .push() because we want to overwrite the value at the index of the answer we got as an input (answer) - 1 (because the array starts at 0)
                typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
                console.log(this.answers);
                // show results of poll
                this.displayResults();
                this.displayResults('string');
        },
        // display results fn
        displayResults(type = 'array') {
                if (type === 'array') {
                        return this.answers;
                }
                if (type === 'string') {
                        return `Poll results are ${this.answers.join(', ')}`;
                }
        },
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
console.log(poll.displayResults.call({ answers: [5, 2, 3] })); // [5, 2, 3]
console.log(poll.displayResults.call({ answers: [5, 2, 3] }, 'string')); // Poll results are 5, 2, 3
console.log(poll.displayResults.call({ answers: [5, 2, 3, 9, 6] })); // [5, 2, 3, 9, 6]

console.log('-----IIFE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648679#overview
// * Immediately Invoked Function Expression (IIFE)
// ... IIFE is only executed once when the page loads
// ... best use-case is with async await functions and it's a way to avoid the 'this' keyword confusion when using the 'this' keyword inside the IIFE

// - how  to use the IIFE:
// *** examples ***
(function () {
        console.log('This will never run again');
})(); // This will never run again

(function (a, b) {
        console.log(a + b);
})(1, 2); // 3

// ... arrow function version
((a, b) => console.log(a + b))(1, 2); // 3

// ... block version (with curly braces)
{
 console.log('hello');
}

console.log('-----CLOSURES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648683#overview
// * closures make the function remember and access the variables from the scope in which it was created even if that execution context is gone
// ... closures are useful when you want to access a variable from a function that has already returned

// - how to use closures:
// *** example ***
const secureBooking = function () {
        let passenger = 0;

        // ... booker fn below has access to this function scope (variables/context) and return function due to the closure
        return function () {
                passenger++;
                console.log(`${passenger} passenger booked a seat`);
        };
};

// ... the booker fn is returned from the secureBooking fn and it has access to the passenger variable in the secureBooking fn because it's a closure
const booker = secureBooking();
booker(); // 1 passenger booked a seat
booker(); // 2 passenger booked a seat
booker(); // 3 passenger booked a seat

// you can inspect the variable environment of a fn like this:
console.dir(booker);

console.log('-----more closure examples-----');
// *** example 1 ***
let f;
const g = function () {
        const a = 23;
        f = function () {
                console.log(a * 2);
        };
};

const h = function () {
        const b = 600;
        f = function () {
                console.log(b * 2);
        };
};
g();
f(); // 46
h();
f(); // 120

// *** example 2 ***
const boardPassengers = function (num, wait) {
        const perGroup = num / 3;
        // ... fn will execute after
        setTimeout(function () {
                console.log(`We are boarding all ${num} passengers`);
                console.log(`There are 3 groups, each with ${perGroup} passengers`);
        }, wait * 1000);

        console.log(`We'll start boarding in ${wait} seconds`);
};

const bording = boardPassengers(180, 3);



