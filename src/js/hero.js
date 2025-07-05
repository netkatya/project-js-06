import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperHero = new Swiper('.hero .swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
    navigation: {
    nextEl: '.hero .button-next',
    prevEl: '.hero .button-prev',
    disabledClass: 'disabled',
  },
  
});

