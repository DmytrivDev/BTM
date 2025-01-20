export function addDataAmbass(modal, event) {
  const ambass = event.currentTarget.closest('.splide__slide');

  if (!ambass) return;

  const ambassData = {
    ava: ambass.querySelector('.ambass__img img')?.src || '',
    name: ambass.querySelector('.tl3')?.textContent || '',
    activity: ambass.querySelector('.ambass__activity p')?.textContent || '',
    desc: ambass.querySelector('.ambass__desc p')?.textContent || '',
    soc: ambass.querySelector('.ambass__soc')?.innerHTML || '',
    connect: ambass.querySelector('.ambass__link')?.href || '#',
  };

  modal.querySelector('.evidence__ava img').src = ambassData.ava;
  modal.querySelector('.evidence__tl').textContent = ambassData.name;
  modal.querySelector('.evidence__activity p').textContent =
    ambassData.activity;
  modal.querySelector('.txt-def p').textContent = ambassData.desc;
  modal.querySelector('.evidence__soc').innerHTML = ambassData.soc;
  modal.querySelector('.evidence__connect').href = ambassData.connect;
}
