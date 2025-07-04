const scrollUpBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
