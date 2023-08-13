import {createElement} from 'src/render.js';


function createHTMLTemplate(message) {

  return `<p class="trip-events__msg">${message}</p>`;


}

export default class MessageComponent {
  constructor(message) {
    this.message = message;
  }

  getTemplate() {
    return createHTMLTemplate(this.message);
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
