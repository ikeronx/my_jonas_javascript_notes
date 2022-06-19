/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

console.log('-----HOW THE DOM REALLY WORKS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648935#questions/16505196
// 👉🏽 The DOM tree is made up of nodes. Each node has the type of 'node' and each node is represented by an object.
// 👉🏽 This object get access to the properties and methods of the node. (.textContent, cloneNode, appendChild, etc.)

// 🌟 There are different types of nodes:
// 🎯 1. Elements: <div> <p> <h1> <h2> <h3> rtc. This type of give each html element access to a lot of different properties and methods such as (innerHTML, innerText, classList, append(), querySelector(), closest() etc.)
//    ... the Element type has internally an HTML element child type, that element type has one child type (HTMLButtonElement, HTMLDivElement, etc) for each element that exist in html. We have a special type buttons, links, forms, divs, etc. And each of these html element type has different properties. Example: An img element has a src property or the link element has a href property that no other element has. And so forth.
// 🎯 2. Text nodes: <p>My Name is keron<p> This type of node only has access to the textContent property.
// 🎯 3. Comment nodes: <!-- -->
// 🎯 4. Document nodes: It contains the whole html document. And contains important properties and methods. For example: document.querySelector(), document.createElement(), document.getElementById(), etc.

// 🌟 INHERITANCE IN THE DOM
// 👉🏽 Inheritance means that all the child node types inherit from the parent node type. They will have access to all the properties and methods of the parent node type.
// 🤔 For example, and HTML element will have access to all the properties and methods of the element type. Like innerHTML, innerText, classList, append(), querySelector(), closest() etc.
// 👉🏽 It will also get access to all the properties and methods form teh node type. For example html Button element is also an element and a node.

// 🌟 EVENT TARGET
// 👉🏽 The event target is the element that triggered the event. And is the parent node of all the nodes and window object in the DOM.
// 👉🏽 We call add event listeners on every node type in the DOM because of inheritance.
// 👉🏽 The event target is operates in the background.

console.log('-----SELECTING, CREATING, AND DELETING ELEMENTS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648947#questions/16505196

// 📌 SELECTING ELEMENTS
console.log('----- document.-----');
// 👷🏽‍♂️🛠 how to select the entire document of a webpage
console.log(document.documentElement); // <html>...
// 👷🏽‍♂️🛠 how to select the head and body of a webpage
console.log(document.body); // <body>
console.log(document.head); // <head>

console.log('----- querySelector() querySelectorAll()-----');
// 👷🏽‍♂️🛠 how to select a specific element in the DOM
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList(3) [div.section, div.section, div.section]

console.log('----- getElementById()-----');
// 👷🏽‍♂️🛠 how to get element by id
console.log(document.getElementById('section--1')); // <div class="section" id="section--1">

console.log ('----- getElementByClassName()-----');
// 👷🏽‍♂️🛠 how to get element by class name
console.log(document.getElementsByClassName('btn')); // HTMLCollection(2) [div.btn, div.btn]

console.log('----- getElementsByTagName()-----'); // HTMLCollection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTMLCollection(3) [button, button, button]

// ❗️❗️ please note that the getElementsByTagName() method returns a collection of elements, not a node list. So we have to convert it to a node list.
const allButtonsNodeList = Array.from(allButtons);
console.log(allButtonsNodeList); // [button, button, button]

console.log('----- getElementByClassName()-----');
// 👷🏽‍♂️🛠 how to get element by class name
console.log(document.getElementsByClassName('btn')); // HTMLCollection(2) [div.btn, div.btn]

// 📌 CREATING AND INSERTING ELEMENTS
console.log('-----createElement()-----');
// 👷🏽‍♂️🛠 how to create elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies fro improved functionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics
<button class="btn btn--close-cookie">Got it!</button>`;

console.log('-----insertAdjacentHTML()-----');
// 👷🏽‍♂️🛠 how to insert elements
// 🎯 insertAdjacentHTML() inserts the HTML string at the specified position.
// 🎯 insertAdjacentHTML() can be used to insert HTML elements, text, or raw HTML at the specified position.
// .insertAdjacentHTML()

console.log('-----prepend() append()-----');
// 👷🏽‍♂️🛠 how to add elements to the DOM
// 💡 we can use prepend or append to insert or move elements in the DOM unless we clone them first.
// ❗️❗️ please note that elements can only be at one place at a time in the DOM
// ... header.prepend(message); // prepend() inserts a new node before the first child of this element.
header.append(message); // append() inserts a new node after the last child of this element.

console.log('-----cloneNode()-----');
// 👷🏽‍♂️🛠 how to insert multiple copies of the same element.. we clone the element first and then append it to the DOM
// ... const clone = message.cloneNode(true);
// ... header.append(clone);

console.log('-----before() after()-----');
// 👷🏽‍♂️🛠 how to use before() and after() to insert elements before or after another element in the DOM.
// ... header.before(message); // before() inserts a new node before the header element. (sibling element)
// ... header.after(message); // after() inserts a new node after the header element. (sibling element)

// 📌 DELETING ELEMENTS
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
        message.remove(); // <-- 👍🏽 new way to remove an element from the DOM
        // message.parentElement.removeChild(message) <-- 👎🏽 old way to remove the element from the DOM
});

console.log('-----IMPLEMENTING SMOOTH SCROLLING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#questions/16505196

// 👷🏽‍♂️🛠  how implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
        // 💡👍🏽 the new way of implementing smooth scrolling
        section1.scrollIntoView({
                behavior: 'smooth',
                // block: 'start',
                // inline: 'nearest',
        });
});

console.log('----- 👷🏽‍♂️🛠 IMPLEMENTING A STICKY NAVIGATION: THE INTERSECTION OBSERVER API-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648993#notes

/*
const obsCallback = function (entries) {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                        nav.classList.add('sticky');
                } else {
                        nav.classList.remove('sticky');
                }
        });
};

const obsOptions = {
        root: null, // the viewport is the root of the intersection observer
        rootMargin: '0px', // the root margin is 0px (default) so the intersection observer will observe the whole viewport (default)
        threshold: [0, 0.20], // when the intersection ratio is a 0, the nav will be visible/sticky in the viewport until it reaches the threshold of 0.2
};

// 👷🏽‍♂️🛠 how to use the intersection observer API
// Step 1: create an observer
const observer = new IntersectionObserver(obsCallback, obsOptions); // !! whenever the section1 intersect is intersecting the viewport (root) at 10% the callback fn will execute hence the nav will be sticky
// Step 2: use the 'observer' observe method to observe a certain target element
observer.observe(section1);
*/

// 👷🏽‍♂️🛠 how to implement a sticky navigation using the intersection observer API
const headerr = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
        const [entry] = entries; // the entry is the threshold of the intersection observer
        // eslint-disable-next-line prettier/prettier
        if (!entry.isIntersecting) { // if the entry (header) is not intersecting the viewport (root) the show the nav
                nav.classList.add('sticky');
        } else {
                nav.classList.remove('sticky');
        }
};
// pass the callback function and the options
const headerObserver = new IntersectionObserver(stickyNav, {
        root: null, // the viewport
        rootMargin: `-${navHeight}px`, // this adds margin to the header element
        threshold: 0, // when the header section is out of viewport (root) the nav will be sticky
});
headerObserver.observe(headerr); // <-- observe the header element

console.log('----- 👷🏽‍♂️🛠 REVEALING ELEMENTS ON SCROLL-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648995#notes

// 👷🏽‍♂️🛠 how to reveal sections on scroll
const allSectionss = document.querySelectorAll('.section'); // get all the sections

const revealSection = (entries, observer) => {
        const [entry] = entries; // the entry is the threshold of the intersection observer
        // ⛔️🎅🏽 Guard clause: if the entry is not intersecting the viewport (root) the section will not be revealed
        if (!entry.isIntersecting) return; // if the entry is not intersecting the viewport (root) return
        // 'entry.target' is the element thats currently being intersected
        entry.target.classList.remove('section--hidden'); // remove the hidden class from the entry.target element... entry.target is each section thats (section1, section, 2 etc) when
        observer.unobserve(entry.target); // to prevent the observer from observing the target element when we scroll up
};

const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // <- section will be revealed when the intersection ratio is 15%
});

allSectionss.forEach((section) => {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
});

console.log('----- 👷🏽‍♂️🛠 LAZY LOADING IMAGES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999#notes

// step 1️⃣: select all the images
const imgTargets = document.querySelectorAll('img[data-src]'); // select all the images with data-src attribute

// step 2️⃣: create a fn that's selects and loads all the images
const loadImg = (entries, observer) => {
        entries.forEach((entry) => {
                // ⛔️🎅🏽 Guard clause: if the image is already loaded, do not load it again
                if (!entry.isIntersecting) return; // if the entry is not intersecting the viewport (root) return
                // replace the pixilated img with lazy load image then remove the lazy img class that applies the blur effect the image
                // 'entry.target' is the element thats currently being intersected
                entry.target.src = entry.target.dataset.src; // replace the src attribute of the image with the data-src attribute
                // removes the 'lazy-img' class from the image element
                entry.target.addEventListener('load', () => {
                        entry.target.classList.remove('lazy-img');
                });

                observer.unobserve(entry.target); // to prevent the observer method from observing the img after it has been loaded
        });
};

///  step 4️3️⃣: create a new instance of the 'IntersectionObserver()' built in api class and pass the loadImg fn as the first argument to the intersection observer API to the load images and set second argument - the viewport options (root, null, threshold, rootmargin) so the images display when they intersecting the viewport (root)
const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '200px', // will load the image earlier so the user doesn't see the blurry image
});

// step 4️⃣: loop through the images array and observe them using the 'observer()' method on the imgObserver instance variable
imgTargets.forEach((img) => {
        imgObserver.observe(img);
});

console.log('----- 👷🏽‍♂️🛠  BUILDING A SLIDER COMPONENT: PART 1 -----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#notes

//  👷🏽‍♂️🛠 how to implement a slider component
// global variables
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const maxSlide = slides.length - 1;
let currentSlide = 0;

// goes to slide fn
const goToSlide = () => {
        slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${-100 * currentSlide + 100 * index}%)`;
        });
};

