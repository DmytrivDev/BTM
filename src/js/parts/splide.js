import { initSlider } from './splidecust';
import { pauseVideo } from './videoplay';

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

let reviewsSliderInstance;
const reviewsSplide = document.querySelector('.reviews');

const initReviewsSlider = () => {
  if (reviewsSplide && !reviewsSliderInstance) {
    reviewsSliderInstance = initSlider(reviewsSplide, {
      perPage: 1,
      gap: '3.125rem',
      breakpoints: {
        960: {
          gap: '1.875rem',
        },
      },
    });

    reviewsSliderInstance?.on('move', () => {
      pauseVideo();
    });
  }
};

document.addEventListener('DOMContentLoaded', initReviewsSlider);

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
