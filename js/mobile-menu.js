const menuOpenButton = document.querySelector('.menu-open');
const menuCloseButton = document.querySelector('.menu-close-button');
const mobMenu = document.querySelector('.mob-menu');

menuOpenButton.addEventListener('click', function() {
  mobMenu.classList.add('show');
});

menuCloseButton.addEventListener('click', function() {
  mobMenu.classList.remove('show');
});