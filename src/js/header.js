const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navList = document.querySelector('.mobile-menu-nav-list');
burgerBtn.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
  mobileMenu.classList.add('is-open');
  burgerBtn.classList.add('rotate');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  burgerBtn.classList.remove('rotate');
});
navList.addEventListener('click', event => {
  if (event.target.classList.contains('mobile-menu-nav-item-link')) {
    document.body.classList.remove('no-scroll');
    mobileMenu.classList.remove('is-open');
    burgerBtn.classList.remove('rotate');
  }
  return;
});

const themeSwitcher = document.querySelector('#input');

themeSwitcher.addEventListener('change', () => {
  const isDark = themeSwitcher.checked;

  document.body.classList.toggle('body-dark-theme', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  themeSwitcher.checked = isDark;
  document.body.classList.toggle('body-dark-theme', isDark);
});
