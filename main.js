const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('js-nav--visible');
  menu.classList.toggle('js-nav__list--center');
});

// function handleMediaQuery(mediaQeury) {
//   if (mediaQeury.matches) {
//     menu.classList.remove('js-nav__list--center');
//   } else {
//     menu.classList.add('js-nav__list--center');
//   }
// }

// function setupMediaQuery() {
//   const mediaQeury = window.matchMedia('(min-width: 700px)');
//   handleMediaQuery(mediaQeury);
//   mediaQeury.addEventListener(handleMediaQuery);
// }

// window.addEventListener('load', setupMediaQuery);
// window.addEventListener('resize', setupMediaQuery);
