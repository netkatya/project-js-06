'use strict';

import {
  loadCategoryList,
  loadBooksList,
  toggleDropdown,
  loadMoreBtnOnClick,
  dropdownListOnClick,
  goToTopBtnOnClick,
  booksListOnClick,
  closeCategoryList,
} from './handlers';

import { booksRefs, hideLoadMoreButton } from './helpers';

hideLoadMoreButton();

loadCategoryList();
loadBooksList();

booksRefs.dropdownBtn.addEventListener('click', toggleDropdown);
booksRefs.dropdownList.addEventListener('click', dropdownListOnClick);
booksRefs.loadMoreBtn.addEventListener('click', loadMoreBtnOnClick);
booksRefs.booksList.addEventListener('click', booksListOnClick);

// katya
goToTopBtnOnClick(booksRefs.goToTopBtn);
// katya

booksRefs.dropdown.addEventListener('click', event => {
  if (event.target === booksRefs.dropdown) {
    closeCategoryList();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeCategoryList();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1440) {
    booksRefs.categoryModal.style.position = '';
    booksRefs.categoryModal.style.top = '';
    booksRefs.categoryModal.style.left = '';
  }
});
