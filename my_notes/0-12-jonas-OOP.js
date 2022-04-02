/* eslint-disable max-classes-per-file */
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
}

const john = new User('John', 1991); // <-- instance of the class
john.speak(); // Hello, my name is John // <-- prototypical inheritance
john.checkAge(); // John is 31 years old

console.log('-----SETTERS AND GETTERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649073#questions
// * setters and getters are used to control access to an object's properties
// * setters are used to set the value of an object's property
// * getters are used to get the value of an object's property

// *** example how to get and set values using getter and setter ***
const account = {
        owner: 'John',
        movements: [200, 530, 120, 300],
        // GETTER - nget value
        get latest() {
                return this.movements[this.movements.length - 1];
        },
        // SETTER - set value (can be used to validate the value)
        set latest(mov) {
                this.movements.push(mov);
        },
};
// how to get the value of the latest movement
console.log(account.latest); // 300
// to set the value of the latest movement
account.latest = 500;
console.log(account.movements); // [200, 530, 120, 300, 500]

class UserCl {
        // <-- class blueprint
        constructor(name, birthYear) {
                this.fullName = name;
                this.birthYear = birthYear;
        }

        // INSTANCE METHODS
        speak() {
                console.log(`Hello, my name is ${this.name}`);
        }

        checkAge() {
                const age = new Date().getFullYear() - this.birthYear;
                console.log(`${this.name} is ${age} years old`);
                return age;
        }

        // GETTERS
        get age() {
                return new Date().getFullYear() - this.birthYear;
        }

        // !! important when sett a property that already exist (this.fullname)... make sure to use the pattern that also get the property again after setting it
        // SETTERS
        set fullName(name) {
                // if name argument passed has a space change the name to the fill name if not do nothing
                if (name.includes(' ')) this._fullName = name;
                else console.log(`${name} is not a full name`);
        }

        // getter for fullName
        get fullName() {
                return this._fullName;
        }

        // STATIC METHODS
        // - how to create static methods on the class
        static hey() {
                console.log('hey');
        }
}
// - how to get value using the getter method
const eric = new UserCl('Eric', 1990); // <-- instance of the class
console.log(eric.age); // 32

// how to set set value using setter method
eric.fullName = 'Eric Smith';
console.log(eric); // UserCl { _fullName: 'Eric Smith', birthYear: 1990 }

const kaydel = new UserCl('Kaydel Gordon', 1990);
console.log(kaydel); // Kaydel Gordon
console.log(kaydel.fullName); // Kaydel Gordon

// call static method
UserCl.hey(); // hey

console.log('-----STATIC METHODS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649077#questions
// * static methods are available on the class itself..constructor (not on the instances)
// * please note that static methods are not available on the instances only on the class/constructor itself

// ** example of static methods **8
Array.from(document.querySelectorAll('h1')); // .from() is a static method that converts a node list to an array
Number.parseFloat('1.2'); // 1.2 // .parseFloat() is a static method that converts a string to a number

// - how to create static methods (add it to a constructor)
Person.hey = function () {
        console.log('hey there ');
        console.log(this); // Person {}
};
Person.hey(); // hey there

console.log('-----OBJECT.CREATE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649081#questions
// * object.create is used to create a new object with the properties and methods of another object
// * we can use Object.create to manually set the prototype of an object to any other object we want

// ** example of object.create **
// - how to create an object that will  be the prototype of another object

// step 1: create the object that will be the prototype
const PersonProto = {
        calcAge() {
                console.log(new Date().getFullYear() - this.birthYear);
        },
        init(fullName, birthYear) {
                this.fullName = fullName;
                this.birthYear = birthYear;
        },
};
// step 2: create the object that will inherit from the prototype
const johnProto = Object.create(PersonProto);
// step 3: set the properties and methods of the object
johnProto.init('John Smith', 1990);
johnProto.calcAge(); // 32

console.log('-----INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649085#questions

// ~~ real inheritance between classes ~~
// * we can use the keyword "extends" to inherit properties and methods from one class to another
// * we can use the keyword "super" to call the constructor of the parent class

// ** EXAMPLES **
// - how to inherit properties and methods from one constructor function to another
// step 1: create the parent constructor function
const PersonParentConstructor = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
};
PersonParentConstructor.prototype.calcAge = function () {
        console.log(new Date().getFullYear() - this.birthYear);
};

// step 2: create the child constructor function
const StudentChildConstructor = function (firstName, birthYear, course) {
        // call the parent constructor parent constructor function
        PersonParentConstructor.call(this, firstName, birthYear);
        // set the child constructor function properties
        this.course = course;
};

// step 3: linking prototypes: inherit the prototype properties (methods) [calcAge()] from the parent constructor ... - how link two constructor functions together
StudentChildConstructor.prototype = Object.create(PersonParentConstructor.prototype);

// step 4: set the child constructor back to the child constructor function prototype (methods) [calcAge()] from the parent constructor (Student) [.__proto__]
StudentChildConstructor.prototype.constructor = StudentChildConstructor;

// step 5: create the child constructor prototype properties (methods)
StudentChildConstructor.prototype.introduce = function () {
        console.log(`Hi, my name is ${this.firstName} and I am studying ${this.course}`);
};

// step 5: create an instance of the child constructor function
const yoyo = new StudentChildConstructor('Yoyo', 1990, 'Marketing');
yoyo.introduce(); // Hi, my name is Yoyo and I am studying Marketing
yoyo.calcAge(); // 28

console.log('-----INHERITANCE BETWEEN "CLASSES": ES6 CLASSES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649089#questions

// - how to inherit properties and methods from one class to another
// STEP 1: create the parent class
class PersonParentClass {
        constructor(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear;
        }

        calcAge() {
                console.log(new Date().getFullYear() - this.birthYear);
        }

        // static method
        static greeting() {
                console.log('Hey there');
        }
}

// STEP 2: create the child class
class StudentChildClass extends PersonParentClass {
        constructor(firstName, birthYear, major) {
                // call the parent class constructor function (PersonParentClass) and pass the arguments
                // !! this always needs to happen first
                super(firstName, birthYear);
                // add properties to the child class
                this.major = major;
        }

        introduce() {
                console.log(`Hi, my name is ${this.firstName} and I am studying ${this.major}`);
        }

        calcAge() {
                console.log(
                        `I'm ${2037 - this.birthYear} years old but I feel like I'm ${
                                2037 - this.birthYear + 10
                        } years old`
                );
        }
}

// STEP 3: create an instance of the child class
const james = new StudentChildClass('James', 1990, 'Computer Science');
console.log(james); // Student { name: 'James', birthYear: 1990, major: 'Computer Science' }
james.introduce(); // Hi, my name is James and I am studying Computer Science
james.calcAge(); // I'm 47 years old but I feel like I'm 57 years old

console.log('-----INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649093#notes

// step 1: create the parent object that will be the prototype of the child class
const PersonProtoo = {
        calcAge() {
                console.log(new Date().getFullYear() - this.birthYear);
        },
        init(fullName, birthYear) {
                this.fullName = fullName;
                this.birthYear = birthYear;
        },
};

// step 2: create the child object that will inherit from the prototype
const StudentProto = Object.create(PersonProtoo);

// step 3: set the properties and methods of the parent object to the child object
StudentProto.init = function (fullName, birthYear, major) {
        PersonProtoo.init.call(this, fullName, birthYear);
        this.major = major;
};

StudentProto.introduce = function () {
        console.log(`Hi, my name is ${this.fullName} and I am studying ${this.major}`);
};

// step 4: create an instance of the child object
const jamesProtoo = Object.create(StudentProto);
jamesProtoo.init('James', 1990, 'Computer Science');
jamesProtoo.introduce(); // Hi, my name is James and I am studying Computer Science
jamesProtoo.calcAge(); // 32

console.log('-----ANOTHER CLASS EXAMPLE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649103#notes

class Account {
        constructor(name, age, pin) {
                this.name = name;
                this.age = age;

                // protected properties (encapsulation)... properties that are not supposed ton be touch outside the class
                this._pin = pin;
                this._movements = [];
                this.locale = navigator.language;

                console.log(`Thank you for opening an account with us ${this.name}`);
        }

        /// - how to access and return private properties
        // public interface (methods)
        getMovements() {
                return this._movements;
        }

        getAccPin() {
                return this._pin;
        }

        deposits(val) {
                this._movements.push(val);
        }

        withdraws(val) {
                // we can call other methods inside another method
                this.deposits(-val);
        }

        depositSum() {
                return this._movements.filter((mov) => mov > 0).reduce((acc, curr) => acc + curr, 0);
        }

        withdrawalsSum() {
                return this._movements.filter((mov) => mov < 0).reduce((acc, curr) => acc + curr, 0);
        }

        movementsSum() {
                return this._movements.reduce((acc, curr) => acc + curr, 0);
        }

        // private interface (methods)
        // eslint-disable-next-line class-methods-use-this
        _approveLoan(_val) {
                return true;
        }

        requestLoan(val) {
                if (this._approveLoan(val)) {
                        this.deposits(val);
                        console.log(`Your loan has been approved`);
                }
        }
}
const acc1 = new Account('John', 32, 1234);

// to add movement's to the account
acc1.deposits(200);
acc1.deposits(200);
acc1.withdraws(100);
acc1.withdraws(50);

// to use the methods
console.log(acc1.depositSum()); // 400
console.log(acc1.withdrawalsSum()); // -150
console.log(acc1.movementsSum()); // 250
console.log(acc1.getAccPin()); // 1234
console.log(acc1.getMovements()); // [ 200, 200, -100, -50 ]
acc1.requestLoan(1000); // Your loan has been approved
console.log(acc1); // Account { name: 'John', age: 32, pin: 1234, movements: [ 200, 200, -100, -50, 1000 ] }

console.log('-----ENCAPSULATION: PROTECTED PROPERTIES AND METHODS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649109#notes
// * Encapsulation means to keep certain methods and properties private and only accessible from within the class itself
// * The rest of the methods and properties are public and can be accessed from outside the class // exposed as a public interface

// TWO BIG REASONS WHY NEED ENCAPSULATION AND DATA PRIVACY:
// 1. to prevent code from outside of a class to accidentally manipulate or data inside the class.
// 2. when we expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence

// ** EXAMPLE 1:
class Account2 {
        constructor(name, age, pin) {
                this.name = name;
                this.age = age;

                // protected properties (encapsulation)... properties that are not supposed to be touch outside the class
                // - how to create private properties by using the convention _ + property name
                this._pin = pin;
                this._movements = [];
                this.locale = navigator.language;

                console.log(`Thank you for opening an account with us ${this.name}`);
        }

        // public interface (methods)
        /// - how to access and return private properties
        getMovements() {
                return this._movements;
        }

        requestLoan(val) {
                // - how to access the private methods (_approveLoan) from the public interface (requestLoan)
                // - how to call other methods inside a certain method
                if (this._approveLoan(val)) {
                        this.deposits(val);
                        console.log(`Your loan has been approved`);
                }
        }

        getAccPin() {
                return this._pin;
        }

        // private interface (methods)
        // - how to create private methods by using the convention _ + method name
        // eslint-disable-next-line class-methods-use-this
        // eslint-disable-next-line class-methods-use-this
        _approveLoan(_val) {
                return true;
        }
}

console.log('-----ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649111#notes
// * Private class fields and methods are not accessible from outside the class

// ~~ There four different kinds of fields (properties) and methods in JavaScript:
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account3 {
        // ~~ please note that fields are supposed to be outside the constructor
        // !! these fields are available on the instances themselves and not the prototype of the class

        // 1) -how define Public fields (instances)
        locale = navigator.language;

        // 2) - how define a Private fields (instances)
        #movements = [];

        #pin;

        constructor(owner, currency, pin) {
                this.owner = owner;
                this.currency = currency;
                this.#pin = pin; // redefining the private field

                // Protected property
                // this._movements = [];
                // this.locale = navigator.language;

                console.log(`Thanks for opening an account, ${owner}`);
        }

        // 3) Public methods

        // Public interface
        getMovements() {
                return this.#movements; // to access the private field
        }

        deposit(val) {
                this.#movements.push(val);
                return this; // to chain methods
        }

        withdraw(val) {
                this.deposit(-val); // to call other methods inside a certain method
                return this; // to chain methods
        }

        requestLoan(val) {
                if (this._approveLoan(val)) {
                        // if (this.#approveLoan(val)) {
                        this.deposit(val);
                        console.log(`Loan approved`);
                        return this; // to chain methods
                }
        }

        getAccPin() {
                return this.#pin; // to access the private field
        }

        static helper() {
                console.log('Helper');
        }

        // 4) Private methods
        // eslint-disable-next-line class-methods-use-this
        _approveLoan(_val) {
                // #approveLoan(_val) {
                return true;
        }
}

const acc2 = new Account3('John', 'USD', 1234);
console.log(acc2);
console.log(acc2.getAccPin()); // 1234

console.log('---- CHAINING METHODS ----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649117#notes
acc2.deposit(200).deposit(200).withdraw(100).withdraw(50).requestLoan(1000);
console.log(acc2.getMovements()); // // [ 200, 200, -100, -50, 1000 ]
