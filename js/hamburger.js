
// VARIABLES

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuFooter = document.querySelector('.mobile-menu-footer');
const mobileAboutLink = document.querySelector('.mobile-about-link');
const mobileContactLink = document.querySelector('.mobile-contact-link');
const mobilePhone = document.querySelector('.mobile-phone');
const mobileEmail = document.querySelector('.mobile-email');
const mobileFacebook = document.querySelector('.mobile-facebook');
const mobileLinkedin = document.querySelector('.mobile-linkedin');
const body = document.querySelector('.main-body');





initHamburger = () => {

    // TOGGLE MOBILE MENU & OTHER VARIABLES
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('open');
        mobileMenuFooter.classList.toggle('open');
        mobilePhone.classList.toggle('is-active')
        mobileEmail.classList.toggle('is-active')
        mobileFacebook.classList.toggle('is-active')
        mobileLinkedin.classList.toggle('is-active')
        body.classList.toggle('is-active');

    });

    mobileAboutLink.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('open');
        mobileMenuFooter.classList.toggle('open');
        mobilePhone.classList.toggle('is-active')
        mobileEmail.classList.toggle('is-active')
        mobileFacebook.classList.toggle('is-active')
        mobileLinkedin.classList.toggle('is-active')
        body.classList.toggle('is-active');
    })

    mobileContactLink.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('open');
        mobileMenuFooter.classList.toggle('open');
        mobilePhone.classList.toggle('is-active')
        mobileEmail.classList.toggle('is-active')
        mobileFacebook.classList.toggle('is-active')
        mobileLinkedin.classList.toggle('is-active')
        body.classList.toggle('is-active');
    })
}

document.addEventListener('DOMContentLoaded', initHamburger());