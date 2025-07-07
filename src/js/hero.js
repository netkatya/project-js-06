// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Autoplay } from 'swiper/modules';
// import { handleSwiperKeyPress  } from './handlers';

// const swiperHero = new Swiper('.hero .swiper', {
//   modules: [Navigation, Pagination, Autoplay],
//   slidesPerView: 1,
//     navigation: {
//     nextEl: '.hero .button-next',
//     prevEl: '.hero .button-prev',
//     disabledClass: 'disabled',
//   },
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   }
// });

// const prevBtn = document.querySelector('.button-prev');
// const nextBtn = document.querySelector('.button-next');

// prevBtn.addEventListener('keydown', (e) => handleSwiperKeyPress(e, swiperHero, 'prev'));
// nextBtn.addEventListener('keydown', (e) => handleSwiperKeyPress(e, swiperHero, 'next'));

import Swiper from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const swiperHero = new Swiper('.hero .swiper', {
  modules: [Navigation, Keyboard, Autoplay, A11y],
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero .button-next',
    prevEl: '.hero .button-prev',
    disabledClass: 'disabled',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    init() {
      updateSlideAccessibility(this);
    },
    slideChange() {
      updateSlideAccessibility(this);
    },
  },
});

// tabindex + aria 
function updateSlideAccessibility(swiper) {
  swiper.slides.forEach((slide, i) => {
    if (i === swiper.activeIndex) {
      slide.setAttribute('tabindex', '0');
    } else {
      slide.setAttribute('tabindex', '-1');
    }
    slide.setAttribute('role', 'group');
    slide.setAttribute(
      'aria-label',
      `Слайд ${i + 1} из ${swiper.slides.length}`
    );
  });
}


function handleSwiperKeyPress(e, swiper, direction) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    direction === 'next' ? swiper.slideNext() : swiper.slidePrev();
  }
}


const prevBtn = document.querySelector('.hero .button-prev');
const nextBtn = document.querySelector('.hero .button-next');

prevBtn?.addEventListener('keydown', (e) =>
  handleSwiperKeyPress(e, swiperHero, 'prev')
);
nextBtn?.addEventListener('keydown', (e) =>
  handleSwiperKeyPress(e, swiperHero, 'next')
);