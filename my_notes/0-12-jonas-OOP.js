/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----WHAT IS OBJECT-ORIENTED PROGRAMMING?-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649033#notes

// * Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to solve problems.
// * objects may contain  data (properties) and functions (methods)
// * objects are used to model real-world things

console.log('-----classes-----');
// * classes are a blueprint for creating objects
// * all objects created through the class constructor are instances of the class

// example: - how to create a class
// eslint-disable-next-line prettier/prettier
class Person { // <-- class blueprint
        constructor(name, age) {
                this.name = name;
                this.age = age;
        }
}

console.log('-----prototypes-----');
// example: - prototypical inheritance
Person.prototype.speak = function () {
        console.log(`${this.name} says hello`);
};

const john = new Person('John', 30); // <-- instance of the class
john.speak(); // John says hello

console.log('-----4 fundamentals principles of OOP: abstraction,  encapsulation, polymorphism, inheritance-----');
// * abstraction - Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we’re implementing, instead of messing with details that don’t really matter to our implementation.
// * encapsulation -  Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
// * polymorphism - A child class can overwrite a method it inherited from a parent class [it’s more complex that that, but enough for our purposes].
// * inheritance - Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

console.log('-----CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649039#notes

