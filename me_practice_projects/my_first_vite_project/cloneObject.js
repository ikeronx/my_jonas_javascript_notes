import { cloneDeep } from 'lodash-es';

const state = {
    cart: [
            { product: 'bread', quantity: 5 },
            { product: 'rice', quantity: 5 },
    ],
    user: { loggedIn: true },
};

export const stateClone = cloneDeep(state)
stateClone.user.loggedIn = false
console.log(stateClone.user.loggedIn); // false
console.log(state.user.loggedIn);
