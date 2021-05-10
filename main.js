const bars = document.querySelector('#bars');
const mobileMenu = document.querySelector('#mobile-menu');
const barsContainer = document.querySelector('#bars__container');

bars.addEventListener('click', () => {
    barsContainer.classList.toggle('open')
    mobileMenu.classList.toggle('open')
})