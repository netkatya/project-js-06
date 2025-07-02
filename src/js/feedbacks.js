import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
  pagination: {
    el: '.my-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next',
      prevEl: '.button-prev',
      disabledClass: 'disabled'
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
});
