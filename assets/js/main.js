var body = document.querySelector('body');
var menu = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menu.addEventListener('click', function() {
  body.classList.toggle('nav-active');
  if (body.classList.contains('nav-active')) {
    nav.style.zIndex = '1'
  } else {
    nav.style.zIndex = '-1';
  }
});