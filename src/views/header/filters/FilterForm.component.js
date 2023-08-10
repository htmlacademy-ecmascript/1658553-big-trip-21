import {createElement} from '../../../render.js';

function createNewFilterFormTemplate(actionUrl, method) {
  return `<form class="trip-filters" action="${actionUrl}" method="${method}">

                <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export default class FilterFormComponent {
  constructor(actionUrl, method) {
    this.actionUrl = actionUrl;
    this.method = method;
  }

  getTemplate() {
    return createNewFilterFormTemplate(this.actionUrl,this.method);
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
