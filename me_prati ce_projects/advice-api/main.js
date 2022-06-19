// SELECTORS
const cardContent = document.querySelector('.card__content');
const diceBtn = document.querySelector('.card__btn');

// FUNCTIONS
const renderAdvice = (data) => {
        const html = ` 
            <h1 class="card__title">ADVICE #${data.slip.id}</h1>
            <p class="card__quote">“${data.slip.advice}”</p>
            <div class="card__divider"> <svg  width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>
                    `;
        cardContent.innerHTML = html;
};

const renderErrMsg = (err) => {
        const cardTitle = document.querySelector('.card__title');
        const cardQuote = document.querySelector('.card__quote');
        cardTitle.textContent = '!@#$%';
        cardQuote.textContent = ` 💥 💥 💥 ${err.message} 💥 💥 💥`;
};

const showAdvice = async () => {
        try {
                const response = await fetch(`https://api.adviceslip.com/advice`);
                if (!response.ok) throw new Error(`(${response.status})`);
                const data = await response.json();
                renderAdvice(data);
        } catch (err) {
                renderErrMsg(err);
        }
};

// EVENTLISTENERS
diceBtn.addEventListener('click', showAdvice);
