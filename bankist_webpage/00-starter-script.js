/* eslint-disable no-console */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';

/// ////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
        e.preventDefault();
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
};

const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
        }
});

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
// ~~ we can use prepend or append to insert elements in the DOM at the beginning or end of the parent element
// !! please note that elements can only be at one place at a time in the DOM tree.
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

console.log('-----STYLES, ATTRIBUTES AND CLASSES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648951#questions/16505196

console.log('-----styles-----');
// - how to set styles
message.style.backgroundColor = '#37383d';
message.style.color = 'white';
// message.style.padding = '1rem';
message.style.width = '120%';
message.style.textAlign = 'center';

// - how to get the computed styles (css property) of an element (including inherited styles) in the DOM
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).fontFamily); // Poppins, sans-serif
console.log(getComputedStyle(message).height); // Poppins, sans-serif

// - how to update a computed style (css style custom  property) of an element (including inherited styles) in the DOM
message.style.height = `${Number.parseFloat(getComputedStyle(message).height, 10) + 30}px`;

// - how to change / update the value of a variable/custom css property of an element in the DOM
// ... change the 'root:' css variable --color-primary
document.documentElement.style.setProperty('--color-primary', 'orangered');

console.log('-----attributes: getAttribute() setAttribute()-----');
// - how to get the standard attributes of an element
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist Logo
console.log(logo.className); // nav__logo
console.log(logo.src); // https://www.bankist.com/wp-content/uploads/2019/06/logo-bankist-white.png // <- this is the absolute url of the image

// - how to set/update the standard attributes of an element
logo.alt = 'The Minimal Bank Logo';

// - how to get the non-standard attributes of an element
console.log(logo.designer); // undefined <-- return undefined because 'designer' is not a standard property thats not expected to be on images
console.log(logo.getAttribute('designer')); // keron

// - how to set a non standard attribute on an element
logo.setAttribute('company', 'Bankist'); // <-- this will add a new attribute to the element

// - how to get the relative url of an img element
console.log(logo.getAttribute('src')); // img/logo.png // <- this is the relative url of the image

// - how to get the absolute and relative link of an element
const link = document.querySelector('.nav__link');
console.log(link.href); // http://127.0.0.1:5501/starter/index.html?#section--1 <- this is the absolute url of the image
console.log(link.getAttribute('href')); // #section--1 // <- this is the relative url of the link (how it is written in the html)

console.log('-----data attributes-----');
// - how to get the data attribute (attributes that start with data-) of an element
console.log(logo.dataset.versionNumber); // 3.0

console.log('-----classes-----');
logo.classList.add('c'); // add a class to the element
logo.classList.remove('c'); // remove a class from the element
// logo.classlist.toggle('c'); // toggle a class on the element
// logo.classlist.contains('c'); // check if the element has a class

console.log('-----IMPLEMENTING SMOOTH SCROLLING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#questions/16505196

// - how to implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
        e.preventDefault();
        // the new way to implement smooth scrolling
        section1.scrollIntoView({
                behavior: ,
                // block: 'start',
                // inline: 'nearest',
        });

        // the old way of implementing smooth scrolling
        // step 1: get the position (coordinates) of the element
        /* 
        const s1Coords = section1.getBoundingClientRect();
        console.log(s1Coords);
        console.log(e.target.getBoundingClientRect());
        console.log('current scroll position (X/Y)', window.pageXOffset, window.pageYOffset); // gets the current scoill position of the page horizontally and vertically
        console.log(
                'height/width viewport ',
                document.documentElement.clientHeight,
                document.documentElement.clientWidth
        ); // gets the height and width of the viewport
        */

        // step 2: scrolling to the element
        // window.scrollTo(s1Coords.left + window.pageXOffset, s1Coords.top + window.pageYOffset); // scroll to the element

        // scrolling
        // window.scrollTo({
        //         top: s1Coords.top + window.pageYOffset,
        //         left: s1Coords.left + window.pageXOffset,
        //         behavior: 'smooth',
        // });
});

