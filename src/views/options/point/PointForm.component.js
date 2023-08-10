import {createElement} from 'src/render.js';

function createNewPointFormTemplate() {
  return `
           тут будет поинт form
           `;
}

export default class PointFormComponent {
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
