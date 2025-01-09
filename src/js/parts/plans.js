const periodInputs = document.querySelectorAll('input[name="period"]');

const plans = document.querySelectorAll('.plans__cards');
const plansThree = document.querySelector('.plansThree');
const plansSix = document.querySelector('.plansSix');

periodInputs?.forEach(input => {
  input.addEventListener('change', () => {
    plans.forEach(plan => {
      plan.classList.remove('is-visible');
      plan.classList.add('is-hidden');
    });

    if (input.value === '3') {
      plansThree.classList.remove('is-hidden');
      setTimeout(() => {
        plansThree.classList.add('is-visible');
      }, 100);
    }
    if (input.value === '6') {
      plansSix.classList.remove('is-hidden');
      setTimeout(() => {
        plansSix.classList.add('is-visible');
      }, 100);
    }
  });
});
