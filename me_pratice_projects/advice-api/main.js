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

// EVENTLISTENERS
render.diceBtn.addEventListener('click', showAdvice);
