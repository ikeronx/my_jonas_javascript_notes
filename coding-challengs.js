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