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
        const language = Object.values(data.languages).join(', ');
        const currency = Object.values(data.currencies).map((cur) => cur.name);
        const html = `
        <article class="country ${className}">
        <img class="country__img" src="${flag}" />
                <div class="country__data">
                <h3 class="country__name">${name}</h3> 
                <h4 class="country__region">${data.region}</h4> 
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span> ${language} </p>
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

                // STEP 5️⃣: DO SOMETHING WITH THE DATA - CREATE A NEW HTML ELEMENT WITH THE DATA USING THE RENDERCOUNTRY FN
                // renderCountry(data)
        });
};
getCountryData('barbados');

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
                                // renderCountry(data2, 'neighbor'); // render the country data
                        });
                });
        });
};
// getCountryAndNeighbor('united states');
// getCountryAndNeighbor('barbados');

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
                        return neighbor.forEach((code) => {
                                // ❗️the second AJAX call
                                fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
                                        .then((response) => response.json())
                                        .then((data) => renderCountry(data[0], 'neighbour'));
                        });
                })
                .then((data) => {});
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

                        return neighbor.forEach((code) => {
                                fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`)
                                        .then((response) => response.json())
                                        .then((data) => renderCountry(data[0], 'neighbour'));
                        });
                })

                // 🎯 Handling Rejected Promise
                // 👇🏽 the catch() method is used to catch rejected promise and display error message👇🏽 the catch() method is used to catch rejected promise and display error message
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
                        console.log(data.languages);
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        // 🎯 THROWING ERRORS MANUALLY
                        // If there's no neighboring country then 👇🏽 'throw new Error()' 👇🏽 method
                        if (!neighbor) throw new Error(`No neighbor found`);

                        return neighbor.forEach((code) =>
                                getJSON(`https://restcountries.com/v3.1/name/${code}`, 'Country not found').then(
                                        (data) => renderCountry(data[0], 'neighbour')
                                )
                        );
                })
                .catch((error) => {
                        renderError(`💥💥💥 Something went wrong, ${error.message}. Try again! 💥💥💥`);
                        // console.error(`${error} 💥💥💥`);
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
                        if (!response.ok) throw new Error(`(${response.status})`); //
                        return response.json();
                })
                .then(([data]) => {
                        renderCountry(data);

                        const neighbor = data.borders;
                        console.log(neighbor);

                        // 🎯 THROWING ERRORS MANUALLY
                        // If there's no neighboring country then 👇🏽 'throw new Error()' 👇🏽 method
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
                .catch((error) => {
                        renderError(`💥💥💥 Something went wrong, ${error.message}. Try again! 💥💥💥`);
                        // console.error(`${error} 💥💥💥`);
                })
                .finally(() => (countriesContainer.style.opacity = 1));
};
*/
// EVENTS
btn.addEventListener('click', () => {
        getCountryData5('FRANCE');
});

/*
console.log('--- CODING CHALLENGE #1---');
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

/*
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
whereAmI(-33.933, 18.47); // Your are in Cape Town, South Africa.
*/

console.log(`---  ASYNCHRONOUS BEHIND THE SCENES: THE EVENT LOOP ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649347#questions

const showRandomAdvice = (id) => {
        fetch(`https://api.adviceslip.com/advice`)
                .then((response) => {
                        if (!response.ok) throw new Error(`(${response.status})`);
                        return response.json();
                })
                .then((data) => {
                        // if (data.slip.id === undefined) throw new Error("Id doesn't exist");

                        console.log(data.slip.advice);
                })
                .catch((err) => {
                        console.log(`${err.message} 💥💥💥`);
                })
                .finally(() => {
                        // document.querySelector('h2').textContent = `Reviews`
                });
};
btn.addEventListener('click', showRandomAdvice);
