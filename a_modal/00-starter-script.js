/* eslint-disable no-plusplus */
/* eslint-disable no-console */
console.log(`------ BUILDING A MODAL-----`);
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648433#overview 

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// toggles modal on / off
const toggleModal = () => {
        modal.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
}
// opens modal
btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))

// closes modal
btnCloseModal.addEventListener('click', toggleModal)

// hides overlay & click outside to close modal
overlay.addEventListener('click', toggleModal)

// closes modal by pressing the esc key
document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                toggleModal()
        }
})

// es key

/*
// ////////////////////////////////////
// longer version

// opens modal
const openModal = () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
}

// toggles modal off
const closeModal = () => {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++) {
        btnsOpenModal[i].addEventListener('click', openModal)
}

// closes modal popup
btnCloseModal.addEventListener('click', closeModal)

// hides overlay
overlay.addEventListener('click', closeModal)
/ */
