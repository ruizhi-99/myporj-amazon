import { validDeliveryOption } from "./deliveryOptions.js";
export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
        cart = [];
    }

}

function saveTostorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


export function addTocart(productId, quantity = 1) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1'
        });
    }
    saveTostorage();
}



export function removeCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveTostorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.quantity = newQuantity;
    saveTostorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (!matchingItem) {
        return;
    }
    if (!validDeliveryOption(deliveryOptionId)) {
        return;
    }
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveTostorage();
}

export function loadCart(fun) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        console.log(xhr.response);
        fun();
    });

    xhr.open('GET', 'https://supersimplebackend.dev/cart');
    xhr.send();
}

export async function loadCartFetch() {
    const response = await fetch('https://supersimplebackend.dev/cart');
    const text = await response.text();
    console.log(text);
    return text;
}
