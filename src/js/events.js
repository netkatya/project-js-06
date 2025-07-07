import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { handleSwiperKeyPress } from './handlers';

// EVENTS Swiper (section: events)
const swiperEvents = new Swiper('.events .swiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.events .button-next',
    prevEl: '.events .button-prev',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.events .pagination-for-swiper',
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
    1024: {
      enabled: false,
    },
  },
});

const eventsPrevBtn = document.querySelector(
  '.section-events-nav-btns > .button-prev'
);
const eventsNextBtn = document.querySelector(
  '.section-events-nav-btns > .button-next'
);

eventsPrevBtn.addEventListener('keydown', e => {
  handleSwiperKeyPress(e, swiperEvents, 'prev');
});
eventsNextBtn.addEventListener('keydown', e => {
  handleSwiperKeyPress(e, swiperEvents, 'next');
});
