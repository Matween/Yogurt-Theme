var nav = document.querySelector('nav');
var toggle = document.querySelector(".toggle");
var toggle_open_text = 'Menu';
var toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerText = toggle_close_text;
  } else {
    toggle.innerText = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);


// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 20) {
//         nav.style.backgroundColor = '#ffbda9';
//     } else {
//         nav.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
//     }
// });


