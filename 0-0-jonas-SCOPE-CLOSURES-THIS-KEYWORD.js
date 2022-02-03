/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
// EXECUTION CONTEXT - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648479#notes
// - https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/?ck_subscriber_id=1368032892

// /////////////////////////////////////
// CLOSURES - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648487#notes
// function year(birthYear) {
//         function calcAge() {
//                 const age = 2037 - birthYear
//                 return age
//         }
//         return calcAge()
// }
// console.log(year(1991))
/*
function calcAge(birthYear) {
        const age = 2037 - birthYear

        function printAge() {
                const firstName = 'steven'

                const outPut = `${firstName}You are ${age}, born in is ${birthYear}`
                console.log(outPut)

                if (birthYear >= 1981 && birthYear <= 1996) {
                        // var millennial = true <-- var are function scoped
                        const str = `You're a millenial! ${firstName}` // <- const / let are block scoped
                        console.log(str) // you're a millenial! jonas
                }
                // console.log(str) // undefined... cause it's outside the block where const is defined
                // console.log(millennial) // true

                function add(a, b) {
                        // <- function are block scoped
                        return a + b
                }
        }
        // console.log(str) // undefined
        // console.log(add(1, 2)); // Error: add is not defined
        printAge()
        return age
}

const firstName = 'Jonas'
calcAge(1991)
*/

/// ////////////////////////////////////
// hOISTING Practice is to declare a variable before using it

// Hoisting with variables
/* console.log(city) // undefined
console.log(age) // uncaught reference error because city is not defined
console.log(lastName) // uncaught reference error because

var city = 'New York'
const age = 20
const lastName = 'james'

// hoisting with functions
console.log(textMessage()) // uncaught reference error because textmessage /is not defined
console.log(location()) // uncaught reference error because location is not defined
console.log(greeting()) // hello

const textMessage = () => 'Fayssal is a sexy muscle beast'

const location = function () {
        return 'New York'
}

function greeting() {
        return 'hello'
}
*/

// /////////////////////////////////////
// THIS KEYWORD - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648505#notes
/*
console.log(this) // window

// - this keyword inside a function
const calcAge2 = function (birthYear) {
        console.log(2037 - birthYear) // 46
        console.log(this) // undefined <- regular  point to undefined in strict mode
}
calcAge2(1991)

// - this keyword inside an arrow function
const calcArrowAge2 = birthYear => {
        console.log(2037 - birthYear) // 46
        console.log(this) // window <- arrow function point to the lexical scope it in which is the window
}
calcArrowAge2(1991)

// - this keyword inside a method
const person = {
        name: 'steven',
        city: 'New York',
        year: 1902,
        calcAge() {
                console.log(this) // {name: "steven", city: "New York", calcAge: ƒ}
                console.log(this.name) // {name: ""}
                console.log(2037 - this.year) // 135
        },
}
person.calcAge()

// - prototypal inheritance using this keyword inside objects
const keron = {
        year: 1991,
}
// inherits the person object calAge method
keron.calcAge = person.calcAge
keron.calcAge() // 46
console.log(keron.this) // undefined <-- it's a regular function when it inherits an object

/*
// other examples 
let myFunction = function () {
        console.log(this)
}
myFunction() //undefined

let higher = function () {
let myArrowFunction = () => {
        console.log(this)

}
myArrowFunction() //undefined
}
console.log(higher()) //undefined

let myArrowFunction2 = () => {
        console.log(this)

}
myArrowFunction2() // window
*/

// /////////////////////////////////////
// ARROW FUNCTION  Vs. REGULAR FUNCTION - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648507#notes

const jonas = {
        firstName: 'Jonas',
        year: 1981,
        calcAge2() {
                console.log(2037 - this.year); // {firstName: "Jonas", year: 1981, calcAge2: ƒ}

                // using a method inside a method
                // solution 1
                // const self = this
                // const isMillennial = function () {
                //         console.log(self) // {firstName: "Jonas", year: 1981, calcAge2: ƒ}
                //         console.log(self.year >= 1981 && self.year <= 1996) // Jonas
                // }
                // isMillennial() // window

                // solution 2
                const isMillennial2 = () => {
                        console.log(this); // {firstName: "Jonas", year: 1981, calcAge2: ƒ}
                        console.log(this.year >= 1981 && this.year <= 1996); // Jonas
                };
                isMillennial2(); // window
        },
        greet: () => {
                // !!!! never use arrow functions as method
                const firstName = 'steven';
                console.log(`Hey ${this.firstName}`); // window <-- object literal (not in a scope) arrow function this keyword still points to the window object
        },
};
jonas.calcAge2(); // 46
jonas.greet(); // Hey undefined ... the greet method is pointing to the window object this keyword since it's an arrow function so it return undefined

// /////////////////////////////////////
// ARGUMENTS KEYWORD -
const addExpr = function (a, b) {
        console.log(arguments);
        return a + b;
};
addExpr(1, 2); // 3

const addArrow = (a, b) => a + b;

/// ////////////////////////////////////
// Primitives vs. Objects in Practice - https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648513#notes

// Primitive types
let lastName = 'Williams';
const oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // Davis Williams

// Reference types
const jessica = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27,
        family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);

// ... deep copy insyead of shallow copy
const jessicaCopy01 = JSON.parse(JSON.stringify(jessica2)); // (JSON does a deep cope which includes arrays)// Object assign does a shallow copy of arrays: Object.assign({}, jessica2)
jessicaCopy01.lastName = 'Davis';
jessicaCopy01.family.push('Cindy');

console.log('Before marriage:', jessica2); // {firstName: "Jessica", lastName: "Williams", age: 27, family: Array(3)}
console.table('After Marriage:', jessicaCopy); // {firstName: "Jessica", lastName: "Davis", age: 27, family: Array(4)}
