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


//Popup
var buttonBuy = document.querySelector(".button-buy");
var popupForBuyingTour = document.querySelector(".modal-tour");
var buttonClose = document.querySelector(".modal__close");
var anyPopup = document.querySelector(".modal");
var phoneInput = document.querySelector(".modal-tour__phone-popup");
var mailInput = document.querySelector(".modal-tour__mail");
var form = document.querySelector(".modal");
var errorBlockForMail = document.querySelector('.form__error-popup-mail');
var errorBlockForPhone = document.querySelector('.form__error-popup-phone');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("phone");
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

buttonBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForBuyingTour.classList.add("modal-active");

  if (storage) {
    phoneInput.value = storage;
    mailInput.value = storage;
  }

  phoneInput.focus();
})

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  anyPopup.classList.remove("modal-active");
  errorBlockForPhone.classList.remove("form__error-active");
  phoneInput.classList.remove("modal__input-invalid");
  errorBlockForMail.classList.remove("form__error-active");
  mailInput.classList.remove("modal__input-invalid");
});

form.addEventListener("submit", function (evt) {
  if (!phoneInput.value) {
    evt.preventDefault();
    errorBlockForPhone.classList.add("form__error-active");
    phoneInput.classList.add("modal__input-invalid");
  }

  if (!mailInput.value) {
    evt.preventDefault();
    errorBlockForMail.classList.add("form__error-active");
    mailInput.classList.add("modal__input-invalid");
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem("phone", phoneInput.value);
      localStorage.setItem("mail", mailInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 27) {
    if (anyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      anyPopup.classList.remove("modal-show");
    }
  }
});


// var closePopupButton = document.querySelector(".modal__close");
// const tourPopup = document.querySelector(".modal-tour");
// const succesPopup = document.querySelector("modal-succes");
// // const page = document.querySelector("main");

// const onDocumentKeydown = (evt) => {
//   if (evt.keyCode === 27) {
//     const popup = document.querySelector(".alert-popup");
//     popup.remove();
//   }

//   document.removeEventListener("keydown", onDocumentKeydown);
// };

// const onPopupClickHandler = () => {
//   const popup = document.querySelector(".alert-popup");
//   popup.remove();
//   document.removeEventListener("keydown", onDocumentKeydown);
//   popup.removeEventListener("click", onPopupClickHandler);
// };

// const showPopup = (popupTemplate) => {
//   page.append(popupTemplate.cloneNode(true));
//   const popup = document.querySelector(".alert-popup");

//   if (popup) {
//     document.addEventListener("keydown", onDocumentKeydown);
//     popup.addEventListener("click", onPopupClickHandler);
//   }
// };
