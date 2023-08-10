import {createElement} from '../../../render.js';

function createNewFilterElementTemplate(id,value,checked,disabled,labelText) {
  return `
                <div class="trip-sort__item  trip-sort__item--day">
              <input id="${id}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${value}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
              <label class="trip-sort__btn" for="sort-day">${labelText}</label>
            </div>`;
}

export default class FilterElementComponent {
  constructor(id,value,checked = false,disabled = false,labelText) {
    this.id = id;
    this.value = value;
    this.checked = checked;
    this.disabled = disabled;
    this.labelText = labelText;
  }

  getTemplate() {
    return createNewFilterElementTemplate(this.id,this.value,this.checked,this.disabled,this.labelText);
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
