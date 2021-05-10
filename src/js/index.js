import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../styles/style.scss';

const upBtn = document.querySelector('#up-button');

upBtn.addEventListener('click', () => scrollToTop());
window.addEventListener('scroll', () => checkScrollY());


function checkScrollY() {
    const upBtn = document.querySelector('#up-button');

    if (window.scrollY > 200) {
        upBtn.style.opacity = 1;
    } else {
        upBtn.style.opacity = 0;
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}