/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
// eslint-disable-next-line max-classes-per-file
'use strict';

console.log('-----WHAT IS OBJECT-ORIENTED PROGRAMMING?-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649033#notes

// * Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to solve problems.
// * objects may contain  data (properties) and functions (methods)
// * objects are used to model real-world things

console.log('-----4 fundamentals principles of OOP: abstraction,  encapsulation, polymorphism, inheritance-----');
// * abstraction - Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we’re implementing, instead of messing with details that don’t really matter to our implementation.
// * encapsulation -  Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
// * polymorphism - A child class can overwrite a method it inherited from a parent class [it’s more complex that that, but enough for our purposes].
// * inheritance - Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

console.log('-----CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649039#notes
// * a constructor function is a special type of function that is used to create objects
// * the new operator is used to create an object from a constructor function
// * the new operator creates a new empty object and then calls the constructor function with the new object as its context
// * the new operator returns the new object

// *** example ***
// - how to create a constructor function
const Person = function (firstName, birthYear) {
        // instance properties
        this.firstName = firstName;
        this.birthYear = birthYear;
};

const keron = new Person('keron', 1991); // <-- new operator
console.log(keron); // { firstName: 'keron', birthYear: 1991 }

// behind the scenes four steps happen when we call the constructor function with the new keyword:
// 1. a new empty object {} is created
// 2. function is called, this keyword = {}
// 3. {} linked to prototype
// 4. function automatically returns the {}

// we can use the constructor function to create as many different objects as we want
const leanna = new Person('Leanna', 1990);
console.log(leanna); // { firstName: 'Leanna', birthYear: 1990 }

// - how to test if an object is the instance of a constructor function/class
console.log(leanna instanceof Person); // true

console.log('-----PROTOTYPES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649045#notes
// all the objects crated from the constructor function will have access to all the prototype property and methods

// - how to add methods to the prototype of a constructor function
Person.prototype.calcAge = function () {
        return new Date().getFullYear() - this.birthYear;
};
Person.prototype.greeter = function () {
        return `Hello ${this.firstName}`; // the this keyword is set to the object that is calling the method, example: leanna
};
console.log(keron.calcAge()); // 29
console.log(leanna.greeter()); // Hello Leanna

// - how to check the prototype of an object (the object that is linked to the prototype property)
console.log(keron.__proto__); // Person { calcAge: [Function: calcAge], greeter: [Function: greeter] }
console.log(leanna.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(keron)); // true

// - how to add properties to the prototype of a constructor function
Person.prototype.species = 'Homo Sapiens';
console.log(keron.species, leanna.species); // Homo Sapiens Homo Sapiens

// - how to check if object has its own property (constructor function)
console.log(keron.hasOwnProperty('firstName')); // true
console.log(keron.hasOwnProperty('species')); // false

console.log('----- PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649059#notes

console.log(keron.__proto__); // Person { calcAge: [Function: calcAge], greeter: [Function: greeter] }
// object.prototype is the prototype of all objects (top of the prototype chain)
console.log(keron.__proto__.__proto__); // Object { constructor: [Function: Object] }
console.log(keron.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // [Function: Person]

// ~~ prototype o array ~~
const num = [1, 2, 3, 3, 4, 5];
console.log(num.__proto__); // Array []
console.log(num.__proto__ === Array.prototype); // true
console.log(num.__proto__.__proto__); // Object {} <-- the Array.prototype object is linked to the Object.prototype object

// - how to create our own methods on the array prototype object (not good practice)https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23639058?start=15#overview
Array.prototype.double = function () {
        return this.map((num) => num * 2);
};
console.log(num.double()); // [ 2, 4, 6, 8, 10 ]

Array.prototype.unique = function () {
        return [...new Set(this)];
};
console.log(num.unique()); // [ 1, 2, 3, 4, 5 ]

const h1 = document.querySelector('h1');
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // HTMLHeadingElement {}
console.dir((x) => x + 1);

console.log('-----ES6 CLASSES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649069#questions
// * classes are a blueprint for creating objects
// * all objects created through the class constructor are instances of the class
// * classes are not hoisted (has to be declared before it is used)
// * classes are first class citizens (can be passed as arguments to functions)
// * classes are executed in strict mode (no variable declarations)

// example: - how to create a class
// eslint-disable-next-line prettier/prettier
class User { // <-- class blueprint
        constructor(name, birthYear) {
                this.name = name;
                this.birthYear = birthYear;
        }

        speak() {
                console.log(`Hello, my name is ${this.name}`);
        }

        checkAge() {
                const age = new Date().getFullYear() - this.birthYear;
                console.log(`${this.name} is ${age} years old`);
                return age;
        }

        // SETTERS and GETTERS
        get age() {
                return new Date().getFullYear() - this.birthYear;
        }
}

const john = new User('John', 1991); // <-- instance of the class
john.speak(); // Hello, my name is John // <-- prototypical inheritance
john.checkAge(); // John is 31 years old
console.log(john.age); // 31 <-- getter

console.log('-----SETTERS AND GETTERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649073#questions
// * setters and getters are used to control access to an object's properties
// * setters are used to set the value of an object's property
// * getters are used to get the value of an object's property

// *** example how to get and set values using getter and setter ***
const account = {
        owner: 'John',
        movements: [200, 530, 120, 300],

        get latest() {
                return this.movements[this.movements.length - 1];
        },
        set latest(mov) {
                this.movements.push(mov);
        },
};
// to get the value of the latest movement
console.log(account.latest); // 300
// to set the value of the latest movement
account.latest = 500;
console.log(account.movements); // [200, 530, 120, 300, 500]


class UserCl { // <-- class blueprint
        constructor(name, birthYear) {
                this.name = name;
                this.birthYear = birthYear;
        }

        speak() {
                console.log(`Hello, my name is ${this.name}`);
        }

        checkAge() {
                const age = new Date().getFullYear() - this.birthYear;
                console.log(`${this.name} is ${age} years old`);
                return age;
        }

        // SETTERS and GETTERS
        get age() {
                return new Date().getFullYear() - this.birthYear;
        }
}