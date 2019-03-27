'use strict';
// Модуль открытия/закрытия главного навигационного меню
var navButton = document.querySelector('.page-header__nav-button');
var navMain = document.querySelector('.page-nav');

if (navMain && navMain.classList.contains('page-nav--no-js')) {
navMain.classList.remove('page-nav--no-js');
navMain.classList.add('page-nav--closed');
}

if (navButton && navButton.classList.contains('page-header__nav-button--close')) {
  navButton.classList.remove('page-header__nav-button--close');
  navButton.classList.add('page-header__nav-button--open');
  }

navButton.addEventListener('click', function() {
  if (navMain.classList.contains('page-nav--closed')) {
    navMain.classList.remove('page-nav--closed');
    navMain.classList.add('page-nav--opened');
  } else {
    navMain.classList.add('page-nav--closed');
    navMain.classList.remove('page-nav--opened');
  }

  if (navButton.classList.contains('page-header__nav-button--close')) {
    navButton.classList.remove('page-header__nav-button--close');
    navButton.classList.add('page-header__nav-button--open');
  } else {
    navButton.classList.add('page-header__nav-button--close');
    navButton.classList.remove('page-header__nav-button--open');
  }
});
