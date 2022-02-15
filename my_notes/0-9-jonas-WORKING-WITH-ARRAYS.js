/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----SIMPLE ARRAY METHODS: SLICE() SPLICE() REVERSE() CONCAT() JOIN()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648703#overview

console.log('-----slice() method-----'); // !! NO MUTATION - returns a new array
// * the slice method allows us to extract or take out elements from an array/ slice a portion of an array without modifying/mutating the original array
// * the slice method returns a new array with the extracted items

// ** examples **
// - how to use the slice() method
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c', 'd', 'e'] <-- starts extraction at index 2
console.log(arr.slice(0, 3)); // ['a', 'b', 'c'] <-- tarts extracting at index 0  up to but not including index 3
// - how to extract a portion of an array starting from the end of the array, use a negative index
console.log(arr.slice(-2)); // ['d', 'e']
// - how to get the last element of array, use -1
console.log(arr.slice(-1)); // ['e'];
// - how to starts extracting elements starting at index 1 except for the last two elements
console.log(arr.slice(1, -2)); // ['b', 'c'];
// - how to use the slice() method to create a shallow copy of an array - use the slice method on an array without passing any arguments
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

console.log('-----splice() method-----'); // !! MUTATION - modifies the original array
// * the splice method allows us to delete one oe more elements from of an array which modifies/mutates the original array by returning the original array without the deleted elements
// * the splice method returns an array without the deleted elements
// * difference between splice() and slice() is that splice mutates the original array but slice does not
// * the splice method can take up to three arguments:
// - the first argument is the index where the splice will start
// - the second argument is the number of items to remove
// - the third argument is the items to add to the array

// ** examples **
// - how to use the splice() method to delete elements from an array
const arr2 = ['a', 'b', 'c', 'd', 'e'];
arr2.splice(2); // ['c', 'd', 'e'] <-- deletes elements starting at index 2
console.log(arr2); // ['a', 'b'} <-- returns the mutated array without the deleted elements

// - how to delete the last element of an array
const arr3 = [1, 2, 3];
arr3.splice(-1); // [3] <-- deletes the last element of the array
console.log(arr3); // [1, 2] <-- returns the mutated array without the last element

// - how to delete one or more elements starting from a certain index - the first argument is the index where the splice will start and the second argument is the number of items to remove
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 2); // [3, 4] <-- deletes elements starting at index 2 and up to but not including index 3
console.log(arr4); // [1, 2, 5] <-- returns the mutated array without the deleted elements

// - how to use the splice to add or remove items from an array at a certain index
const familyMembers = ['Kaydel', 'Audwin', 'Keron', 'Max'];
familyMembers.splice(3, 0, 'Andrea');
console.log(familyMembers); // ['Kaydel', 'Audwin', 'Keron', 'Andrea', 'Max'] <-- adds the element 'Andrea' to the array at index 3

console.log('-----reverse() method-----'); // !! MUTATION
// * the reverse method reverses the order of the elements in an array
// * the reverse method modifies/mutates the original array by returning the original with the reversed order of the elements

// ** examples **
// - how to use the reverse() method
const arr5 = ['c', 'b', 'a'];
arr5.reverse();
console.log(arr5); // ['a', 'b', 'c'] <-- returns the reversed array

console.log('-----concat() method -----'); // !! NO MUTATION - returns a new array
// * the concat method allows us to join two or more arrays together
// * the concat method does not modify/mutate the original array
// * the concat method returns a new array with the joined arrays

// ** examples **
// - how to use the concat() method
const arr6 = ['a', 'b', 'c'];
const arr7 = ['d', 'e', 'f'];
const arr8 = arr6.concat(arr7);
console.log(arr8.splice(arr8.length, 0, 'g')); // ['a', 'b', 'c', 'd', 'e', 'f'] <-- returns the joined array
console.log(arr8); // ['a', 'b', 'c', 'd', 'e', 'f', 'g'] <-- returns the joined array with the added element 'g'
// ... can also use the spread spread operator to join two or more arrays together
const arr9 = [...arr6, ...arr7];
console.log(arr9); // ['a', 'b', 'c', 'd', 'e', 'f'] <-- returns the joined array

