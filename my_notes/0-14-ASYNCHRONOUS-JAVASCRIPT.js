/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
// GLOBAL VARIABLES
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// FUNCTIONS
const renderCountry = (data, className = '') => {
        const name = Object.values(data.name)[0];
        const flag = Object.values(data.flags)[0];
        const language = Object.values(data.languages);
        const currency = Object.values(data.currencies).map((cur) => cur.name);
        const html = `
        <article class="country ${className}">
        <img class="country__img" src="${flag}" />
                <div class="country__data">
                <h3 class="country__name">${name}</h3> 
                <h4 class="country__region">${data.region}</h4> 
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
                </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
        console.log(html);
};

const renderError = (msg) => {
        countriesContainer.insertAdjacentText('beforeend', msg);
        // countriesContainer.opacity = 1;
};

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
const img~ = document.querySelector('.dog');
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
getCountryData2('south korea');

console.log(`---  CHAINING PROMISES ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649327#questions/16579266

// 👷🏽‍♂️🛠 How to chain a promise
const getCountryData3 = (country) => {
        // Country 1
        fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then((response) => response.json())
                .then(([data]) => {
                        renderCountry(data);

                        // 🎯 changing promise
                        const neighbor = data.borders; // <-- get the neighboring country
                        console.log(neighbor);

                        // ⛔️🎅🏽 Guard clause: if there's np neighboring country
                        if (!neighbor) return;

                        // Country 2
                        // 👉🏼 the return value from the fetch() is the fulfilled promise of this then method because each the then method return a promise
                        // 👇🏽💡❗️ return the second ajax call inside this then() method so you can chain the promise using the then method
                        return fetch(`https://restcountries.com/v3.1/alpha?codes=${neighbor}`);
                })
                // 👇🏽 chain the promise by using the then() method to parse the return promise value from the fetch data above, then() render the country and neighbor data
                .then((response) => response.json())
                .then((data) => renderCountry(data[0], 'neighbour'));
};

console.log(`---  HANDLING REJECTED PROMISE ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649327#questions/16579266

// 👷🏽‍♂️🛠 How to handle rejected promise (no internet connection)
const getCountryData4 = (country) => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then((response) => response.json())
                .then(([data]) => {
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        if (!neighbor) return;
                        return fetch(`https://restcountries.com/v3.1/alpha?codes=${neighbor}`);
                })
                .then((response) => response.json())
                .then((data) => renderCountry(data[0], 'neighbour'))

                // 🎯 Handling Rejected Promise
                // 👇🏽 the catch() method is used to catch rejected promise (no net connection) and display error message
                .catch((error) => {
                        console.error(`${error} 💥💥💥`);
                        renderError(`Something went wrong 💥💥💥 ${error.message} 💥💥💥 Try again!`);
                })
                // 👇🏽 the finally() method is use when we want something to always happen no matter the result of the promise .. full-filled / rejected etc
                .finally(() => (countriesContainer.style.opacity = 1));
};

console.log(`---  THROWING ERRORS MANUALLY ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649335#questions/16111984

// get jason fn
const getJSON = (url, errorMsg = 'Something went wrong,') =>
        fetch(`${url}`).then((response) => {
                // 🎯 THROWING ERRORS MANUALLY
                // if theres no country / if response.ok: is false then throw new error
                if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); //
                return response.json();
        });

// 👷🏽‍♂️🛠 How to throw errors manually
const getCountryData5 = (country) => {
        getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
                .then(([data]) => {
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        // 🎯 THROWING ERRORS MANUALLY
                        // If there's no neighboring country then 👇🏽 'throw new Error()' 👇🏽 method
                        if (!neighbor)
                                throw new Error(`Something went wrong ${data.name.common} has no neighboring country`);
                        return getJSON(`https://restcountries.com/v3.1/name/${code}`, 'Country not found')
                })
                .then((data) => renderCountry(data[0], 'neighbour'))
                .catch((error) => {
                        renderError(`Something went wrong 💥💥💥 ${error.message} 💥💥💥 Try again!`);
                })
                .finally(() => (countriesContainer.style.opacity = 1));
};

