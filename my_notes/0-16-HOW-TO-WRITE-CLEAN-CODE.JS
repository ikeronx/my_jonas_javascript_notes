console.log(`---- REVIEW: WRITING CLEAN AND MODERN JAVASCRIPT ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649509#questions

// 📌 READABLE CODE:
// 👉🏼 Write code so that others can understand it
// 👉🏼 Write code so that you can understand it in 1 year 
// 👉🏼 Avoid too “clever” and overcomplicated solutions 
// 👉🏼 Use descriptive variable names: what they contain 
// 👉🏼 Use descriptive function names: what they do;;

// 📌 GENERAL:
// 👉🏼 Use DRY principle (refactor your code)
// 👉🏼 Don’t pollute global namespace, encapsulate instead;
// 👉🏼 Don’t use var
// 👉🏼 Use strong type checks (=== and !==)

// 📌 AVOID NESTED CODE:
// 👉🏼 Use early return (guard clauses)
// 👉🏼 Use ternary (conditional) or logical operators instead of if Use multiple if instead of if/else-if
// 👉🏼 Avoid for loops, use array methods instead
// 👉🏼 Avoid callback-based asynchronous APIs

// 📌 FUNCTIONS:
// 👉🏼 Generally, functions should do only one thing
// 👉🏼 Don’t use more than 3 function parameters
// 👉🏼 Use default parameters whenever possible
// 👉🏼 Generally, return same data type as received
// 👉🏼 Use arrow functions when they make code more readable

// 📌 OOP:
// 👉🏼 Use ES6 classes
// 👉🏼 Encapsulate data and don’t mutate it from outside the class
// 👉🏼 Implement method chaining
// 👉🏼 Do not use arrow functions as methods (in regular objects)

// 📌 ASYNCHRONOUS CODE:
// 👉🏼 Consume promises with async / await for best readability 
// 👉🏼 Whenever possible, run promises in parallel(Promise.all) 
// 👉🏼 Handle errors and promise rejections;

// 📌 FUNCTIONAL PROGRAMMING PRINCIPLES:
// 🎯 Functional Programming: 
// 👉🏼 Declarative programming paradigm
// 👉🏼 Based on the idea of writing software by combining many
// 👉🏼 pure functions, avoiding side effects and mutating data
// 👉🏼 Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc.)
// 👉🏼 Pure function: Function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.
// 👉🏼 Immutability: State (data) is never modified! Instead, state is copied and the copy is mutated and returned.
// 👉🏼 Examples: REACT, REDUX



console.log('--- LETS FIX SOME BAD CODE: PART 1 & 2 ---');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649513#questions
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/24607048#questions

const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];
  
  const spendingLimits = {
    jonas: 1500,
    matilda: 100,
  };

  const getLimit = user => spendingLimits?.[user] ?? 0
  
  const addExpense = function (value, description, user = 'jonas' ) {
      user = user.toLowerCase();
      
    if (value <= getLimit(user)) {
      budget.push({ value: -value, description, user });
    }
  };
  addExpense(10, 'Pizza 🍕');
  addExpense(100, 'Going to movies 🍿', 'Matilda');
  addExpense(200, 'Stuff', 'Jay');
  
  const checkExpenses = function () {
    for (const entry of budget) {
      if (entry.value < -getLimit(entry.user)) {
        entry.flag = 'limit';
      }
    }
  };
  checkExpenses();
  
  const logBigExpenses = function (bigLimit) {
    let output = '';
    for (const entry of budget) {
        output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
  };

console.log(budget);
logBigExpenses(1);