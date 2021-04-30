'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

const headerToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__navigation');
const headerLogo = document.querySelector('.header__logo');

headerToggle.classList.remove('visually-hidden');
navigation.classList.remove('navigation-nojs')


headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle-closed');
  headerLogo.classList.toggle('visually-hidden');
  navigation.classList.toggle('navigation__show');
});

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
