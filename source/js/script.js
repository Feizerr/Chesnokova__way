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
var phoneInput = document.querySelector(".form__tel");
var mailInput = document.querySelector(".form__mail");
var forms = document.querySelectorAll(".form");
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

forms.forEach((form) => {
  form.addEventListener("submit", function (evt) {
    if (!mailInput.value || !phoneInput.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem("phone", phoneInput.value);
        localStorage.setItem("mail", mailInput.value);
        succesPopup.classList.add("modal-active");
      } else {
        succesPopup.classList.add("modal-active");
      }
    }
  });
})

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


//Slider

let tabs = document.querySelectorAll(".slider__link");
let countries = document.querySelectorAll(".countries__item");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (evt) {
    evt.preventDefault();

    tabs.forEach((link) => {
      link.classList.remove('slider__link--active')
    })

    tab.classList.add('slider__link--active')

    countries.forEach((country, i) => {
      country.classList.remove('countries__item--active');
      if (index == i) {
          country.classList.add('countries__item--active');
      }
    })
  })
})
