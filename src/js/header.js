const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navList = document.querySelector('.mobile-menu-nav-list');
burgerBtn.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
  mobileMenu.classList.add('is-open');
  burgerBtn.classList.add('rotate'); // Додаємо поворот
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  burgerBtn.classList.remove('rotate'); // Приховуємо поворот
});
navList.addEventListener('click', event => {
  if (event.target.classList.contains('mobile-menu-nav-item-link')) {
    document.body.classList.remove('no-scroll');
    mobileMenu.classList.remove('is-open');
    burgerBtn.classList.remove('rotate'); // Приховуємо поворот
  }
  return;
});
