import {createElement} from 'src/render.js';

function generateFilterHTML(filter) {
  return `
   <div class="trip-sort__item  ${filter.class}">
      <input
        id="${filter.id}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="${filter.value}"
        ${filter.disabled ? 'disabled' : ''}
        ${filter.checked ? 'checked' : ''}
      >
      <label class="trip-sort__btn" for="${filter.id}">${filter.labelText}</label>
    </div>`;

}

function createHeaderTemplate(filters) {
  let filterTemplate = '';

  for (const filter of filters) {
    filterTemplate += generateFilterHTML(filter);
  }

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${filterTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;


}

export default class FilterComponent {
  constructor(filters) {
    this.filtres = filters;
  }

  getTemplate() {
    return createHeaderTemplate(this.filtres);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
