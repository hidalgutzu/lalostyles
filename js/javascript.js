const menu = document.querySelector('.burger-menu');
const burgerButton = document.querySelector('#burger-menu');
const closeButton = document.querySelector('#close-menu');

burgerButton.addEventListener('click', show)
closeButton.addEventListener('click', hide)

function show() {
    menu.classList.add('is-active');
}

function hide() {
    menu.classList.remove('is-active');
}