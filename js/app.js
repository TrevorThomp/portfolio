'use strict';
const navBar = document.querySelector('.navbar');
let sticky = navBar.offsetTop;

// DOWN Arrow
$('.center-con').on('click', () => {
  $('.profile-container')[0].scrollIntoView({
    behavior: 'smooth'
  })
})

// UP Arrow
$('.up-con').on('click', () => {
  $('#main-header')[0].scrollIntoView({
    behavior: 'smooth'
  })
})

// Sticky Navbar
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    $('.navbar').addClass('sticky')
  } else {
    $('.navbar').removeClass('sticky');
  }
}