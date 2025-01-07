import NiceSelect from 'nice-select2';

const eventsSelect = document.querySelectorAll('.events__select select');

eventsSelect.forEach(select => {
  new NiceSelect(select, {
    searchable: false,
  });
});
