import { Invoice } from "./classes/invoice.js";


const invOne = new Invoice('Ariel', 'car accident (sorry)', 10001.5);

let invoices: Invoice[] = [];
invoices.push(invOne);
console.log(invoices);

const paymentForm = document.querySelector('form');

const type = document.querySelector('#type') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;
const toFrom = document.querySelector('#to_from') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


paymentForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, details.value, toFrom.value, amount.valueAsNumber);
});