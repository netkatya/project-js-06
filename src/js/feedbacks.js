import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { handleSwiperKeyPress } from './handlers';

// FEEDBACK Swiper (section: feedbacks)
const swiperFeedback = new Swiper('.feedbacks .swiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.feedbacks .button-next',
    prevEl: '.feedbacks .button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.feedbacks .pagination-for-swiper',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const fedbacksPrevBtn = document.querySelector(
  '.section-feedbacks-nav-btns > .button-prev'
);
const fedbacksNextBtn = document.querySelector(
  '.section-feedbacks-nav-btns > .button-next'
);

fedbacksPrevBtn.addEventListener('keydown', e =>
  handleSwiperKeyPress(e, swiperFeedback, 'prev')
);
fedbacksNextBtn.addEventListener('keydown', e =>
  handleSwiperKeyPress(e, swiperFeedback, 'next')
);
