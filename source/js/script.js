'use strict';

var headerToggle = document.querySelector('.header__toggle');
var navigation = document.querySelector('.header__navigation');
var headerLogo = document.querySelector('.header__logo');

headerToggle.classList.remove('visually-hidden');
navigation.classList.remove('navigation-nojs');


headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle-closed');
  headerLogo.classList.toggle('visually-hidden');
  navigation.classList.toggle('navigation__show');
});

//Swipe
// const { default: Swiper } = require("swiper");
// new Swiper('.slider');


//Popup
var buttonBuy = document.querySelector('.button-buy');
var popupForBuyingTour = document.querySelector('.modal-tour');
var buttonClose = document.querySelector('.modal__close');
var anyPopup = document.querySelector('.modal');

buttonBuy.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupForBuyingTour.classList.add('modal-active');
})

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  anyPopup.classList.remove("modal-active");
});

// var closePopupButton = document.querySelector('.modal__close');
// const tourPopup = document.querySelector('.modal-tour');
// const succesPopup = document.querySelector('modal-succes');
// // const page = document.querySelector('main');

// const onDocumentKeydown = (evt) => {
//   if (evt.keyCode === 27) {
//     const popup = document.querySelector('.alert-popup');
//     popup.remove();
//   }

//   document.removeEventListener('keydown', onDocumentKeydown);
// };

// const onPopupClickHandler = () => {
//   const popup = document.querySelector('.alert-popup');
//   popup.remove();
//   document.removeEventListener('keydown', onDocumentKeydown);
//   popup.removeEventListener('click', onPopupClickHandler);
// };

// const showPopup = (popupTemplate) => {
//   page.append(popupTemplate.cloneNode(true));
//   const popup = document.querySelector('.alert-popup');

//   if (popup) {
//     document.addEventListener('keydown', onDocumentKeydown);
//     popup.addEventListener('click', onPopupClickHandler);
//   }
// };