console.log('-----TYPES OF EVENTS AND EVENT HANDLERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648961#questions/16505196

// variables and functions
const h1 = document.querySelector('h1');
const alertMsg = () => alert('mouse entered again bitchhh');

// - how to add events to an element
h1.addEventListener('mouseenter', alertMsg);
// - how to remove an event from an element after certain time has passed
setTimeout(() => h1.removeEventListener('mouseenter', alertMsg), 3000);

console.log('-----EVENT PROPAGATION: BUBBLING AND CAPTURING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648965#questions/13222632
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648969#questions/13222632
// * Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination.

// *** event bubbling and capturing in practice ***
// global variables and functions

// create a random color function
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255)); // rgb255,255,255
/*
// - how to implement event bubbling (bubbling up the DOM tree)
// the target element
document.querySelector('.nav__link').addEventListener('click', function (e) {
        e.preventDefault();
        this.style.backgroundColor = randomColor();

        console.log('LINK', e.target, e.currentTarget); // the target element is where the event started and current target is the element on which the event is attached tp (the element that is listening for the event) - in this case the nav__link
        console.log(e.currentTarget === this); // true

        // if want to stop the the event bubbling up (propagation) but this isn't good practice
        // e.stopPropagation();
});

// the target link parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
        e.preventDefault();
        this.style.backgroundColor = randomColor(); // <-- the this keyword always points to the element on which the event listener is attached
        console.log('CONTAINER', e.target, e.currentTarget);
});

// the target link parent element
document.querySelector('.nav').addEventListener('click', function (e) {
        e.preventDefault();
        this.style.backgroundColor = randomColor();
        console.log('NAV', e.target, e.currentTarget);
});
*/

console.log('-----EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648971#notes
// * Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object.

// - how to implement page navigation and smooth scrolling
// const navLink = document.querySelectorAll('.nav__link');
// navLink.forEach(link => {
//         link.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 // the 'this' keyword is the element on which the event listener is attached to (features el, operations el, or testimonials el)
//                 const id = this.getAttribute('href');
//                 const section = document.querySelector(id);
//                 section.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start',
//                         inline: 'nearest',
//                 });
//         });
// });

console.log('----- implementing page navigation by event delegation-----');
// - how to implement page navigation and smooth scrolling with event delegation
// In event delegation we need two steps.
// Step 1: Add an event listener to the common parent element (nav_links) of all the elements we want to listen to.
// Step 2: Add an event listener to the elements we want to listen to. (Determine what element originated the event)
const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
        // eslint-disable-next-line prettier/prettier
        // matching strategy:
        if (e.target.tagName === 'A' || e.target.classList.contains('nav__link')) {
                // <- if the target element is an anchor tag (a)
                e.preventDefault();
                const id = e.target.getAttribute('href');
                const section = document.querySelector(id);
                section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                });
        }
});

console.log('-----DOM TRAVERSING-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648975#notes
// * DOM traversing is the process of navigating the DOM tree and finding elements.

console.log('-----selecting child elements: going downwards-----');
// - how to select child elements
const header1 = document.querySelector('h1');
console.log(header1.querySelectorAll('.highlight')); // return a node list of all child elements with the class 'highlight'
console.log(header1.childNodes); // returns a node list of all the child nodes - [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(header1.children); // returns a HTML collection of the children elements that actually inside the element.. only work for direct child  - [span.highlight, br, span.highlight]
// ... can set properties to the elements in the collection
header1.firstElementChild.style.color = 'red';
header1.lastElementChild.style.color = 'olive';

console.log('-----selecting parent elements: going upwards-----');
// - how to select parent elements
const header2 = document.querySelector('h1');
console.log(header2.parentNode); // returns the parent element - <div class='section__title'>...</div>
console.log(header2.parentElement); // returns the parent element - <div class='section__title'>...</div>
console.log('----- closest() -----');
// - how to find a parent element that's not a direct parent element... in other words, we might need to find a parent element no matter how far away it is and the Dom tree.
// header1.closest('.header').style.background = `Var(--gradient-secondary)`; // returns the closest parent element that is a div
// header1.closest('h1').style.background = `Var(--gradient-primary)`; // returns the closest parent element that is a div

console.log('-----selecting sibling elements: going sideways-----');
// - how to select sibling elements
// ~~ in js we can only access direct sibling elements (previous and next sibling)
console.log(header.previousElementSibling); // null
console.log(header.nextElementSibling); // <section class=​"section" id=​"section--1">​…​</section>​
// ... for nodes
console.log(header.previousSibling); // #text
console.log(header.nextSibling); // #text

// - how to get all the sibling elements
console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
// to turn the HTMLCollection into an array use the spread operator
[...h1.parentElement.children].forEach(el => {
        // apply text color to all the h1 siblings
        if (el !== h1) {
                el.style.color = 'red';
        }
});

console.log('-----BUILDING A TABBED COMPONENT-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648979#notes

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
        e.preventDefault();
        const clicked = e.target.closest('.operations__tab'); // returns the element that was clicked on
        // !! A Guard clause: if the clicked element is not a tab, do nothing
        if (!clicked) return; // if the clicked element is not a tab, return

        // remove the 'active' class from all the tabs and add it to the clicked tab
        tabs.forEach(tab => tab.classList.remove('operations__tab--active')); // remove the active class from all the tabs
        clicked.classList.add('operations__tab--active');

        // remove the active class from all the content and add it to the clicked content
        tabsContent.forEach(content => content.classList.remove('operations__content--active')); // remove the active class from all the content
        document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(
                // add the active class to the corresponding content
                'operations__content--active'
        );
});

