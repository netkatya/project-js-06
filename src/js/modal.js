import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const eventModal = document.querySelector('.events-modal-overlay-events');
const closeButton = document.querySelector(
  '.events-modal-overlay-events .events-close-button'
);
const modalTitle = document.querySelector('.events-modal-text');
const registerForm = document.querySelector('.modal-form'); // Форма


let scrollTop = 0;
let currentEventTitle = '';

function openModal(eventName) {
  scrollTop = window.scrollY;
  currentEventTitle = eventName;
  modalTitle.textContent = eventName;

  eventModal.classList.add('is-open');
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.width = '100%';
}

function closeModal() {
  eventModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
  document.body.style.position = '';
  document.body.style.width = '';

  const scrollY = parseInt(document.body.style.top || '0') * -1;
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
}

// Закрытие по клику на фон
eventModal.addEventListener('click', event => {
  if (event.target === eventModal) {
    closeModal();
  }
});

// esc
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
  }
});

closeButton.addEventListener('click', closeModal);


const registerButtons = document.querySelectorAll('.events-list-button');

registerButtons.forEach(button => {
  button.addEventListener('click', e => {
    const card = e.currentTarget.closest('.swiper-slide');
    const title = card.querySelector('.events-list-header').textContent.trim();
    openModal(title);
  });
});


registerForm.addEventListener('submit', event => {
  event.preventDefault(); 

  const name = registerForm.querySelector('input[name="events-name"]').value.trim();
  const email = registerForm.querySelector('input[name="events-email"]').value.trim();

  if (!name || !email) {
    iziToast.error({
      title: 'Missing Fields',
      message: 'Please fill in both your name and email.',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }


  iziToast.success({
    title: 'Success',
    message: `You have successfully registered for the event: "${currentEventTitle}"`,
    position: 'topRight',
    timeout: 3000,

  });

  registerForm.reset(); 
  closeModal();
});