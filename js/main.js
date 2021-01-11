
// VARIABLES

const nav = document.querySelector('.main-nav');
const navLogo = document.querySelector('.nav-logo');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLogo = document.querySelector('.mobile-nav-logo');
const home = document.querySelector('#home');
const map = document.querySelector('.google-map');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');


init = () => {


    // SCROLL EVENTS

    window.onscroll = () => {


        var scrollPos = window.pageYOffset;

        if (scrollPos > home.scrollHeight/2) {
            navLogo.style.transform = "translateY(0px)";
            navLogo.style.opacity = "1";
            mobileNavLogo.style.transform = "translate(-50%, -50%)";
            mobileNavLogo.style.opacity = "1";
        } else {
        navLogo.style.transform = "translateY(-100px)";
        navLogo.style.opacity = "0";
        mobileNavLogo.style.transform = "translate(-50%, -100px)";
        mobileNavLogo.style.opacity = "0";
        }

        if(scrollPos > 100) {
            nav.style.boxShadow = '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)';
            mobileNav.style.boxShadow = '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)';
        }else {
            nav.style.boxShadow = 'none';
            mobileNav.style.boxShadow = 'none';
        }
    }

    // NAVBAR TOOLTIPS

    tippy('.phone', {
        content: 'Call',
    });
    tippy('.email', {
        content: 'Email',
    });
    tippy('.facebook', {
        content: 'Facebook',
    });
    tippy('.linkedin', {
        content: 'Linkedin',
    });
}


document.addEventListener('DOMContentLoaded', init());