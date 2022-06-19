/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
// www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648559#announcements
console.log('-----CODING CHALLENGE #1 110-----');
console.log('-----destructing / optional chaining-----');

const scorers = {
        Gnarly: 1,
        Hummels: 1,
        Lewandowski: 2,
};

const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
                [
                        'Neuer',
                        'Pavard',
                        'Martinez',
                        'Alaba',
                        'Davies',
                        'Kimmich',
                        'Goretzka',
                        'Coman',
                        'Muller',
                        'Gnarby',
                        'Lewandowski',
                ],
                [
                        'Burki',
                        'Schulz',
                        'Hummels',
                        'Akanji',
                        'Hakimi',
                        'Weigl',
                        'Witsel',
                        'Hazard',
                        'Brandt',
                        'Sancho',
                        'Gotze',
                ],
        ],
        score: '4:0',
        scorers,
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
                team1: 1.33,
                x: 3.25,
                team2: 6.5,
        },
        printGoals(...players) {
                const totalScore = players.length;
                console.log(`Goals scored by ${players.join(', ')}. They scored  a total of ${totalScore} goals.`);
        },
};
console.log(game.scorers);

// 1. Create one player array for each team(variables 'players1' and 'players2')
const [players1, players2] = game.players;

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players names.
const [gk, ...fieldPlayers] = players1;
console.log(gk); // Neuer
console.log(fieldPlayers); // [ 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski' ]

// 3. Create an array 'allPlayers' containing allplayers of bothteams(22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers); // [ 'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze' ]

// 4. During the game, Bayern Munich(team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final); // [ 'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Periscic' ]

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// eslint-disable-next-line prettier/prettier
const { odds: {
    team1,
    x: draw,
    team2 }
} = game;

console.log(draw); // 3.25

// 6.  6. Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)Write a function('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = (...players) => {
        const totalScore = players.length;
        console.log(`Goals scored by ${players.join(', ')}. They scored  a total of ${totalScore} goals.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Goals scored by Davies, Muller, Lewandowski, Kimmich. They scored  a total of 4 goals.
printGoals(...game.scored); // Goals scored by Lewandowski, Gnarby, Lewandowski, Hummels. They scored  a total of 4 goals.
printGoals(players1Final[1], players1Final[2], players1Final[8]); // Goals scored by Pavard, Martinez, Muller. They scored  a total of 3 goals.

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
const {
        odds: { team1: team1Odds, team2: team2Odds },
} = game;
// ... use && operator to check if team1Odds is less than team2Odds and print team1
team1Odds < team2Odds && console.log('Team 1 has a better chance of winning with');
team1Odds > team2Odds && console.log('Team 2 has a better chance of winning with');

console.log('-----CODING CHALLENGE #2 115-----');
console.log('-----looping arrays and objects-----');

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const goalScored = [...game.scored];

for (const [index, player] of goalScored.entries()) {
        console.log(`Goal ${index + 1}: ${player}`);
} // Goal 1: Lewandowski Goal 2: Gnarby Goal 3: Lewandowski Goal 4: Hummels

// 2. Use a loop to calculate the average odd and log it to the console
const oddsValues = Object.values(game.odds);
console.log(oddsValues); // [ 1.33, 3.25, 6.5 ]

let sum = 0;
for (const value of oddsValues) {
        sum += value;
}
const averageOdds = sum / oddsValues.length;
console.log(`Average odd: ${averageOdds.toFixed(2)}`); // 3.69

// .... jonas way to calculate
let average = 0;
for (const value of oddsValues) average += value;
average /= oddsValues.length;
console.log(`Average odd: ${average.toFixed(2)}`); // 3.69

// ... my way of doing it... shorter way
const avgOdds = oddsValues.reduce((a, b) => a + b, 0) / oddsValues.length;
console.log(Number(avgOdds.toFixed(2))); // 3.69

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same names.

// ... my way of doing this
const oddsEntries = oddsValues.entries();
for (const [index, value] of oddsEntries) {
        const teamNames = [`Odd of victory ${game.team1}:`, `Odd of draw:`, `Odd of victory ${game.team2}:`];

        console.log(teamNames[index], `${value}`);
} // Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5

// ... jonas way
for (const [team, odd] of Object.entries(game.odds)) {
        const teamStr = team === `x` ? `Odd of draw:` : `Odd of victory ${team}:`;
        console.log(`${teamStr} ${odd}`);
} // Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5

console.log('-----CODING CHALLENGE #1 120-----');
console.log('-----Sets and Maps-----');

const gameEvents = new Map([
        [17, '⚽ GOAL'],
        [36, '🔁 Substitution'],
        [47, '⚽ GOAL'],
        [61, '🔁 Substitution'],
        [64, ' 🔶 Yellow card'],
        [69, ' 🔴 Red card'],
        [70, '🔁 Substitution'],
        [72, '🔁 Substitution'],
        [76, '⚽ GOAL'],
        [80, '⚽ GOAL'],
        [92, ' 🔶 Yellow card'],
]);
// 1. Create a set of all the events that happened in the game. (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events); // [ '⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card' ]

// 2. After the game has finished, is found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

// 3. calculate the average number of events per minute. keep im mind that the game has a total of 90 minutes.
// ... covert the game events to an array first so you can iterate over it
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`); // 0.9

