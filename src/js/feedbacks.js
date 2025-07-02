import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// FEEDBACK Swiper (section: feedbacks)
const swiperFeedback = new Swiper('.swiper-feedback', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.feedbacks .button-next-feedback',
    prevEl: '.feedbacks .button-prev-feedback',
    disabledClass: 'disabled-feedback',
  },
  pagination: {
    el: '.feedbacks .my-pagination-feedback',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});