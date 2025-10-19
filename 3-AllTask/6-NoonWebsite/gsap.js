const swiper = new Swiper('.swiper', {
  // Horizontal slider for cards
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  centeredSlides: false,
  grabCursor: true,
  watchOverflow: true,

  // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 12 },
    600: { slidesPerView: 2, spaceBetween: 12 },
    1000: { slidesPerView: 3, spaceBetween: 16 },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // Autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
