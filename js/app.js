'use strict';

const scrollDown = document.querySelector('.center-con');
const scrollUp = document.querySelector('.up-con');
const profileContainer = document.querySelector('.profile-container');
const mainHeader = document.getElementById('main-header');

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
