import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice('Ariel', 'car accident (sorry)', 10001.5);
let invoices = [];
invoices.push(invOne);
console.log(invoices);
const paymentForm = document.querySelector('form');
const type = document.querySelector('#type');
const details = document.querySelector('#details');
const toFrom = document.querySelector('#to_from');
const amount = document.querySelector('#amount');
paymentForm === null || paymentForm === void 0 ? void 0 : paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, details.value, toFrom.value, amount.valueAsNumber);
});
