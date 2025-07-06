import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// FEEDBACK Swiper (section: feedbacks)
const swiperFeedback = new Swiper('.feedbacks .swiper', {
  modules: [Navigation, Pagination],
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