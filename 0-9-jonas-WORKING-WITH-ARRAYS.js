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

console.log('-----map()-----'); // !! NO MUTATION - returns a new array
// * the map method allows us to loop through an array and perform a function on each element
// * the map method does not modify/mutate the original array
// * the map method returns a new array with the transformed elements

// ** examples **
// - how to use the map() method

const myArray = [2, 4, 5, 7, 9, 12, 14];
myArray.map((num, index) => {
        const output = `${index}: ${num * 2}`;
        console.log(output); // 0: 4, 1: 8, 2: 10, 3: 14, 4: 20, 5: 28, 6: 36
});

const eurToUsd = 1.1;
const movementsUSD = movements.map((value) => {
        const output = value * eurToUsd;
        return output.toFixed(0); // 200, 450, -400, 3000, -650, -130, 70, 1300
});
console.log(movementsUSD); // [200, 450, -400, 3000, -650, -130, 70, 1300]
