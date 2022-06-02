/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
'use strict';

// DATA
const reviews = [
        {
                id: 1,
                name: 'susan smith',
                job: 'web developer',
                img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
                text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
                id: 2,
                name: 'anna johnson',
                job: 'web designer',
                img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
                text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
                id: 3,
                name: 'peter jones',
                job: 'intern',
                img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
                text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
                id: 4,
                name: 'bill anderson',
                job: 'the boss',
                img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
                text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
];

// ELEMENTS:
// ... select items
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

// ... select btns
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// GLOBAL VARIABLES:
// set starting item
let currentItem = 0; // <- represents the index of the current item in the reviews object array

// FUNCTIONS:
const renderRandomPerson = (data) => {
        img.src = data.results[0].picture.large; // set image source to current item's image source property in the reviews array
        author.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`; // set author text content to current item's name property in the reviews array
        job.textContent = data.results[0].gender; // set job text content to current item's job property in the reviews array
        info.textContent = data.results[0].email;
};

const showRandomPerson = () => {
        fetch('https://randomuser.me/api/')
                .then((response) => {
                        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`)
                        return response.json();
                })
                .then((data) => {
                        renderRandomPerson(data);
                })
                .catch((err) => {
                        document.querySelector('h2').textContent = `${err.message} 💥💥💥`;
                })
                .finally(() => {
                        // document.querySelector('h2').textContent = `Reviews`
                });
};

// ... show person based on item (index) in the reviews object array
const showperson = () => {
        const item = reviews[currentItem]; // get current item object in the reviews array
        img.src = item.img; // set image source to current item's image source property in the reviews array
        author.textContent = item.name; // set author text content to current item's name property in the reviews array
        job.textContent = item.job; // set job text content to current item's job property in the reviews array
        info.textContent = item.text; // set info text content to current item's text property in the reviews array
};

// EVENT HANDLERS:
// ... load initial item
window.addEventListener('DOMContentLoaded', () => {
        showperson();
});

// ... show next person
nextBtn.addEventListener('click', () => {
        currentItem++; // goes to the next item in the array after each click
        // ... checks if current item is the last item in the array and if so, sets it (goes back) to the first item
        if (currentItem > reviews.length - 1) currentItem = 0;
        showperson();
});

// ... show previous person
prevBtn.addEventListener('click', () => {
        document.querySelector('h2').textContent = `Reviews`;
        currentItem--;
        // if current item is less than 0, set it to last item in array
        if (currentItem < 0) currentItem = reviews.length - 1;
        showperson();
});

prevBtn.addEventListener('click', () => {
        document.querySelector('h2').textContent = `Reviews`;
        currentItem--;
        // if current item is less than 0, set it to last item in array
        if (currentItem === 0) currentItem = reviews.length - 1;
        showperson();
});

// ... show random person
randomBtn.addEventListener('click', () => {
        document.querySelector('h2').textContent = `Reviews`;
        // currentItem = Math.floor(Math.random() * reviews.length); // generates a random number between 0 and the length of the reviews array
        showRandomPerson();
});