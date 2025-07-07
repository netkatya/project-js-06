import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { booksRefs, showInfoMsg } from './helpers';

const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const input = document.querySelector('.quantity-buttons-input');
const buyNowBtn = document.querySelector('.books-modal-buy-button');
const addToCartBtn = document.querySelector('.books-modal-add-button');

buyNowBtn.addEventListener('click', buyNowOnClick);
addToCartBtn.addEventListener('click', addToCartBtnOnClick);

function buyNowOnClick(event) {
  showInfoMsg('Thank you for your purchase!');
  closeBookModal();
}

function addToCartBtnOnClick(event) {
  showInfoMsg(
    `You have chosen a book ${booksRefs.bookHeader.textContent} by the author ${booksRefs.bookAuthor.textContent} in the amount of ${booksRefs.bookQuantity.value} pieces for the amount of ${booksRefs.bookPrice.textContent}`
  );
  closeBookModal();
}

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.js-accordion', {
    duration: 300,
    showMultiple: true,
  });
});

minusButton.addEventListener('click', () => {
  let currentValue = parseInt(input.value);
  const price = +booksRefs.divBookModal.dataset.price;
  if (currentValue > 1) {
    currentValue -= 1;
    input.value = currentValue;
    booksRefs.bookPrice.textContent = `$${(price * currentValue).toFixed(2)}`;
  }
});

plusButton.addEventListener('click', () => {
  let currentValue = parseInt(input.value);
  const price = +booksRefs.divBookModal.dataset.price;
  currentValue += 1;
  input.value = currentValue;
  booksRefs.bookPrice.textContent = `$${(price * currentValue).toFixed(2)}`;
});

booksRefs.bookModal.addEventListener('click', event => {
  if (event.target === booksRefs.bookModal) {
    closeBookModal();
  }
});

function closeBookModal() {
  booksRefs.bookModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeBookModal();
  }
});

booksRefs.bookModalCloseBtn.addEventListener('click', closeBookModal);
