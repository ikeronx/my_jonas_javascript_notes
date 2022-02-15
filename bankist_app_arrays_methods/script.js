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
};

const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
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

// ... displays the account deposit and withdrawal movements
const displayMovements = (movements, sort = false) => {
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
        const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

        // loop through movements array and display each movement in the containerMovements div with a class of movement
        movs.forEach((movement, index, arr) => {
                // check if movement is positive or negative and add the deposit or withdrawal class to container for styling purposes
                const type = movement > 0 ? 'deposit' : 'withdrawal';
                const html = ` 
                <div class="movements__row">
                        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                        <div class="movements__value">${movement}€</div>
                </div>`;
                // insert the html to the movement container so it shows up in the UI
                containerMovements.insertAdjacentHTML('afterBegin', html);
        });
};

// FUNCTIONS
// ... displays the account balance
const calcDisplayBalance = acc => {
        acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
        labelBalance.textContent = `${acc.balance}€`;
};

// ,,, displays summary of movements (deposits and withdrawals) and interest at the bottom of the screen (IN, OUT, INTEREST)
const calcDisplaySummary = acc => {
        const sumIn = acc.movements.filter(value => value > 0).reduce((acc, value) => acc + value, 0);
        const sumOut = acc.movements.filter(value => value < 0).reduce((acc, value) => acc + value, 0);
        const sumInterest = acc.movements
                .filter(value => value > 0)
                .map(deposit => (deposit * acc.interestRate) / 100)
                .filter((int, i, arr) => int >= 1)
                .reduce((acc, int) => acc + int, 0);

        labelSumIn.textContent = `${sumIn}€`;
        labelSumOut.textContent = `${Math.abs(sumOut)}€`;
        labelSumInterest.textContent = `${sumInterest}€`;
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
        displayMovements(acc.movements);
        // display the balance
        calcDisplayBalance(acc);
        // display the summary
        calcDisplaySummary(acc);
};

// EVENT HANDLERS
// ... logs the user in with the username and pin and displays the account information (movements, balance, interest, welcome message)
// global variable which represent and store the current account object and can be used in other functions to access the current account object properties which is stored in the memory heap due to the closure of the function (the function is not destroyed when it is called) and the variable is available in the memory heap
let currentAccount;

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
                containerApp.style.opacity = 100;
                labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
                // clear input fields
                inputLoginUsername.value = '';
                inputLoginPin.value = '';
                // remove focus from input fields
                inputLoginPin.blur();
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
                // update the current UI
                updateUI(currentAccount);
        }
});

/// ... checks if any of the deposits are at less more than 10% of the amount (bank rule to for a loan) on clicked
btnLoan.addEventListener('click', e => {
        e.preventDefault();
        // get the amount the current account wants a loan for
        const amount = +inputLoanAmount.value;
        // check if any of the deposits are at less more than 10% of the amount (bank rule to for a loan)
        if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
                currentAccount.movements.push(amount);
                // update UI
                updateUI(currentAccount);
        }
        // clear input fields
        inputLoanAmount.value = '';
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

labelBalance.addEventListener('click', e => {
        e.preventDefault();
        const movUi = Array.from(
                document.querySelectorAll('.movements__value'),
                el => +el.textContent.replace('€', '')
        );
});

// how to get user's information using the reduce method
// reference: https://www.youtube.com/watch?v=kC3AasLEuBA
const ownerObj = accounts.reduce((acc, user) => {
        // return {...acc, [user.owner]: user}
        acc[user.owner] = user;
        return acc;
}, {});
console.log(ownerObj); // {'Keron Williams': {owner: 'Keron Williams', movements: [200, 450, -400, 3000, -650, -130, 70, 1300]}, 'Jessica Davis': {owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]}, 'Steven Thomas Williams': {owner: 'Steven Thomas Williams', movements: [200, -200, 340, -300, -20, 50, 400, -460]}, 'Sarah Smith': {owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90]}}
console.log(ownerObj['Keron Williams']); // { owner: 'Keron Williams', movements: [ 200, 450, -400, 3000, -650, -130, 70, 1300 ] }
console.log(ownerObj['Jessica Davis']); // { owner: 'Jessica Davis', movements: [ 5000, 3400, -150, -790, -3210, -1000, 8500, -30 ] }

// ** more practice transfer
// ... get user ages
const people = [
        { name: 'John', age: 20 },
        { name: 'Mike', age: 30 },
        { name: 'Jane', age: 25 },
];
const peopleInfo = people.reduce((acc, person) => ({ ...acc, [person.name]: person.age }), {});
console.log(peopleInfo); // { John: 20, Mike: 30, Jane: 25 }
console.log(peopleInfo['John']); // 20