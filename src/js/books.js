'use strict';

import {
  loadCategoryList,
  loadBooksList,
  toggleDropdown,
  loadMoreBtnOnClick,
  dropdownListOnClick,
  goToTopBtnOnClick,
  booksListOnClick,
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

window.addEventListener('click', event => {
  if (!event.target.matches('.categories__item')) {
    if (window.innerWidth < 1440) {
      booksRefs.dropdown.classList.remove('show');
    }
  }
});