// ... bonus way
const time = [...gameEvents.keys()].at(-1); // -1 because the game has 90 minutes
// const lastElement = time.at(-1);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`); // 0.9

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game
for (const [index, value] of gameEvents) {
        // ... my way
        console.log(index <= 45 ? `[FIRST HALF] ${index}: ${value}` : `[SECOND HALF] ${index}: ${value}`); //

        // ... jonas way
        /* let half = index <= 45 ? `FIRST` : `SECOND`;
        console.log(`[${half} HALF] ${index}: ${value}`); */
}

console.log('-----CODING CHALLENGE #4 124-----');
console.log('-----working with strings-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648623#announcements

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// ... mine and jonas way
const convertVariable2 = (variable) => {
        const variables = variable.split('\n');

        for (const [i, row] of variables.entries()) {
                const [firstWord, secondWord] = row.toLowerCase().trim().split('_');
                const output = `${firstWord}${secondWord.replace(secondWord[0], secondWord[0].toUpperCase())}`;
                console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
        }
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', () => {
        const text = document.querySelector('textarea').value;
        convertVariable2(text);
});
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

console.log('-----CODING CHALLENGE #5 135-----');
console.log('-----a closer look a functions #1-----');
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
                // if  if the input is a number and if the number is between 0 and 3 (inclusive) then we register the answer in the answers array at the index of the number we got as an input (answer) - 1 (because the array starts at 0) and we increment the answer by 1 (because we want to count the number of times the user answered the question) - this is the same as this.answers[answer - 1]++ but we use the array method .fill() instead of .push() because we want to overwrite the value at the index of the answer we got as an input (answer) - 1 (because the array starts at 0)
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
                        console.log(`Poll results are ${this.answers.join(', ')}`);
                }
        },
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
console.log(poll.displayResults.call({ answers: [5, 2, 3] })); // [5, 2, 3]
console.log(poll.displayResults.call({ answers: [5, 2, 3] }, 'string')); // Poll results are 5, 2, 3

