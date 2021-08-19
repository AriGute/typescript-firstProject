import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
const invOne = new Invoice('Ariel', 'car accident (sorry)', 10001.5);
const paymentForm = document.querySelector('form');
const type = document.querySelector('#type');
const details = document.querySelector('#details');
const toFrom = document.querySelector('#to_from');
const amount = document.querySelector('#amount');
const ul = document.querySelector('#paylist');
const list = new ListTemplate(ul);
paymentForm === null || paymentForm === void 0 ? void 0 : paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, parseInt(amount.value));
    }
    else {
        doc = new Payment(toFrom.value, details.value, parseInt(amount.value));
    }
    list.render(doc, type.value, 'end');
});
