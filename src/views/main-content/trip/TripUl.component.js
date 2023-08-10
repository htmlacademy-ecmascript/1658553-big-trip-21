import {createElement} from '../../../render.js';

function createNewUlTemplate() {
  return `
               <ul class="trip-events__list">
<!--            тут элементы'-->
          </ul>`;
}

export default class TripUlComponent {


  getTemplate() {
    return createNewUlTemplate();
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
