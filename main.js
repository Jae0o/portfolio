'use strict';

const navbar = document.querySelector('#nav');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarheight);
    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});