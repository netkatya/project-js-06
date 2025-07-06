import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const swiperHero = new Swiper('.hero .swiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
    navigation: {
    nextEl: '.hero .button-next',
    prevEl: '.hero .button-prev',
    disabledClass: 'disabled',
  },
  autoplay: {
    delay: 4000, // время между слайдами в миллисекундах (здесь 3 секунды)
    disableOnInteraction: false, // не отключать автопрокрутку при взаимодействии пользователя
  }
});

