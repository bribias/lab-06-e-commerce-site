import { renderCartItem, getCartTotal } from './renderCart.js';
// import { cartItems } from './cart-items.js';

import { getCart } from '../functionality/local-storage-utils.js';

const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal();

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

const orderButton = document.querySelector('#orderButton');

orderButton.addEventListener('click', () => {


    alert('Place Your Order');
    localStorage.clear();
    location.reload();
    return;
});