console.log('-----CODING CHALLENGE #5 139-----');
console.log('-----a closer look a functions: closure #2-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648697#overview
(function () {
        const header = document.querySelector('h1');
        header.style.color = 'red';
        document.body.addEventListener('click', () => {
                header.style.color = 'blue';
        });
})();

console.log('-----CODING CHALLENGE #6 148-----');
console.log('-----working with arrays #1-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648723#overview
const checkDogs = (dogsJulia, dogsKate) => {
        const dogsJuliaCopy = [...dogsJulia];
        dogsJuliaCopy.splice(0, 1);
        dogsJuliaCopy.splice(-2);

        const dogOwnersArr = [...dogsJuliaCopy, ...dogsKate];
        dogOwnersArr.forEach((dogAge, index) => {
                const outPut =
                        dogAge >= 3
                                ? `Dog number ${index + 1} is an adult 🐩, and is ${dogAge} years old`
                                : `Dog number ${index + 1} is a puppy 🐶`;
                console.log(outPut);
        });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log('-----CODING CHALLENGE #7 154-----');
console.log('-----working with arrays #2-----');
const calcAverageHumanAge = (dogAges) => {
        const humanAge = dogAges
                .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
                .filter((dogAge) => dogAge > 18);
        const avgHumanAge = Math.round(humanAge.reduce((acc, dogAge) => acc + dogAge, 0) / humanAge.length);
        return avgHumanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])); // 44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); // 47

console.log('-----CODING CHALLENGE #8 212-----');
console.log('-----OOP #1-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649063#questions
const Car = function (make, speed) {
        this.make = make;
        this.speed = speed;
};

Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`'${this.make}' going at ${(this.speed)} km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();

console.log('-----CODING CHALLENGE #9 217-----');
console.log('-----OOP #2-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649083#questions

class Car2 {
        constructor(make, speed) {
                this.make = make;
                this.speed = speed;
        }

        accelerate() {
                this.speed += 10;
                console.log(`'${this.make}' going at ${this.speed} km/h`);
        }

        brake() {
                this.speed -= 5;
                console.log(`'${this.make}' going at ${this.speed} km/h`);
                return this
        }

        // getter
        get speedUS() {
                return this.speed / 1.6;
        }

        // setter
        set speedUS(speed) {
                this.speed = speed * 1.6;
        }
}
const ford = new Car2('FORD', 120);
console.log(ford.speedUS); // 75
ford.speedUS = 50;
console.log(ford); // Car { make: 'FORD', speed: 80 }

console.log('-----CODING CHALLENGE #10 219-----');
console.log('-----OOP #3-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649087#overview

const EV = function (make, speed, charge) {
        Car.call(this, make, speed);
        this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
        this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
        this.speed += 20;
        this.charge -= 1;
        console.log(`'${this.make}' is going at ${this.speed} km/h with a charge of ${this.charge}%`);
};

const car1 = new EV('Tesla', 120, 23);
car1.chargeBattery(90);
console.log(car1); // {make: 'Tesla', speed: 120, charge: 90}
car1.accelerate(); // Tesla is going at 140 km/h with a charge of 89%
car1.accelerate(); // Tesla is going at 160 km/h with a charge of 88%
car1.brake(); // Tesla is going at 155 km/h

console.log('-----CODING CHALLENGE #10 219-----');
console.log('-----OOP #3-----');

class EVCL extends Car2 {
        // private fields
        #charge;

        constructor(make, speed, charge) {
                super(make, speed);
                this.#charge = charge;
        }

        chargeBattery(chargeTo) {
                this.#charge = chargeTo;
                return this;
        }

        accelerate() {
                this.speed += 20;
                this.#charge -= 1;
                console.log(`'${this.make}' is going at ${this.speed} km/h with a charge of ${this.#charge}%`);
                return this;
        }
}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian); // {make: 'Rivian', speed: 120, charge: 23}
rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate(); // Rivian is going at 140 km/h with a charge of 89%
console.log(rivian.speedUS); // 109.375



console.log('--- CODING CHALLENGE #11 256---');
console.log('-----ASYNCHRONOUS JAVASCRIPT #3-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649343#questions
// /////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const getJson = (url, errorMsg = 'Something went wrong, ') => {
        fetch(`${url}`).then(response => {
                if(!response.ok) throw new Error(`${errorMsg} (${response.status})`)
                return response.json()
        });
}
*/

