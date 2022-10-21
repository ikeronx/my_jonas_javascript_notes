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
        // console.log(html);
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
                // console.log(data);

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
// btn.addEventListener('click', () => {
//         getCountryData5('FRANCE');
// });

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
// btn.addEventListener('click', whereAmIRewrite);

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

// 👷🏽‍♂️🛠 How to return values from the async function
const whereAmIRewrite5 = async () => {
        try {
                // GeoLocation
                const pos = await getPosition();
                const { latitude: lat, longitude: lng } = pos.coords;

                // Reverse Geocoding
                const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
                if (!resGeo.ok) throw new Error(`Problem getting location data`);
                const dataGeo = await resGeo.json();
                console.log(dataGeo);

                // Country data
                const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
                if (!res.ok) throw new Error(`Problem getting country data`);
                const data = await res.json();
                renderCountry(data[0]);
                console.log(data);

                console.log(`${data[0].flag} ${data[0].altSpellings[0]}`);

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

// 👷🏽‍♂️🛠 How to properly receive and handle the data (values) from the return async fn (whereAmIRewrite5())
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

// 👷🏽‍♂️🛠 How to run promises in parallel:
const get3countries = async (c1, c2, c3) => {
        try {
                // 🎯 Returning values from async fn
                // 👉🏼 Promise.all() takes an array of promises as an argument
                // 👉🏼 You can use the Promise.all() method to run promises in parallel
                // ❗️ please note that Promise.all() will short circuit if there's at least one rejected promise
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
                const capital = await get3countries('france', 'barbados', 'spain'); // consume the promise thats being returned by the
                console.log(capital); // ['Paris', 'Bridgetown', 'Madrid'] 👈🏼  the wget3countries fn returns a promise so use the user can consume the data and get the capital for each country
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
]).then((res) => console.log(res)); // first fulfilled promise

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

const getCountryName = async (lat, lng) => {
        try {
            // reverse geocoding
            const resGeo = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=528c5dcffdab43848fa6c11bfb7a2545`);
            if (!resGeo.ok) throw new Error(`Problem getting location data`);
            const dataGeo = await resGeo.json();
            console.log(dataGeo);
            // Country data
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${dataGeo.features[0].properties.country_code}`);
            if (!res.ok) throw new Error(`Problem getting country data`);
                const data = await res.json();
                console.log(data);
    
            return `${data[0].name.common}`;
    
        }
        catch (err) {
            return Promise.reject(`${err} 💥 💥 💥`);
        }
};
    
console.log(getCountryName(35.9078, 127.7669));


// UNSPLASH 
const getTripImageByCountry = async (country) => {
        try {
                const myKey = '92MhZXBYZ32qrYaz6K9ZS_7x6HjAo7TrqHWgSvFNc4U'
        
                const res = await fetch(`https://api.unsplash.com/photos/random/?query=${country}&client_id=${myKey}`);
                if (!res.ok) throw new Error(`Problem getting image data`);
                const data = await res.json();
    
                return `${data.urls.small}`
        }
        catch (err) {
                return Promise.reject(`${err} 💥 💥 💥`);
        }
    };
getTripImageByCountry('india');
