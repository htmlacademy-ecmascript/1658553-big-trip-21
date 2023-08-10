import {createElement} from 'src/render.js';

function createNewFilterFormTemplate(actionUrl, method) {
  return `<form class="trip-events__trip-sort  trip-sort" action="${actionUrl}" method="${method}">

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
