import {createElement} from 'src/render.js';
import AbstractView from "src/framework/view/abstract-view";

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

function createHTMLTemplate(filters) {
  let filterTemplate = '';

  for (const filter of filters) {
    filterTemplate += generateFilterHTML(filter);
  }

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${filterTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;


}

export default class FilterComponent extends AbstractView {
  #filters = null;
  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createHTMLTemplate(this.#filters);
  }
}