console.log('-----join() method-----'); // !! NO MUTATION
// * the join method allows us to join the elements of an array into a string separated by a specified character or string (default is a comma)
// * the join method does not modify/mutate the original array
// * the join method returns a string

// ** examples **
// - how to use the join() method
const arr10 = ['a', 'b', 'c'];
console.log(arr10.join('+')); // 'a,b,c' <-- returns the joined array as a string
console.log(arr10.join('').padStart(10, '-')); // 'a,b,c' <-- returns the joined array as a string

console.log('-----THE NEW AT METHOD: AT()-----'); // !! NO MUTATION - returns a new array
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/29433412#overview
// * the at method allows us to access the element at a certain index in an array
// * the at method does not modify/mutate the original array
// * the at method returns the element at the specified index

// ** examples **
// - how to use the at() method
const users = ['John', 'Bob', 'Kate'];
console.log(users.at(1)); // 'Bob' <-- returns the element at index 2
// - how to use the at() method to access the last element of an array
console.log(users.at(-1)); // 'Kate' <-- returns the element at the last index
// - how to use the at() method to access the first element of an array
console.log(users.at(0)); // 'John' <-- returns the element at the first index

// ... works on strings too
const str = 'Hello World';
console.log(str.at(6)); // 'W' <-- returns the element at index 1

console.log('-----LOOPING ARRAYS: FOREACH()-----'); // !! NO MUTATION - returns a new array
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648707#overview
// * the forEach method allows us to loop through an array and perform a function on each element
// * the forEach method does not modify/mutate the original array

console.log('----- forEach() -----');
// ** examples **
// - how to use the forEach() method
// ... loop over the movements array a print a message for each movement in the array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach((value, index, arr) => {
        const counter = index + 1;
        if (value > 0) {
                console.log(`Movement ${counter}: You deposited $${value}`);
        } else {
                console.log(`Movement ${counter}: You withdrew $${Math.abs(value)}`); // math.abs() removes the negative sign from the number
        }
});

// ... the for of version
for (const [index, value] of movements.entries()) {
        const counter = index + 1;
        if (value > 0) {
                console.log(`Movement! ${counter}: You deposited ${value} `);
        } else {
                console.log(`Movement! ${counter}: You withdrew ${Math.abs(value)}`); // math.abs() removes the negative sign from the number
        }
}

