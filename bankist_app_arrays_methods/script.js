/* eslint-disable no-multi-assign */
/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP

// DATA
const account1 = {
        owner: 'Keron Williams',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,

        movementsDates: [
                '2019-11-18T21:31:17.178Z',
                '2019-12-23T07:42:02.383Z',
                '2020-01-28T09:15:04.904Z',
                '2020-04-01T10:17:24.185Z',
                '2022-02-11T14:11:59.604Z',
                '2022-02-16T17:01:17.194Z',
                '2022-02-17T23:36:17.929Z',
                '2022-02-18T10:51:36.790Z',
        ],
        currency: 'EUR',
        locale: 'pt-PT', // de-DE
};

const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,

        movementsDates: [
                '2019-11-01T13:15:33.035Z',
                '2019-11-30T09:48:16.867Z',
                '2019-12-25T06:04:23.907Z',
                '2020-01-25T14:18:46.235Z',
                '2020-02-05T16:33:06.386Z',
                '2020-04-10T14:43:26.374Z',
                '2020-06-25T18:49:59.371Z',
                '2020-07-26T12:01:20.894Z',
        ],
        currency: 'USD',
        locale: 'en-US',
};

const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
};

const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ELEMENTS
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// FUNCTIONS
// ... a fn that formats the numbers in the movements array using the new Intl.NumberFormat() method
const formatCur = function (value, locale, currency) {
        // format the movement withdrawal and deposit numbers using the ne Intl.NumberFormat method
        return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
        }).format(value);
};

