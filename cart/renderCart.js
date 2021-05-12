import plants from '../functionality/plants.js';
import { getCart } from '../functionality/local-storage-utils.js';

import { findById } from '../functionality/utils.js';

const cartItems = getCart();

export function renderCartItem(cartItem) {

    const plant = findById(plants, cartItem.id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = plant.species;

    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = plant.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const total = plant.price * cartItem.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {
        const plant = findById(plants, item.id);

        const total = item.quantity * plant.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}