console.log('-----FOREACH() WITH MAPS AND SETS DATA STRUCTURE-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648709#overview
// * the forEach method allows us to loop through maps and sets and perform a function on each element

console.log('-----map data structure-----');
// ** examples **
// - how to loop through the a map and print the key and value of each element
const currencies = new Map([
        ['USD', 'United States dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'Pound sterling'],
]);
currencies.forEach((value, key, map) => {
        console.log(`${key}: ${value}`);
        // USD: United States dollar
        // EUR: Euro
        // GBP: Pound sterling
});

console.log('-----set data structure-----');
// - how to use the forEach() method to loop through a set of elements
const colors = new Set(['red', 'green', 'blue', 'red']);
colors.forEach((color) => {
        console.log(`${color}`);
        // red
        // green
        // blue
});

console.log('-----DATA TRANSFORMATIONS: MAP() FILTER() REDUCE()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648727#overview
// the map returns ALL the elements of an array as a new array
// the filter returns SOME of the elements of an array that pass a test as a new array
// the reduce returns a SINGLE value after iterating through the elements of an array

console.log('-----MAP()-----'); // !! NO MUTATION - returns a new array
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648731#overview
// * the map method allows us to loop through an array and perform a function on each element in the array
// * the map method does not modify/mutate the original array
// * the map method returns a new array with the transformed elements

// ** examples **
// - how to use the map() method
const eurToUsd = 1.1;
const movementsUSD = movements.map((value) => Math.round(value * eurToUsd) / 1);
console.log(movementsUSD); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// - how to use the map() method to the value and index
const myArray = [2, 4, 5, 7, 9, 12, 14];
const doubleEl = myArray.map((num, index) => `${index + 1}: ${num * 2}`);
console.log(doubleEl.join(', ')); // 1: 4, 2: 8, 3: 10, 4: 14, 5: 18, 6: 24, 7: 28

// ...
const movementsDescriptions = movements.map(
        (value, index) => `Movement ${index + 1}: You ${value > 0 ? 'deposited' : 'withdrew'} ${Math.abs(value)}`
);
console.log(movementsDescriptions); // [ 'Movement 1: You deposited $200', 'Movement 2: You withdrew $450', 'Movement 3: You withdrew $400', 'Movement 4: You deposited $3000', 'Movement 5: You withdrew $650', 'Movement 6: You withdrew $130', 'Movement 7: You deposited $70', 'Movement 8: You withdrew $1300' ]

console.log('-----FILTER()-----'); // !! NO MUTATION - returns a new array
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648737#overview
// * the filter method allows us to loop through an array and perform a function on each element in the array
// * the filter returns SOME of the elements of an array that pass a test in a new array
// * the filter method does not modify/mutate the original array
// * the filter method returns a new array with the filtered elements

// ** examples **
// - how to use the filter() method
// ... filter out the negative movements and return the positive ones (deposit)
const depositz = movements.filter((value) => value > 0);
console.log(depositz); // [200, 450, 3000, 70]

// ... filter out the positive movements and return the negative ones (withdrawal)
const withdrawalz = movements.filter((value) => value < 0);
console.log(withdrawalz); // [-400, -650, -130]

console.log('-----REDUCE()-----'); // !! NO MUTATION - returns a single value
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648743#overview
// * the reduce method allows us to loop through an array and perform a function on each element in the array
// * the reduce method returns a SINGLE value after iterating through the elements of an array

// ** examples **
// - how to use the reduce() method
// ... sum of wall the movements
const balance = movements.reduce((acc, value) => acc + value, 0);
console.log(balance); // 3840

// ... get movements maximum using the reduce method
const max = movements.reduce((acc, value) => (value > acc ? value : acc), movements[0]);
console.log(max); // 3000

console.log('-----CHAINING METHODS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648747#overview
// * the chaining methods allow us to chain together multiple methods
// * the chaining methods return the original array

// ** examples **
// ... sum of the depositsSum to usd dollars
const eurToUSD = 1.1;
const totalDepositsUSD = movements
        .filter((value) => value > 0)
        .map(
                (value, i, arr) =>
                        // !! we can inspect the arr to see which array the the array method is being use on in any stage of the pipeline by oonsole logging the arr variable
                        // console.log(arr);
                        value * eurToUSD
        )
        .reduce((acc, value) => acc + value, 0);
console.log(totalDepositsUSD); // 5522

// *** practice ***
// ... sum of the withdrawals
const withdrawalsSum = movements.filter((value) => value < 0).reduce((acc, value) => acc + value, 0);
console.log(withdrawalsSum); // -1180

// ... get sum of the number in the array
const messyArr = ['bitch', 20, 3, 'ok', true, 5];
const messyNum = messyArr.filter((value) => typeof value !== 'string').reduce((acc, cumulative) => acc + cumulative, 0);
console.log(messyNum); // 29

// ... calculate the average of the dogs in the array
const calcAverageHumanAge = (dogAges) => {
        const humanAge = dogAges
                .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
                .filter((dogAge) => dogAge >= 18)
                // !! use the arr variable in reduce method to get the length of the new array to calculate the average
                .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);
        return Math.round(humanAge);
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 47

// ... and calculate the price
const products = [
        // Here we create an object and each
        // object has a name and a price
        { name: 'dress', price: 600 },
        { name: 'cream', price: 60 },
        { name: 'book', price: 200 },
        { name: 'bottle', price: 50 },
        { name: 'bedsheet', price: 350 },
];

// 15% off each products price greater than 100
const discount = products
        .filter((product) => product.price > 100)
        .map((product) => {
                product.price *= 0.85;
                return product;
        });
console.log(discount); // [ { name: 'dress', price: 540 }, { name: 'book', price: 180 } ]

console.log('-----FIND()-----'); // !! NO MUTATION - returns a single value
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648757#overview
// * the find method allows us to loop through an array and perform a function on each element in the array
// * the find method returns the FIRST element of an array that passes a certain condition
// * the find method does not modify/mutate the original array
// * the find method returns a single value

// ** examples **
// - how to use the find() method
// ... find the first number thats greater than 10
const nums = [-11, 8, 9, 10, 5, 32, 14, 6];
const firstElement = nums.find((value) => value > 10);
console.log(firstElement); // 32

// ... find the first withdrawal
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements2.find((value) => value < 0);
console.log(firstWithdrawal); // -400

// ... find the first withdrawal in the array that is greater than 400
const withdrawalGreater400 = movements2
        .filter((value) => value < 0)
        .map((value) => Math.abs(value))
        .find((value) => value > 400);
console.log(withdrawalGreater400); // 650

// eslint-disable-next-line prettier/prettier
console.log('-----how to use the find() method to find an object in an array based on some property of that object-----');
// - how to use the find() method to find an object in an the array based on some property value of that object
const user1 = {
        name: 'John',
        age: 30,
        favFood: ['pizza', 'pasta', 'salad'],
};
const user2 = {
        name: 'Mary',
        age: 25,
        favFood: ['Sushi', 'cake', 'salad'],
};

const userss = [user1, user2];

// ... find the user with the name 'Mary' and return the object
const getUser = userss.find((user) => user.name === 'Mary');
console.log(getUser); // { name: 'Mary', age: 25, favFood: [ 'Sushi', 'cake', 'salad' ] }

// // ... find the user with the name 'John' and return favorite foods
const userJohn = userss.find((user) => user.name === 'John');
console.log(userJohn.favFood); // [ 'pizza', 'pasta', 'salad' ]

console.log('-----FINDINDEX()-----'); // !! NO MUTATION - returns the index of the element that passes the test
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648769#questions/13698340
// * the findIndex method allows us to loop through an array and perform a function on each element in the array
// * the findIndex method returns the a single value which is the index of an element in an array that passes a certain condition
// * the findIndex method does not modify/mutate the original array

// ** examples **
// - how to use the findIndex() method
// ... find the index of the first number thats greater than 10
const nums2 = [-11, 8, 9, 10, 5, 32, 14, 6];
const firstElementIndex = nums2.findIndex((value) => value > 10);
console.log(firstElementIndex); // 5

console.log('-----SOME() EVERY()-----'); // !! NO MUTATION - returns a boolean
console.log('-----some()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648771#questions/13698340
// * the some method allows us to loop through an array and perform a function on each element in the array
// * the some method checks if at least one element in an array passes a certain condition or not and returns a boolean value
// * the some method does not modify/mutate the original array

// ** examples **
// - how to use the some() method
// ... check if there is a number greater than 10
const nums3 = [-11, 8, 9, 12, 5, 2, 1, 6];
const comeNum = nums3.some((value) => value > 10);
console.log(comeNum); // true

// the incudes() method is similar to the some method tp the some method only checks for equalioty whereas the some() method checks for a condition
console.log(movements);
console.log(movements.includes(-40)); // false

console.log('-----every()-----');
// * the every method allows us to loop through an array and perform a function on each element in the array
// * the every method checks if every element in an array passes a certain condition or not and returns a boolean value
// * the every method does not modify/mutate the original array

// ** examples **
// - how to use the every() method
// ... check if every number is greater than 10
const nums4 = [11, 9, 600];
const allNum = nums4.every((value) => value > 10);
console.log(allNum); // false

console.log('-----FLAT() FLATMAP()-----'); // !! NO MUTATION - returns a boolean
console.log('-----flat()-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648775#questions
// * the flat() method allows us to flatten an array of arrays into a single array
// * the flat() method does not modify/mutate the original array
// * the flat() method returns a new array

// ** examples **
// - how to use the flat() method
const arr11 = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
const flatArr = arr11.flat();
console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// .. how to can pass a number to the flat() method to flatten an array of arrays into a single array if there are nested arrays inside nested arrays
// ... flatten an array of arrays at a deeper nested level
const arr12 = [[1, 2, [4, 5, [900, 800], 9], 6], [7, 8, 9], 10];
const flatArr2 = arr12.flat(3); // <-- pass a number to the flat() method to go a to deeper level of the array to flatten it out
console.log(flatArr2); // [ 1, 2, 3, 4, 5, 900, 800, 9, 6, 7, 8, 9, 10 ]

// *** PRACTICE ***
// get all the movements of every single account inside the accounts array and flatten them into a single array and get the overall balance of all the accounts
const account1 = { owner: 'Keron Williams', movements: [200, 450, -400, 3000, -650, -130, 70, 1300] };
const account2 = { owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30] };
const account3 = { owner: 'Steven Thomas Williams', movements: [200, -200, 340, -300, -20, 50, 400, -460] };
const account4 = { owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90] };

const accounts = [account1, account2, account3, account4];

// step 1: loop through the accounts array and get the movements from each account
// step 2: flatten the movements of each account into a single array
// step 3: calculate the overall bal ance of all the accounts
const allAccMovements = accounts
        .map((acc) => acc.movements)
        .flat()
        .reduce((acc, mov) => acc + mov);
console.log(allAccMovements); // 17840

console.log('-----flatMap()-----'); // !! NO MUTATION - returns a boolean
// * the flatMap() method map and flat an array at the same time and returns a new array
// * the flatMap() method does not modify/mutate the original array
// * keep in mind that flatMap() method only go one level deep unlike the flat() method method that can go as deep as you want inside nested arrays

// ** examples **
// - how to use the flatMap() method
// ... rewrite the allAccMovements fm above using the flatMap() method
// eslint-disable-next-line prettier/prettier
const allAccMovements2 = accounts
        .flatMap((acc) => acc.movements)
        .reduce((acc, mov) => acc + mov);
console.log(allAccMovements2); // 17840

console.log('-----SORT()-----'); // !! MUTATES THE ORIGINAL ARRAY !!
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648779#questions/14542862
// * the sort() method allows us to sort an array in ascending or descending order
// * the sort() method does not return a new array but it modifies the original array
// * the sort() method is case sensitive

// ** examples: strings**
// - how to use the sort() method to sort strings
// ... sort the names alphabetically in ascending order (from a to z)
const names = ['Keron', 'Jessica', 'Apple', 'Zebra', 'Steven', 'Sarah'];
console.log(names.sort()); // ['Apple', 'Jessica', 'Keron', 'Sarah', 'Steven', 'Zebra']

// ... sort the names alphabetically in descending order (from z to a)
const names2 = ['Keron', 'Jessica', 'Apple', 'Zebra', 'Steven', 'Sarah'];
console.log(names2.sort().reverse()); // ['Zebra', 'Steven', 'Sarah', 'Keron', 'Jessica', 'Apple']

// ** examples: numbers**
// - how to use the sort() method to sort numbers
// ~~  pass a compare callback fn '.sort((a, b) => a - b)' to the sort() method to sort numbers in ascending or descending order ~~
// ~~ ascending order: a - b (smallest to biggest)
// ~~ descending order: b - a (biggest to smallest)

// ... sort the numbers in an array in ascending order (from smallest to biggest)
const nums5 = [11, 9, 600, 7, -900, -12, 500];
const sortedNumsAscOrder = [...nums5];
sortedNumsAscOrder.sort((a, b) => a - b);
console.log(sortedNumsAscOrder); // [-900, -12, 7, 9, 11, 500, 600]

// ... sort the numbers in an array in descending order (from biggest to smallest)
const sortedNumsDescOrder = [...nums5];
sortedNumsDescOrder.sort((a, b) => b - a);
console.log(sortedNumsDescOrder); // [600, 500, 11, 9, 7, -12, -900]

console.log('---CREATING AND FILLING ARRAYS: ARRAY() FILL() ARRAY.FOM()---');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648783#questions/13468474

console.log('-----Array()-----'); // !! CREATES AN ARRAY
// * the Array() constructor allows us to create an array
// * the Array() constructor does not return a new array but it modifies the original array
// * the Array() constructor takes in a number as a parameter and creates an array of that length
// * the Array() constructor takes in a string as a parameter and creates an array of that string
// * the Array() constructor takes in an array as a parameter and creates an array of that array
// * the Array() constructor takes in an object as a parameter and creates an array of that object
// * the Array() constructor takes in a set of parameters and creates an array of those parameters

// *** examples ***
// - how to use the Array() constructor to create an array of numbers
console.log(new Array(10, 20, 30, 40, 50)); // [ 10, 20, 30, 40, 50 ]

console.log('-----fill()-----'); // !! MUTATES THE ORIGINAL ARRAY !!
// * the fill() method allows us to fill an array with a certain value
// * the fill() method does not return a new array but it modifies the original array
// * the fill() method takes in a: value and a start index and an end index like the splice method() method

// - how to use the fill() and Array() method together to create arrays programmatically without having hard code all the items manually
// .. step 1: we use thd Array constructor and pass a single number in the array constructor, this will create an array of that length
const x = new Array(7); // [ <7 empty items> ]
// ... step 2: we fill the array using the fill() method and pass in a value which fills the entire array with that value
// x.fill(0); // [ 0, 0, 0, 0, 0, 0, 0 ]
// ~~ we can also also specify which index we want it to start filling from and which index we want it to end at by passing in a start index and an end index ~~
x.fill('egg', 2, 7); // [empty × 2, 'egg', 'egg', 'egg', 'egg', 'egg']
console.log(x);

// - how to use the fill() method on other arrays
// ... fill the array with the value 'rice' starting at index 1 and ending at index 3
const x2 = ['butter', 'egg', 'egg', 'egg', 'egg'];
x2.fill('rice', 1, 3); // ['butter', 'rice', 'rice', 'rice', 'egg']
console.log(x2);

console.log('-----Array.from()-----'); // !! CREATES AN ARRAY !!
// * the Array.from() method allows us to create an array from scratch
// * the Array.from() method also allows us to create an array from any iterable like a nodes list, a string, a object, a set, a map, a generator, a function, an array-like object, or an another array
// * the Array.from() method takes in a set of parameters and creates an array of those parameters
// * these parameters can be:
//   - a string
//   - a set
//   - a map
//   - a generator
//   - a function

// *** examples ***
// - how tp use the Array.from() method to create an array from scratch
// ... step 1: we pass in an object with the length property as the first parameter/argument
// ... step 2: we pass in a second parameter which is a map callback function
const createNewArr = Array.from({ length: 5 }, (_, index) => index + 1); // the underscore is a placeholder for the value of the current item in the array and the index is the index of the current item in the array... we add 1 to the index because the index starts at 0 and we want the index to start at 1 so we add 1 to the index then get each subsequent item (index number) in the array
console.log(createNewArr);

// ** practice example **
// create an array of 100 dice rolls using the Array.from() method
console.log(Array.from({ length: 100 }, (_, index) => Math.floor(Math.random(index) * 6) + 1));
// the underscore is a placeholder for the value of the current item in the array and the index is the index of the current item in the array... we add 1 to the index because the index starts at 0 and we want the index to start at 1 so we add 1 to the index then get each subsequent item (index number) in the array

// eslint-disable-next-line prettier/prettier
console.log('-----!! How to create an array from a NODELIST using the Array.from() method and pass a callback fn as second argument to get the values of each nodelist element-----'); // !! CREATES AN ARRAY !!
// - create an array from the movements values from the Bankist UI using the Array.from() method then use the map call back functions to get the values from the array and display them
// step 1: pass in the node list to the Array.from() method by selecting each el using document.querySelectorAll()
// step 2: use the map() method to loop through the nobelist to get the values from the array and display them in the console or alert window

// selectorExample.addEventListener('click', e => {
//         // 1: pass the node list to the Array.from() method as the first argument by selecting each el using document.querySelectorAll() then pass a callback function to the Array.from() method as a second argument to loop through the nodelist array and get the values from the array and display them in the console
//         const movementsUI = Array.from(
//                 document.querySelectorAll('.movements__value'),
//                 el => +el.textContent.replace('€', '')
//         ); // .reduce((acc, curr) => acc + curr // <-- can chain methods to the Array.from() method
//         // 2: display the values for each of the elements in the nodelist (movementsUI)
//         console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]
// });

// *** more array method practice ***
const account11 = { owner: 'Keron Williams', movements: [200, 450, -400, 3000, -650, -130, 70, 1300] };
const account22 = { owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30] };
const account33 = { owner: 'Steven Thomas Williams', movements: [200, -200, 340, -300, -20, 50, 400, -460] };
const account44 = { owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90] };

const accountz = [account11, account22, account33, account44];

// ** Practice Example 1:
// - calculate the bank's deposits overall balance (sum of all the deposits)
const bankDepositSum = accountz
        .flatMap((acc) => acc.movements)
        .filter((acc) => acc > 0)
        .reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum); // 25180

// ** Practice Example 2: 
// - check how how many deposits the bank has that are at least 1000
const numDeposits1000 = accountz
        .flatMap(acc => acc.movements)
        .filter(acc => acc >= 1000).length;
console.log(numDeposits1000); // 6

// ... different version using the reduce method
// ~~ can use reduce to count something in an array ~~
const numDeposits1000v2 = accountz
        .flatMap((acc) => acc.movements)
        // .reduce((count, curValue) => (curValue >= 1000 ? count + 1 : count), 0); // <-- the zero is the initial value of the count
        .reduce((count, currentValue) => (currentValue >= 1000 ? ++count : count), 0);
console.log(numDeposits1000v2); // 5

// ~~~ postfix increment operator & prefix increment operator differences~~~
let a = 10;
console.log(a++); // 10 <-- the postfix operator ++ returns the value of the variable before it is incremented by 1
console.log(++a); // 11 <-- the prefix ++ operator adds 1 to the value of the variable and then returns the new value... same as writing a + 1

// ** Practice Example 2: 
// - use the reduce method to create a brand new object which contains the sums of all the banks deposits and withdrawals
const { deposits, withdrawals } = accountz.flatMap(acc => acc.movements)
        .reduce((sums, cur) => {
                // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
                sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // the deposits and withdrawals properties are set to 0 by default so we can just add the current value to the deposits or withdrawals property and then return the new object with the new properties set to the new values 
                return sums;
        }, {deposits: 0, withdrawals: 0}
        )
console.log(deposits, withdrawals); // 25180, -7340

// .... array version of the above code
const [ depositzz, withdrawalzz ] = accountz.flatMap(acc => acc.movements)
        .reduce((sums, cur) => {
                // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
                sums[cur > 0 ? 0 : 1] += cur; // <-- the 0 is the index of the deposits array and the 1 is the index of the withdrawals array
                return sums;
        }, [0, 0]);
        
console.log(depositzz, withdrawalzz); // 25180, -7340

// ** Practice Example 3:
// - create a fn that transforms str to title case: this is a nice title - This Is a Nice Tittle
const convertTitleCase = (title) => {
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
        const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'so', 'yet', 'at', 'by', 'for', 'from', 'in', 'into', 'like', 'of', 'off', 'on', 'onto', 'to', 'up', 'via', 'with'];
        const titleCase = title
                .toLowerCase()
                .split(' ')
                .map(word => (exceptions.includes(word) ? word : capitalize(word))).join(' ');
        return capitalize(titleCase); 
}
console.log(convertTitleCase('this is a nice title')); // This Is a Nice Tittle
console.log(convertTitleCase('this is a LONG title')); // This Is a Long Title
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // This Is a Long Title