/*
// 👷🏽‍♂️🛠 How to throw errors manually
const getCountryData5 = (country) => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then((response) => {
                        // 🎯 THROWING ERRORS MANUALLY
                        // if theres no country / if response.ok: is false then throw new error
                        if (!response.ok) throw new Error(`Something went wrong (${response.status})`); //
                        return response.json();
                })
                .then(([data]) => {
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        // 🎯 THROWING ERRORS MANUALLY
                        // If there's no neighboring country then 👇🏽 'throw new Error()' 👇🏽 method
                        if (!neighbor)
                                throw new Error(`Something went wrong ${data.name.common} has no neighboring country`);
                        return fetch(`https://restcountries.com/v3.1/alpha?codes=${neighbor}`);
                })
                .then((response) => response.json())
                .then((data) => renderCountry(data[0], 'neighbour'))
                .catch((error) => {
                        renderError(`Something went wrong 💥💥💥 ${error.message} 💥💥💥 Try again!`);
                })
                .finally(() => (countriesContainer.style.opacity = 1));
};
*/

// EVENTS
btn.addEventListener('click', () => {
        getCountryData5('united states');
});


console.log(`---  ASYNCHRONOUS BEHIND THE SCENES: THE EVENT LOOP ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649347#questions

// 👉🏼 The event loop is the process that runs in the background and keeps the browser responsive to user input.;
// 👉🏼 The event loop is responsible for running the code that is inside the microtask queue (Like callback queue, but for callbacks related to promises. Has priority over callback queue!) and callback queue (callback functions (coming from events)) after the all code in call stack is finished executing.;
// 👉🏼 We register the callback in the web APIs environment, exactly where the image is loading.

// 🤔🏋🏻‍♀️ Practice Example: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649351#overview
console.log('Test Start'); // executes first (top level)
setTimeout(() => console.log('0 sec timer'), 0); // executes last (callback queue)
Promise.resolve('Resolved promised 1').then((res) => console.log(res)); // executes third (microtask queue)
console.log('Test End'); // executes second (top level)

console.log(`---  BUILDING A SIMPLE PROMISE ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649357#questions

// 👷🏽‍♂️🛠 How to create a new promise:

const lotteryPromise = new Promise((resolve, reject) => {
        //                         👆🏼 'Executor' callback function that resolves a value or rejects (error) when we consume the promise
        console.log('Lottery draw is happening 🔮');
        setTimeout(() => {
                if (Math.random() > 0.5) {
                        resolve('You WIN! 💰'); // 👍🏼 fulfilled promise
                } else {
                        reject(new Error('You lost your money! 😭')); // 👎🏼 rejected the promise
                }
        }, 2000);
});

// 👷🏽‍♂️🛠 How to consume the promise we created: (lotteryPromise)
lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

// 📌👉🏼 Promisify is to convert a callback-based (asynchronous behavior) function into a promise-based function.
// 👷🏽‍♂️🛠 How to promisify a setTimeout function:
const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

/* const wait = function (seconds) {
        return new Promise((resolve) => {
                setTimeout(resolve, seconds * 1000);
        }); */

// 👷🏽‍♂️🛠 How to consume the 'wait' promise we created: (wait) and run sequentially: (wait(1), wait(2), wait(3))
wait(1)
        .then(() => {
                console.log('1 second passed');
                return wait(1); // 👍🏼 return a promise to wait another second
        })
        .then(() => {
                console.log('2 seconds passed');
                return wait(1); // 👍🏼 return a promise to wait another second
        })
        .then(() => {
                console.log(' 3 seconds passed');
                return wait(1); // 👍🏼 return a promise to wait another second
        });

// 👷🏽‍♂️🛠 How to create a fulfilled or rejected promise easily:
Promise.resolve('abc').then((x) => console.log(x)); // 👍🏼 fulfilled promise
Promise.reject(new Error('Problem')).catch((x) => console.error(x)); // 👎🏼 rejected promise

console.log(`---  PROMISIFYING THE GEOLOCATION ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649363#search

// navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.error(err)
// );

const getPosition = () =>
        new Promise((resolve, reject) => {
                // navigator.geolocation.getCurrentPosition(
                //         (position) => resolve(position),
                //         (err) => reject(new Error(`Please allow your location. ${err}`))
                // ... shorter version of the code above
                navigator.geolocation.getCurrentPosition(resolve, reject);
        });

// getPosition().then((pos) => console.log(pos))

const whereAmIRewrite = () => {
        getPosition().then((pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;

                return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
                        .then((response) => {
                                if (!response.ok)
                                        throw new Error(
                                                `This API allows you to make only 3 requests per second. ${response.status}. Please wait and try again(${response.status})`
                                        );
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
        });
};
btn.addEventListener('click', whereAmIRewrite);

/*
console.log(`---  CODING CHALLENGE #2---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649367#questions

const imageContainer = document.querySelector('.images');
const img = document.createElement('img');

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
*/

console.log(`---  CONSUMING PROMISES WITH ASYNC/AWAIT ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649375#questions

// 👷🏽‍♂️🛠 How to consume promises with async/await:
const whereAmIRewrite3 = async () => {
        // GeoLocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse Geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const dataGeo = await resGeo.json();

        // Country data
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        const data = await res.json();
        renderCountry(data[0]);

        // Neighboring countries
        const neighbor = data[0].borders;

        if (!neighbor) throw new Error(`${data[0].name.common} has no neighboring country`);

        await neighbor.forEach(async (code) => {
                const resNeighbor = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`);
                const dataNeighbor = await resNeighbor.json();
                renderCountry(dataNeighbor[0], 'neighbour');
        });
};

