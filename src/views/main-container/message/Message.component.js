import {createElement} from 'src/render.js';
import AbstractView from "src/framework/view/abstract-view";


function createHTMLTemplate(message) {

  return `<p class="trip-events__msg">${message}</p>`;


}

export default class MessageComponent extends AbstractView {
  #message = null;
  constructor(message) {
    super();
    this.#message = message;
  }

  get template() {
    return createHTMLTemplate(this.#message);
  }
}
