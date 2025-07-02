import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// EVENTS Swiper (section: events)
const swiperEvents = new Swiper('.events .swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.events .button-next-feedback',
    prevEl: '.events .button-prev-feedback',
    disabledClass: 'disabled-feedback',
  },
  pagination: {
    el: '.events .my-pagination-feedback',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      enabled: false, // 👈 Отключить Swiper на десктопе
    },
  },
});

