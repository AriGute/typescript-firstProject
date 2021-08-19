import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js"

const invOne = new Invoice('Ariel', 'car accident (sorry)', 10001.5);

const paymentForm = document.querySelector('form');

const type = document.querySelector('#type') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;
const toFrom = document.querySelector('#to_from') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('#paylist') as HTMLUListElement;
const list = new ListTemplate(ul);

paymentForm?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, parseInt(amount.value));
    }else{
        doc = new Payment(toFrom.value, details.value, parseInt(amount.value));
    }
    list.render(doc, type.value, 'end');
});