console.log('-----PASSING ARGUMENTS TO EVENT HANDLERS-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648983#notes

// menu fade animation
const nav = document.querySelector('.nav');
// changes the opacity of the nav links by passing the opacity to the function
const handleMover = function (e) {
        if (e.target.classList.contains('nav__link')) {
                const link = e.target;
                const siblings = link.closest('.nav').querySelectorAll('.nav__link');
                const logo = link.closest('.nav').querySelector('img');

                // fade out all the siblings except for the clicked one
                siblings.forEach(sibling => {
                        // eslint-disable-next-line prettier/prettier
                        if (sibling !== link) { // if the sibling is not the clicked one then fade it out
                                sibling.style.opacity = this; // this is the opacity of the clicked link
                        }
                        logo.style.opacity = this; // this is the opacity of the logo
                });
        }
};

// use the bind method for the event listener
// !! passing 'argument' into the handler function
nav.addEventListener('mouseover', handleMover.bind(0.5));
// ... different way to do it
// nav.addEventListener('mouseover', function (e) {
//         handleMover(e, 0.5);
// });

nav.addEventListener('mouseout', handleMover.bind(1));
// ... different way to do it
// nav.addEventListener('mouseover', function (e) {
//         handleMover(e, 0.5);
// });

console.log('-----IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648987#notes

// implementing a sticky NAVIGATION old way
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//         console.log(window.scrollY);

//         if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//         else nav.classList.remove('sticky');
// });

console.log('-----IMPLEMENTING A STICKY NAVIGATION: THE INTERSECTION OBSERVER API-----');
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

// - how to use the intersection observer API
// Step 1: create an observer
const observer = new IntersectionObserver(obsCallback, obsOptions); // !! whenever the section1 intersect is intersecting the viewport (root) at 10% the callback fn will execute hence the nav will be sticky
// Step 2: use the 'observer' observe method to observe a certain target element
observer.observe(section1);
*/

// - how to implement a sticky navigation using the intersection observer API
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
headerObserver.observe(headerr); // observe the header element

console.log('-----REVEALING ELEMENTS ON SCROLL-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648995#notes

// reveal sections on scroll
const allSectionss = document.querySelectorAll('.section'); // get all the sections

const revealSection = (entries, observer) => {
        const [entry] = entries; // the entry is the threshold of the intersection observer
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

allSectionss.forEach(section => {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
});

console.log('----- LAZY LOADING IMAGES-----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999#notes

// step 1: select all the images

const imgTargets = document.querySelectorAll('img[data-src]'); // select all the images with data-src attribute

// the logic to load the images
const loadImg = (entries, observer) => {
        entries.forEach(entry => {
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

/// use the intersection observer API to load images when they are in the viewport
const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '200px', // will load the image earlier so the user doesn't see the blurry image
});

// loop through the images and observe them
imgTargets.forEach(img => {
        imgObserver.observe(img);
});

console.log('----- BUILDING A SLIDER COMPONENT: PART 1 -----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#notes

// - how to implement a slider component
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

console.log('----- BUILDING A SLIDER COMPONENT: PART 2 -----');
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649003#notes

// - how to switch slides with the keyboard arrows keys (left and right)
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

// -how to create the dots for each slide
const createDots = () => {
        // create a dot for each slide
        slides.forEach((_, i) => {
                dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
};

// change the dot to active classlist function
const activeDot = slide => {
        // remove the active class from all the dots
        document.querySelectorAll('.dots__dot').forEach(dot => {
                dot.classList.remove('dots__dot--active');
        });
        // add the active class to the current dot that was clicked
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}


// -how to select the dots
dotContainer.addEventListener('click', e => {
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
init();