// next slide fn
const nextSlide = () => {
        // if currentSlide is the last slide, go back to the first slide (0) else go to the next slide
        currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
        // move the slides
        goToSlide(currentSlide);
        activeDot(currentSlide);
};

// previous slide fn
const prevSlide = () => {
        // if currentSlide is the first slide, go to the last slide (maxSlide) else go to the previous slide
        currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
        // move the slides
        goToSlide(currentSlide);
        activeDot(currentSlide);
};

// goes to the next slide in the slider when the right arrow is clicked
btnRight.addEventListener('click', nextSlide);

// goes to previous slide in the slider when the left arrow is clicked
btnLeft.addEventListener('click', prevSlide);

console.log('----- 👷🏽‍♂️🛠  BUILDING A SLIDER COMPONENT: PART 2 -----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649003#notes

// 👷🏽‍♂️🛠 how to switch slides with the keyboard arrows keys (left and right)
document.addEventListener('keydown', function (e) {
        e.preventDefault();
        console.log(e.key); // shows the key that was pressed
        if (e.key === 'ArrowRight') nextSlide();
        // can use short circuiting to0
        e.key === 'ArrowLeft' && nextSlide();

        // different way of doing the same thing using keycodes
        // switch (e.keyCode) {
        // case 37:
        //         prevSlide();
        //                 break;
        //         case 39:
        //                 nextSlide();
        //                 break;
        // }
});

// dots navigation for the slider
const dotContainer = document.querySelector('.dots');

// 👷🏽‍♂️🛠 how to create the dots for each slide
const createDots = () => {
        // create a dot for each slide
        slides.forEach((_, i) => {
                dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
};

// change the dot to active classlist function
const activeDot = (slide) => {
        // remove the active class from all the dots
        document.querySelectorAll('.dots__dot').forEach((dot) => {
                dot.classList.remove('dots__dot--active');
        });
        // add the active class to the current dot that was clicked
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

// 👷🏽‍♂️🛠  how to select the dots
dotContainer.addEventListener('click', (e) => {
        // e.preventDefault();
        if (e.target.classList.contains('dots__dot')) {
                console.log(e.target.dataset.slide);
                const { slide } = e.target.dataset;
                currentSlide = slide;
                goToSlide();
                activeDot(slide);
        }
});

// initialize the slide and dots
const init = () => {
        goToSlide(0);
        createDots();
        activeDot(0);
};
init(); // <-- initialize the slides and dots with the active class
