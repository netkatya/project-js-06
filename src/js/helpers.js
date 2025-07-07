'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getCategoryList } from './api';

iziToast.settings({
  position: 'topRight',
});

export const booksRefs = {
  loadMoreBtn: document.querySelector('.books-list-load-more'),
  goToTopBtn: document.querySelector('.books-list-go-top'),
  dropdown: document.querySelector('.books-category-list'),
  dropdownList: document.querySelector('.category-dropdown-list'),
  categoryModal: document.querySelector('.category-modal'),
  dropdownBtn: document.querySelector('.category-list-dropdown-button'),
  booksList: document.querySelector('.books-list'),
  booksShowedSummary: document.querySelector(
    '.books-section-subheader-summary'
  ),
  loader: document.querySelector('.loader'),
  categoryBox: document.querySelector('.books-category-box'),
  bookModal: document.querySelector('.books-modal-overlay'),
  bookImage: document.querySelector('.books-modal-picture'),
  bookHeader: document.querySelector('.books-modal-header'),
  bookAuthor: document.querySelector('.books-modal-text'),
  bookPrice: document.querySelector('.books-modal-price'),
  divBookModal: document.querySelector('div.books-modal'),
  bookDetails: document.querySelector('.ac-text.details'),
  bookQuantity: document.querySelector('.quantity-buttons-input'),
  bookShipping: document.querySelector('.ac-text.shipping'),
  bookReturns: document.querySelector('.ac-text.returns'),
  bookModalCloseBtn: document.querySelector(
    '.books-modal-overlay .events-close-button'
  ),
};

export function showErrorMsg(msg) {
  iziToast.error({
    title: 'Error',
    message: msg,
  });
}

export function showInfoMsg(msg) {
  iziToast.info({
    message: msg,
  });
}

export function showLoader() {
  booksRefs.loader.style.display = 'block';
}

export function hideLoader() {
  booksRefs.loader.style.display = 'none';
}

export function showLoadMoreButton() {
  booksRefs.loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  booksRefs.loadMoreBtn.style.display = 'none';
}

export function showBookModal() {
  const scrollY = window.scrollY;

  booksRefs.bookModal.classList.add('is-open');

  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}
