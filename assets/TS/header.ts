const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', () => {
    overlay.classList.toggle('show');
    mobileMenu.classList.toggle('show');
})