import {createElement} from 'src/render.js';

function createBigYellowBtnTemplate(buttonText,disabled) {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" ${disabled ? 'disabled' : ''}>${buttonText}</button>`;
}

export default class BigYellowBtnComponent {
  constructor(buttonText,disabled = false) {
    this.buttonText = buttonText;
    this.disabled = disabled;
  }

  getTemplate() {
    return createBigYellowBtnTemplate(this.buttonText,this.disabled);
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
