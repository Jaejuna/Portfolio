'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//Making navbar transparent when it's on the top
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar_dark');
    }
    else {
        navbar.classList.remove('navbar_dark');
    }
});