// PART 1
const whereAmI = (lat, lng) => {
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
                .then((response) => {
                        if (!response.ok) throw new Error(`Problem with geocoding (${response.status})`);
                        return response.json();
                })
                .then((data) => {
                        if (data.success === false) throw new Error(`No city`);
                        console.log(data);
                        console.log(`Your are in ${data.city}, ${data.country}.`);

                        // PART 2
                        // getCountryData5(data.country);
                        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
                })
                .then((response) => {
                        if (!response.ok) throw new Error(`(${response.status})`); //
                        return response.json();
                })
                .then(([data]) => {
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        if (!neighbor) throw new Error(`${data.name.common} has no neighboring country`);

                        return neighbor.forEach((code) => {
                                fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
                                        .then((response) => {
                                                // 🎯 THROWING ERRORS MANUALLY
                                                // if theres no country / if response.ok: is false then throw new error
                                                if (!response.ok) throw new Error(`(${response.status})`); //
                                                return response.json();
                                        })
                                        .then((data) => renderCountry(data[0], 'neighbour'));
                        });
                })
                .catch((err) => console.log(`📛📛 ${err.message}. Try again!`));
};

// whereAmI(52.508, 13.38); // Your are in Mumbai, India.
// whereAmI(19.037, 72.87); // Your are in Berlin, Germany.
whereAmI(-33.933, 18.47); // Your are in Cape Town, South Africa.


console.log('--- CODING CHALLENGE #11 261---');
console.log('-----ASYNCHRONOUS JAVASCRIPT #4-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649367#questions

const imageContainer = document.querySelector('.images');
const img = document.createElement('img');

const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const createImage = (imgPath) =>
        new Promise((resolve, reject) => {
                img.src = imgPath;
                // we need to wait for the image to load before resolving it
                img.onload = () => {
                        imageContainer.append(img);
                        resolve(img);
                };
                img.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

createImage('img/img-1.jpg')
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
                return createImage('img/img-2.jpg');
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'block';
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
                return createImage('img/img-3.jpg');
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'block';
        })
        .then(() => wait(2))
        .then(() => {
                img.style.display = 'none';
        })
        .catch((err) => console.error(err));

console.log('--- CODING CHALLENGE #11 261---');
console.log('-----ASYNCHRONOUS JAVASCRIPT #4-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649367#questions
        
// TEST DATA
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// GLOBAL VARIABLES
const imageContainer = document.querySelector('.images');
const imgDiv = document.createElement('img');

// FUNCTIONS
const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// Part 1:
const createImage = imgPath =>
        new Promise((resolve, reject) => {
                imgDiv.src = imgPath;

                imgDiv.onload = () => {
                        imageContainer.append(imgDiv);
                        resolve(imgDiv);
                };
                imgDiv.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

const loadAndPause = async (...imgPath) => {
        try {
                const imgs = await Promise.all(imgPath.flatMap(img => img));
                console.log(imgs);

                return createImage(imgs[0])
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                                return createImage(imgs[1]);
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'block';
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                                return createImage(imgs[2]);
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'block';
                        })
                        .then(() => wait(2))
                        .then(() => {
                                imgDiv.style.display = 'none';
                        });
                
                        // return createImage(imgs[0])
                        // .then(() => wait(2))
                        // .then(() => createImage(imgs[1]))
                        // .then(() => wait(2))
                        // .then(() => createImage(imgs[2]));
                
        } catch (err) {
                return Promise.reject(new Error(`💥 ${err.message}`));
        }
};

// PART 2:
const createImageAll = imgPath =>
        new Promise((resolve, reject) => {
                const imgEl = document.createElement('img');
                imgEl.classList.add('parallel');
                imgEl.src = imgPath;

                imgEl.onload = () => {
                        imageContainer.append(imgEl);
                        resolve(imgEl);
                };
                imgEl.onerror = () => reject(new Error(`Could not load ${imgPath}`));
        });

const loadAlI = async (...imgPath) => {
        try {
                const images = await Promise.all(imgPath);
                return images.map(img => createImageAll(img));
        } catch (err) {
                return Promise.reject(new Error(`💥 ${err.message}`));
        }
};

// 🎯 Invokes the loadAndPause and loadAll fns asycnronusly.
(async () => {
        try {
                await loadAndPause(imgArr)
                        .then(() => wait(2))
                        .then(() => (imgDiv.style.display = 'none'))
                        .then(() => loadAlI(...imgArr));
        } catch (err) {
                console.error(` 💥 ${err.message}`);
        }
})();