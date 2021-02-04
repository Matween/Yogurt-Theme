const nav = document.querySelector('nav');
const [red, green, blue] = [255, 189, 169]

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 200;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)

    nav.style.backgroundColor = y == 1 ? 'rgba(0, 0, 0, 0)' : `rgb(${red}, ${green}, ${blue})`; // if on top of page color is transparent
});