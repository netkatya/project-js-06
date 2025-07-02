import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Init Swiper
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
            centeredSlides: false,
        },
    },

})