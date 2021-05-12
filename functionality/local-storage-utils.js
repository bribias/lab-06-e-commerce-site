import { findById } from './utils.js';

const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringyCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }

}

export function setCart(someCart) {
    const stringyCart = JSON.stringify(someCart);

    localStorage.setItem(CART, stringyCart);
}

export function addToCart(productId) {
    const cart = getCart();
    const cartItem = findById(cart, productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: productId,
            quantity: 1,
        };

        cart.push(newItem);
    }

    setCart(cart);
}