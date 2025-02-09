const periodInputs = document.querySelectorAll('input[name="period"]');

const plans = document.querySelectorAll('.plans__cards, .tickets__cards');

periodInputs?.forEach(input => {
  input.addEventListener('change', () => {
    plans.forEach(plan => {
      plan.classList.add('is-hidden');
    });

    document.getElementById(input.value).classList.remove('is-hidden');
  });
});
