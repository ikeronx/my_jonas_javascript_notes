// import { diceBtn, renderAdvice, renderErrMsg } from './render.js'
import * as render from './render.js';

const showAdvice = async () => {
        try {
                const response = await fetch(`https://api.adviceslip.com/advice`);
                if (!response.ok) throw new Error(`(${response.status})`);
                const data = await response.json();
                render.renderAdvice(data);
        } catch (err) {
                render.renderErrMsg(err);
        }
};

// EVENTLISTENERS..
render.diceBtn.addEventListener('click', showAdvice);

// const oj = new Date()
// console.log(oj)


const formatDatee = (inputDateValue) => {
        const date = new Date(inputDateValue)
        const locale = navigator.language; // <- get the current locale of the browser (e.g. en-US, fr-FR, etc)
        const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        };
        return new Intl.DateTimeFormat(locale, options).format(date);

}

console.log(formatDatee("2006-07-31"));

const todayDate = "2021-07-31"

const formatDate = new Date(todayDate)
console.log(formatDate.toLocaleString('default', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
}));

const locale = navigator.language; // <- get the current locale of the browser (e.g. en-US, fr-FR, etc)
const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
};
console.log(new Intl.DateTimeFormat(locale, options).format(formatDate)); // 2/18/2022, 4:55 PM
console.log(new Intl.DateTimeFormat('en-US', options).format(formatDate)); // 2/18/2022
console.log(new Intl.DateTimeFormat('ar-SA').format(formatDate)); // ٢٠/١٨/٢٢٢٢
// console.log(new Intl.DateTimeFormat('ko-KR').format(todayDate)); // 2022년 2월 18일
