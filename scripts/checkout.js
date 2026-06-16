import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutheader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/car.js';
async function loadPage() {
    try {
        await Promise.all([
        loadProductsFetch(),
        loadCartFetch()
        ]);
    } catch (error) {
        console.log("Unexpected error. Please try again.")
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        })
    })
]).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
loadProducts(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/