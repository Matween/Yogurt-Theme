const navBlob = document.querySelector('#nav-blob');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navBlob.style.top = "0";
    } else {
        navBlob.style.top = -1 * navBlob.clientHeight;
    }
});