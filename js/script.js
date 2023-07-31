new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    810: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});



const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};
if (isMobile.any()) {
  document.body.classList.add('_touch');



} else {
  document.body.classList.add('_pc');
}


let menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
  let menuBody = document.querySelector('.menu');
  let menuLogo = document.querySelector('.header__logo-mane');
  let menuLg = document.querySelector('.header__logo-sub');
  menuBurger.addEventListener('click', function (e) {
document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuLogo.classList.toggle('_rem');
    menuLg.classList.toggle('_add');
  });
}




$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.__menu').toggleClass('act');
  });
});
