import scrollLock from 'scroll-lock';

import { pauseVideo } from './videoplay';
import { closeMenu } from './mobmenu';
import { addDataAmbass } from './ambass';

const activeModals = new Set();
const initializedModals = new WeakSet();

function showModal(modal) {
  modal.classList.add('isOpened', 'isAnimation');
  scrollLock.disablePageScroll(modal, { reserveScrollBarGap: true });
  activeModals.add(modal);
}

export function closeModal(modal) {
  modal.classList.remove('isOpened', 'isAnimation');
  scrollLock.enablePageScroll(modal);
  activeModals.delete(modal);
}

function initCloseModal(modal) {
  if (initializedModals.has(modal)) return;

  const modalContainer = modal.querySelector('.containerModal');
  const btnsCloseModal = modal.querySelectorAll('.closeModal');

  btnsCloseModal.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  if (modalContainer) {
    modalContainer.addEventListener('click', event => {
      if (event.target === modalContainer) {
        closeModal(modal);
      }
    });
  }

  initializedModals.add(modal);
}

export function openModal(modalId, event) {
  const modal = document.getElementById(modalId);
  if (modal) {
    activeModals.forEach(activeModal => {
      if (activeModal !== modal) {
        closeModal(activeModal);
      }
    });

    if (!initializedModals.has(modal)) {
      initCloseModal(modal);
    }

    if (!modal.classList.contains('isOpened')) {
      pauseVideo();
      closeMenu();
      addDataAmbass(modal, event);
      showModal(modal);
    }
  }
}

function initOpenModal() {
  const btnsOpenModal = document.querySelectorAll('.openModal');
  btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', event => {
      const modalId = btn.dataset.id;
      if (modalId) {
        openModal(modalId, event);
      }
    });
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const lastModal = Array.from(activeModals).pop();
    if (lastModal) closeModal(lastModal);
  }
});

document.addEventListener('DOMContentLoaded', initOpenModal);