// ** Practice Example 4 
// how to get user's information using the reduce method
// reference: https://www.youtube.com/watch?v=kC3AasLEuBA
// const ownerObj = accountz.reduce((acc, user) => {
//         // return {...acc, [user.owner]: user} // <-- this is the same as the below code which accumulates all of each account information in the new object we created in the accumulator starting point '{}' using the spread operator and can be access by the property value we wish to use '[user.owner]' to access the information when we pass it to the 'ownerObj' as an argument
//         acc[user.owner] = user
//         return acc
// }, {});
// console.log(ownerObj) // {'Keron Williams': {owner: 'Keron Williams', movements: [200, 450, -400, 3000, -650, -130, 70, 1300]}, 'Jessica Davis': {owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]}, 'Steven Thomas Williams': {owner: 'Steven Thomas Williams', movements: [200, -200, 340, -300, -20, 50, 400, -460]}, 'Sarah Smith': {owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90]}}
// console.log(ownerObj['Keron Williams']) // { owner: 'Keron Williams', movements: [ 200, 450, -400, 3000, -650, -130, 70, 1300 ] }
// console.log(ownerObj['Jessica Davis']) // undefined

// ** Practice Example 4 
// how to get user's information using the reduce method

// ~~ separate callbacks.. dry principle .. use when the call function condition is the same in each fn~
// const deposit = (mov) => mov > 0;
// console.log(movements.every(deposit)); // true
// console.log(movements.some(deposit)); // true
// console.log(movements.filter(deposit)); // [ 200, 450, 1300 ]
// console.log(movements.find(deposit)); // 200
// console.log(movements.map(deposit)); // [ 200, 450, 1300 ]


// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648793#questions/13468474

const dogs = [
        {
                weight: 22,
                curFood: 250,
                owners: ['Alice', 'Bob']
        },
        {
                weight: 8,
                curFood: 200,
                owners: ['Matilda']
        },
        {
                weight: 13,
                curFood: 275,
                owners: ['Sarah', 'John']
        },
        {
                weight: 32,
                curFood: 340,
                owners: ['Michael']
        },

];

console.log('-----CODING CHALLENGE #8 167-----');
console.log('-----working with arrays #4-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648793#questions/13468474

// Task 1: Your tasks: 1. Loop over the 'dogs' array containing dog objects, and foreach dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs); // [ { weight: 22, curFood: 250, owners: [ 'Alice', 'Bob' ], recfood: 528 }, { weight: 8, curFood: 200, owners: [ 'Matilda' ], recfood: 280 }, { weight: 13, curFood: 275, owners: [ 'Sarah', 'John' ], recfood: 515 }, { weight: 32, curFood: 340, owners: [ 'Michael' ], recfood: 740 } ]

// Task 2: Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)
const dogSarah = dogs.find((dog => dog.owners.includes('Sarah')))
console.log(`Sarah's recommended food is too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`); // Sarah's recommended food is not too much

// Task 3: Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
        .filter(dog => dog.curFood > dog.recFood)
        .flatMap(dog => dog.owners)

const ownersEatTooLittle = dogs
        .filter((dog) => dog.curFood < dog.recFood)
        .flatMap(dog => dog.owners)
  console.log(ownersEatTooLittle); // [ 'Sarah', 'John' ]      

// Task 4:  Log a string to the console for each array created in 3., like this:"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to much`);

// task 5: Log  to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
const checkFood = dogs.some(dog => dog.curFood === dog.recFood);
console.log(checkFood); // false

// Task 6: Log to the console whether there is any dog eating an okay amount of food (just true or false)
const okayAmt = dogs.some(dog =>
        dog.curFood >
        (dog.recFood * 0.9) && dog.curFood <
        (dog.recFood * 1.1))
console.log(okayAmt); // true

// Task 7: Create an array containing the dogs that are eating an okay amount of food  (try to reuse the condition used in 6.)
const okayAmtArr = dogs.filter( dog => dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)).map(dog => dog);
console.log(okayAmtArr); // [ 'Michael' ]

// Task 8: Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const dogsCopy2 = [...dogs]
dogsCopy2.sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy2); // 

/// .. jonas way of doing it
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted ); 


