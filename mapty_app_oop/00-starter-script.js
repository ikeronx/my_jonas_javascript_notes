/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

console.log(`---- #7 MANAGING WORKOUT DATA: CREATING CLASSES ARCHITECTURE----`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649233#questions/15630120
class Workout {
        date = new Date();

        id = `${Date.now()}`.slice(-10);

        clicks = 0;

        constructor(coords, distance, duration) {
                this.coords = coords; // [lat, lng]
                this.distance = distance; // in km
                this.duration = duration; // in minutes
        }

        _setDescription() {
                this.description = `
                ${this.type[0].toUpperCase()}${this.type.slice(1)} on
                ${this.date.toLocaleString('default', {
                        month: 'long',
                        day: 'numeric',
                        // year: 'numeric',
                })}`;
        }

        click() {
                this.clicks++;
        }
}

class Running extends Workout {
        type = 'running';

        constructor(coords, distance, duration, cadence) {
                super(coords, distance, duration);
                this.cadence = cadence;
                // this.running = 'running';
                this.calcPace();
                this._setDescription();
        }

        calcPace() {
                // min/km
                this.pace = this.duration / this.distance;
                return this.pace;
        }
}

class Cycling extends Workout {
        type = 'cycling';

        constructor(coords, distance, duration, elevationGain) {
                super(coords, distance, duration);
                this.elevationGain = elevationGain;
                // this.cycling = 'cycling;'
                this.calcSpeed();
                this._setDescription();
        }

        calcSpeed() {
                // km/h
                this.speed = this.distance / (this.duration / 60);
                return this.speed;
        }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1);

// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

console.log(`---- #6 MANAGING EVENT HANDLING ARCHITECTURE----`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649229#questions/15630120
// a class called 'App' that holds all the event handlers as functions
class App {
        // private fields (properties) (global variables)
        // define the map and mapEvent as global variables (private properties) so we can use them in other functions
        #map;

        #mapZoomLevel = 13;

        #mapEvent;

        #workouts = [];

        constructor() {
                // GET USER POSITION
                // <-- the constructor is called when the class is instantiated (instance of) and the events below are attached
                // Calling Private Methods (event handlers)
                this._getPosition(); // <-- the _getPosition() method is called as soon as the page loads when a new instance of this class is created

                // GET DATA
                this._getLocalStorage();

                // HANDLERS
                // add a marker to map at the location of the click event on the map and display the marker when the form submit button is clicked
                form.addEventListener('submit', this._newWorkout.bind(this)); // <-- the _newWorkout() method is called when the form is submitted

                // to change between cadence and elevation input fields when the user clicks to select cycling or running workout type from the form
                inputType.addEventListener('change', this._toggleElevationField); // <-- the _toggleElevationField() method is called when the inputType is changed

                // to move the marker to the location of the click event on the map
                containerWorkouts.addEventListener('click', this._moveToPopup.bind(this)); // <-- the _moveMarker() method is called when the containerWorkouts is clicked
        }

        // ALL THE EVENT HANDLERS
        // Private methods (functions)
        _getPosition() {
                console.log(`---- #1 USING THE GEOLOCATION API----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649169#notes

                // - how to get the user's position using the geolocation API
                // ... use the navigator.geolocation.getCurrentPosition() to get the user's location
                // ... the getCurrentPosition() method takes two callback functions: a success callback and an error callback. The success callback is called when the geolocation is successful and the error callback is called when the geolocation fails.
                if (navigator.geolocation)
                        navigator.geolocation.getCurrentPosition(
                                // 1st argument: success callback
                                // if geolocation is successful, the _loadMap() method is called so we can get the latitude and longitude and map will display in the browser
                                this._loadMap.bind(this), // <-- the map is loaded... use bind method to get the this keyword from the function/method (_loadMap()) so we can use the this keyword in the _loadMap() method instead of the global scope (window)

                                // 2nd argument: error callback
                                // if geolocation fails, then we can get the error message
                                function (error) {
                                        console.log(error);
                                }
                        );
        }

        _loadMap(position) {
                // ↑ position is an object with the following properties: coords, timestamp and accuracy
                console.log(position); // { coords: { latitude: 37.4224764, longitude: -122.0842499 }, timestamp: 1569098984269 }

                // - how to get coordinates from the position object returned by the getCurrentPosition() method
                // ... use object destructuring to get the latitude and longitude from the position object
                const { latitude } = position.coords;
                const { longitude } = position.coords;
                // console.log(`https://www.google.com/maps/@${latitude},${longitude}`); // 42.4727153 -70.948592 <-- this is the coordinates for the user's location

                console.log(`---- #2 DISPLAYING A MAP USING THE LEAFLET LIBRARY----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649175#notes
                // - how to display a map in the browser
                const coords = [latitude, longitude]; // [42.4727153, -70.948592]
                this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // <-- the map is created and set to the coordinates and zoom level of the user's location

                L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                        attribution:
                                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', // <-- the map title style is set to the OpenStreetMap style
                }).addTo(this.#map); // <-- the map is added to the map container

                console.log(`---- #5 RENDERING FORM ----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649193#notes
                // - handling the click event on the map
                this.#map.on('click', this._showForm.bind(this)); // <-- the _showForm() method is called when the map is clicked

                // loop through the workout array and render the workout on the map
                this.#workouts.forEach(workout => {
                        // this._renderWorkout(workout);
                        this._renderWorkoutMarker(workout);
                });
        }

        _showForm(mapE) {
                console.log(`---- #5 RENDERING WORKOUT INPUT FORM ----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649207#notes

                this.#mapEvent = mapE; // <-- the mapEvent object is leaflet event that contains the coordinates of the user's click
                form.classList.remove('hidden'); // <-- the form is shown or hidden
                inputDistance.focus();
        }

        // hide the form and clear input fields
        _hideForm() {
                inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
                form.style.display = 'none';
                form.classList.add('hidden');
                setTimeout(() => {
                        form.style.display = 'grid';
                }, 1000);
        }

        // eslint-disable-next-line class-methods-use-this
        _toggleElevationField() {
                // use the closest() method to traverse the DOM tree to find the closest parent element of the input element that has the class form_roW_hidden' and toggle the class form_row_hidden
                inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
                inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        }

        _newWorkout(e) {
                // A helper function that checks if every inputs is a numbers
                const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));

                // A helper function that checks if the input is a positive number
                const validPositiveInputs = (...inputs) => inputs.every(input => input > 0);

                e.preventDefault(); // <-- prevent the form from submitting

                console.log(`---- #7 CREATING A NEW WORKOUT----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649243#questions/15630120

                // Get data from the form
                const type = inputType.value;
                const distance = +inputDistance.value;
                const duration = +inputDuration.value;
                const { lat, lng } = this.#mapEvent.latlng; // <-- destructuring the lat and lng properties from the mapEvent object from the previous step (map.On('click') above)
                let workout; // <-- workout is a variable that will hold the workout object that will be created by the _newWorkout() method

                // If the workout is running, create a running object
                if (type === 'running') {
                        const cadence = +inputCadence.value;

                        // Check if data is valid
                        // ... use a Guard Clause to check if the distance, duration and cadence is a number if not return alert message
                        // ... guard clauses are used to check if a condition is true or false and if it is false, then the code inside the if statement will not be executed
                        if (
                                // !Number.isFinite(distance) ||
                                // !Number.isFinite(duration) ||
                                // !Number.isFinite(cadence)
                                // if any of the inputs is not a number or if any of the inputs is less than 0, then the alert message will be shown
                                !validInputs(distance, duration, cadence) || // <-- the validInputs() method is called to check if the inputs are numbers
                                !validPositiveInputs(distance, duration, cadence) // <-- the validPositiveInputs() method is called to check if the inputs are positive numbers
                        )
                                return alert('Inputs have to positive numbers');

                        // Add the workout to the workout array
                        workout = new Running([lat, lng], distance, duration, cadence);
                }

                // If the workout is cycling, create a cycling object
                if (type === 'cycling') {
                        const elevation = +inputElevation.value;

                        // Check if data is valid
                        if (
                                // if any of the inputs is not a number or if any of the inputs is less than 0, then the alert message will be shown
                                !validInputs(distance, duration) ||
                                !validPositiveInputs(distance, duration)
                        )
                                return alert('Inputs have to positive numbers');

                        workout = new Cycling([lat, lng], distance, duration, elevation);
                }
                // Add the workout to the workout array
                this.#workouts.push(workout);

                // Render the workout on the map as a marker
                this._renderWorkoutMarker(workout);

                // Render workout on the list
                this._renderWorkout(workout);

                // Hide the form and clear input fields
                this._hideForm();

                // store workouts in local storage
                this._setLocalStorage();
        }

        // display the workout on the map as a marker
        _renderWorkoutMarker(workout) {
                console.log(`---- #4 DISPLAYING  MAP MARKER  WITH POPUP----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649193#notes
                // console.log(this.#mapEvent); <-- the mapEvent object is leaflet event that contains the coordinates of the user's click
                // <-- the coordinates of the user's click
                L.marker(workout.coords)
                        .addTo(this.#map)
                        .bindPopup(
                                L.popup({
                                        maxWidth: 250,
                                        minWidth: 100,
                                        autoClose: false,
                                        closeOnClick: false,
                                        className: `${workout.type}-popup`,
                                })
                        )
                        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'} ${workout.description}`)
                        .openPopup();
        }

        //  MY VERSION:  render the workout on the list
        _renderWorkout(workout) {
                console.log(`---- #8 RENDERING WORKOUTS (ON THE LIST)----`);
                // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649249#questions/13455316

             
                let html = `
                <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <i class="ph-dots-three workout_dot_icon drop_menu_btn"></i>
                <div class="workout__details">
                    <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
              `;
          
                          if (workout.type === 'running')
                                  html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
                </li>
                `;
          
                          if (workout.type === 'cycling')
                                  html += `
                  <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                  </div>
                  <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                  </div>
                </li>
                `;
             /*
                // conditional statements expressions (values) to add to the html template
                const workoutEmoji = workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️';
                const workoutCadenceOrElevationGainEmoji = workout.type === 'running' ? '🦶🏼' : '⛰';
                const workoutPaceOrSpeed =
                        workout.type === 'running' ? workout.pace.toFixed(1) : workout.speed.toFixed(1);
                const workoutCadenceOrElevationGain =
                        workout.type === 'running' ? workout.cadence : workout.elevationGain;

                // create the html template list item and add to the list container (ul: containerWorkouts)
                const listItem = document.createElement('li');
                listItem.classList.add('workout', `workout--${workout.type}`);
                listItem.setAttribute('data-id', workout.id);
                listItem.innerHTML = `
                        <h2 class="workout__title">${workout.description}</h2>
                        <div class="workout__details">
                                <span class="workout__icon">${workoutEmoji}</span>
                          <span class="workout__value">${workout.distance}</span>
                          <span class="workout__unit">km</span>
                        </div>
                        <div class="workout__details">
                          <span class="workout__icon">⏱</span>
                          <span class="workout__value">${workout.duration}</span>
                          <span class="workout__unit">min</span>
                        </div>
                        <div class="workout__details">
                          <span class="workout__icon">⚡️</span>
                          <span class="workout__value">${workoutPaceOrSpeed}</span>
                          <span class="workout__unit">min/km</span>
                        </div>
                        <div class="workout__details">
                          <span class="workout__icon">${workoutCadenceOrElevationGainEmoji}</span>
                          <span class="workout__value">${workoutCadenceOrElevationGain}</span>
                          <span class="workout__unit">spm</span>
                        </div>
                        `;
                        */
                form.insertAdjacentHTML('afterend', html);
        }

        // move marker to the clicked location on the map
        _moveToPopup(e) {
                // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
                if (!this.#map) return;

                const workoutEl = e.target.closest('.workout');
                // guard clause to check if the workoutEl is not null
                if (!workoutEl) return;

                // get the workout id from the workoutEl
                const workoutId = workoutEl.dataset.id;
               
                // loop through the workout array and find the workout id that matches the workoutEl id
                const workout = this.#workouts.find(work => work.id === workoutId);

                // move the marker to the clicked location
                this.#map.flyTo(workout.coords);

                // use the click method
                // workout.click();
        }

        // store workout data in local storage
        _setLocalStorage() {
                localStorage.setItem('workouts', JSON.stringify(this.#workouts));

                this.#workouts.forEach(workout => {
                        this._renderWorkout(workout);
                });
        }

        // get workout data from local storage and render the workout on the map
        _getLocalStorage() {
                const data = JSON.parse(localStorage.getItem('workouts'));
                if (!data) return;

                // (restoring the data)  if we already have ata in workouts array we will simply set the data to the workouts thats already  the data thats already in local storage to the workout array
                // this.#workouts = data;
                this.#workouts = data.map(work => {
                        if (work.type === 'running') {
                                return new Running(work.coords, work.distance, work.duration, work.cadence);
                        }
                        if (work.type === 'cycling') {
                                return new Cycling(work.coords, work.distance, work.duration, work.elevation);
                        }
                });

                this.#workouts.forEach(workout => {
                        this._renderWorkout(workout);
                });
                console.log(this.#workouts);
        }

        // reset() {
        //         localStorage.removeItem('workouts'); // remove the data from local storage
        //         location.reload(); // reload the page
        // }
}

console.log(`---- create an instance of 'App' class to use the event handlers----`);
// !!! create an instance of 'App' class to use the event handlers
const app = new App(); // <-- the App class is instantiated and the event handlers are called
// app.init(); // <-- the map is loaded when the page is loaded
// window.addEventListener('load', app.init());
