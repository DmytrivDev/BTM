import { initSlider } from './splidecust';

const ambassSplide = document.querySelector('.ambass');
if (ambassSplide) {
  initSlider(ambassSplide, {
    perPage: 4,
    gap: '1.875rem',
    breakpoints: {
      960: {},
      500: {},
    },
  });
}

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       500: {},
//     },
//   });
// });

// let elemSliderInstance;
// const elem = document.querySelector('.elem');

// const initOurproductSlider = () => {
//   if (elem && !elemSliderInstance) {
//     elemSliderInstance = initSlider(elem, {
//       perPage: 2,
//       breakpoints: {
//         960: {},
//         500: {},
//       },
//     });
//   }
// };

// const destroySliders = () => {
//   if (elemSliderInstance) {
//     elemSliderInstance.destroy();
//     elemSliderInstance = null;
//   }
// };

// const checkViewport = () => {
//   initOurproductSlider();
//   if (window.innerWidth > 960) {
//     destroySliders();
//   }
// };

// window.addEventListener('resize', checkViewport);
// document.addEventListener('DOMContentLoaded', checkViewport);