// btn.addEventListener('click', () => {
//         whereAmIRewrite3();
// });

console.log(`---  ERROR HANDLING WITH TRY...CATCH ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649379#questions

// 👷🏽‍♂️🛠 How to handle errors with try...catch:
const whereAmIRewrite4 = async () => {
        try {
                // GeoLocation
                const pos = await getPosition();
                const { latitude: lat, longitude: lng } = pos.coords;

                // Reverse Geocoding
                const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
                if (!resGeo.ok) throw new Error(`Problem getting location data`);
                const dataGeo = await resGeo.json();

                // Country data
                const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
                if (!res.ok) throw new Error(`Problem getting country data`);
                const data = await res.json();
                renderCountry(data[0]);

                // Neighboring countries
                const neighbor = data[0].borders;

                if (!neighbor) throw new Error(`${data[0].name.common} has no neighboring country`);

                await neighbor.forEach(async (code) => {
                        const resNeighbor = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`);
                        const dataNeighbor = await resNeighbor.json();
                        renderCountry(dataNeighbor[0], 'neighbour');
                });
        } catch (err) {
                console.error(`${err} 💥 💥 💥`);
                renderError(`💥 ${err.message}`);
        }
};

btn.addEventListener('click', whereAmIRewrite4);


console.log(`---  RETURNING VALUES FROM ASYNC FUNCTIONS ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649389#questions

// 👷🏽‍♂️🛠 How to return values from the async function:
const whereAmIRewrite5 = async () => {
        try {
                // GeoLocation
                const pos = await getPosition();
                const { latitude: lat, longitude: lng } = pos.coords;

                // Reverse Geocoding
                const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
                if (!resGeo.ok) throw new Error(`Problem getting location data`);
                const dataGeo = await resGeo.json();

                // Country data
                const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
                if (!res.ok) throw new Error(`Problem getting country data`);
                const data = await res.json();
                renderCountry(data[0]);

                // Neighboring countries
                const neighbor = data[0].borders;

                if (!neighbor) throw new Error(`${data[0].name.common} has no neighboring country`);

                await neighbor.forEach(async (code) => {
                        const resNeighbor = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`);
                        const dataNeighbor = await resNeighbor.json();
                        renderCountry(dataNeighbor[0], 'neighbour');
                });

                // 🎯 Returning values from async fn
                return `You are in ${dataGeo.city} 🌆`;
        } catch (err) {
                console.error(`${err} 💥 💥 💥`);
                renderError(`💥 ${err.message}`);

                // throw err; // ❗️💡 throw a new err to get the error message from the fn when you return a value
                return Promise.reject(err); // better alternative to throw new err when you return a value
        }
};

console.log(`1: Will get location`);

// 👷🏽‍♂️🛠 How to properly receive and handle the data (values) from the return async fn (whereAmIRewrite5()):
// whereAmIRewrite5()
//         .then((city) => console.log(`2: ${city}`)
//         .catch((err) => console.error(`2: ${err.message} 💥`))
//         .finally(console.log(`3: Finished getting location`)); // 👈🏼 You are in Lynn 🌆 ❗️❗️ the whereAmIRewrite5 fn returns a promise so use the then method to get the data (city)
// console.log(`3: Finished getting location`);

