import {createElement} from 'src/render.js';

function createNewPointFormTemplate() {
  return `
              тут будет хедер point
              `;
}

export default class PointHeaderComponent {
  constructor(msg) {
    this.msg = msg;
  }

  getTemplate() {
    return createNewPointFormTemplate(this.msg);
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
