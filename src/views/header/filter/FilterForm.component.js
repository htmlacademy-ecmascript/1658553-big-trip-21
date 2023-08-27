import AbstractView from 'src/framework/view/abstract-view';

function generateFilterHTML(filter) {
  return `
    <div class="trip-filters__filter">
      <input
        id="${filter.id}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${filter.value}"
        ${filter.disabled ? 'disabled' : ''}
        ${filter.checked ? 'checked' : ''}
      >
      <label class="trip-filters__filter-label" for="${filter.id}">${filter.labelText}</label>
    </div>`;
}

function createHTMLTemplate(filters) {
  let filterTemplate = '';

  for (const filter of filters) {
    filterTemplate += generateFilterHTML(filter);
  }

  return `<form class="trip-filters" action="#" method="get">
    ${filterTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
}

export default class FilterFormComponent extends AbstractView {
  #filters = null;
  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createHTMLTemplate(this.#filters);
  }
}

