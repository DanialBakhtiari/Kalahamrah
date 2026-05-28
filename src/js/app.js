const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperOne = new Swiper(".mySwiperOne", {
  slidesPerView: 10,
  spaceBetween: 5,
  loop: true,
});
const swiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