// 💡 Another way to write the code above using IIFE
(async () => {
        try {
                const city = await whereAmIRewrite5();
                console.log(`2: ${city}`); // 👈🏼 You are in Lynn 🌆 ❗️❗️ the whereAmIRewrite5 fn returns a promise so use the then method to get the data (city)
        } catch (err) {
                console.error(`2: ${err.message} 💥`);
        }
        console.log(`3: Finished getting location`);
})();

console.log(`---  RUNNING PROMISES IN PARALLEL ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649397#questions/14171140

// 📌 Promise.all()
// 👷🏽‍♂️🛠 How to run promises in parallel using Promise.all()
const get3countries = async (c1, c2, c3) => {
        try {
                // 🎯 Returning values from async fn
                // 👉🏼 Promise.all() takes an array of promises as an argument
                // 👉🏼 You can use the Promise.all() method to run promises in parallel
                const data = await Promise.all([
                        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
                        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
                        getJSON(`https://restcountries.com/v3.1/name/${c3}`),
                ]);
                return data.flatMap((c) => c[0].capital);
        } catch (err) {
                return Promise.reject(err);
        }
};

(async () => {
        try {
                const capital = await get3countries('france', 'barbados', 'spain');
                console.log(capital); // ['Paris', 'Bridgetown', 'Madrid'] 👈🏼  the wget3countries fn returns a promise so use the then method to get the data (city)
        } catch (err) {
                console.error(`2: ${err.message} 💥`);
        }
        console.log(`3: Finished getting location`);
})();

console.log(`---  OTHER PROMISE COMBINATORS: RACE, ALLSETTLED AND ANY ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649405#questions

// 📌 There are three other different promise combinators
// 1️⃣ Promise.race() 👉🏼 receives an array of promises and also returns a promise. It also settles as soon as one of the input is settled (as soon as a value is available... doesn't matter it the promise is fulfilled or rejected). The first settled promise wins the race!
// 2️⃣ Promise.allSettled() 👉🏼 receives an array  promises and returns all the promises that are settled both rejected and fulfilled
// 3️⃣ Promise.any() 👉🏼 returns the first fulfilled promise and ignores rejected promises
// 🌟 Most important combinators are Promise.all() and  Promise.race()

// 🎯👷🏽‍♂️🛠 How to Promise.race():
(async () => {
        try {
                const res = await Promise.race([
                        getJSON(`https://restcountries.com/v3.1/name/italy`),
                        getJSON(`https://restcountries.com/v3.1/name/egypt`),
                        getJSON(`https://restcountries.com/v3.1/name/mexico`),
                ]);
                console.log(res[0].capital); // Rome / Cairo // Mexico City 👉🏼 results varies  depending on which promises settles first
                // ❗️❗️ please note that Promise.race() only gives us one result and not an array of results
        } catch (err) {
                console.error(`${err.message} 💥`);
        }
})();

// 🤔🌍 Real World Example:
// 1. 👷🏽‍♂️🛠 how to use to Promise.race() to prevent against never ending promises:
// - create a special timeout fn which automatically rejects after a certain time has passed:
const timeout = (sec) =>
        new Promise((_, reject) => {
                setTimeout(() => {
                        reject(new Error(`Request took too long`));
                }, sec * 1000);
        });
// ... use the Promise.race() function to get the results either from the resolve promise or reject depending 
Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(0.1)])
        .then((res) => console.log(res[0].flag))
        .catch((err) => console.error(err)); 

// 🎯👷🏽‍♂️🛠 How to Promise.allSettled():
// eslint-disable-next-line prettier/prettier
Promise.allSettled([
        Promise.resolve('sucess'),
        Promise.reject(new Error('ERROR')),
        Promise.resolve('Another success'),
]).then((res) => console.log(res));
// 0: {status: 'fulfilled', value: 'success'}
// 1: {status: 'rejected', reason: 'ERROR'}
// 2: {status: 'fulfilled', value: 'Another success'}

// 🎯👷🏽‍♂️🛠 How to Promise.any():
Promise.any([
        Promise.resolve('first fulfilled promise'),
        Promise.reject(new Error('ERROR')),
        Promise.resolve('second fulfilled promise'),
]).then((res) => console.log(res));
// first fulfilled promise
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

/*
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
*/