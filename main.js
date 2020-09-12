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

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    scrollIntoView(link);
});


//Handle scrolling when tapping on the "contact me"
const homeContactMe = document.querySelector('.home_contact');
homeContactMe.addEventListener('click', () => {
    
    scrollIntoView('#contact');
});

//Make "home" slowly fade out as scrolling down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity = 1-window.scrollY / homeHeight;
});

//Show "arrow up" when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } 
    else{
        arrowUp.classList.remove('visible');
    }
});

//handle "arrow up" click
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
});

//ScrollIntoView fucntion
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth", inline: "start"});
}