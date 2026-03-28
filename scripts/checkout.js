import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutheader.js";
//import '../data/cart-class.js';

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
