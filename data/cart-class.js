import { validDeliveryOption } from "./deliveryOptions.js";

class Cart {
    cartItems;
    localStorageKey;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage() {
        try {
            const data = JSON.parse(localStorage.getItem(this.localStorageKey));
            this.cartItems = Array.isArray(data) ? data : [];
        } catch {
            this.cartItems = [];
        }

        if (this.cartItems.length === 0) {
            this.cartItems = [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId, quantity = 1) {
        const matchingItem = this.cartItems.find(
            item => item.productId === productId
        );

        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push({
                productId,
                quantity,
                deliveryOptionId: '1'
            });
        }

        this.saveToStorage();
    }

    removeCart(productId) {
        this.cartItems = this.cartItems.filter(
            item => item.productId !== productId
        );

        this.saveToStorage();
    }

    calculateCartQuantity() {
        return this.cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }

    updateQuantity(productId, newQuantity) {
        const matchingItem = this.cartItems.find(
            item => item.productId === productId
        );

        if (!matchingItem) return;

        matchingItem.quantity = newQuantity;
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        const matchingItem = this.cartItems.find(
            item => item.productId === productId
        );

        if (!matchingItem) return;

        if (!validDeliveryOption(deliveryOptionId)) {
            console.log("Invalid delivery option");
            return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart("cart-oop");
console.log(cart);