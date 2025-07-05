import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { booksRefs, showInfoMsg } from './helpers';


// new Accordion('.accordion-container', {
//   duration: 500,
//   // showMultiple: true,
//   // onOpen: function (currentElement) {
//   //   console.log(currentElement);
//   // },
// });

const accordionTriggers = document.querySelectorAll('.ac-trigger');
const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const input = document.querySelector('.quantity-buttons-input');
const buyNowBtn = document.querySelector('.books-modal-buy-button');
const addToCartBtn = document.querySelector('.books-modal-add-button');

buyNowBtn.addEventListener('click', buyNowOnClick);
addToCartBtn.addEventListener('click', addToCartBtnOnClick);

function buyNowOnClick(event) {
  showInfoMsg('Дякуємо за покупку!');
}

function addToCartBtnOnClick(event) {
  showInfoMsg(
    `Ви вибрали книгу ${booksRefs.bookHeader.textContent} автора ${booksRefs.bookAuthor.textContent} в кількості ${booksRefs.bookQuantity.value} шт.`
  );
}

accordionTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const accordionItem = trigger.closest('.ac');
    const panel = accordionItem.querySelector('.ac-panel');
    const isActive = accordionItem.classList.contains('is-active');

    document.querySelectorAll('.ac').forEach(item => {
      item.classList.remove('is-active');
      const p = item.querySelector('.ac-panel');
      p.style.maxHeight = null;
    });

    if (!isActive) {
      accordionItem.classList.add('is-active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

minusButton.addEventListener('click', () => {
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', () => {
  let currentValue = parseInt(input.value);
  input.value = currentValue + 1;
});
