

// EVENTS Swiper (section: events)
const swiperEvents = new Swiper('.events .swiper', {
  modules: [Navigation, Pagination],
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

