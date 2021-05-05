"use strict";

var headerToggle = document.querySelector(".header__toggle");
var navigation = document.querySelector(".header__navigation");
var headerLogo = document.querySelector(".header__logo");

headerToggle.classList.remove("visually-hidden");
navigation.classList.remove("navigation-nojs");


headerToggle.addEventListener("click", function () {
  headerToggle.classList.toggle("header__toggle-closed");
  headerLogo.classList.toggle("visually-hidden");
  navigation.classList.toggle("navigation__show");
});

//Popup
var buttonBuy = document.querySelectorAll(".button-buy");
var popupForBuyingTour = document.querySelector(".modal-tour");
var buttonClose = document.querySelectorAll(".modal__close");
var anyPopup = document.querySelector(".modal");
var phoneInput = document.querySelector(".modal-tour__phone-popup");
var mailInput = document.querySelector(".modal-tour__mail");
var form = document.querySelector(".modal");
var errorBlockForMail = document.querySelector('.form__error-popup-mail');
var errorBlockForPhone = document.querySelector('.form__error-popup-phone');
var formButton = document.querySelectorAll('.form__button');
var succesPopup = document.querySelector('.modal-succes');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("phone");
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

buttonBuy.forEach((button) => {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForBuyingTour.classList.add("modal-active");

    if (storage) {
      phoneInput.value = storage;
      mailInput.value = storage;
    }

    phoneInput.focus();
  })
})

//Отправка формы

form.addEventListener("submit", function (evt) {
  if (!phoneInput.value) {
    evt.preventDefault();
  }

  if (!mailInput.value) {
    evt.preventDefault();
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem("phone", phoneInput.value);
      localStorage.setItem("mail", mailInput.value);
      succesPopup.classList.add("modal-active");
    } else {
      succesPopup.classList.add("modal-active");
    }
  }
});

var closePopup = function () {
  phoneInput.value = "";
  mailInput.value = "";
  phoneInput.classList.remove("modal__input-invalid");
  errorBlockForMail.classList.remove("form__error-active");
  mailInput.classList.remove("modal__input-invalid");
  popupForBuyingTour.classList.remove("modal-active");
  errorBlockForPhone.classList.remove("form__error-active");
}

buttonClose.forEach((button) => {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    closePopup();
    succesPopup.classList.remove("modal-active");
  })
})


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
    succesPopup.classList.remove("modal-active");
  }
});

//Валидация

phoneInput.value.addEventListener('invalid', () => {
  if (phoneInput.validity.patternMismatch) {
    errorBlockForPhone.classList.add("form__error-active");
    phoneInput.classList.add("modal__input-invalid");
  } else if (phoneInput.validity.valueMissing) {
    errorBlockForPhone.classList.add("form__error-active");
    phoneInput.classList.add("modal__input-invalid");
  } else {
    phoneInput.setCustomValidity('');
  }
});

mailInput.value.addEventListener('invalid', () => {
  if (mailInput.validity.patternMismatch) {
    errorBlockForMail.classList.add("form__error-active");
    phoneInput.classList.add("modal__input-invalid");
  } else if (mailInput.validity.valueMissing) {
    errorBlockForPhone.classList.add("form__error-active");
    mailInput.classList.add("modal__input-invalid");
  } else {
    mailInput.setCustomValidity('');
  }
});








//Swipe
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 1024) {
      $('.slider').removeClass('swiper-container');
      $('.buy-tour__list').removeClass('swiper-wrapper');
      $('.slider__item').removeClass('swiper-slide');

    } else if (ww <= 1023) {
      $('.slider').addClass('swiper-container');
      $('.buy-tour__list').addClass('swiper-wrapper');
      $('.slider__item').addClass('swiper-slide');
      const swiper = new Swiper(".swiper-container");
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();
});

//Slider

// let tabs = document.querySelectorAll(".slider__link");
// let countries = document.querySelector(".countries__item");

// tabs.forEach((tab, i) => {
//   tab.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     countries.forEach(country) => {
//       if(country.classList.contains('slider__link--active')) {
//         country.classList.remove('slider__link--active');
//       }
//       if (country === tabs) {
//         country.classList.add('slider__link--active');
//       }
//     }
//   })
// })
//при нажатии на каждый таб открывается карточка с тем де номером


