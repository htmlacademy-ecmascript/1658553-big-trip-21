import {createElement} from '../../../render.js';

function createNewPointFormTemplate() {
  return `
               <p class="trip-events__msg">${msg}</p>

          <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Present — 'There are no present events now';
              * Future — 'There are no future events now'.
          -->`;
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
