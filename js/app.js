'use strict';

const scrollDown = document.querySelector('.center-con');
const scrollUp = document.querySelector('.up-con');
const profileContainer = document.querySelector('.profile-container');
const mainHeader = document.getElementById('main-header');
const navBar = document.querySelector('.navbar');
let sticky = navBar.offsetTop;

// DOWN Arrow
scrollDown.addEventListener('click', () => {
  profileContainer.scrollIntoView({ 
    behavior: 'smooth'
  })
})

// UP Arrow
scrollUp.addEventListener('click', () => {
  mainHeader.scrollIntoView({ 
    behavior: 'smooth'
  })
})

// Sticky Navbar
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add('sticky')
  } else {
    navBar.classList.remove('sticky');
  }
}