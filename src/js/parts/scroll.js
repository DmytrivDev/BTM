import scrollToElement from 'scroll-to-element';

const menuLinks = document.querySelectorAll(
  '.navmenu__list a, .footer__list a'
);

menuLinks?.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
      event.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        scrollToElement(targetElement, {
          offset: 0, // Смещение от элемента (если нужно добавить отступ)
          ease: 'inOutQuint', // Плавность анимации
          duration: 1000, // Длительность анимации (мс)
        });
      }
    }
  });
});
