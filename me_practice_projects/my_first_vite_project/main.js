
import './style.css';
import * as ShoppingCart from './shoppingCart.js'; // 237 23
import add from './shoppingCart.js';
import {stateClone} from './cloneObject.js'

const bread = ShoppingCart.addToCart('bread', 9);
const eggs = ShoppingCart.addToCart('eggs', 5);
const milk = add('milk', 5);
const pizza = add('pizza', 12);

document.querySelector('#app').innerHTML = `
  <h1>Shopping List</h1>
  <li>${bread}</li>
  <li>${eggs}</li>
  <li>${milk}</li>
  <li>${pizza}</li>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

