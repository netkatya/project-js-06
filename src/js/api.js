import axios from 'axios';
const key = `https://books-backend.p.goit.global/books/`;

export async function getCategoryList() {
  try {
    const response = await axios(`${key}category-list`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getTopBooks() {
  try {
    const response = await axios(`${key}top-books`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getBooksByCategory(query) {
  try {
    const response = await axios(`${key}category?category=${query}`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function getBookById(id) {
  try {
    const response = await axios(`${key}${id}`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}
