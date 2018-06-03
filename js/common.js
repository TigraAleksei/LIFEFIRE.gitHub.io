var linkOne = document.querySelector('.btn-one');
var popupOne = document.querySelector('.one');
var fire = document.querySelector('.fire');

var overlay = document.querySelector('.overlay');
var closeAll = document.querySelector('.overlay');

linkOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.add('show');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkPopupOne = document.querySelector('.btn-popup-one');

linkPopupOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.add('show');
    fire.classList.remove('five-fire');
    fire.offsetWidth = fire.offsetWidth;
    fire.classList.add('five-fire');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkTwo = document.querySelector('.btn-two');
var popupTwo = document.querySelector('.two');

linkTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTwo.classList.add('show');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkPopupTwo = document.querySelector('.btn-popup-two');

linkPopupTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupTwo.classList.add('show');
    fire.classList.remove('five-fire');
    fire.offsetWidth = fire.offsetWidth;
    fire.classList.add('five-fire');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkThree = document.querySelector('.btn-three');
var popupThree = document.querySelector('.three');

linkThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupThree.classList.add('show');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkPopupThree = document.querySelector('.btn-popup-three');

linkPopupThree.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupThree.classList.add('show');
    fire.classList.remove('five-fire');
    fire.offsetWidth = fire.offsetWidth;
    fire.classList.add('five-fire');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkFour = document.querySelector('.btn-four');
var popupFour = document.querySelector('.four');

linkFour.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFour.classList.add('show');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkPopupFour = document.querySelector('.btn-popup-four');

linkPopupFour.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFour.classList.add('show');
    fire.classList.remove('five-fire');
    fire.offsetWidth = fire.offsetWidth;
    fire.classList.add('five-fire');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkFive = document.querySelector('.btn-five');
var popupFive = document.querySelector('.five');
linkFive.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFive.classList.add('show');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

var linkPopupFive = document.querySelector('.btn-popup-five');

linkPopupFive.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFive.classList.add('show');
    fire.classList.remove('five-fire');
    fire.offsetWidth = fire.offsetWidth;
    fire.classList.add('five-fire');
    console.log('Ура товарищи, вы зашли в консоль посмотреть что я тут написал ! = )')
    overlay.classList.add('show');
  });

closeAll.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOne.classList.remove('show');
    popupTwo.classList.remove('show');
    popupThree.classList.remove('show');
    popupFour.classList.remove('show');
    popupFive.classList.remove('show');
    overlay.classList.remove('show');
  });