// ... a function to display the date of each transaction/movement
const formatMovementDate = date => {
        // a fn that takes in two dates and returns the days passed between these two dates
        const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

        // store the days passed between the current date and the date of the movement
        const daysPassed = calcDaysPassed(new Date(), date);

        // display days passed if it's today, yesterday or the less than 7 days ago
        if (daysPassed === 0) return 'Today';
        if (daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;

        // .. else return the date of the transaction...
        // creates a date for each of the movement from the movementsDates array in each account
        const day = `${date.getDate()}`.padStart(2, '0');
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
};
// ... displays the account deposit and withdrawal movements
const displayMovements = (acc, sort = false) => {
        // to empty the containerMovements div
        containerMovements.innerHTML = '';

        // *** implementing the sort function ***
        // @ the 12:50 mark https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648779#questions/14542862
        // sort the movements array if sort is equal to true.. when the sort btn is clicked which is in the EVENT HANDLERS section of the codebase
        // we just want sort a movements array and NOT the underlining data cause the sort method mutates the original array
        // ... define a new array conditionally to hold the sorted movements by checking
        // ... if sort is true then we sort the movements array
        // ... !! keep in mind that sort mutates the original movements array and we dont want that
        // ... !! so we add slice to the movements array to take a copy of the underlining movements array and then sort it in an ascending order... we use slice method here instead of the [...spread operator] cause we're currently in the process of changing the methods together
        // ... and if sort is false then we just return the movements array as it is
        const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

        // loop through movements array and display each movement and their dates in the containerMovements div that has a class of 'movement'
        // looping over two arrays at the same time (movements and movementsDates) and using the index of the movements array to access the movementsDates array
        movs.forEach((mov, index, arr) => {
                // check if movement is positive or negative and add the deposit or withdrawal class to container for styling purposes
                const type = mov > 0 ? 'deposit' : 'withdrawal';

                // displays days passed and dates for each transaction
                const date = new Date(acc.movementsDates[index]); // <-- create a variable to store each date from the current account object 'movementDates' array
                const displayDate = formatMovementDate(date); // <-- pass the variable to the formatMovementDate function to format it

                // ... create a variable to store the formatted number from the current account object 'movements' array and pass the variable to the formatMovements function to format it
                const displayMov = formatCur(mov, acc.locale, acc.currency);

                const html = ` 
                <div class="movements__row">
                        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                        <div class="movements__date">${displayDate}</div>
                        <div class="movements__value">${displayMov}</div>
                </div>`;
                // insert the html to the movement container so it shows up in the UI
                containerMovements.insertAdjacentHTML('afterBegin', html);
        });
};

// FUNCTIONS
// ... displays the account balance
const calcDisplayBalance = acc => {
        acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
        labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// ,,, displays summary of movements (deposits and withdrawals) and interest at the bottom of the screen (IN, OUT, INTEREST)
const calcDisplaySummary = acc => {
        const sumIn = acc.movements.filter(value => value > 0).reduce((acc, value) => acc + value, 0);
        labelSumIn.textContent = formatCur(sumIn, acc.locale, acc.currency);

        const sumOut = acc.movements.filter(value => value < 0).reduce((acc, value) => acc + value, 0);
        labelSumOut.textContent = formatCur(Math.abs(sumOut), acc.locale, acc.currency);

        const sumInterest = acc.movements
                .filter(value => value > 0)
                .map(deposit => (deposit * acc.interestRate) / 100)
                .filter((int, i, arr) => int >= 1)
                .reduce((acc, int) => acc + int, 0);
        labelSumInterest.textContent = formatCur(sumInterest, acc.locale, acc.currency);
};

// .... computes the username (creates a username initial key/value pair from each account 'owner' property and adds it to each account object)
const createUserNames = accs =>
        // use the forEach method as a side effect instead of creating a new array with mao method and add a username object to each of the accounts
        // loops over the 'accounts' variable with the array of objects for each account and create and adds a username initials object from each of the account owner property
        accs.forEach(
                acc =>
                        // creates a username initials object from the account owner property
                        (acc.username = acc.owner
                                .toLowerCase() 
                                .split(' ')
                                .map(name => name[0])
                                .join(''))
        );
createUserNames(accounts);

// .... updates the account UI with the account balance, summary and movements
const updateUI = acc => {
        // display the movements
        displayMovements(acc);
        // display the balance
        calcDisplayBalance(acc);
        // display the summary
        calcDisplaySummary(acc);
};

// starts logout timer when user logins
const startLogOutTimer = () => {
        const tick = () => {
                const min = String(Math.trunc(time / 60)).padStart(2, 0);
                const sec = String(time % 60).padStart(2, 0);
                // In each call back call print remaining time to the updateUI
                labelTimer.textContent = `${min}:${sec}`;

                // when we reach 0 seconds stop timer and logout user
                if (sec === 0) { 
                        // stop timer
                        clearInterval(timer); // stops timer
                        labelWelcome.textContent = 'Login to get started'; // changes the welcome label to 'Login to get started'
                        // logout user
                        containerApp.style.opacity = 0; // hides the containerApp div
                }
                // decrease one second from the timer
                time--;
        };
        // set time to 2 minutes before logout
        let time = 120; 

        // call the timer every second
        tick(); // <-- call the tick function to start the timer
        const timer = setInterval(tick, 1000); // starts timer every second
        return timer; // return the timer so we can clear it later
};

// EVENT HANDLERS
// ... logs the user in with the username and pin and displays the account information (movements, balance, interest, welcome message)
// GLOBAL VARIABLES which represent and store the current account object and can be used in other functions to access the current account object properties which is stored in the memory heap due to the closure of the function (the function is not destroyed when it is called) and the variable is available in the memory heap
let currentAccount; // <-- global variable to store the current account object and can be used in other functions to access the current account object properties which is stored in the memory heap due to the closure of the function (the function is not destroyed when it is called) and the variable is available in the memory heap due to the closure of the function
let timer; // <-- global variable to store the timer so we can clear it later

btnLogin.addEventListener('click', e => {
        // prevents form refreshing the page on submit
        e.preventDefault();
        // get the username of the current account (user) who is trying to login by looping through the 'accounts' variable array of account objects
        currentAccount = accounts.find(
                acc => acc.username === inputLoginUsername.value.toLowerCase().replace(/ +/g, '')
        );
        // then check if a current user exist (USING OPTIONAL CHAINING) and if the user exist then check if the pin is correct and if so display the account information and movements
        if (currentAccount?.pin === +inputLoginPin.value) {
                // display UI and a welcome message
                labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
                containerApp.style.opacity = 100;

                // update the UI
                // create current label date
                const now = new Date();
                const day = `${now.getDate()}`.padStart(2, '0');
                const month = `${now.getMonth() + 1}`.padStart(2, '0');
                const year = now.getFullYear();
                const hours = `${now.getHours()}`.padStart(2, '0');
                const min = `${now.getMinutes()}`.padStart(2, '0');
                labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

                // clear input fields
                inputLoginUsername.value = '';
                inputLoginPin.value = '';
                // remove focus from input fields
                inputLoginPin.blur();

                // checks if there is a timer already running from a different account and reset  it so the current account timer doesn't override previous timer
                if (timer) {
                        clearInterval(timer);
                }
                // the timer global variable is set to startLogOutTimer
                timer = startLogOutTimer();

                // update UI fn to display the account information (movements, balance, interest)
                updateUI(currentAccount);
        }
});

// ... transfers money from one account to another
btnTransfer.addEventListener('click', e => {
        e.preventDefault();
        // get amount to transfer
        const amount = +inputTransferAmount.value;
        // get the account that we want to transfer to base on the username input field value
        const receiverAcc = accounts.find(
                acc => acc.username === inputTransferTo.value.toLowerCase().replace(/ +/g, '')
        );
        // clear input fields
        inputTransferAmount.value = inputTransferTo.value = '';

        // check if the amount is greater than 0 and if receiverAcc exist and if the current account has enough money to transfer and if the receiver account is not the same as the current account
        if (
                amount > 0 &&
                receiverAcc &&
                currentAccount.balance >= amount &&
                receiverAcc?.username !== currentAccount.username
        ) {
                // ** doing the transfer **
                currentAccount.movements.push(-amount);
                receiverAcc.movements.push(amount);

                // add transfer dates
                currentAccount.movementsDates.push(new Date().toISOString());
                receiverAcc.movementsDates.push(new Date().toISOString());

                // update the current UI
                updateUI(currentAccount);

                // reset the timer... when we do transfer the current timer is cleared
                clearInterval(timer);
                timer = startLogOutTimer(); // ... and set a new timer
        }
});

/// ... checks if any of the deposits are at less more than 10% of the amount (bank rule to for a loan) on clicked
btnLoan.addEventListener('click', e => {
        e.preventDefault();

        // get the amount the current account wants a loan for
        const amount = Math.floor(inputLoanAmount.value);
        // check if any of the deposits are at less more than 10% of the amount (bank rule to for a loan)
        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
                // Add movement
                // shows movement in the after 5 seconds
                setTimeout(() => {
                        currentAccount.movements.push(amount);

                        // Add loan movement
                        currentAccount.movementsDates.push(new Date().toISOString());

                        // Update UI
                        updateUI(currentAccount);
                }, 5000);
        }
        // clear input fields
        inputLoanAmount.value = '';

        // reset the timer... when we do loan the current timer is cleared
        clearInterval(timer);
        timer = startLogOutTimer(); // ... and set a new timer
});

// ... closes/deactivate/ delete the current account
btnClose.addEventListener('click', e => {
        e.preventDefault();

        // check if the input values matches the current account
        if (
                currentAccount?.username === inputCloseUsername.value.toLowerCase().replace(/ +/g, '') &&
                currentAccount?.pin === +inputClosePin.value
        ) {
                // find the index of the current account
                const accIndex = accounts.findIndex(acc => acc.username === currentAccount.username);
                // remove / delete the account from the accounts array
                accounts.splice(accIndex, 1);
                // hide the UI
                containerApp.style.opacity = 0;
        }
        // clear input fields
        inputCloseUsername.value = inputClosePin.value = '';
});

// ... sorts the current account movements array on clicked
let sorted = false; // a state variable which will monitor if we're currently sorting the array or not... the variable is declared outside the btnSort callback fn but not initialized so the value can be preserved after clicking the button.. we want preserve that sorted state throughout each click
btnSort.addEventListener('click', e => {
        e.preventDefault();
        // display the movements
        displayMovements(currentAccount.movements, !sorted); // the sorted state is inverted here with the ! operator so if the current state is false then it will be changed to true and vice vera when the button is clicked each time
        // then change back the sorted state variable outside rhe call back fn back to false once button click is done (the state is inverted) so the next click will be the opposite of the current state ... true to false .. false to true etc etc
        sorted = !sorted;
});

// eslint-disable-next-line prettier/prettier
console.log('-----!! How to create an array from a NODE LIST using the Array.from() method and pass a callback fuck function as second argument-----'); // !! CREATES AN ARRAY !!
// - create an array from the movements values from the Bakist UI using the Array.from() method then use the map call back functions to get the values from the array and display them
// step 1: pass in the node list to the Array.from() method by selecting each el using document.querySelectorAll()
// step 2: use the map() method to loop through the nobelist to get the values from the array and display them in the console or alert window
// labelBalance.addEventListener('click', e => {
//         // 1: pass the node list to the Array.from() method as the first argument by selecting each el using document.querySelectorAll() then pass a callback function to the Array.from() method as a second argument to loop through the nodelist array and get the values from the array and display them in the console
//         const movementsUI = Array.from(
//                 document.querySelectorAll('.movements__value'),
//                 el => +el.textContent.replace('€', '')
//         ); // .reduce((acc, curr) => acc + curr // <-- can chain methods to the Array.from() method
//         // 2: display the values for each of the elements in the nodelist (movementsUI)
//         console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]
// });

// How to create an array from a NODE LIST using the Array.from() method and pass a callback fuck function as second argument
labelBalance.addEventListener('click', e => {
        e.preventDefault();
        const movUi = Array.from(
                document.querySelectorAll('.movements__value'),
                el => +el.textContent.replace('€', '')
        );
});

// how to use the reminder operator to change the color of the rows by the index that divisible 2 and 3 in the movements table
labelBalance.addEventListener('click', () => {
        [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
                if (i % 2 === 0) row.style.backgroundColor = 'orangered';
                // 0..2..4..6..8
                if (i % 2 === 0) row.style.backgroundColor = 'olive';
                // 0..3..6..9
        });
});