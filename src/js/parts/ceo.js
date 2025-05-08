export function addDataCeo(modal, event) {
  const ceo = event.currentTarget.closest('.ceo');

  if (!ceo) return;

  const ceoData = {
    title: ceo.dataset.title || '',
    descript: ceo.dataset.descript || '',
  };

  modal.querySelector('.ceoinf__tl').textContent = ceoData.title;
  modal.querySelector('.ceoinf__txt p').textContent = ceoData.descript;
}
