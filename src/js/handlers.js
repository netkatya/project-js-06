'use strict';

import {
  getCategoryList,
  getTopBooks,
  getBooksByCategory,
  getBookById,
} from './api';
import {
  showInfoMsg,
  showErrorMsg,
  showLoadMoreButton,
  hideLoadMoreButton,
  booksRefs,
  showLoader,
  hideLoader,
} from './helpers';

let books = [];
let countBooksPerPage = 10;
let page = 1;
let lastIndex = 0;

if (window.innerWidth >= 1440) {
  countBooksPerPage = 24;
}

export async function loadCategoryList() {
  try {
    let categories = await getCategoryList();

    categories = [{ list_name: 'All categories' }, ...categories].filter(
      ({ list_name }) => list_name.trim() != ''
    );
    renderCategories(categories);
  } catch (error) {
    showErrorMsg(error);
  } finally {
  }
}

export async function loadBooksList(append = false) {
  try {
    const booksArray = await getTopBooks();
    books = booksArray.flatMap(({ books }) => books);

    handleBooks(books, append);
  } catch (error) {
    hideLoadMoreButton();
    showErrorMsg('Error loading books from the server!');
  } finally {
    hideLoader();
  }
}

export async function loadBooksListByCategory(category, append = false) {
  try {
    const booksArray = await getBooksByCategory(category);

    books = [...booksArray];

    handleBooks(books, append);
  } catch (error) {
    hideLoadMoreButton();
    showErrorMsg('Error loading books from the server!');
  } finally {
    hideLoader();
  }
}

function handleBooks(books, append) {
  let totalPages = 0;
  if (books.length >= countBooksPerPage) {
    totalPages = 1 + Math.ceil((books.length - countBooksPerPage) / 4);
  }

  if (books.length > 0) {
    renderBooks(books, append);

    if (page >= totalPages) {
      hideLoadMoreButton();
      showInfoMsg("We're sorry, but you've reached the end of search results.");
    } else {
      showLoadMoreButton();
    }
    page++;
  } else {
    clearProductList();

    hideLoadMoreButton();
    showErrorMsg(
      'Sorry, there are no images matching your search query.Please try again!'
    );
  }
}

export function loadMoreBtnOnClick(event) {
  hideLoadMoreButton();
  showLoader();
  setTimeout(() => {
    handleBooks(books, true);
    hideLoader();
  }, 500);
}
export function goToTopBtnOnClick(event) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function renderBooks(arrBooks, append = false) {
  let startIndex;
  if (page === 1) {
    startIndex = (page - 1) * countBooksPerPage;
  } else {
    startIndex = lastIndex;
  }

  lastIndex = Math.min(
    arrBooks.length,
    startIndex + (append ? 4 : countBooksPerPage)
  );

  const markUp = arrBooks
    .slice(startIndex, lastIndex)
    .map(
      ({ _id, title, author, price, book_image, description }) =>
        `<li class="books-item" data-id="${_id}">
            <img class="books-item__image" src="${book_image}" alt="${description}"/>
            <div class="books-item__header">
              <span class="books-item__title">${title}</span>
              <span class="books-item__price"> ${'$' + price}</span>
            </div>
            <p class="books-item__author">${author}</p>
            <button class="books__learnmore-btn books-main-btn books-transparent-btn" type="button">Learn More</button>
          </li>`
    )
    .join('');
  if (append) {
    booksRefs.booksList.insertAdjacentHTML('beforeend', markUp);
  } else {
    booksRefs.booksList.innerHTML = markUp;
  }
  booksRefs.booksShowedSummary.textContent = `Showing ${lastIndex} of ${books.length}`;
  if (append) scrollAfterNewImages();
}

export function toggleDropdown() {
  booksRefs.dropdown.classList.toggle('is-open');
}

export function resetNumeration() {
  page = 1;
}

export function clearProductList() {
  booksRefs.booksList.innerHTML = '';
}

function renderCategories(arrCat) {
  booksRefs.dropdownList.innerHTML = arrCat
    .map(({ list_name }) => `<li class="categories__item">${list_name}</li>`)
    .join('');
}

function scrollAfterNewImages() {
  const firstCard = document.querySelector('.books-list .books-item');
  let quantityCardToScroll = 4;
  if (window.innerWidth >= 1440) {
    quantityCardToScroll = 1;
  } else if (window.innerWidth >= 768) {
    quantityCardToScroll = 2;
  }

  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * quantityCardToScroll,
      behavior: 'smooth',
    });
  }
}

export function dropdownListOnClick(event) {
  if (!event.target.classList.contains('categories__item')) {
    return;
  }

  if (window.innerWidth < 1440) {
    booksRefs.dropdown.classList.remove('is-open');
  }

  const selectedCategory = event.target;

  resetNumeration();
  clearProductList();
  showLoader();

  if (selectedCategory.textContent.toLowerCase() === 'all categories') {
    loadBooksList();
  } else {
    loadBooksListByCategory(
      encodeURIComponent(selectedCategory.textContent.trim())
    );
  }
}

export function booksListOnClick(event) {
  if (!event.target.classList.contains('books__learnmore-btn')) {
    return;
  }

  const currentListItem = event.target.parentElement;

  const currentBookid = currentListItem.dataset.id.trim();

  loadBookById(currentBookid);

  // const cartArray = getDataFromLS(STORAGE_KEYS.cart, []);
  // const wlArray = getDataFromLS(STORAGE_KEYS.wishlist, []);

  // updateTextAddToCartBtn(cartArray);
  // updateTextaddToWishListBtn(wlArray);

  // const cartProduct = cartArray.find(({ id }) => id === currentProductid);
  // if (cartProduct) {
  //   refs.productQuantity.value = cartProduct.quantity;
  // } else {
  //   refs.productQuantity.value = 0;
  // }

  // toggleModal();
}

export async function loadBookById(id, append = false) {
  try {
    const book = await getBookById(id);
    console.dir(book);

    // handleBooks(books, append);
  } catch (error) {
    hideLoadMoreButton();
    showErrorMsg('Error loading books from the server!');
  } finally {
    hideLoader();
  }
}
