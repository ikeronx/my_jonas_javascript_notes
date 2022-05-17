/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log(`----  ASYNCHRONOUS JAVASCRIPT, AJAX AND APIS ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649283#questions/13295838

// 📌 SYNCHRONOUS CODE - BLOCKING
// 👉🏼 Synchronous code is executed line by line
// 👉🏼 Each line of code waits for previous line to finish
// 👉🏼 Long-running operations block code execution
// 🤔 Example:
const header = document.querySelector('.header');
header.style.color = 'red';
// alert('Please select'); // <-- blocking
header.style.color = 'orange';

// 📌 ASYNCHRONOUS CODE - NON-BLOCKING
// 👉🏼 Asynchronous code is executed after a task that runs in the “background” finishes
// 👉🏼 Asynchronous code is non-blocking
// 👉🏼 Execution doesn’t wait for an asynchronous task to finish its work
// 👉🏼 Callback functions alone do NOT make code asynchronous!

// 🤔 Example 1: Timer with callback
const header2 = document.querySelector('.header');
header2.style.color = 'red';
// setTimeout(function () { // <-- async function (non blocking) ... block of code running in the background without blocking the current thread of execution
//         alert('Please select');
// }, 5000);
header2.style.color = 'green';

// 🤔 Example 2: Asynchronous image loading with event and callback
const img = document.querySelector('.dog');
img.src = 'dog.img'; // <-- asynchronous - setting the src attribute of an image is a an asynchronous operation due to fact that image is loading in background while rest of the code is running
img.addEventListener('load', function () {
        // 👆🏼❗️💡 addEventListeners alone do not make the code asynchronous! The 'load' event as asynchronous behavior does and since the callback fn is attached to an element with an asynchronous attribute 'img.src' the load event will happened asynchronously
        img.classList.add('fadeIn');
});
header.style.color = 'purple';

// 📌 AJAX
// 👉🏼 AJAX stands for - Asynchronous JavaScript And XML
// 👉🏼 Allows us to communicate with remote web servers (e.g API's) in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.
// 👉🏼 Request-response model

// 🤔 Example: 👷🏽‍♂️🛠 How to make AJAX requests
// 🧑🏽‍💻 CLIENT (e.g browser) 👉🏼 Request [GET/ POST / PUT / etc.] (data from) 👉🏼 WEB SERVER (API) 👉🏼 Response (sends data back to) 👉🏼 CLIENT

// 📌 API
// 👉🏼 API stands for - Application Programming Interface
// 👉🏼 Piece of software that can be used by another piece of software, in order to allow applications to talk to each other;
// 👉🏼 Different types of APIs: DOM API, Geolocation API, Own Class API, “Online” API.
// 👉🏼 “Online” API: Application running on a server, that receives requests for data, and sends data back as response;
// 👉🏼 We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs (fake store API, Weather data, google maps, Currency conversion data, etc);

console.log(`----  OUR FIRST AJAX CALL: XMLHTTPREQUEST  ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649289#questions/15963214
const getCountryData = (country) => {
        // 👎🏼 old way
        // STEP 1️⃣: CREATE A FUNCTION (OBJECT) THAT WILL FETCH THE DATA
        const request = new XMLHttpRequest();

        // STEP 2️⃣: GET REQUEST DATA
        request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // open the request to the API endpoint with the country name as the parameter in the URL string and the method is GET (default)
        request.send(); // send the request

        // STEP 3️⃣: REGISTER A CALLBACK FN ON THE REQUEST OBJECT FOR THE LOAD EVENT
        request.addEventListener('load', function () {
                // console.log(this.responseText); // the this keyword refers to the request object

                // convert the data from JSON to a javascript object using the JSON.parse() method
                const [data] = JSON.parse(this.responseText /* or request.responseText */); // parse the response text into a JSON object
                console.log(data);

                // STEP 5️⃣: DO SOMETHING WITH THE DATA - CREATE A NEW HTML ELEMENT WITH THE DATA
                const html = `
                <article class="country">
                <img class="country__img" src="${data.flags.svg}" />
                        <div class="country__data">
                        <h3 class="country__name">${Object.values(data.name)[0]}</h3> 
                        <h4 class="country__region">${data.region}</h4> 
                        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
                        </div>
                </article>
                                `;

                // STEP 6️⃣: ADD THE NEW HTML ELEMENT TO THE DOM
                // countriesContainer.insertAdjacentHTML('beforeend', html);
                // countriesContainer.style.opacity = 1;
                // console.log(html);
        });
};
getCountryData('barbados');
getCountryData('south korea');

console.log(`--- WELCOME TO CALLBACK HELL ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649301#questions/15963214

// 📌👷🏽‍♂️🛠 How to create a sequence of AJAX calls so the second request only runs after the first request is finish executing and so forth
const renderCountry = (data, className = '') => {
        const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                <h3 class="country__name">${Object.values(data.name)[0]}</h3> 
                <h4 class="country__region">${data.region}</h4> 
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
                </div>
        </article>
        `;
        // countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
        console.log(html);
};

const getCountryAndNeighbor = (country) => {
        // old way
        // STEP 1: CREATE A FUNCTION (OBJECT) THAT WILL FETCH THE DATA
        const request = new XMLHttpRequest();

        // STEP 2: AJAX CALL COUNTRY 1
        request.open('GET', `https://restcountries.com/v3.1/name/${country}`); // open the request to the API endpoint with the country name as the parameter in the URL string and the method is GET (default)
        request.send(); // send the request

        // .... HANDLE THE DATA - REGISTER A CALLBACK FN ON THE REQUEST OBJECT FOR THE LOAD EVENT
        request.addEventListener('load', function () {
                // console.log(this.responseText); // the this keyword refers to the request object

                // ... convert the data from JSON to a javascript object using the JSON.parse() method
                const [data] = JSON.parse(this.responseText); // parse the response text into a JSON object
                console.log(data);

                // STEP 3: RENDER COUNTRY !
                renderCountry(data); // render the country data

                // STEP 4: GET THE NEIGHBOR COUNTRY (2)
                // 💡 use optional chaining to account for countries that don't have no borders property
                const neighbors = data.borders; // get the neighbours of the country
                console.log(neighbors);

                // ⛔️🎅🏽 Guard clause: check if the country has no neighbors
                if (!neighbors) return; // if there are no neighbors, return

                // STEP 5: AJAX CALL COUNTRY 2 - GET THE NEIGHBOR COUNTRIES
                neighbors.forEach(function (cur) {
                        const request2 = new XMLHttpRequest();
                        request2.open('GET', `https://restcountries.com/v3.1/alpha?codes=${cur}`);

                        request2.send(); // send the request

                        // .... HANDLE THE DATA - REGISTER A CALLBACK FN ON THE REQUEST OBJECT FOR THE LOAD EVENT
                        request2.addEventListener('load', function () {
                                // console.log(this.responseText); // the this keyword refers to the request object

                                // ... convert the data from JSON to a javascript object using the JSON.parse() method
                                const [data2] = JSON.parse(this.responseText); // parse the response text into a JSON object
                                console.log(data2);

                                // STEP 6: RENDER COUNTRY 2
                                renderCountry(data2, 'neighbor'); // render the country data
                        });
                });
        });
};
getCountryAndNeighbor('united states');
getCountryAndNeighbor('barbados');
/*
// 🤔 Example: CALLBACK HELL
setTimeout(() => {
        console.log('1 second passed');
        setTimeout(() => {
                console.log('2 seconds passed');
                setTimeout(() => {
                        console.log('3 seconds passed');
                        setTimeout(() => {
                                console.log('4 seconds passed');
                                setTimeout(() => {
                                        console.log('5 seconds passed');
                                }, 1000);
                        }, 1000);
                }, 1000);
        }, 1000);
}, 1000);
*/
console.log(`---  PROMISES AND THE FETCH API ---`);
/// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649313#questions/13479530
// 👉🏼 Promise: An object that is used as a placeholder for the future result of an asynchronous operation.
// 👉🏼 Promise: A container for an asynchronously delivered value.
// 👉🏼 Promise: A container for a future value. (🤔 e.g repose from an AJAX call)
// 👉🏼 Promise: An object that is used as a placeholder for the future result of an asynchronous operation.
// 👇🏼 Advantages of Promise:
// 👉🏼 We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results;
// 👉🏼 Instead of nesting callbacks, we can chain promises for a  sequence of asynchronous operations: escaping callback hell 🎉

// 👷🏽‍♂️🛠 How to use Promise for asynchronous operations
// 💅🏼 new way
// 🤔 Example:
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request);

console.log(`---  CONSUMING PROMISES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649319#questions/16579266

// 👷🏽‍♂️🛠 How to consume a promise
const getCountryData2 = (country) => {
        // ...🎯  Handling a 'fulfilled' promise
        fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) =>
                response.json().then(([data]) => renderCountry(data))
        );
};
getCountryData2('south korea')

console.log(`---  CHAINING PROMISES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649327#questions/16579266

// 👷🏽‍♂️🛠 How to chain a promise
const getCountryData3 = (country) => {
        // Country 1
        fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then((response) => response.json())
                .then(([data]) => {
                        renderCountry(data);

                        // ...🎯 changing promise
                        const neighbor = data.borders; // <-- // get the neighboring country
                        console.log(neighbor);

                        if (!neighbor) return; // <-- return if there's np neighboring country

                        // ❗️💡 return the second ajax call so you can chain the promise using the then method
                        return neighbor.forEach((code) => {
                                // Country 2
                                // ❗️❗️ the second AJAX call
                                fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                                        .then((response) => response.json())
                                        .then((data) => renderCountry(data[0], 'neighbour'));
                        });
                })
                .catch((error) => alert(error.message));
};
getCountryData3('united states');

