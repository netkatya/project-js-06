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
booksRefs.goToTopBtn.addEventListener('click', goToTopBtnOnClick);
booksRefs.booksList.addEventListener('click', booksListOnClick);

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
