console.log(`---- HOW TO PLAN A WEB PROJECT ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649161#notes

// - HOW TO PLAN A WEB PROJECT
// STEP 1: User Stories
// * User story: Is a description of the application’s functionality from the user’s perspective.
// * Common Format: As a [type of user (Who? Example: User, Admin, etc)] I want [an action (What?)] so that [a benefit(Why?)]
// Example: # As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep a log of all my running
// Example: # As a user, I want to also see my workouts on a map, so I can easily check where I work out the most

// STEP 2: Features
// * Feature: A feature is a user story that is not yet implemented.
// Example:
// The user story:
// # As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep a log of all my running
// The feature(s) based on the user story:
// ~ Map where user clicks to add new workout(best way to get location coordinates);
// ~ Geolocation to display map at current location (more user friendly)
// ~ Form to input distance, time, pace, steps/minute
// Example:
// The user story: # As a user, I want to also see my workouts on a map, so I can easily check where I work out the most
// The feature(s) based on the user story:
// ~ Display all workouts on the map

// STEP 3: Flowchart
// * flowchart: A flowchart is a diagram that shows the sequence of steps that a software project will take.
// * To visualize the different actions that a user can take, and how the program react to these actions, we usually put all these features into a nice flow chart.

// STEP 4: ARCHITECTURE
// * Architecture: Is how we build our application. (Structure of project (code, database, etc.))

console.log(`---- PROJECT ARCHITECTURE (STRUCTURE) ---`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649217#notes

// - HOW TO STRUCTURE A WEB PROJECT
// STEP 1: Data Architecture
// * decide where and how to store the data.
// * data can come from anywhere (user stories [user input], API, local storage, etc.)
// * we can use classes to hold (structure) the data and methods to manipulate it.

// STEP 2: Event Handling Architecture
// * decide how to handle events.
// * create different functions that will handle these different events. (click, mouseover, etc.)
// * we can create a big class 'App' that holds all the functiuons(events) as methods.