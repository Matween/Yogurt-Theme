var body = document.querySelector('body');
var menu = document.querySelector('.menu-icon');

menu.addEventListener('click', function() {
  body.classList.toggle('nav-active');
});