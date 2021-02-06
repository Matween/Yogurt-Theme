var navBlob = document.querySelector('#nav-blob');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        navBlob.style.top = '0px';
    } else {
        navBlob.style.top = (-1 * (navBlob.clientHeight)).toString() + 'px';
    }
});