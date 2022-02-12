/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648609#announcements
console.log('-----STRINGS PART 1-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648609#announcements

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log('B737'[0]); // B
console.log('B737'.length); // 4
console.log(airline.length); // 16

console.log('---string methods: indexOf() lastIndexOf() slice()---');
console.log(airline.indexOf('P')); // 2 <-- finds the index of the FIRST occurrence of the letter
console.log(airline.lastIndexOf('P')); // 8 <-- finds the index of the LAST occurrence of the letter after the index
console.log(airline.indexOf('Air')); // 4

// - how to extract part of a string.. use the slice method
console.log(airline.slice(4)); // Air Portugal <-- returns the string from the index 4
console.log(airline.slice(4, 7)); // Air <-- the end index / value is not included
// ... how to extract the first word in string without knowing any of the indexes
console.log(airline.slice(0, airline.indexOf(' '))); // Air
// ... how to extract the last word in string without knowing any of the indexes
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Air

// ... how extract letters starting from the end of the string
console.log(airline.slice(-1)); // l
// ... how to extract letters either from the beginning or the end of the string
console.log(airline.slice(1, -3)); // AP Air Portu

// **** REAL WORLD EXAMPLES ****
// ... write a function that receives an airplane seat and logs to to the console whether it is middle seat or not
const checkMiddleSeat = (seat) => {
        // B and E are the middle seats
        const lastStrIndex =
                seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
                        ? console.log('This is a middle seat 😤')
                        : console.log('You got lucky 😎');

        // ... jonas way
        // const s = seat.slice(-1);
        // if (s === 'B' || s === 'E') {
        //         console.log('This is a middle seat 😤');
        // } else {
        //         console.log('You got lucky 😎');
        // }
};
checkMiddleSeat('11B'); // This is a middle seat 😤
checkMiddleSeat('23C'); // You got lucky 😎
checkMiddleSeat('3E'); // This is a middle seat 😤

console.log('-----STRINGS PART 2-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648613#announcements

console.log('---string methods: toLowerCase() toUpperCase() trim()---');
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// **** REAL WORLD EXAMPLES ****
// 1. ... fix the capitalization of the name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// ... as a function
const fixName = (name) => {
        const nameLower = name.toLowerCase();
        const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
        console.log(nameCorrect);
};
fixName('kERONn '); // Keronn

// **** REAL WORLD EXAMPLES ****
// 2. ... compare / check user's email
const email = 'hellomoney@io';
const loginEmail = '   HelloMONEY@io \n';

// ... convert email to lowercase and remove white spaces
const normalizedEmail = loginEmail.toLowerCase().trim();

// ... check if the email is valid
const checkEmail1 =
        normalizedEmail === email ? console.log('Email is correct 👍🏾 ') : console.log('Email is incorrect 👎🏾 ');

// ... as a function
const checkEmail = (userEmail, loginEmail) => { 
        // makes string lower case and removes all white spaces from the string
        const normalizedEmail = loginEmail.toLowerCase().replace(/ +/g, '');
        return normalizedEmail === userEmail ? console.log('Email is correct 👍🏾 ') : console.log('Email is incorrect 👎🏾 ');
}
checkEmail('abc@gmail.com', 'aB C@Gmail.co m'); // Email is correct 👍🏾
checkEmail('yes@com', 'yes@7com'); // Email is incorrect 👎🏾

console.log('---string methods: replace() replaceAll()---');

// - how to replace characters in a string
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS); // 288.97$

// - how replace all the occurrences of a word in a string
const announcement = ' All passengers come to boarding door 23. Boarding door 23. ';
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding door X. Boarding door X.
// .... regular expression version
console.log(announcement.replaceAll(/door/g, 'gate')); // All passengers come to boarding door X. Boarding door X.

console.log('--- string methods: includes() startsWith() endsWith() these three methods return boolean values: ---');

// - how to check if a string includes a word
const planeID = 'Airbus A320neo';
console.log(planeID.includes('20neo')); // true
console.log(planeID.includes('Boeing')); // false

// - how check if a string starts with a word
const userName = 'Keron Williams';
console.log(userName.startsWith('Keron')); // true
console.log(userName.startsWith('Keron8')); // false

// **** REAL WORLD EXAMPLES ****
// - how check if a string ends with a word
// 1. check if planeID begins with Airbus and ends with 'neo'
if(planeID.includes('Airbus') && planeID.endsWith('neo')) {
        console.log(`${planeID} is part of the Airbus plane family`);
}

// 2. check if passenger baggage is allowed to be on the plane
const checkBaggage = (items) => {
    // * when we receive user input always put it into lowercase first
    const itemsLower = items.toLowerCase();
    const checkForWeapons = itemsLower.includes('gun') || itemsLower.includes('knife') 
        ? 'You are NOT allowed on board 🚫'
        : 'Welcome aboard ✅';  
        console.log(checkForWeapons); 
}
checkBaggage('I have a laptop, some Food and a pocket Knife.'); // You are NOT allowed on board 🚫
checkBaggage('Socks and camera'); // Welcome aboard ✅
checkBaggage('Got some snacks and gun for protection'); // You are NOT allowed on board 🚫


console.log('-----STRINGS PART 3-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648619#announcements
console.log('---string methods: split() join()---');

// *** SPLIT METHOD ***
// * the split method allows us to split a string into multiple parts which creates an array of substrings base on a divider (delimiter) 
// - how use the split method
console.log('a+very+long+string'.split('+')); // <-- removes the '+' divider returns array of strings ['a', 'very', 'long', 'string']
console.log('Keron Williams'.split(' ')); // <-- remove the space ' ' divider returns array of string['Keron', 'Williams']

// - how use to destructing to create variables from the split method
const [firstName, lastName] = 'Keron Williams '.split(' ');
console.log(firstName, lastName); // Keron Williams

// *** JOIN METHOD ***
// * the join method allows us to join an array of strings into a single string with a divider (delimiter)
// - how to use the join method to join strings in an array ... return Mr Keron williams
const newName = ['Mr.', firstName, lastName.toLocaleLowerCase()].join(' ') // Mr. Keron williams
console.log(newName); // Mr. Keron williams
// const newName2 = ['Mr.', firstName, lastName.toLocaleLowerCase()].join('+') // Mr.+Keron+williams


// **** REAL WORLD EXAMPLES ****
// 1. ... capitalize the first letter of each word in a string
const capitalizeName = (name) => {
    // ... jonas way
    const nameSplit = name.split(' ');
    const nameUpper = []
    for (const word of nameSplit) {
        const capitalizedName = word[0].toUpperCase() + word.slice(1) 
        nameUpper.push(capitalizedName)
        // ... a different approach using  the replace method
        // const capitalizedName = nameUpper.push(word.replace(word[0], word[0].toUpperCase()))
    }
    console.log(nameUpper.join(' '));

    // ... my way
    // ste[ 1. split the string into an array of words
    // const nameSplit = name.split(' ');
    // // step 2. loop through the array of words and capitalize the first letter of each word then slice the rest of the letters of each word together
    // const capitalizedName = nameSplit.map(word => word[0].toUpperCase() + word.slice(1));
    // // step 3. join the words in the array back together
    // console.log(capitalizedName.join(' '));
 }
capitalizeName('keron william hi'); // Keron William Hi
capitalizeName('rihanna fenty robyn'); // Rihanna Fenty Robyn

// 2. capitalize jessica's first name
const passenger3 = 'jessica ann smith davis'.split(' ')
const [jessicaFirstName, ...rest] = passenger3;
const jessicaNewName = [jessicaFirstName.toUpperCase(), ...rest].join(' ');
console.log(jessicaNewName); // JESSICA ann smith davis

// ... another way
const passenger4 = 'jessica ann smith davis'
const passenger4NewName = passenger4.slice(0, passenger4.indexOf(' ')).toUpperCase() + passenger4.slice(passenger4.indexOf(' '));
console.log(passenger4NewName); // JESSICA ann smith davis

console.log('---string methods: padStart() padEnd()---');
// * padding a string means to add a number of characters to a string until the string has a certain desired length 
// - how to pad a string
console.log('hello'.padStart(10, '*')); // '       hello'
console.log('hello'.padStart(23, '*')); // '*******hello'
console.log('hello'.padStart(10, '$')); // 'hello-----'
console.log('hello'.padStart(10, '%').padEnd(20, '+')); // -----hello**********

// **** REAL WORLD EXAMPLES ****
// 1. ... write a function that mass credit card numbers except the last 4 digits
const massCreditCard = (number) => {
    // step 1. convert the number into a string
     const str = String(number)
    // step 2. extract the last 4 digits of the credit card number
    const last4digits = str.slice(-4)
    // step 3. return the last 4 digits of the string with a padding at the beginning of the string that is equal to the length of the original string
    return last4digits.padStart(str.length, '*')
}
console.log(massCreditCard(123456)); // **3456
console.log(massCreditCard(1234567890123456)); // ************3456
console.log(massCreditCard('12345678901234567')); // ************34567

console.log('---string methods: repeat()---');
// * the repeat method allows us to repeat a string a certain number of times
// - how to use the repeat method
console.log('hello '.repeat(3)); // `hello hello hello`
const greeting = 'hello '
greeting.repeat(2);

const dangerZone = (n) => {
        const warning = 'Danger Zone.... Please do not enter...'
        console.log(`${warning.repeat(n) }`);
};
dangerZone(3);

console.log('-----STRINGS METHODS PRACTICE #125-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/24606740#overview
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'))
document.body.append(document.createElement('button1'));

console.log('-----pratice #1-----');
// eslint-disable-next-line prettier/prettier

// TEST DATA:

const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// ... jonas weekdays
const getCode = str => str.slice(0,3).toUpperCase()
for (const flight of flights.split('+')) {
        // use destructuring to extract each word from the flight string and format them the add them to the final string  
        const [type, from, to, time] = flight.split(';');
        // format each word individually
        const output = `${type.startsWith('_Delayed') ? '🔴 ' : ''}${type.replaceAll('_', '')} from ${getCode(from)} to ${getCode(to)} (${time.replaceAll(':', 'h')})`.padStart(45)
        console.log(output);  
}

// .. my way
const getFlights = (flightInfo) => {
        // step 1: split the string into an array of rows then replace the underscores with a space
        const flightsNoUnderscore = flightInfo.split('+').map((row) => row.replaceAll('_', ''));

        const flightsNoSpaceNoPlus = flightsNoUnderscore.map((row) => row.replaceAll(' ', ''));
        const flightsNoApostrophe = flightsNoSpaceNoPlus.map((row) => row.replaceAll(';', ' '));
        const flightsNoSemicolon = flightsNoApostrophe.map((row) => row.replaceAll(':', 'h'));
        const flightsDelayedSpace = flightsNoSemicolon.map((row) => row.replaceAll('Delayed', 'Delayed '));

        for (const [i, row] of flightsDelayedSpace.entries()) {
                if (i % 2 === 0) {
                        const [firstWord, secondWord, fromCountry, toCountry, timee] = row.split(' ');
                        const fromCountryStr = fromCountry.slice(0, 3).toUpperCase();
                        const toCountryStr = toCountry.slice(0, 3).toUpperCase();
                        const output = `🔴 ${firstWord} ${secondWord} from ${fromCountryStr} to ${toCountryStr} (${timee})`;
                        console.log((output));
                        // 🔴 Delayed Departure from FAO to TXL (11h25)
                        // 🔴 Delayed Arrival from HEL to FAO (12h05)
                } else {
                        const [firstWord, fromCountry, toCountry, timee] = row.split(' ');
                        const fromCountryStr = fromCountry.slice(0, 3).toUpperCase();
                        const toCountryStr = toCountry.slice(0, 3).toUpperCase();
                        const output = `${''.padStart(
                                10
                        )}${firstWord} from ${fromCountryStr} to ${toCountryStr} (${timee})`;
                        console.log((output));
                        //     Arrival from BRU to FAO (11h45)
                        //     Departure from FAO to LIS (12h30)
                }
        }
};
// getFlights(flights);

// check flights btn style
const checkFlightsbtn = document.querySelector('button')
checkFlightsbtn.textContent = 'check flights';
checkFlightsbtn.style.cssText = `
        background-color: #ff0000;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        width: auto;
        Height: auto;`

        // check flights btn event listener to call the getFlights function
        checkFlightsbtn.addEventListener('click', () => {
        const text = document.querySelector('textarea').value;
        getFlights(text);
        });

console.log('-----practice #2-----');

// TEST DATA:
/*
       
*

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
/*
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
*/

// convert variable ftn
const convertVar = (variable) => {
        const variables = variable.split('\n');

        for (const [i, row] of variables.entries()) {
                const [firstWord, secondWord] = row.toLowerCase().trim().split('_');
                const output = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`;
                console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
        }
};
// convertVar(
//         `underscore_case
//         first_name
//        Some_Variable 
//          calculate_AGE
//        delayed_departure`)

// convert var btn style
const covertVarBtn = document.querySelector('button1')
covertVarBtn.textContent = 'check variable';
covertVarBtn.style.cssText = `
        background-color: #1d6ccd;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        width: auto;
        Height: auto;`
        
        // convert var btn event listener to call the convertVar ftn
        covertVarBtn.addEventListener('click', () => {
        const text = document.querySelector('textarea').value;
        convertVar(text);
        });


