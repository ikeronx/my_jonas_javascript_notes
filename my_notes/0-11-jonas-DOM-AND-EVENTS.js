/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----HOW THE DOM REALLY WORKS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648935#questions/16505196
// * The DOM tree is made up of nodes. Each node has the type of 'node' and each node is represented by an object.
// * This object get access to the properties and methods of the node. (.textContent, cloneNode, appendChild, etc.)

// * There are different types of nodes:
// * 1. Elements: <div> <p> <h1> <h2> <h3> rtc. This type of give each html element access to a lot of different properties and methods such as (innerHTML, innerText, classList, append(), querySelector(), closest() etc.)
// * .... the Element type has internally an HTML element child type, that element type has one child type (HTMLButtonElement, HTMLDivElement, etc) for each element that exist in html. We have a special type buttons, links, forms, divs, etc. And each of these html element type has different properties. Example: An img element has a src property or the link element has a href property that no other element has. And so forth.
// * 2. Text nodes: <p>My Name is keron<p> This type of node only has access to the textContent property.
// * 3. Comment nodes: <!-- -->
// * 4. Document nodes: It contains the whole html document. And contains important properties and methods. For example: document.querySelector(), document.createElement(), document.getElementById(), etc.

// ~~~ !! INHERITANCE IN THE DOM!! ~~~
// * Inheritance means that all the child node types inherit from the parent node type. They will have access to all the properties and methods of the parent node type.
// * For example, and HTML element will have access to all the properties and methods of the element type. Like innerHTML, innerText, classList, append(), querySelector(), closest() etc.
// * It will also get access to all the properties and methods form teh node type. For example html Button element is also an element and a node.

// ~~ EVENT TARGET ~~
// * The event target is the element that triggered the event. And is the parent node of all the nodes and window object in the DOM.
// * We call add event listeners on every node type in the DOM because of inheritance.
// * The event target is operates in the background.

console.log('-----SELECTING, CREATING, AND DELETING ELEMENTS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648947#questions/16505196

console.log('-----SELECTING ELEMENTS-----');
console.log('----- document.-----');
// - how to select the entire document of a webpage
console.log(document.documentElement); // <html>...
// - how to select the head and body of a webpage
console.log(document.body); // <body>
console.log(document.head); // <head>

console.log('----- querySelector() querySelectorAll()-----');
// - how to select a specific element in the DOM
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList(3) [div.section, div.section, div.section]

console.log('----- getElementById()-----');
// - how to get element by id
console.log(document.getElementById('section--1')); // <div class="section" id="section--1">

console.log('----- getElementByClassName()-----');
// - how to get element by class name
console.log(document.getElementsByClassName('btn')); // HTMLCollection(2) [div.btn, div.btn]

console.log('----- getElementsByTagName()-----');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTMLCollection(3) [button, button, button]
// ~~ please note that the getElementsByTagName() method returns a collection of elements, not a node list. So we have to convert it to a node list.
const allButtonsNodeList = Array.from(allButtons);
console.log(allButtonsNodeList); // [button, button, button]

console.log('----- getElementByClassName()-----');
// - how to get element by class name
console.log(document.getElementsByClassName('btn')); // HTMLCollection(2) [div.btn, div.btn]

console.log('-----CREATING AND INSERTING ELEMENTS-----');
console.log('-----insertAdjacentHTML()-----');
// - how to create and insert elements
// - insertAdjacentHTML() inserts the HTML string at the specified position.
// - insertAdjacentHTML() can be used to insert HTML elements, text, or raw HTML at the specified position.
// .insertAdjacentHTML()

console.log('-----createElement()-----');
// - how to create elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies fro improved functionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics
<button class="btn btn--close-cookie">Got it!</button>`;

console.log('-----prepend() append()-----');
// - how to add elements to the DOM
// ~~ we can use prepend or append to insert or move elements in the DOM unless we clone them first.
// !! please note that elements can only be at one place at a time in the DOM
// header.prepend(message); // prepend() inserts a new node before the first child of this element.
header.append(message); // append() inserts a new node after the last child of this element.

console.log('-----cloneNode()-----');
// - how to insert multiple copies of the same element.. we clone the element first and then append it to the DOM
// const clone = message.cloneNode(true);
// header.append(clone);

console.log('-----before() after()-----');
// - how to use before() and after() to insert elements before or after another element in the DOM.
// header.before(message); // before() inserts a new node before the header element. (sibling element)
// header.after(message); // after() inserts a new node after the header element. (sibling element)

console.log('-----DELETING ELEMENTS-----');
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
        message.remove(); // removes the element from the DOM.
        // ... old way to remove the element from the DOM
        // message.parentElement.removeChild(message); // removes the element from the DOM.
});

console.log('-----IMPLEMENTING SMOOTH SCROLLING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#questions/16505196

// - how implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
        // the new way of implementing smooth scrolling
        section1.scrollIntoView({
                behavior: 'smooth',
                // block: 'start',
                // inline: 'nearest',
        });
});
